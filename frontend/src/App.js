import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import EditUser from "./components/EditUser";
import DetailUser from "./components/DetailUser";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<UserList/>}/>
      <Route path="/add" element={<AddUser/>}/>
      <Route path="/edit/:id" element={<EditUser/>}/>
      <Route path="/detail/:id" element={<DetailUser/>}/>


      </Routes>

    </BrowserRouter>
  );
}

export default App;
