import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateStudent } from '../services/allAPI';
import { Button, Form } from 'react-bootstrap';

const EditStudent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const detail = location.state || {};

  // State to manage form inputs
  const [updatedData, setUpdatedData] = useState({
    names: detail.names || '',
    classs: detail.classs || '',
    age: detail.age || '',
    grade: detail.grade || '',
  });

  // Update state on form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle save (update) function
  const handleSave = async () => {
    try {
      // Call API to update the student data
      console.log(detail.id,updatedData)
      await updateStudent(detail.id, updatedData);
      // After saving, navigate back to the list or any other page
      navigate('/');
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  // Handle cancel (navigate back without saving)
  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className='container p-3' style={{ paddingTop: '100px' }}>
      <h3>Edit {detail.names}</h3>
      <Form>
        <div className='mb-3'>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Full name"
            value={updatedData.names}
            name="names"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <Form.Label>Class</Form.Label>
          <Form.Control
            type="text"
            placeholder="Class"
            value={updatedData.classs}
            name="classs"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Age"
            value={updatedData.age}
            name="age"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <Form.Label>Grade</Form.Label>
          <Form.Control
            type="text"
            placeholder="Grade"
            value={updatedData.grade}
            name="grade"
            onChange={handleChange}
          />
        </div>
      </Form>
      <div className='d-flex align-items-center justify-content-center'>
        <Button variant="secondary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave} className="ms-2">
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditStudent;
