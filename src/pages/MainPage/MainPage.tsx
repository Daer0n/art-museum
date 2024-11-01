import styles from "./MainPage.module.scss";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const MainPage = () => {
    return (
        <div>
            <NavBar showHome={false} />

            <Footer />
        </div>
    );
};

export default MainPage;
