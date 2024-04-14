import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { show_alert } from './functions';
import { Link } from 'react-router-dom/dist';

const ShowEmployees = () => {
	
    const url = 'http://localhost:8080/employee/api/employees';
    const [employees, setEmployees] = useState([]);

	const [EMPLOYEE_ID, setEMPLOYEE_ID] = useState('');
    const [FIRST_NAME, setFIRST_NAME] = useState('');
    const [LAST_NAME, setLAST_NAME] = useState('');
	
	const handleShow = (employeeId, firstName, lastName) => {
		setEMPLOYEE_ID(employeeId);
		setFIRST_NAME(firstName);
		setLAST_NAME(lastName);
	}
	
	const deleteToApi = async () => {
	  try {
	    var url = 'http://localhost:8080/employee/api/employee/' + EMPLOYEE_ID;
	    const response = await axios.delete(url);
	    console.log(response);
	    // Redireccionar después de la eliminación exitosa
	    window.location.href = '/';
	  } catch (error) {
	    console.error(error);
	  }
	}
	
    useEffect( ()=>{
        getEmployees();
    }, []);

    const getEmployees = async () => {
      try{
        const answer = await axios.get(url);
        setEmployees(answer.data);
      }
      catch(e){
        console.log(e)
      }
    }

  return (
    <div className='App'>
      <h1 className='col-lg-12 offset-lg-1'>EMPLOYEES LIST</h1>
      <div className='container-fluid'>
        <div className='row mt-5'>
          <div className='col-lg-12 offset-lg-1'>
            <div className='table-responsive'>
              <div className='table'>
                <thead>
                  <tr>
                  	<th><i className="fas fa-user"></i>
                      	{' '}EMPLOYEE_ID
                    </th>
                    <th>
                    	FIRST_NAME
                    </th>
                    <th>
                    	LAST_NAME
                    </th>
                    <th>
                    	ROLE
                    </th>
                    <th>
                    	SALARY
                    </th>
                   </tr>
                </thead>
                <tbody className='table-group-divider'>
                  {employees.map( (employee,i) => (
                    <tr key={employee.employeeId}>
                      <td>
                      	<i className="fas fa-user"></i>
                      	{' '}{employee.employeeId}
                      </td>
                      <td>{employee.firstName}</td>
                      <td>{employee.lastName}</td>
                      <td>{employee.role}</td>
                      <td>{employee.salary}</td>
                      <td>
                      	<Link to={'/update/'+employee.employeeId}>
				        	<button className='btn btn-info '>UPDATE</button>
				       	</Link>
				       </td>
                      <td>
	                      <button className='btn btn-info' data-bs-toggle='modal' data-bs-target='#modalDelete' 
	                      onClick={() => handleShow(employee.employeeId,employee.firstName,employee.lastName)}>
	                      		DELETE                
					      </button>
        			  </td>
                    </tr>
                  ))
                  }
                </tbody>
              </div>    
            </div>  
          </div>
        </div>
        <Link to="/create">
        	<button className='btn btn-primary col-lg-1 offset-lg-1'>New</button>
        </Link>
      </div>
      <div id='modalDelete' className='modal fade' aria-hidden='true'>
      	<div className='modal-dialog'>
      		<div className='modal-content'>
      			<div className='modal-header'>
	      			<h3>{"Are you sure you want to delete " + FIRST_NAME + " " + LAST_NAME + " employee?"}</h3>
	      			<button onClick={deleteToApi}>YES</button><button data-bs-dismiss='modal'>NO</button>
      			</div>
      		</div>
      	</div>
      	
      </div>
    </div>
    
  )
}

export default ShowEmployees
