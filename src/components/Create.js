import React, { useState } from "react";
import { AppContext, useAppContext } from "../context/context";

const Create = () => {
  const { createStudent } = useAppContext(AppContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name + age);
    // createStudent({ id: Date.now(), name, age });
    createStudent({ id: Date.now(), name, age });
    setAge("");
    setName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id=""
          placeholder="Name"
        />

        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
          id=""
          placeholder="age"
        />

        <button className="btn btn-info " type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default Create;
