import React from "react";
import styles from "./Card.module.scss";

interface CardProps {
  name: string;
  title: string;
  status: string;
}

const Card: React.FC<CardProps> = ({ name, title, status }) => {
  return (
    <div className={styles.container}>
      <h2>{name}</h2>
      <h3>{title}</h3>
      <p>{status}</p>
    </div>
  );
};

export default Card;