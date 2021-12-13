import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './signup.css';
import './../commonCSS/commonCSS.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { signupAction } from '../../actions';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Notification from '../layout/Notification';
import Loader from '../layout/Loader';

const Signup = (props) => {
  const navigate = useNavigate();
  const { sendSignupRequest, signupData, isSignupFetching, signupErrMsg } = props;

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    skills: '',
  });

  const [userRole, setUserRole] = useState(0);

  const handleChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })
  }

  const handleButtonChange = val => {
    setUserRole(val);
  }

  const submitHandle = e => {
    e.preventDefault();
    let data = inputs;
    data["userRole"] = userRole;
    sendSignupRequest(data);
  }

  const loginPath = () => {
    navigate('/');
  }

  if (signupData && signupData.data) {
    sessionStorage.setItem('token', signupData.data.token);
    sessionStorage.setItem('id', signupData.data.id);
    navigate('/dashboard');
  }

  return (
    <div>
      {(signupErrMsg) ? (<Notification
        message={signupErrMsg.message}
        statusType={signupErrMsg.success}
      />) : ''}
      {isSignupFetching ? <Loader /> : (
        <div className='signupContainer'>
          <h3 className="cardTitle">Signup</h3>
          <Form onSubmit={submitHandle}>
            <Form.Label>I'm a</Form.Label>
            <div>
              <ToggleButtonGroup type="radio" value={userRole} name="options" onChange={(val) => handleButtonChange(val)}>
                <ToggleButton value={0} className="recruiterButton">Recruiter</ToggleButton>
                <ToggleButton value={1} className="candidateButton">Candidate</ToggleButton>
              </ToggleButtonGroup>
            </div>
            <Form.Group className="mb-3">
              <Form.Label>Full name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter your full name" value={inputs.name} onChange={(e) => handleChange(e)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter your email" value={inputs.email} onChange={(e) => handleChange(e)} />
            </Form.Group>
            <Row className="align-items-center">
              <Col md="6" className="my-1">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" placeholder="Enter your password" value={inputs.password} onChange={(e) => handleChange(e)} />
                </Form.Group>
              </Col>
              <Col md="6" className="my-1">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" name="confirmPassword" placeholder="Enter your password" value={inputs.confirmPassword} onChange={(e) => handleChange(e)} />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Skills</Form.Label>
              <Form.Control type="text" name="skills" placeholder="Enter comma separated skills" value={inputs.skills} onChange={(e) => handleChange(e)} />
            </Form.Group>
            <div className="buttonConatiner">
              <Button className="buttonStyle" variant="primary" type="submit">
                Signup
              </Button>
            </div>
          </Form>
          <div className="textContainer">
            <p> Have an account? <span className="textLink" onClick={loginPath}>Login</span></p>
          </div>
        </div>)}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    isSignupFetching: state.signupReducer.isSignupFetching,
    signupErrMsg: state.signupReducer.signupErrMsg,
    signupData: state.signupReducer.signupData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendSignupRequest: (signupDetails) => dispatch(signupAction.sendSignupRequest(signupDetails)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
