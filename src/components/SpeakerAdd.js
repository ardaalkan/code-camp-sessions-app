import styles from "../../pages/index.module.css";

function SpeakerAdd({ eventYear, insertRecord }) {
  return (
    <div className={styles.speaker_add_container}>
      <a href="#">
        <i
          className={styles.speaker_add_tag}
          onClick={(e) => {
            e.preventDefault();
            const firstLast = window.prompt("Enter first and last name:", "");
            const firstLastArray = firstLast.split(" ");
            insertRecord({
              id: "99999",
              first: firstLastArray[0],
              last: firstLastArray[1],
              bio: "Bio not entered yet",
              sessions: [
                {
                  id: "88888",
                  title: `New Session For ${firstLastArray[0]}`,
                  room: {
                    name: "Main Ball Room",
                  },
                  eventYear,
                },
              ],
            });
          }}
        >
          Add +
        </i>
      </a>
    </div>
  );
}

export default SpeakerAdd;
