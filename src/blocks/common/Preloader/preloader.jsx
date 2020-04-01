import React from "react";
import loadingAnimation from "../../../img/Ripple-1s-200px.svg";
import styles from "./preloader.module.css"

const Preloader = (props) => {
  return <div className={styles.preloaderBackground}> <img className={styles.preloader} src={ loadingAnimation }/> </div>
};

export default Preloader;