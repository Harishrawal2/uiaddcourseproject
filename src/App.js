import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import ForgetPassword from './components/Auth/ForgetPassword';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import CoursePage from './components/CoursePage/CoursePage';
import Courses from './components/Courses/Courses';
import Home from './components/Home/Home';
import Footer from './components/Layouts/Footer/Footer';
import Header from './components/Layouts/Header/Header';
import PaymentFail from './components/Payments/PaymentFail';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import Subscribe from './components/Payments/Subscribe';
import Profile from './components/Profile/Profile';
import Request from './components/Request/Request';
import Portfolio from './components/Portfolio/Portfolio';
import BlogHeader from './components/Blogs/BlogHeader';
import CodeEditor from './components/CodeEditor/CodeEditor';
import JavaScriptEditor from './components/CodeEditor/JavaScriptEditor/JavaScriptEditor';
import FrontEndCode from './components/CodeEditor/JavaScriptEditor/FrontEndCode';
import Careers from './components/Careers/Careers';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import Users from './components/Admin/Users/Users';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses';

function App() {
  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  });

  return (
    <Router>
      <Header />
      <Routes>
        {/* Front Home page */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* Blogs routes */}
        <Route path="/blog" element={<BlogHeader />} />

        {/* compiler */}
        <Route path="/compiler" element={<CodeEditor />} />
        <Route path="/jseditor" element={<JavaScriptEditor />} />
        <Route path="/frontcode" element={<FrontEndCode />} />
        {/* careers */}
        <Route path="/careers" element={<Careers />} />

        {/* course profile */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />

        {/* courses */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CoursePage />} />
        

        {/* admin dashboard */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/createcourse" element={<CreateCourse />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/courses" element={<AdminCourses />} />




        {/* others */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<Request />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/paymentfail" element={<PaymentFail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
