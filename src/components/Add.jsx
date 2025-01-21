import React, { useEffect, useState } from 'react'
import { addStudent, displayStudent,deleteStudent } from '../services/allAPI' // Use alias to avoid naming conflicts
import { Button, Card, Form, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
Card
Link
const Add = ({ statelift, updateStudentList }) => {
  // State for new details
  const [newData, setNewData] = useState({
    names: "",
    classs: "",
    age: "",
    grade: ""
  });

  const [show, setShow] = useState(false);
  const [showData, setShowData] = useState([]);
  // const [updateDetail,setupdateDetail]=useState({});
  // Fetch students when the component mounts
  useEffect(() => {
    loadStudents();
    
  }, []);

  // Function to fetch and display 
  const loadStudents = async () => {
    try {
      const result= await displayStudent();
      console.log("dddddddd",result);
      setShowData(result.data);
      updateStudentList(result.data);    // Pass the updated student list to the parent
      
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  // Add a new student
  const addNew = async () => {
    try {
      console.log("New student data:", newData);
      await addStudent(newData);
      await loadStudents(); // Reload students after adding a new one
      setNewData({ names: "", classs: "", age: "", grade: "" }); // Clear input fields
      handleClose();
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };
 const deleteDetail = async(deleteContent)=>{
  console.log("Deleted Content",deleteContent);
  try{
    console.log(deleteContent?.id)
     await deleteStudent(deleteContent?.id)
    // setNewData(result)
    loadStudents()
  }
  catch(err){
    console.log("Error deleting",err);
  }
 }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//  const updation = (e,item) => {
//       console.log("item for updation",item)
//        setupdateDetail(item);
    
//  }
  return (
    <>
      <div className='d-flex'>
        <h3 className='fs-3 fw-bolder text-warning'>Add New Student</h3>
        <button onClick={handleShow} className='ms-2 btn btn-warning text-white border-rounded fs-5'>+</button>
      </div>
      <div className='container-fluid p-3 border mt-4' style={{ width: "100%" }}>
        <div className='row p-3'>
          {
            showData?.length > 0 ?
              showData?.map(item => (
                   <div key={item?.id} className='col-lg-4 col-md-4 col-sm-12 p-2'>
                      <Card style={{ width: '250px'}}>
                        <Card.Body>
                          <h3>{item.names}</h3>
                          <div className='d-flex flex-row justify-content-between'>
                            <p className='fs-5 fw-bolder'>Class: <span className='text-warning'>{item.classs}</span></p>
                            <p className='fs-5 fw-bolder'>Age: <span className='text-warning'>{item.age}</span></p>                 
                          </div>
                          <p className='fs-5 fw-bolder'>Grade: <span className='text-danger'>{item.grade}</span></p>
        
                          <Button variant="primary"><Link to={'/editStudent'} state={item} className='text-white text-decoration-none'>Update</Link></Button>
                          <Button onClick={e=>deleteDetail(item)} className='float-end bg-white border-white'><i className="textdecoration-none fa-solid fa-trash text-danger"></i></Button>
                        </Card.Body>
                      </Card>
                   </div>
              ))
              :
              <div className='col-lg-12 text-center mt-4'>No students found</div>
          }
        </div>
    </div>
      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Add A NEW STUDENT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className='mb-3'>
              Full Name
              <Form.Control
                onChange={e => setNewData({ ...newData, names: e.target.value })}
                type="text"
                placeholder="Full name"
                value={newData.names}
              />
            </div>
            <div className="mb-3">
              Class
              <Form.Control
                onChange={e => setNewData({ ...newData, classs: e.target.value })}
                type="text"
                placeholder="Class"
                value={newData.classs}
              />
            </div>
            <div className="mb-3">
              Age
              <Form.Control
                onChange={e => setNewData({ ...newData, age: e.target.value })}
                type="number"
                placeholder="Age"
                value={newData.age}
              />
            </div>
            <div className="mb-3">
              Grade
              <Form.Control
                onChange={e => setNewData({ ...newData, grade: e.target.value })}
                type="text"
                placeholder="Grade"
                value={newData.grade}
              />
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addNew}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
