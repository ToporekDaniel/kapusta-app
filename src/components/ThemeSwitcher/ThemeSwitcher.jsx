import styles from "../ThemeSwitcher/ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
  const setLightMode = () => {
    document.querySelector("html").setAttribute("data-theme", "light");
  };
  const setDarkMode = () => {
    document.querySelector("html").setAttribute("data-theme", "dark");
  };

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div className={styles.toggleBtn}>
      <input type="checkbox" onChange={toggleTheme} />
      <span>&nbsp;</span>
    </div>
  );
};
export default ThemeSwitcher;
