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
    <div>
      <h1>EMPLOYEES LIST</h1>
      <div className='container-fluid'>
        <div className='row mt-3'>
          <div className='col-12 col-lg-8 offset-0 offset-lg-0'>
            <div className='table-responsive'>
              <div className='table table-bordered'>
                <thead>
                  <tr><th>EMPLOYEE_ID</th><th>FIRST_NAME</th><th>LAST_NAME</th><th>ROLE</th><th>SALARY</th></tr>
                </thead>
                <tbody className='table-group-divider'>
                  {employees.map( (employee,i) => (
                    <tr key={employee.employeeId}>
                      <td>{employee.employeeId}</td>
                      <td>{employee.firstName}</td>
                      <td>{employee.lastName}</td>
                      <td>{employee.role}</td>
                      <td>{employee.salary}</td>
                      <td>
                      	<Link to={'/update/'+employee.employeeId}>
				        	<button>UPDATE</button>
				       	</Link>
				       </td>
                      <td>
	                      <button data-bs-toggle='modal' data-bs-target='#modalDelete' 
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
        	<button>New</button>
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
