import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AppContext, useAppContext } from "../context/context";

const EditModal = ({ show, onClose, rowData }) => {
  const { name, age } = rowData;
  const { updateStudent } = useAppContext(AppContext);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
  });

  const handleOnChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudent(formData);
    onClose();
  };

  useEffect(() => {
    setFormData(rowData);
  }, [rowData]);

  return (
    <>
      <form>
        <Modal show={show} onHide={onClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Student</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              className="mb-3"
              type="text"
              defaultValue={name}
              onChange={(e) => handleOnChange("name", e.target.value)}
            />
            <input
              className="mb-3"
              type="number"
              defaultValue={age}
              onChange={(e) => handleOnChange("age", e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      </form>
    </>
  );
};

export default EditModal;
