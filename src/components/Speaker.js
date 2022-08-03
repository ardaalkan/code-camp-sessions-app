import styles from "../../pages/index.module.css";
import { AiOutlineTwitter, AiOutlineHome } from "react-icons/ai";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import React, { useContext, useState, memo } from "react";
import { SpeakerFilterContext } from "../components/context/SpeakerFilterContext";
import {
  SpeakerProvider,
  SpeakerContext,
} from "../components/context/SpeakerContext";
import SpeakerDelete from "../components/SpeakerDelete";
import next from "next";

function Session({ title, room }) {
  return (
    <span>
      {title} <strong>Room: {room.name}</strong>
    </span>
  );
}

function Sessions() {
  const { eventYear } = useContext(SpeakerFilterContext);
  const { speaker } = useContext(SpeakerContext);
  const sessions = speaker.sessions;
  return (
    <div className={styles.session_box}>
      {sessions
        .filter(function (sessions) {
          return sessions.eventYear === eventYear;
        })
        .map(function (sessions) {
          return (
            <div key={sessions.id}>
              <Session {...sessions} />
            </div>
          );
        })}
    </div>
  );
}

function ImageWithFallback({ src, ...props }) {
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  function onError() {
    if (!error) {
      setImgSrc("/images/speaker-99999.jpg");
      setError(true);
    }
  }

  return <img src={imgSrc} {...props} onError={onError} />;
}

function SpeakerImage() {
  const {
    speaker: { id, first, last },
  } = useContext(SpeakerContext);
  return (
    <div className={styles.speaker_list_image}>
      <ImageWithFallback
        src={`/images/speaker-${id}.jpg`}
        width="300"
        alt={`${first} ${last}`}
      />
    </div>
  );
}

function SpeakerFavorite() {
  const { speaker, updateRecord } = useContext(SpeakerContext);
  const [inTransition, setInTransition] = useState(false);

  function doneCallback() {
    setInTransition(false);
    console.log(
      `In SpeakerFavorite:doneCallback ${new Date().getMilliseconds()}`
    );
  }

  return (
    <div className={styles.favorite_icon_container}>
      <span
        onClick={function () {
          setInTransition(true);
          updateRecord(
            {
              ...speaker,
              favorite: !speaker.favorite,
            },
            doneCallback
          );
        }}
      >
        {speaker.favorite === true ? (
          <MdFavorite className={styles.favorite_icons} color="grey" />
        ) : (
          <MdOutlineFavoriteBorder
            className={styles.favorite_icons}
            color="grey"
          />
        )}
        Favorite{" "}
        {inTransition ? <i class="fas fa-circle-notch fa-spin"></i> : null}
      </span>
    </div>
  );
}

function SpeakerDemographics() {
  const { speaker } = useContext(SpeakerContext);
  const { first, last, bio, company, twitterHandle, favorite } = speaker;
  return (
    <div className={styles.speaker_info}>
      <div>
        <h3>
          {first} {last}
        </h3>
      </div>
      <SpeakerFavorite />
      <div>
        <p className={styles.speaker_desc}>
          {bio} {company} {twitterHandle} {favorite}
        </p>
        <div className={styles.social_desc}>
          <div className={styles.company_container}>
            <AiOutlineHome
              className={styles.home_icon}
              color="cornflowerblue"
            />
            <div className={styles.company}>
              <h5>Company</h5>
              <h6>{company}</h6>
            </div>
          </div>
          <div className={styles.twitter_container}>
            <AiOutlineTwitter
              className={styles.twitter_icon}
              color="cornflowerblue"
            />
            <div className={styles.twitter}>
              <h5>Twitter</h5>
              <h6>{twitterHandle}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Speaker = memo(function Speaker({
  speaker,
  updateRecord,
  insertRecord,
  deleteRecord,
}) {
  const { showSessions } = useContext(SpeakerFilterContext);
  return (
    <SpeakerProvider
      speaker={speaker}
      updateRecord={updateRecord}
      insertRecord={insertRecord}
      deleteRecord={deleteRecord}
    >
      <div className={styles.container_list}>
        <div className={styles.container_speaker_list}>
          <div className={styles.speaker_list_col}>
            <SpeakerImage />
            <SpeakerDemographics />
          </div>
        </div>
        {showSessions === true ? <Sessions /> : null}
        <SpeakerDelete />
      </div>
    </SpeakerProvider>
  );
}, areEqualSpeaker);

function areEqualSpeaker(prevProps, nextProps) {
  return (prevProps.speaker.favorite == nextProps.speaker.favorite);
}

export default Speaker;
