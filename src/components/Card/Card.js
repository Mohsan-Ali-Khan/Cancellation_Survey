import React, { useState } from "react";
import classNames from "classnames";
import { AiFillExclamationCircle } from "react-icons/ai";
import { IoArrowBackSharp } from "react-icons/io5";
import { REASON_TO_CANCEL_MEMBERSHIP } from "../constants/constant";

import "./Card.css";

export default function Card() {
  const [selectedReason, setSelectedReason] = useState();
  const [selectedMenu, setSelectedMenu] = useState("One Major Problem");

  return (
    <div className="surveyCard__cardWrapper">
      <div className="surveyCard__cardImage">
        {/* <img src={Location_Icon} alt="Location_Icon" /> */}
      </div>
      <div className="surveyCard__card">
        <h4 style={{ textAlign: "center" }}>We're sad to see You Go...</h4>

        <p style={{ textAlign: "center", fontSize: "12px", color: "gray" }}>
          Can you tell us why you want to cancel out membership?
        </p>
        <br />
        <form>
          {REASON_TO_CANCEL_MEMBERSHIP.map(({ id: reasonId, text: reason }) => (
            <>
              <div
                className={classNames("surveyCard__radioBtnWrapper", {
                  surveyCard__radioBtnWrapper: !selectedReason,
                  surveyCard__radioBtnSelectedWrapper:
                    selectedReason === reason,
                })}
                onClick={() => {
                  setSelectedReason(reason);
                }}
                key={reasonId}
              >
                <input
                  type="radio"
                  value={selectedReason}
                  name="selectedReason"
                  checked={selectedReason === reason}
                />

                {reason}
              </div>
              {reasonId === 2 &&
                selectedReason === " Found a better solution" && (
                  <textarea
                    rows="4"
                    cols="50"
                    placeholder="Which is the better solution? If you don't mind sharing.Your feedback is much appreciated!"
                    className="surveyCard__textArea"
                  />
                )}

              {reasonId === 4 &&
                selectedReason === " Bugs, Things not working properly" && (
                  <>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <label className="surveyCard__labelFonts">
                        Which product(s) do have an issue with?{" "}
                      </label>
                      <AiFillExclamationCircle style={{ color: "#484848" }} />
                    </div>

                    <select className="surveyCard__productSelect">
                      <option value="Product #1">Product #1</option>
                      <option value="Product #2">Product #2</option>
                    </select>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <label className="surveyCard__labelFonts">
                        What was it?
                      </label>
                      <AiFillExclamationCircle style={{ color: "#484848" }} />
                    </div>

                    <div className="surveyCard__btn-group">
                      <div
                        onClick={() => {
                          setSelectedMenu("One Major Problem");
                        }}
                        className={`${
                          selectedMenu === "One Major Problem"
                            ? "surveyCard__selected-menu"
                            : "surveyCard__abc"
                        }`}
                      >
                        One Major Problem
                      </div>
                      <div
                        onClick={() => {
                          setSelectedMenu("Various things");
                        }}
                        className={`${
                          selectedMenu === "Various things"
                            ? "surveyCard__selected-menu"
                            : "surveyCard__abc"
                        }`}
                      >
                        Various things
                      </div>
                    </div>
                  </>
                )}
            </>
          ))}

          <div className="surveyCard__warningWrapper">
            <div className="surveyCard__warningIcon">
              <AiFillExclamationCircle className="surveyCard__excIcon" />
            </div>
            <p className="surveyCard__warningText">
              Are you absolutely sure you want to cancel? If you do you'll lose
              access to so many cool things. And you'll lose the chance to stay
              on this plan at the same cost ongoing (regardless of the future
              price increases).
            </p>
          </div>

          <div
            className={classNames("optionalClasses", {
              surveyCard__noOptionButtonsWrapper: !selectedReason,
              surveyCard__selectedOptionsButtonsWrapper: selectedReason,
            })}
          >
            <button className="surveyCard__cancelFormBtn">
              <IoArrowBackSharp />
              Back
            </button>
            <button className="surveyCard__cancelMembershipBtn">
              Cancel Membership
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
