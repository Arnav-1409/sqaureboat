import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Components/login/Login';
import Signup from './Components/signup/Signup';
import ForgetPassword from './Components/forgetPassword/ForgetPassword';
import UpdatePassword from './Components/updatePassword/UpdatePassword';
import Dashboard from './Components/dashboard/Dashboard';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
          <Route path='/update-password' element={<UpdatePassword />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    urlState: state.appReducer.API_URL
  }
}

export default connect(mapStateToProps)(App);
