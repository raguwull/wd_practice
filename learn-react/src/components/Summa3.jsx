import React, { useState } from "react";

function Summa3() {
  const firstStudent = {
    studentName: null,
    studentRoll: null,
  };
  const [student, setStudent] = useState(firstStudent);
  const [students, setStudents] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStudents([...students, student]);
    setStudent(firstStudent);
  };

  const handleUpdate = (index) => {
    const updatedStudents = [...students];
    updatedStudents[index] = student;
    setStudents(updatedStudents);
    setStudent(firstStudent);
  };

  const handleDelete = (index) => {
    const filteredStudents = students.filter((_, idx) => idx !== index);
    setStudents(filteredStudents);
  };

  return (
    <div className="text-center" style={{ padding: "100px" }}>
      <h1>STUDENT MANAGEMENT</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="studentName"
          type="text"
          placeholder="Enter name"
          value={student.studentName || ""}
          onChange={handleChange}
        />
        <input
          name="studentRoll"
          type="number"
          placeholder="Enter Roll"
          value={student.studentRoll || ""}
          onChange={handleChange}
        />
        <button type="submit">Insert</button>
      </form>
      <hr />
      <ul style={{ listStyleType: "none" }}>
        {students.map((currentStudent, index) => (
          <li key={index}>
            <div>
              {currentStudent.studentName} {currentStudent.studentRoll} {" "}
              <button onClick={() => handleUpdate(index)}>Update</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Summa3;
