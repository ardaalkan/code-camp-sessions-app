import styles from "../components/Header.module.css";

function Header() {
  return (
    <div>
      <div className={styles.header_container}>
        <div className={styles.svcc_home_img}>
          <img alt="SVCC Home Page" src="/images/SVCCLogo.png" />
        </div>
        <div className={styles.code_camp_text}>
          <h4 className={styles.header_text}>Silicon Valley Code Camp</h4>
        </div>
        <div className={styles.account_container}>
          Hello Mr. Smith &nbsp;&nbsp;
          <span>
            <a href="#">sign-out</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
