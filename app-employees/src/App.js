import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowEmployees from './components/ShowEmployees';
import CreateEmployee from './components/CreateEmployee';
import UpdateEmployee from './components/UpdateEmployee';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<ShowEmployees></ShowEmployees>}></Route>
      	<Route path = '/create' element={<CreateEmployee></CreateEmployee>}></Route>
      	<Route path = '/update/:employeeId' element={<UpdateEmployee></UpdateEmployee>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
