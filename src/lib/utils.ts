function changeCustomElementColors(theme: string) {
  const awsSVGPaths = document.getElementsByClassName("awsSVGPaths");
  const githubSVGColors = document.getElementsByClassName("githubSvgColor");
  const twitterXSVGPaths = document.getElementsByClassName("twitterXSVGPath");

  if (awsSVGPaths) {
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

  if (githubSVGColors) {
    if (theme === "light") {
      for (const githubSVGColor of githubSVGColors) {
        githubSVGColor?.setAttribute("fill", "#000000");
      }
    } else {
      for (const githubSVGColor of githubSVGColors) {
        githubSVGColor?.setAttribute("fill", "#ffffff");
      }
    }
  }

  if (twitterXSVGPaths) {
    if (theme === "light") {
      for (const twitterXSVGPath of twitterXSVGPaths) {
        twitterXSVGPath?.setAttribute("fill", "#000000");
      }
    } else {
      for (const twitterXSVGPath of twitterXSVGPaths) {
        twitterXSVGPath?.setAttribute("fill", "#ffffff");
      }
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
