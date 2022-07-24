import Speaker from "../components/Speaker";
import styles from "../../pages/index.module.css";

function SpeakersList({ data, showSessions }) {
  return (
    <div className={styles.container_speaker}>
      <div className={styles.row}>
        {data.map(function (speaker) {
          return (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              showSessions={showSessions}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SpeakersList;
