import styles from "../components/Header.module.css";
import withAuth from "../components/withAuth";

function Header({ loggedInUser, setLoggedInUser }) {
  function LoggedIn({ loggedInUser, setLoggedInUser }) {
    return (
      <div>
        <span>Logged in as {loggedInUser}</span>
        <button
          className={styles.logged_btn}
          onClick={() => {
            setLoggedInUser("");
          }}
        >
          Logout
        </button>
      </div>
    );
  }

  function NotLoggedIn({ loggedInUser, setLoggedInUser }) {
    return (
      <button
        className={styles.btn2}
        onClick={(e) => {
          e.preventDefault();
          const username = window.prompt("Enter Login Name: ", "");
          setLoggedInUser(username);
        }}
      >
        Login
      </button>
    );
  }

  return (
    <div>
      <div className={styles.header_container}>
        <div className={styles.svcc_home_img}>
          <img alt="SVCC Home Page" src="/images/SVCCLogo.png" />
        </div>
        <div className={styles.code_camp_text}>
          <h4 className={styles.header_text}>Silicon Valley Code Camp</h4>
        </div>
        {loggedInUser && loggedInUser.length > 0 ? (
          <LoggedIn
            loggedInUser={loggedInUser}
            setLoggedInUser={setLoggedInUser}
          />
        ) : (
          <NotLoggedIn
            loggedInUser={loggedInUser}
            setLoggedInUser={setLoggedInUser}
          />
        )}
      </div>
    </div>
  );
}

export default withAuth(Header);
