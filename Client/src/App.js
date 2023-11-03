import './App.css';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import StudentDashboard from './components/StudentDashboard';
import Navbar from './navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
           <CourseList/>
    </div>
  );
}

export default App;
