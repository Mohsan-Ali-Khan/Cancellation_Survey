import React, { useState } from "react";
import ConfirmationModal from "../components/Modals/ConfirmationModal";
import ProductModal from "../components/Modals/ProductModal";

import "./homeScreen.css";

export default function HomeScreen() {
  const [isCancelSurveyModalOpen, setIsCancelSurveyModalOpen] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  function toggleModal() {
    setIsCancelSurveyModalOpen(!isCancelSurveyModalOpen);
  }
  function toggleProductModal(){
    setIsProductModalOpen(!isProductModalOpen);

  }

  return (
    <div className="homeScreen__mainWrapper">
      <button style={{ marginTop: 50 }} onClick={toggleModal}>
        Cancellation Survey
      </button>
      <button style={{ marginTop: 50 }} onClick={toggleProductModal}>
        Create Product
      </button>
      <ConfirmationModal isCancelSurveyModalOpen={isCancelSurveyModalOpen} toggleModal={toggleModal} />
      <ProductModal isProductModalOpen={isProductModalOpen} toggleModal={toggleProductModal} />
    </div>
  );
}
