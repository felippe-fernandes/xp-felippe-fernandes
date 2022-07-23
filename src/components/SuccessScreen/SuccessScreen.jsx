import React, { useContext } from "react";
import styles from "./styles.module.css";
import Lottie from "lottie-react";
import SuccessAnimation from "../../Lottie/success.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Context from "../../context/Context";

function SuccessScreen() {
  let navigate = useNavigate();
  const { setShowModal } = useContext(Context);

  const handleClick = () => {
    setShowModal(false);
    navigate("/wallet");
  };

  return (
    <div data-testid='successScreen' className={styles.SuccessScreenComponent}>
      <button id={styles.ExitButton} onClick={handleClick}>
        <FontAwesomeIcon icon={faRectangleXmark} size="xl" />
      </button>
      <div className={styles.SuccessScreen}>
        <h1>Processo realizado com sucesso!</h1>
        <Lottie animationData={SuccessAnimation} className={styles.Animation} />
        <button id={styles.OkButton} onClick={handleClick}>
          OK
        </button>
      </div>
    </div>
  );
}

export default SuccessScreen;
