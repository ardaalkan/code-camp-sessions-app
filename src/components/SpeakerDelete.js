import { useContext } from "react";
import { SpeakerContext } from "../components/context/SpeakerContext";
import styles from "../../pages/index.module.css";

function speakerDelete() {
  const { speaker, deleteRecord } = useContext(SpeakerContext);

  return (
    <div className={styles.speaker_delete_container}>
      <a href="#" className={styles.speaker_delete_tag}>
        <i
          onClick={(e) => {
            e.preventDefault();
            if (
              window.confirm("Are you sure you want to delete this speaker?")
            ) {
              deleteRecord(speaker);
            }
          }}
        >
          {" "}
          Delete Speaker{" "}
        </i>
      </a>
    </div>
  );
}

export default speakerDelete;
