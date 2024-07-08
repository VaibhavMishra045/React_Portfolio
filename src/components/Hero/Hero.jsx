import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vaibhav</h1>
        <p className={styles.description}>
        Enthusiastic and highly motivated Full Stack Developer with a solid foundation in front-end and back-end technologies, including HTML, CSS, JavaScript, React, Node.js, and MongoDB.
        </p>
        <a href="mailto:vaibhav.292002@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImg.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
