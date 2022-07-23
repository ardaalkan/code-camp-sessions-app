import styles from "../../pages/index.module.css";

function Session({ title, room }) {
  return (
    <span>
      {title} <strong>Room: {room.name}</strong>
    </span>
  );
}

function Sessions({ sessions }) {
  return (
    <div className={styles.session_box}>
      <Session {...sessions[0]} />
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

function SpeakerDemographics({
  first,
  last,
  bio,
  company,
  twitterHandle,
  favorite,
}) {
  return (
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
  );
}

function Speaker({ speaker }) {
  const { id, first, last, sessions } = speaker;
  return (
    <div className={styles.container_list}>
      <div className={styles.container_speaker_list}>
        <div className={styles.speaker_list_col}>
          <SpeakerImage id={id} first={first} last={last} />
          <SpeakerDemographics {...speaker} />
        </div>
      </div>
      <Sessions sessions={sessions} />
    </div>
  );
}

export default Speaker;
