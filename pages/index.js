import { data } from "../SpeakerData";
import styles from "./index.module.css";
import Speaker from "../src/components/Speaker";

const IndexPage = () => {
  return (
    <div className={styles.container_speaker}>
      <div className={styles.row}>
        {data.map(function (speaker) {
          return <Speaker key={speaker.id} speaker={speaker} />;
        })}
      </div>
    </div>
  );
};

export default IndexPage;
