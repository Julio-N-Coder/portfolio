/**
 * config-vars.ts
 * ──────────────
 * Code for config-vars and config-block shortcodes.
 *
 * config-vars  — a card with labelled inputs. On "Apply", values are saved to
 *                localStorage under a group key so they persist across page
 *                loads and are shared with other pages that use the same group.
 *
 * config-block — a code block with two view modes:
 *   • Template    — raw text; placeholders are highlighted with <mark>.
 *   • With Values — placeholders replaced by the user's (or default) values.
 *                   Empty / unset values leave the placeholder intact.
 */

interface ConfigVar {
  name: string;
  label: string;
  default: string;
}

type ViewMode = 'template' | 'substituted';

const STORAGE_PREFIX = 'hugo-config-vars:';

const ICON_COPY = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
</svg>`;

const ICON_CHECK = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
</svg>`;

// localStorage helpers

function storageKey(group: string): string {
  return `${STORAGE_PREFIX}${group}`;
}

function loadStoredValues(group: string): Record<string, string> {
  try {
    const raw = localStorage.getItem(storageKey(group));
    if (raw) return JSON.parse(raw) as Record<string, string>;
  } catch {
    /* storage unavailable or corrupt — degrade gracefully */
  }
  return {};
}

function persistValues(group: string, values: Record<string, string>): void {
  try {
    localStorage.setItem(storageKey(group), JSON.stringify(values));
  } catch {
    /* ignore write failures */
  }
}

// Defaults from the config-vars-meta script tag

/**
 * Read the variable defaults injected by the config-vars shortcode.
 * Returns an empty object when the shortcode is not on this page (e.g. when
 * config-block pages reference a group defined on a different page).
 */
function getDefaultsForGroup(group: string): Record<string, string> {
  const el = document.getElementById(`config-vars-meta-${group}`);
  if (!el) return {};
  try {
    const vars = JSON.parse(el.textContent ?? '[]') as ConfigVar[];
    return Object.fromEntries(
      vars
        .filter((v) => v.default.trim() !== '')
        .map((v) => [v.name, v.default]),
    );
  } catch {
    return {};
  }
}

/**
 * Merge defaults + localStorage, letting non-empty stored values win.
 * An empty stored value (user cleared the field then applied) means "fall back
 * to default" — the placeholder is still shown if no default exists.
 */
function getEffectiveValues(group: string): Record<string, string> {
  const defaults = getDefaultsForGroup(group);
  const stored = loadStoredValues(group);

  const effective: Record<string, string> = { ...defaults };
  for (const [k, v] of Object.entries(stored)) {
    if (v.trim() !== '') effective[k] = v;
  }
  return effective;
}

// String utilities

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function buildPattern(delimStart: string, delimEnd: string): RegExp {
  return new RegExp(
    `${escapeRegex(delimStart)}(\\w+)${escapeRegex(delimEnd)}`,
    'g',
  );
}

// Rendering

/**
 * Returns an HTML string where each placeholder is wrapped in a styled <mark>.
 * Used for the "Template" view — the result is set as innerHTML.
 */
function renderTemplateHtml(
  rawTemplate: string,
  delimStart: string,
  delimEnd: string,
): string {
  const escaped = escapeHtml(rawTemplate);

  // Match the *escaped* delimiter characters.
  const escapedStart = escapeHtml(delimStart);
  const escapedEnd = escapeHtml(delimEnd);
  const pattern = buildPattern(escapedStart, escapedEnd);

  return escaped.replace(
    pattern,
    (_, varName: string) =>
      `<mark class="config-placeholder" data-var="${varName}" title="variable: ${varName}"` +
      `>${escapedStart}${varName}${escapedEnd}</mark>`,
  );
}

/**
 * Returns plain text with placeholders replaced by effective values.
 * Placeholders with no value (and no default) are left untouched.
 * Used for the "With Values" view.
 */
function renderSubstitutedText(
  rawTemplate: string,
  values: Record<string, string>,
  delimStart: string,
  delimEnd: string,
): string {
  return rawTemplate.replace(
    buildPattern(delimStart, delimEnd),
    (match, varName: string) => {
      const val = values[varName];
      return val !== undefined && val.trim() !== '' ? val : match;
    },
  );
}

/**
 * (Re-)renders the <code> element inside a config-block.
 */
function updateCodeElement(
  codeEl: HTMLElement,
  rawTemplate: string,
  values: Record<string, string>,
  delimStart: string,
  delimEnd: string,
  view: ViewMode,
): void {
  if (view === 'template') {
    codeEl.innerHTML = renderTemplateHtml(rawTemplate, delimStart, delimEnd);
  } else {
    codeEl.textContent = renderSubstitutedText(
      rawTemplate,
      values,
      delimStart,
      delimEnd,
    );
  }
}

// Block helpers

function getRawTemplate(block: HTMLElement): string | null {
  const scriptEl = block.querySelector<HTMLScriptElement>('.config-block-raw');
  if (!scriptEl) return null;
  try {
    return JSON.parse(scriptEl.textContent ?? '""') as string;
  } catch {
    return null;
  }
}

function getActiveView(block: HTMLElement): ViewMode {
  const btn = block.querySelector<HTMLButtonElement>(
    '.config-block-view-btn.active',
  );
  return (btn?.dataset.view as ViewMode | undefined) ?? 'template';
}

/**
 * Re-renders every config-block that belongs to `group`.
 * Called after the user applies new values.
 */
function refreshGroup(group: string): void {
  const values = getEffectiveValues(group);
  document
    .querySelectorAll<HTMLElement>(`[data-config-block-group="${group}"]`)
    .forEach((block) => {
      const raw = getRawTemplate(block);
      if (raw === null) return;
      const codeEl = block.querySelector<HTMLElement>('.config-block-code');
      if (!codeEl) return;
      updateCodeElement(
        codeEl,
        raw,
        values,
        block.dataset.delimStart ?? '[[',
        block.dataset.delimEnd ?? ']]',
        getActiveView(block),
      );
    });
}

// Clipboard

function writeToClipboard(text: string): void {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text: string): void {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
  } catch {
    /* nothing to do */
  }
  document.body.removeChild(ta);
}

function flashCopyButton(btn: HTMLElement): void {
  btn.innerHTML = ICON_CHECK;
  btn.classList.add('text-success', 'border-success');
  setTimeout(() => {
    btn.innerHTML = ICON_COPY;
    btn.classList.remove('text-success', 'border-success');
  }, 1600);
}

// Status message

function showStatus(
  group: string,
  message: string,
  extraClass = 'text-success',
): void {
  const el = document.querySelector<HTMLElement>(
    `.config-vars-status[data-group="${group}"]`,
  );
  if (!el) return;

  el.className = `config-vars-status small ${extraClass}`;
  el.textContent = message;
  setTimeout(() => {
    el.textContent = '';
  }, 2500);
}

// Initialise a config-vars section

function initConfigVarsSection(section: HTMLElement): void {
  const group = section.dataset.configVarsGroup;
  if (!group) return;

  const inputs =
    section.querySelectorAll<HTMLInputElement>('.config-var-input');

  // Pre-fill inputs from localStorage
  const stored = loadStoredValues(group);
  inputs.forEach((input) => {
    const varName = input.dataset.var ?? '';
    const storedVal = stored[varName];
    if (storedVal !== undefined) input.value = storedVal;
  });

  // Apply button
  function applyValues(): void {
    const values: Record<string, string> = {};
    inputs.forEach((input) => {
      const varName = input.dataset.var;
      if (varName) {
        const varDefault = input.dataset.default as string;
        if (input.value) {
          values[varName] = input.value;
        } else if (varDefault) {
          values[varName] = varDefault;
        }
      }
    });
    persistValues(group!, values);
    refreshGroup(group!);
    showStatus(group!, 'Values applied ✓', 'text-success');
  }

  section
    .querySelector(`[data-config-vars-apply="${group}"]`)
    ?.addEventListener('click', applyValues);

  // Reset button
  section
    .querySelector(`[data-config-vars-reset="${group}"]`)
    ?.addEventListener('click', () => {
      const values: Record<string, string> = {};
      inputs.forEach((input) => {
        const varName = input.dataset.var;
        if (varName) {
          const varDefault = input.dataset.default as string;
          if (varDefault) values[varName] = varDefault;
        }
      });
      persistValues(group!, values);
      refreshGroup(group!);
      showStatus(group!, 'Reset to defaults', 'text-muted');
    });

  // Apply on Enter key in any input
  inputs.forEach((input) => {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') applyValues();
    });
  });
}

// Initialise a config-block

function initConfigBlock(block: HTMLElement): void {
  const group = block.dataset.configBlockGroup;
  if (!group) return;

  const raw = getRawTemplate(block);
  if (raw === null) return;

  const codeEl = block.querySelector<HTMLElement>('.config-block-code');
  if (!codeEl) return;

  const delimStart = block.dataset.delimStart ?? '[[';
  const delimEnd = block.dataset.delimEnd ?? ']]';

  // Initial render in template view
  updateCodeElement(
    codeEl,
    raw,
    getEffectiveValues(group),
    delimStart,
    delimEnd,
    'template',
  );

  // View toggle buttons
  block
    .querySelectorAll<HTMLButtonElement>('.config-block-view-btn')
    .forEach((btn) => {
      btn.addEventListener('click', () => {
        block
          .querySelectorAll<HTMLButtonElement>('.config-block-view-btn')
          .forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const view = btn.dataset.view as ViewMode;
        updateCodeElement(
          codeEl,
          raw,
          getEffectiveValues(group!),
          delimStart,
          delimEnd,
          view,
        );
      });
    });

  // Copy button
  const copyBtn = block.querySelector<HTMLButtonElement>('.config-block-copy');
  copyBtn?.addEventListener('click', () => {
    const view = getActiveView(block);
    const text =
      view === 'substituted'
        ? renderSubstitutedText(
            raw,
            getEffectiveValues(group!),
            delimStart,
            delimEnd,
          )
        : raw;
    writeToClipboard(text);
    if (copyBtn) flashCopyButton(copyBtn);
  });
}

// Initialization

function init(): void {
  document
    .querySelectorAll<HTMLElement>('[data-config-vars-group]')
    .forEach(initConfigVarsSection);

  document
    .querySelectorAll<HTMLElement>('[data-config-block-group]')
    .forEach(initConfigBlock);
}

// Support both deferred and inline script loading
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
