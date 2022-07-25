import Speaker from "../components/Speaker";
import styles from "../../pages/index.module.css";
import { data } from "../../SpeakerData";
import { useState, useEffect } from "react";
import ReactPlaceholder from "react-placeholder/lib";
import useRequestSpeakers, { REQUEST_STATUS } from "../hooks/useRequestSpeakers";

function SpeakersList({ showSessions }) {

  const {
    speakersData, isLoading,
    hasErrored, error,
    onFavoriteToggle,
  } = useRequestSpeakers(2000);


  if (hasErrored === true) {
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
        ready={isLoading === false}
      >
        <div className={styles.row}>
          {speakersData.map(function (speaker) {
            return (
              <Speaker
                key={speaker.id}
                speaker={speaker}
                showSessions={showSessions}
                onFavoriteToggle={() => {
                  onFavoriteToggle(speaker.id);
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
