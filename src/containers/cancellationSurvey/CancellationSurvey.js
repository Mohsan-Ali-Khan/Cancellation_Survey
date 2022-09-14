import React from "react";
import Header from "../../components/Header/header";

import { IoIosArrowBack } from "react-icons/io";
import "./CancellationSurvey.css";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
export default function CancellationSurvey() {
  return (
    <>
      <Header />
      <div className="cancellationSurvey__mainWrapper">
        <div className="cancellationSurvey__titleAndBackWrapper">
          <Link className="cancellationSurvey__iconWrapper" to="/">
            <IoIosArrowBack className="cancellationSurvey__backIcon" />
          </Link>

          <h5>Cancellation Survey</h5>
        </div>
        <hr className="cancellationSurvey__lineStyle" />
        <Card />
      </div>
    </>
  );
}
