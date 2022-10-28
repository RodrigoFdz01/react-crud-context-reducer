import React, { useState } from "react";
import { AppContext, useAppContext } from "../context/context";
import EditModal from "./EditModal";

const Show = () => {
  const { students, deleteStudent } = useAppContext(AppContext);
  const [rowData, setRowData] = useState({});
  //console.log(students);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (student) => {
    setRowData(student);
    setShow(true);
  };

  return (
    <>
      <table className="table table-striped mt-5">
        <thead>
          <tr>
            <th>name</th>
            <th>AGE</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <th>{student.name}</th>
              <td>{student.age}</td>
              <td>
                <div className="btn-group">
                  <button
                    className="btn btn-success"
                    onClick={() => handleShow(student)}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteStudent(student.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <EditModal show={show} onClose={handleClose} rowData={rowData} />
    </>
  );
};

export default Show;
