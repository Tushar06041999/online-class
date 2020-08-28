import React from 'react';
import './App.css';
import CourseInfo from './Components/CourseInfo/CourseInfo';

function App() {
  return (
    <div className="container-fluid">
      <h1 className="text-center bg-info p-3">Online Courses</h1>
      <CourseInfo></CourseInfo>
    </div>
  );
}

export default App;
