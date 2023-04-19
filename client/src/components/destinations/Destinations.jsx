import React from 'react'
import './DestinationsStyles.css'


function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">
                <h1>The Society of Archivists and Record Managers (SARM)</h1>
                <p>We are a non-profit making organization registered in October 2010 with the aim of organizing, representing and acting as the professional body for persons working in or interested in records and archives management and to govern members in all matters of professional practice. The association also fosters and promotes education, research, training and invention in records and archives management through partnering with public and private institutions. The association draws its membership from records managers and archivists in public and private institutions.</p>
                <h1>Become a Member of SARM</h1>
                <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
       <img src="https://karma.co.ke/wp-content/uploads/2022/03/Why-Become-a-Member-of-KARMA.jpg" alt=''/>
       <h5 className="pt-4 t">Why be come a member?</h5>
        <p>As a member of SARM, you get a unuque opportunity to get jobs , getting mentors for those starting out,you will also get an opportunity to network with fellow professionals in the field of Records Managements and Archives</p>
      
        <button type="button" class="btn btn-warning p-3">more details</button></div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <img src="https://karma.co.ke/wp-content/uploads/2022/03/How-to-Become-a-Member-of-KARMA.jpg" alt=''/>
        <h5 class="pt-4">How do i become a member?</h5>
        <p>You become a member by paying the registration fee .The registration fee for organisations/companies is ksh (5,000.00)while for an idnividual is (kshs 500) and annual subscription fee of (kshs 2,400) should be paid to SARM</p>
        <button type="button" class="btn btn-warning p-3">more details</button>
      </div>
    </div>
  </div>
</div>
                
  
            </div>
        </div>
    )
}

export default Destinations
