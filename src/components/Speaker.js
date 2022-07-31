import styles from "../../pages/index.module.css";
import { AiOutlineTwitter, AiOutlineHome } from "react-icons/ai";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import React, { useContext, useState } from "react";
import { SpeakerFilterContext } from "../components/context/SpeakerFilterContext";

function Session({ title, room }) {
  return (
    <span>
      {title} <strong>Room: {room.name}</strong>
    </span>
  );
}

function Sessions({ sessions }) {
  const { eventYear } = useContext(SpeakerFilterContext);
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

function SpeakerImage({ id, first, last }) {
  return (
    <div className={styles.speaker_list_image}>
      <img
        src={`/images/speaker-${id}.jpg`}
        width="300"
        alt={`${first} ${last}`}
      />
    </div>
  );
}

function SpeakerFavorite({ favorite, onFavoriteToggle }) {
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
          return onFavoriteToggle(doneCallback);
        }}
      >
        {favorite === true ? (
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

function SpeakerDemographics({
  first,
  last,
  bio,
  company,
  twitterHandle,
  favorite,
  onFavoriteToggle,
}) {
  return (
    <div className={styles.speaker_info}>
      <div>
        <h3>
          {first} {last}
        </h3>
      </div>
      <SpeakerFavorite
        favorite={favorite}
        onFavoriteToggle={onFavoriteToggle}
      />
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

function Speaker({ speaker, onFavoriteToggle }) {
  const { id, first, last, sessions } = speaker;
  const { showSessions } = useContext(SpeakerFilterContext);
  return (
    <div className={styles.container_list}>
      <div className={styles.container_speaker_list}>
        <div className={styles.speaker_list_col}>
          <SpeakerImage id={id} first={first} last={last} />
          <SpeakerDemographics
            {...speaker}
            onFavoriteToggle={onFavoriteToggle}
          />
        </div>
      </div>
      {showSessions === true ? <Sessions sessions={sessions} /> : null}
    </div>
  );
}

export default Speaker;
