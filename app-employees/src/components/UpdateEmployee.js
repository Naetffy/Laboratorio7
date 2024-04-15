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
	<div>
		<h1 className='col-12 offset-1 col-lg-12 offset-lg-1'>{"UPDATE EMPLOYEE WITH ID " + employeeId}</h1>
		<form onSubmit={updateToApi} className='col-lg-12 offset-lg-1 mt-5'>
			<div class="form-group col-2">
			    <div class="input-group mb-3">
			        <div class="input-group-prepend col-5">
			            <label style={{ backgroundColor:'lightblue'}} class="input-group-text" id="basic-addon2" for="FIRST_NAME">FIRST_NAME</label>
                    </div>
                	<input type="text" class="form-control" id="FIRST_NAME" placeholder="FIRST_NAME"
                				onChange={(e) => setFIRST_NAME(e.target.value)} required='true' aria-describedby="basic-addon2"></input>
			    </div>
			</div>
			<div class="form-group col-2">
			    <div class="input-group mb-3">
			        <div class="input-group-prepend col-5">
			            <label style={{ backgroundColor:'lightblue'}} class="input-group-text" id="basic-addon3" for="LAST_NAME">LAST_NAME</label>
                    </div>
                	<input type="text" class="form-control" id="LAST_NAME" placeholder="LAST_NAME"
                				onChange={(e) => setLAST_NAME(e.target.value)} required='true' aria-describedby="basic-addon3"></input>
			    </div>
			</div>
            <div class="form-group col-2">
			    <div class="input-group mb-3">
			        <div class="input-group-prepend col-5">
			            <label style={{ backgroundColor:'lightblue'}} class="input-group-text" id="basic-addon4" for="ROLE">ROLE</label>
                    </div>
                	<input type="text" class="form-control" id="ROLE" placeholder="ROLE"
                				onChange={(e) => setROLE(e.target.value)} required='true' aria-describedby="basic-addon4"></input>
			    </div>
			</div>
            <div class="form-group col-2">
			    <div class="input-group mb-3">
			        <div class="input-group-prepend col-5">
			            <label style={{ backgroundColor:'lightblue'}} class="input-group-text" id="basic-addon5" for="SALARY">SALARY</label>
                    </div>
                	<input type="text" class="form-control" id="SALARY" placeholder="SALARY"
                				onChange={(e) => setSALARY(e.target.value)} required='true' aria-describedby="basic-addon5"></input>
			    </div>
			</div>
        	<input type="submit" class="btn btn-primary" value="UPDATE" Link/>
		</form>    
	 </div>
	)
	
}

export default UpdateEmployee;