import styles from "../../pages/index.module.css";
import Header from "./Header";
import Speakers from "./Speakers";

function App() {
  return (
    <div className={styles.speakerlist_container}>
      <Header />
      <Speakers/>
    </div>
  );
}

export default App;
