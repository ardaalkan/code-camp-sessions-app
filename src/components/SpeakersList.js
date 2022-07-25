import Speaker from "../components/Speaker";
import styles from "../../pages/index.module.css";
import ReactPlaceholder from "react-placeholder/lib";
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";
import { data } from "../../SpeakerData";

function SpeakersList({ showSessions }) {
  const { data: speakersData, requestStatus, error, updateRecord } =
    useRequestDelay(2000, data);

  if (requestStatus === REQUEST_STATUS.FAILURE) {
    return (
      <div>
        ERROR: <b>loading speaker data failed {error}</b>
      </div>
    );
  }

  return (
    <div className={styles.container_speaker}>
      <ReactPlaceholder
        type="media"
        rows={15}
        className={styles.speakerslist_placeholder}
        ready={requestStatus === REQUEST_STATUS.SUCCESS}
      >
        <div className={styles.row}>
          {speakersData.map(function (speaker) {
            return (
              <Speaker
                key={speaker.id}
                speaker={speaker}
                showSessions={showSessions}
                onFavoriteToggle={() => {
                  updateRecord({
                    ...speaker,
                    favorite: !speaker.favorite,
                  });
                }}
              />
            );
          })}
        </div>
      </ReactPlaceholder>
    </div>
  );
}

export default SpeakersList;
