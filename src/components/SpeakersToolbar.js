import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { SpeakerFilterContext } from "../components/context/SpeakerFilterContext";
import styles from "./SpeakersToolbar.module.css";
import { AiOutlineSearch } from "react-icons/ai";

function SpeakersToolbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const {
    showSessions,
    setShowSessions,
    eventYear,
    setEventYear,
    setSearchQuery,
    EVENT_YEARS,
  } = useContext(SpeakerFilterContext);

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
          <li>
            <div className={styles.input_group}>
              <input
                type="text"
                className=""
                placeholder="Search..."
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                }}
              />
              <div>
                <button className={styles.search_button}>
                  <AiOutlineSearch color="grey" />
                </button>
              </div>
            </div>
          </li>
          <li className={styles.year_option_list}>
            <strong>Year</strong>
            {/* bug here */}
            <label className={styles.dropdown_years}>
              <select
                value={eventYear}
                onChange={({ currentTarget }) => {
                  setEventYear(currentTarget.value);
                }}
              >
                {EVENT_YEARS.map(function (year) {
                  return (
                    <option value={year} key={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </label>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default SpeakersToolbar;
