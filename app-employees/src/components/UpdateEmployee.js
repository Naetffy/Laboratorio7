import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link, useParams  } from 'react-router-dom/dist';
import { show_alert } from './functions';

const UpdateEmployee = () => {
	const { employeeId } = useParams();
	const url = 'http://localhost:8080/employee/api/employee/'+employeeId;
    const [FIRST_NAME, setFIRST_NAME] = useState('');
    const [LAST_NAME, setLAST_NAME] = useState('');
    const [ROLE, setROLE] = useState('');
    const [SALARY, setSALARY] = useState('');
    
    useEffect( ()=>{
        loadInitial();
    }, []);
    
    const loadInitial = () => {
		axios.get(url)
		  .then(function (response) {
		    console.log(response);
			const {firstName} = response.data;
			setFIRST_NAME(firstName);
			const {lastName} = response.data;
			setLAST_NAME(lastName);
			const {role} = response.data;
			setROLE(role);
			const {salary} = response.data;
			setSALARY(salary);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
	const updateToApi = async (event) => {
        event.preventDefault();
        var parameters = {employeeId: employeeId, firstName: FIRST_NAME, lastName: LAST_NAME, role:ROLE, salary:SALARY};
        console.log(parameters);
        axios.put(url, parameters)
		  .then(function (response) {
			window.location.href = '/';
		    console.log(parameters);
		  })
		  .catch(function (error) {
		    console.log(parameters);
		  });
    }
	
	return (
	<div class="container">
		<h1>{"UPDATE EMPLOYEE WITH ID " + employeeId}</h1>
		<form onSubmit={updateToApi}>
			<div class="form-group">
				<label for="FIRST_NAME">FIRST_NAME</label>
				<input type="text" class="form-control" id="FIRST_NAME" value={FIRST_NAME}
				onChange={(e) => setFIRST_NAME(e.target.value)}></input>
			</div>
			<div class="form-group">
				<label for="LAST_NAME">LAST_NAME</label>
				<input type="text" class="form-control" id="LAST_NAME" value={LAST_NAME}
				onChange={(e) => setLAST_NAME(e.target.value)}></input>
			</div>
			<div class="form-group">
				<label for="ROLE">ROLE</label>
				<input type="text" class="form-control" id="ROLE" value={ROLE}
				onChange={(e) => setROLE(e.target.value)}></input>
			</div>
			<div class="form-group">
				<label for="SALARY">SALARY</label>
				<input type="text" class="form-control" id="SALARY" value={SALARY}
				onChange={(e) => setSALARY(e.target.value)}></input>
			</div>
        	<input type="submit" class="btn btn-primary" value="UPDATE" Link/>
		</form>    
	 </div>
	)
	
}

export default UpdateEmployee;