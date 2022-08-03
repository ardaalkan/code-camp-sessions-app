import { useContext } from "react";
import Speaker from "../components/Speaker";
import styles from "../../pages/index.module.css";
import ReactPlaceholder from "react-placeholder/lib";
import useRequestRest, { REQUEST_STATUS } from "../hooks/useRequestRest";
import { data } from "../../SpeakerData";
import { SpeakerFilterContext } from "../components/context/SpeakerFilterContext";
import SpeakerAdd from "./SpeakerAdd";

function SpeakersList() {
  const {
    data: speakersData,
    requestStatus,
    error,
    updateRecord,
    insertRecord,
    deleteRecord,
  } = useRequestRest();

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
        <SpeakerAdd eventYear={eventYear} insertRecord={insertRecord} />
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
                  updateRecord={updateRecord}
                  insertRecord={insertRecord}
                  deleteRecord={deleteRecord}
                />
              );
            })}
        </div>
      </ReactPlaceholder>
    </div>
  );
}

export default SpeakersList;
