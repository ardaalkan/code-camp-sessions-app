import { createContext } from "react";

const SpeakerContext = createContext();

function SpeakerProvider ({ children, speaker, updateRecord, deleteRecord }) {
    return(
        <SpeakerContext.Provider value={{ speaker, updateRecord, deleteRecord }}>
            {children}
        </SpeakerContext.Provider>
    );
}

 export { SpeakerContext, SpeakerProvider}