import React from 'react'

const Footer = () => {
  return (
    <div className='row bg-primary text-white' style={{padding: "90px"}}>
      <div className='col'>
        {/* General */}
        <div>
      <h5 className='text-start'>General</h5>
      <ul className='d-flex list-unstyled'>
        <li className='mx-6' style={{marginRight: "20px"}}>
          <p className='text-nowrap' style={{display: "inline"}} >Corporate Insurance</p>
        </li>
        <li style={{marginRight: "20px"}}>
          <p>Products</p>
        </li>
        <li style={{marginRight: "20px"}}> 
          <p>Claims</p>
        </li>
        <li className='text-nowrap' style={{display: "inline", marginRight: "20px"}}>
          <p>Become a partner</p>
        </li>
      </ul>
    </div>

        {/* Other Links */}
        <div>
          <h5 className='text-start'>General</h5>
          <ul className='d-flex list-unstyled'>
            <li className='mx-6' style={{marginRight: "20px"}}>
              <span style={{display: "inline"}}>Corporate Insurance</span>
            </li>
            <li style={{marginRight: "20px"}}>
              <p>Products</p>
            </li>
            <li style={{marginRight: "20px"}}> 
              <p>Claims</p>
            </li>
            <li style={{marginRight: "20px"}}>
              <p>Become a partner</p>
            </li>
          </ul>
        </div>

        {/* Renewal */}
        <div >
          <h5 className='text-start'>Renewals</h5>

          <ul className='d-flex list-unstyled bg-white text-black p-2'>
            <li style={{marginRight: "20px"}}>
              <p>Travel</p>
            </li>
            <li style={{marginRight: "20px"}}>
              <p>Health</p>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h5 className='text-start'>General</h5>
          <ul className='d-flex list-unstyled'>
            <li className='mx-6' style={{marginRight: "20px"}}>
              <p>Corporate Insurance</p>
            </li>
            <li style={{marginRight: "20px"}}>
              <p>Products</p>
            </li>
            <li style={{marginRight: "20px"}}> 
              <p>Claims</p>
            </li>
            <li style={{marginRight: "20px"}}>
              <p>Become a partner</p>
            </li>
          </ul>
        </div>
      </div>
      <div className='col'>

      </div>
    </div>
  )
}

export default Footer