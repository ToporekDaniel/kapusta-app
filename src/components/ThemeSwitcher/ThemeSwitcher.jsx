import styles from "../ThemeSwitcher/ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
  const setLightMode = () => {
    document.querySelector("html").setAttribute("data-theme", "light");
    localStorage.setItem("data-theme", "light");
  };
  const setDarkMode = () => {
    document.querySelector("html").setAttribute("data-theme", "dark");
    localStorage.setItem("data-theme", "dark");
  };

  const selectedTheme = localStorage.getItem("data-theme");

  if (selectedTheme === "dark") {
    setDarkMode();
  }

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div className={styles.toggleBtn}>
      <input
        type="checkbox"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "dark"}
      />
      <span>&nbsp;</span>
    </div>
  );
};
export default ThemeSwitcher;
