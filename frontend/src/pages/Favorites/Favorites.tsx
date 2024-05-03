import React from "react";
import styles from "./Favorites.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Favorites = () => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>Here are your</div>
            <Footer />
        </div>
    );
};

export default Favorites;
