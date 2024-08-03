import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Student from './components/student';
import CreateStudent from './components/Createstudent';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/create" element={<CreateStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
