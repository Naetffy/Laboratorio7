# LABORATORIO 7 - Finalización CI/CD - Manejo de Data - ORM

# Integrantes: Juan Daniel Murcia y Mateo Forero Fuentes 

## PARTE I. USANDO SPRING DATA DESDE CERO
- Descargue el código de https://github.com/PDSW-ECI/spring-mvc-with-bootstrap
- Ejecute el comando `docker run -p 3306:3306 --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:latest`
Paso a paso:
1. Instalar y descargar docker mediante la pagina web.
2. Tener abierto docker desktop
3. Descargar la imagen de mySQL mediante el comando `docker pull mysql`.
4. Mediante el comando especificado crear el contenedor.

- Descargar un cliente de base de datos: DBeaver
Paso a paso:
1. Instalar y descargar DBeaver.

Paso a paso conexion a la base de datos:
1. Revisar que el contenedor some-mysql este en ejecución en docker desktop.
2. Entrar a DBraver y realizar una nueva conexion.
3. Revisr que el puerto sea 3306, digitar la contraseña dada en la creación del contenedor mysql y ajustar los drivers validando que allowPublicKeyRetrieval=true y useSSL=false.
4. Esperar un tiempo despues de la creación del contenedor para darle doble click a la conexión y que esta sea exitosa.
5. Crear una Database mediante DBeaver dando click derecho en la carpeta database, y dandole el nombre de `cvds`.

Paso a paso creación de tablas y entorno mediante springboot:
1. Revisar en el codigo descargado en la parte I la carpeta /src/main/resources el archivo application.properties validando que el puerto contraseña y etc correspondan a nuestro mysql.
2. Ejecutar el proyecto springboot, validar la creación correcta mediante DBesver, en la database cvds se deben crear 3 tablas y la tabla Configuration tener 3 inserciones.

- Crear el siguiente modelo, use como base la clase `Configuration.java` ya creada:
<img width="140" alt="image" src="https://github.com/PDSW-ECI/labs/assets/4140058/9df565e5-dd4f-4932-b655-49de6a7c78ea">
Paso a paso para la creación del modelo:
1. Crear e implementar clase en /src/main/java/co/edu/escuelaing/cvds/model/ llamada Employee.java
2. Crear e implementar interfaz EmployeeRepository.java en /src/main/java/co/edu/escuelaing/cvds/repository/
3. Crear e implementar clase EmployeeService.java en /src/main/java/co/edu/escuelaing/cvds/service/
4. Crear e implementar clase EmployeeController.java en /src/main/java/co/edu/escuelaing/cvds/controller/

- Cree una interfaz CRUD para esa entidad usando los conocimientos adquiridos en React

Paso a paso creación del CRUD mediante react:
1. Crear un proyecto react siguiendo las instrucciones del siguiente video https://www.youtube.com/watch?v=fgQHjMotDPk
2. Crear 2 paginas auxiliares y modificar los js para cumplir el aspecto deseado.

<img width="672" alt="image" src="https://github.com/PDSW-ECI/labs/assets/4140058/67f8763f-920d-4c26-a7e7-cfcbee8cd37c">

<img width="675" alt="image" src="https://github.com/PDSW-ECI/labs/assets/4140058/8030b6b1-741f-4460-92ce-b66156c9857b">

<img width="675" alt="image" src="https://github.com/PDSW-ECI/labs/assets/4140058/652744e8-f2be-496d-9a57-6e72cb652c7f">

<img width="676" alt="image" src="https://github.com/PDSW-ECI/labs/assets/4140058/79383263-86ac-4bee-81d7-d3d9df1b0a60">


## ENTREGA
- DATA: URL del repositorio en github funcionando con una base de datos local.
