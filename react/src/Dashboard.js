import React from 'react';

function Dashboard(props) {

  // handle click event of logout button
  const handleLogout = () => {    
    props.history.push('/login1');
  }

  return (
    <div>
      <div style={{color:'green',textAlign: 'center',position: 'relative',fontSize:'25px'}}>Welcome To Abacus Academy</div><br />
      <ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Course 1</div>
      Course 1  Details
    </div>
    <span class="badge bg-primary rounded-pill"></span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Course 1</div>
      Course 2 Details
    </div>
    <span class="badge bg-primary rounded-pill"></span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Course 3</div>
      Course 3 Details
    </div>
    <span class="badge bg-primary rounded-pill"></span>
  </li>
</ol><br/><br/><br/><br/>
      <input type="button" onClick={handleLogout} value="Logout" />
      <br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default Dashboard;