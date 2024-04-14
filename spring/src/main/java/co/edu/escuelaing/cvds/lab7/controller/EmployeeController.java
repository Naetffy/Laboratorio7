package co.edu.escuelaing.cvds.lab7.controller;

import co.edu.escuelaing.cvds.lab7.model.Employee;
import co.edu.escuelaing.cvds.lab7.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(value = "/employee")
public class EmployeeController {
	private final EmployeeService employeeService;

	@Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }
	
	@GetMapping("/api/employees")
    @ResponseBody
    public List<Employee> getApiEmployees() {
        return employeeService.getAllEmployees();
    }
	@PostMapping("/api/employees")
    @ResponseBody
    public List<Employee> postApiEmployee(@RequestBody Employee employee) {
		employeeService.addEmployee(employee);	
        return employeeService.getAllEmployees();
    }
	
	@GetMapping("/api/employee/{id}")
    @ResponseBody
    public Employee getApiEmployee(@PathVariable String id) {
        return employeeService.getEmployee(id);
    }
	@PutMapping("/api/employee/{id}")
    @ResponseBody
    public Employee putApiEmployee(@PathVariable String id,@RequestBody Employee employee) {
        return employeeService.updateEmployee(employee);	
    }
	@DeleteMapping("/api/employee/{id}")
	public ResponseEntity<String> deleteApiEmployee(@PathVariable String id) {
        // Eliminar el empleado
        employeeService.deleteEmployee(id);

        // Devolver una respuesta de éxito
        return ResponseEntity.status(HttpStatus.OK).body("Empleado eliminado correctamente");
    }
}
