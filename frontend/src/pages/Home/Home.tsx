import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import api from "../../api/api";

const Home = () => {
    const test = async () => {
        const responce = await api.get("/galleries?limit=2");
        console.log(responce.data);
    };

    useEffect(() => {
        test();
    });

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <div className={styles.preview}>
                    Let's Find Some <span>Art</span> <div>Here!</div>
                </div>

                <div className={styles.inputField}>
                    <input placeholder="Search art, artist, work..." />
                </div>

                <div className={styles.topics}>
                    <div className={styles.title}>
                        Topics for you <div>Our special gallery</div>
                    </div>

                    <div className={styles.cardGallery}></div>
                </div>

                <div className={styles.works}>
                    <div className={styles.title}>
                        Here some more <div>Other works for you</div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default Home;
