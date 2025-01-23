import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'
function Footer() {
  return (
    <>
      <div style={{height:'300px'}} className='mt-5 container w-100'>
        <div className='d-flex justify-content-between'>
        {/* intro */}
        <div style={{width:'400px'}}>
            <h5><i className="fa-solid fa-school me-3"></i>MarkSheet</h5>
            <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
            <p>Code licensed MIT, docs CC BY 3.0.</p>
            <p>Currently v5.3.3.</p>
        </div>
        {/* links */}
        <div className='d-flex flex-column'>
            <h5>Links</h5>
            <Link to={'/'} style={{textDecoration:'none',color:'black'}}>Home Page</Link>
        </div>
        {/* guides */}
        <div className='d-flex flex-column'>
            <h5>Guides</h5>
            <a href='https://react-bootstrap.netlify.app/' style={{textDecoration:'none',color:'black'}}>School Website</a>
            <a href='https://react-bootstrap.netlify.app/' style={{textDecoration:'none',color:'black'}}>Syllabus</a>
            <a href='https://react-bootstrap.netlify.app/' style={{textDecoration:'none',color:'black'}}>Grading System</a>
        </div>
        {/* contact */}
        <div className='d-flex flex-column'>
            <h5>Contacts</h5>
            <div className='d-flex'>
                <input type='text' placeholder='Enter your email here...' className='form=control me-2'/>
                <button className='btn btn-info'>
                    <i className='fa-solid fa-arrow-right text-white'></i>
                </button>
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Footer