import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.scss";
import { ReactComponent as MuseumLogo } from "../../assets/images/museumLogoLight.svg";
import { ReactComponent as Home } from "../../assets/images/home.svg";
import { ReactComponent as Favourites } from "../../assets/images/favourites.svg";

interface NavBarProps {
    showHome?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ showHome = true }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.logoContainer}>
                    <MuseumLogo onClick={() => navigate("/")} />
                </div>

                <div className={styles.linkContainer}>
                    {showHome && <Home onClick={() => navigate("/")}/>}
                    <Favourites onClick={() => navigate("/favourites")}/>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
