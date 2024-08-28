function changeTheme(theme: "light" | "dark") {
  if (theme === "light") {
    document.documentElement.dataset.theme = "light";
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
  }
}

export { changeTheme };
