import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";

import { ReactComponent as MuseumLogo } from "../../assets/images/MuseumLogoLight.svg";
import { ReactComponent as Favorites } from "../../assets/images/Favorites.svg";

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.containerImg}>
                <MuseumLogo
                    onClick={() => {
                        navigate("/");
                    }}
                />
                <Favorites
                    onClick={() => {
                        navigate("/favorites");
                    }}
                />
            </div>
        </div>
    );
};

export default Header;
