import { useContext, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import styles from "./SpeakersToolbar.module.css";

function SpeakersToolbar({ showSessions, setShowSessions }) {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <section className={styles.toolbar_section}>
      <div className={styles.toolbar_container}>
        <ul className={styles.unordered_list}>
          <li>
            <b className={styles.session_text}>Show Session &nbsp;&nbsp;</b>
            <label>
              <input
                type="checkbox"
                checked={showSessions}
                onChange={(event) => {
                  setShowSessions(event.target.checked);
                }}
              />
            </label>
          </li>
          <li>
            <label>
              <b className={styles.session_text}>Theme &nbsp;&nbsp;</b>
              <select
                value={theme}
                onChange={(event) => {
                  setTheme(event.target.value);
                }}
              >
                Theme
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </label>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default SpeakersToolbar;
