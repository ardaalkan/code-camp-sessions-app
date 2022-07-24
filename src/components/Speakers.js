import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";
import { useState } from "react";

function Speakers({ data }) {
  const [showSessions, setShowSessions] = useState(true);

  return (
    <>
      <SpeakersToolbar
        showSessions={showSessions}
        setShowSessions={setShowSessions}
      />
      <SpeakersList
        data={data}
        showSessions={showSessions}
        setShowSessions={setShowSessions}
      />
    </>
  );
}

export default Speakers;
