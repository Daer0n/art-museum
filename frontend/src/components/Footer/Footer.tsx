import React from "react";
import styles from "./Footer.module.scss";

import { ReactComponent as MuseumLogo } from "../../assets/images/MuseumLogoDark.svg";
import { ReactComponent as ModsenLogo } from "../../assets/images/ModsenLogo.svg";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerImg}>
                <MuseumLogo />
                <ModsenLogo />
            </div>
        </div>
    );
};

export default Footer;
