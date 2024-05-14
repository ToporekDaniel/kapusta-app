import { useLayoutEffect } from "react";
import { selectorTheme } from "../../../src/redux/theme/themeSelector";
import { toggle as toggleTheme } from "../../../src/redux/theme/themeSlice";
import styles from "./ThemeSwitcher.module.css";
import { useDispatch, useSelector } from "react-redux";

export default function ThemeSwitcher() {
  /*
  const dispatch = useDispatch();
  const theme = useSelector(selectorTheme);

  const handleChange = () => {
    if (theme === "day") {
      dispatch(toggleTheme("night"));
    } else {
      dispatch(toggleTheme("day"));
    }
  };

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
*/
  return (
    <div className={styles.toggleBtn}>
      <input
        type="checkbox"
        //checked={theme === "night"}
        //onChange={handleChange}
      />
      <span>&nbsp;</span>
    </div>
  );
}
