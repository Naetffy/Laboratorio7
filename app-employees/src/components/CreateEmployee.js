import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom/dist';
import { show_alert } from './functions';

const CreateEmployee = () => {
	const url = 'http://localhost:8080/employee/api/employees';
	const [EMPLOYEE_ID, setEMPLOYEE_ID] = useState('');
    const [FIRST_NAME, setFIRST_NAME] = useState('');
    const [LAST_NAME, setLAST_NAME] = useState('');
    const [ROLE, setROLE] = useState('');
    const [SALARY, setSALARY] = useState('');
    
	const postToApi = async (event) => {
        event.preventDefault();
        var parameters = {employeeId: EMPLOYEE_ID, firstName: FIRST_NAME, lastName: LAST_NAME, role:ROLE, salary:SALARY};
        console.log(parameters);
        axios.post(url, parameters)
		  .then(function (response) {
			window.location.href = '/';
		    console.log(parameters);
		  })
		  .catch(function (error) {
		    console.log(parameters);
		  });
    }
	
	return (
	<div>
		<h1 className='col-lg-12 offset-lg-1'>CREATE NEW EMPLOYEE</h1>
		<form onSubmit={postToApi} className='col-lg-12 offset-lg-1 mt-5'>
			<div class="form-group">
				<label for="EMPLOYEE_ID">EMPLOYEE_ID:</label><input type="text" class="form-control" id="EMPLOYEE_ID" placeholder="EMPLOYEE_ID"
				onChange={(e) => setEMPLOYEE_ID(e.target.value)} required='true'></input>
			</div>
			<div class="form-group">
				<label for="FIRST_NAME">FIRST_NAME:</label>
				<input type="text" class="form-control" id="FIRST_NAME" placeholder="FIRST_NAME"
				onChange={(e) => setFIRST_NAME(e.target.value)}></input>
			</div>
			<div class="form-group">
				<label for="LAST_NAME">LAST_NAME:</label>
				<input type="text" class="form-control" id="LAST_NAME" placeholder="LAST_NAME"
				onChange={(e) => setLAST_NAME(e.target.value)}></input>
			</div>
			<div class="form-group">
				<label for="ROLE">ROLE:</label>
				<input type="text" class="form-control" id="ROLE" placeholder="ROLE"
				onChange={(e) => setROLE(e.target.value)}></input>
			</div>
			<div class="form-group">
				<label for="SALARY">SALARY:</label>
				<input type="text" class="form-control" id="SALARY" placeholder="SALARY"
				onChange={(e) => setSALARY(e.target.value)}></input>
			</div>
        	<input type="submit" class="btn btn-primary" value="CREATE" Link/>
		</form>    
	 </div>
	)
	
}

export default CreateEmployee;