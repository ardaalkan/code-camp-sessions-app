import { useContext } from "react";
import Speaker from "../components/Speaker";
import styles from "../../pages/index.module.css";
import ReactPlaceholder from "react-placeholder/lib";
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";
import { data } from "../../SpeakerData";
import { SpeakerFilterContext } from "../components/context/SpeakerFilterContext";

function SpeakersList() {
  const {
    data: speakersData,
    requestStatus,
    error,
    updateRecord,
  } = useRequestDelay(2000, data);

  const { searchQuery, eventYear } = useContext(SpeakerFilterContext);

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
            {speakersData
              .filter(function (speaker) {
                return (
                  speaker.first.toLowerCase().includes(searchQuery) ||
                  speaker.last.toLowerCase().includes(searchQuery)
                );
              })
              .filter(function (speaker) {
                return speaker.sessions.find((sessions) => {
                  return sessions.eventYear === eventYear;
                });
              })
              .map(function (speaker) {
                return (
                  <Speaker
                    key={speaker.id}
                    speaker={speaker}
                    onFavoriteToggle={(doneCallback) => {
                      updateRecord(
                        { ...speaker, favorite: !speaker.favorite },
                        doneCallback
                      );
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
