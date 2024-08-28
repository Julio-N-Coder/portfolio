const awsSVGPaths = document.getElementsByClassName("awsSVGPaths");

function changeCustomElementColors(theme: string) {
  if (!awsSVGPaths) return;

  if (theme === "light") {
    for (const path of awsSVGPaths) {
      path?.setAttribute("fill", "#252F3E");
    }
  } else {
    for (const path of awsSVGPaths) {
      path?.setAttribute("fill", "#fff");
    }
  }
}

function changeTheme(theme: "light" | "dark") {
  if (theme === "light") {
    document.documentElement.dataset.theme = "light";
    localStorage.setItem("theme", "light");
    changeCustomElementColors("light");
  } else {
    document.documentElement.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
    changeCustomElementColors("dark");
  }
}

function getTheme(): "light" | "dark" {
  const theme = localStorage.getItem("theme");
  if (theme === "light" || theme === "dark") {
    return theme;
  } else {
    return "light";
  }
}

export { changeTheme, getTheme };
