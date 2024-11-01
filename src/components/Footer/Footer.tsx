import styles from "./Footer.module.scss";
import { ReactComponent as ModsenLogo } from "../../assets/images/modsenLogo.svg";
import { ReactComponent as MuseumLogo } from "../../assets/images/museumLogoDark.svg";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <MuseumLogo />

                <ModsenLogo />
            </div>
        </div>
    );
};

export default Footer;
