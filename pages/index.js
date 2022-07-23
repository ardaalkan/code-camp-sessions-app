import { data } from "../SpeakerData";
import styles from "./index.module.css";

const IndexPage = () => {
  return (
    <div className={styles.container_speaker}>
      <div className={styles.row}>
        {data.map(function (speaker) {
          const {
            id,
            bio,
            first,
            last,
            favorite,
            twitterHandle,
            company,
            sessions,
          } = speaker;

          return (
            <div className={styles.container_list}>
              <div className={styles.container_speaker_list}>
                <div className={styles.speaker_list_col}>
                  <div className={styles.speaker_list_image}>
                    <img
                      src={`/images/speaker-${id}.jpg`}
                      width="300"
                      alt={`${first} ${last}`}
                    />
                  </div>
                  <div className={styles.speaker_info}>
                    <div>
                      <h3>
                        {first} {last}
                      </h3>
                    </div>
                    <div>
                      <p>
                        {bio} {company} {twitterHandle} {favorite}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.session_box}>
                <span>
                  {sessions[0].title}{" "}
                  <strong>Room: {sessions[0].room.name}</strong>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IndexPage;
