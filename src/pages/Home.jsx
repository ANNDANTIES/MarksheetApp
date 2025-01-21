import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import landingimg from '../assets/images.jpeg'
import Add from '../components/Add'
Add
const Home = () => {
  const [statelift,setStateLift] = useState("")
    // Function to update the state from child components
    const updateStudentList = (newStudentList) => {
      setStateLift(newStudentList);
    };
  return (
    <div style={{paddingTop:'100px'}} className='container'>
    <div className='row align-items-center'>
      <div className='col-lg-5'>
        <h3> Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:'justify'}}>Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring oursite!!!
        </p>
    
      </div>
        <div className='col'>
          {/* landing image */}
          <div className='col-lg-6'>
            <img src={landingimg} alt="music img" className='img-fluid ms-5'/>
          </div>
      
      </div>
    </div>
    {/* features */}
    <div className='my-5'>
      <h3 className='text-center'>Student Details</h3>
        <Add statelift={statelift}  updateStudentList={updateStudentList}/>
    </div>
    {/* youtube video */}
    <div className='my-5 row align-items-center border rounded p-5'>
      <div className='col-lg-5'>
        <h3 className='text-warning'>Cultural Events</h3>
        <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Play Everything: </span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </p>
        <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Social Activities: </span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </p>
        <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Friendly Staff: </span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>
      <div className='col-lg-1'>
      </div>
      <div className='col-lg-6'>
      
      <iframe width="100%" height="526" src="https://www.youtube.com/embed/ijYARC4AhDc" title="CHRIST University Promo  2020" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      </div>
  </div>
  )
}

export default Home