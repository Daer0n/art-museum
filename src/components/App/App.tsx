import styles from "./App.module.scss";
import Router from "../Router/Router";

const App = () => {
    return (
        <div className={styles.pageContainer}>
            <Router />
        </div>
    );
};

export default App;
