import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Student from './components/student';
import CreateStudent from './components/Createstudent';
import UpdateStudent from './components/Update';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/create" element={<CreateStudent />} />
          <Route path="/update/:id" element={<UpdateStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
