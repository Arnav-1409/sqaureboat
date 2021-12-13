import React, { useState } from 'react';
import './login.css';
import './../commonCSS/commonCSS.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { loginAction } from '../../actions';
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import Loader from '../layout/Loader';
import Notification from '../layout/Notification';

const Login = (props) => {
  const navigate = useNavigate();
  const { sendLoginRequest, loginData, isLoginFetching, errMsg } = props;
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })
  }

  const submitHandle = e => {
    e.preventDefault()
    sendLoginRequest(inputs);
  }

  const signupPath = () => {
    navigate('/signup');
  }

  const forgetPasswordPath = () => {
    navigate('/forget-password')
  }

  if (loginData && loginData.data) {
    sessionStorage.setItem('token', loginData.data.token);
    sessionStorage.setItem('id', loginData.data.id);
    navigate('/dashboard');
  }

  return (
    <div>
      {(errMsg) ? (<Notification
        message={errMsg.message}
        statusType={errMsg.success}
      />) : ''}
      {isLoginFetching ? <Loader /> : (
        <div className='loginContainer'>
          <h3 className="cardTitle">Login</h3>
          <Form onSubmit={submitHandle}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" value={inputs.email} onChange={(e) => handleChange(e)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Row className="align-items-center">
                <Col md="6" className="my-1">
                  <Form.Label>Password</Form.Label>
                </Col>
                <Col>
                  <Form.Label className="forgetPassLink textLink" onClick={forgetPasswordPath}>Forgot your password?</Form.Label>
                </Col>
              </Row>
              <Form.Control type="password" name="password" placeholder="Password" value={inputs.password} onChange={(e) => handleChange(e)} />
            </Form.Group>
            <div className="buttonConatiner">
              <Button className="buttonStyle" variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
          <div className="textContainer">
            <p> New to MyJobs? <span className="textLink" onClick={signupPath}>Create an account</span></p>
          </div>
        </div>
      )
      }
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    loginData: state.loginReducer.loginData,
    isLoginFetching: state.loginReducer.isLoginFetching,
    errMsg: state.loginReducer.errMsg,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendLoginRequest: (loginDetails) => dispatch(loginAction.sendLoginRequest(loginDetails))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
