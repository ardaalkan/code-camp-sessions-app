import styles from "../../pages/index.module.css";
import Header from "./Header";
import Speakers from "./Speakers";
import { AuthProvider } from "../components/context/AuthContext";

function App() {
  return (
    <AuthProvider initialLoggedInUser="">
      <div className={styles.speakerlist_container}>
        <Header />
        <Speakers />
      </div>
    </AuthProvider>
  );
}

export default App;
