import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import tagIcon2 from "../../assets/tagIcon2.ico";
import { IoCloseOutline } from "react-icons/io5";

import "./commonStyles.css";

export default function ConfirmationModal({ isCancelSurveyModalOpen, toggleModal }) {
  return (
    <Modal
      isOpen={isCancelSurveyModalOpen}
      onRequestClose={toggleModal}
      contentLabel="My dialog"
      className="confirmationModal__cardWrapper"
      ariaHideApp={false}
    >
      <div className="confirmationModal__modal">
        <div className="confirmationModal__closeIcon">
          <IoCloseOutline onClick={toggleModal} />
        </div>
        <div style={{ display: "flex" }}>
          <div className="confirmationModal__left">
            <img src={tagIcon2} style={{width:'60px', marginBottom:"213px"}}/>
          </div>
          <div className="confirmationModal__right">
            <h5>Before You Go...</h5>
            <h5>Would 50% OFF For 6 Months Help</h5>
            <p style={{ fontSize: "12.8px", color: "gray" }}>
              We Know things REALLY suck in the world right now - and many
              businesses and freelancers are struggling to stay afloat during
              COVID-19 crises.
            </p>
            <br />
            <br />
            <p style={{ fontSize: "12.8px", fontWeight: "600" }}>
              So if you could use the extra cushion, grab 50% off for 6 months.
            </p>
            <p style={{ fontSize: "12.8px", color: "gray" }}>
              we hope you're staying safe and healthy!
            </p>
            <div className="confirmationModal__buttonsWrapper">
              <button className="confirmationModal__offerButton">
                50% OFF for 6 Months
              </button>

              <Link to="/cancellation-survey" style={{ color: "#286ef1" }}>
                No,thanks! I'll cancel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
