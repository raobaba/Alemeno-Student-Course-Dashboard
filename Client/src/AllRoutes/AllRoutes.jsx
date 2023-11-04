import React from "react";
import { Routes, Route } from "react-router-dom";
import CourseList from "../components/CourseList";
import CourseDetails from "../components/CourseDetails";
import StudentDashboard from "../components/StudentDashboard";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CourseList />} />
      <Route path="/course-details/:courseId" element={<CourseDetails />} />
      <Route path="/dashboard" element={<StudentDashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default AllRoutes;
