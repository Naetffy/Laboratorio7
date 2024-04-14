package co.edu.escuelaing.cvds.lab7.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import co.edu.escuelaing.cvds.lab7.model.Employee;
import co.edu.escuelaing.cvds.lab7.repository.EmployeeRepository;

@Service
public class EmployeeService {
	private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public Employee addEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee getEmployee(String employeeId) {
        return employeeRepository.findByEmployeeId(employeeId).get(0);
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee updateEmployee(Employee employee) {
        if (employeeRepository.findByEmployeeId(employee.getEmployeeId()).size() != 0) {
            return employeeRepository.save(employee);
        }
        return null;
    }

    public void deleteEmployee(String employeeId) {
    	employeeRepository.deleteById(employeeId);
    }


}
