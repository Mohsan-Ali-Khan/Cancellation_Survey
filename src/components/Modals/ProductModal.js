import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import tagIcon2 from "../../assets/tagIcon2.ico";
import { IoCloseOutline } from "react-icons/io5";

export default function ProductModal({
  isProductModalOpen,
  toggleProductModal,
}) {
  return (
    <Modal
      isOpen={isProductModalOpen}
      onRequestClose={toggleProductModal}
      contentLabel="My dialog"
      className="confirmationModal__cardWrapper"
      ariaHideApp={false}
    >
      <form>
        <div className="confirmationModal__modal">
          <h4 style={{ textAlign: "center" }}>Create Product or Service</h4>
          <h5>General Info</h5>
          <div>
          <label for="fname">Product name</label>
          <input type="text" id="productName" name="productName" />
          </div>
        </div>
      </form>
    </Modal>
  );
}
