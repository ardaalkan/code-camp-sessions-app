import Speaker from "../components/Speaker";
import styles from "../../pages/index.module.css";
import { data } from "../../SpeakerData";
import { useState } from "react";

function SpeakersList({ showSessions }) {

  const [ speakersData, setSpeakersData ] = useState(data);

  return (
    <div className={styles.container_speaker}>
      <div className={styles.row}>
        {speakersData.map(function (speaker) {
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
