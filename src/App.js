import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Display from './Componet/Display';
import AddUser from './Componet/AddUser';
import View from './Componet/View';

function App() {
  return (
    <>
      {/* <Display></Display>
      <AddUser></AddUser> */}
      <Routes>
        <Route path="/" element={<Display />} />
        <Route path="view" element={<View />} />
        <Route path="add" element={<AddUser />} />
      </Routes>
    </>
  );
}

export default App;
