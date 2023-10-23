import React from "react";
import styles from "../../styles/backgroundSVG.module.css";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
       <div className={styles.backgroundSVG}>
      <div className={styles.moon}></div>
      <div className={styles.stars}>
        <span className={styles.stars.span} style={{ "--i": 11 }}></span>
        <span className={styles.stars.span} style={{ "--i": 12 }}></span>
        <span className={styles.stars.span} style={{ "--i": 24 }}></span>
        <span className={styles.stars.span} style={{ "--i": 10 }}></span>
        <span className={styles.stars.span} style={{ "--i": 14 }}></span>
        <span className={styles.stars.span} style={{ "--i": 23 }}></span>
        <span className={styles.stars.span} style={{ "--i": 18 }}></span>
        <span className={styles.stars.span} style={{ "--i": 19 }}></span>
        <span className={styles.stars.span} style={{ "--i": 20 }}></span>
        <span className={styles.stars.span} style={{ "--i": 21 }}></span>
        <span className={styles.stars.span} style={{ "--i": 10 }}></span>
        <span className={styles.stars.span} style={{ "--i": 27 }}></span>
        <span className={styles.stars.span} style={{ "--i": 43 }}></span>
        <span className={styles.stars.span} style={{ "--i": 24 }}></span>
        <span className={styles.stars.span} style={{ "--i": 10 }}></span>
        <span className={styles.stars.span} style={{ "--i": 14 }}></span>
        <span className={styles.stars.span} style={{ "--i": 23 }}></span>
        <span className={styles.stars.span} style={{ "--i": 18 }}></span>
        <span className={styles.stars.span} style={{ "--i": 19 }}></span>
        <span className={styles.stars.span} style={{ "--i": 20 }}></span>
        <span className={styles.stars.span} style={{ "--i": 21 }}></span>
        <span className={styles.stars.span} style={{ "--i": 15 }}></span>
        <span className={styles.stars.span} style={{ "--i": 11 }}></span>
        <span className={styles.stars.span} style={{ "--i": 12 }}></span>
        <span className={styles.stars.span} style={{ "--i": 24 }}></span>
        <span className={styles.stars.span} style={{ "--i": 10 }}></span>
        <span className={styles.stars.span} style={{ "--i": 14 }}></span>
        <span className={styles.stars.span} style={{ "--i": 23 }}></span>
        <span className={styles.stars.span} style={{ "--i": 18 }}></span>
        <span className={styles.stars.span} style={{ "--i": 19 }}></span>
        <span className={styles.stars.span} style={{ "--i": 20 }}></span>
        <span className={styles.stars.span} style={{ "--i": 21 }}></span>
        <span className={styles.stars.span} style={{ "--i": 15 }}></span>
        <span className={styles.stars.span} style={{ "--i": 11 }}></span>
        <span className={styles.stars.span} style={{ "--i": 12 }}></span>
        <span className={styles.stars.span} style={{ "--i": 24 }}></span>
        <span className={styles.stars.span} style={{ "--i": 10 }}></span>
        <span className={styles.stars.span} style={{ "--i": 14 }}></span>
        <span className={styles.stars.span} style={{ "--i": 23 }}></span>
        <span className={styles.stars.span} style={{ "--i": 18 }}></span>
        <span className={styles.stars.span} style={{ "--i": 19 }}></span>
        <span className={styles.stars.span} style={{ "--i": 20 }}></span>
        <span className={styles.stars.span} style={{ "--i": 21 }}></span>
        <span className={styles.stars.span} style={{ "--i": 15 }}></span>
      </div>
    </div>
      <main className="flex-grow">{children}</main>
      <div className="footer-container">

        </div>
    </div>
  );
}