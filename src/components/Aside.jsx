import React from 'react'

const Aside = () => {
  return (
    <div>
      {/* profile */}
      <div className='welcome d-flex'>
        <div> <img src="" alt="profile-pic" /></div>
        <div className='mx-2'>
          <p className='m-0 text-primary' style={{ textAlign: "start"}}>Welcome!</p>
          <p style={{width: "100%"}}>Aman Bhoria</p>
        </div>
      </div>

      <div>
        <ul className='navbar-nav' >
          <li className='nav-item d-flex fs-5 my-4' style={{width: "100%"}}>
            <i class="fa-solid fa-table-columns p-2 mx-3"></i>
            <p className='m-0'>Dashboard</p>
          </li>
          <li className='nav-item d-flex fs-5 mb-4'>
            <i class="fa-solid fa-table-columns p-2 mx-3"></i>
            <p className='m-0'>Buy Online</p>
          </li>
          <li className='nav-item d-flex fs-5 mb-4' style={{}}>
            <i class="fa-solid fa-table-columns p-2 mx-3"></i>
            <p className='m-0'>Saved Quotes</p>
          </li>
          <li className='nav-item d-flex fs-5 mb-4' style={{}}>
            <i class="fa-solid fa-table-columns p-2 mx-3"></i>
            <p className='m-0'>Leads</p>
          </li>
          <li className='nav-item d-flex fs-5 mb-4' style={{}}>
            <i class="fa-solid fa-table-columns p-2 mx-3"></i>
            <p className='m-0'>Prospects</p>
          </li>
          <li className='nav-item d-flex fs-5 mb-4' style={{}}>
            <i class="fa-solid fa-table-columns p-2 mx-3"></i>
            <p className='m-0'>Customers</p>
          </li>
          <li className='nav-item d-flex fs-5 mb-4' style={{}}>
            <i class="fa-solid fa-table-columns p-2 mx-3"></i>
            <p className='m-0'>Active Policies</p>
          </li>
          <li className='nav-item d-flex fs-5 mb-4' style={{}}>
            <i class="fa-solid fa-table-columns p-2 mx-3"></i>
            <p className='m-0'>Accounts</p>
          </li>
          <li className='nav-item d-flex fs-5 mb-4' style={{}}>
            <i class="fa-solid fa-table-columns p-2 mx-3"></i>
            <p className='m-0'>Renewal</p>
          </li>
          <li className='nav-item d-flex fs-5 mb-4' style={{}}>
            <i class="fa-solid fa-table-columns p-2 mx-3"></i>
            <p className='m-0'>Claims</p>
          </li>
          <li className='nav-item d-flex fs-5 mb-4' style={{}}>
            <i class="fa-solid fa-table-columns p-2 mx-3"></i>
            <p className='m-0'>Training</p>
          </li>
         
       
        </ul>
      </div>

    </div>
  )
}

export default Aside