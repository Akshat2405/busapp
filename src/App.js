import './App.css';
import Navbar from './components/Navbar'
import Signin from './components/Signin'
import { Routes ,Route } from 'react-router-dom';
import Signup from './components/Signup'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage';
import SigninPage from './components/SigninPage';
import SignupPage from './components/SignupPage'
function App() {
  return (
    <>
    <Navbar/>
    <Signin/>
    <Signup/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/signin" element={<SigninPage/>}/>
      <Route exact path="/signup" element={<SignupPage/>}/>
      <Route path="*" element={<ErrorPage/>}/>

    </Routes>
    </>
  );
}

export default App;
