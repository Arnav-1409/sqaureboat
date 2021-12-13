import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './forgetPassword.css';
import './../commonCSS/commonCSS.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { forgetPasswordAction } from '../../actions';
import { connect } from 'react-redux';
import Loader from '../layout/Loader';
import Notification from '../layout/Notification';

const ForgetPassword = (props) => {
  const navigate = useNavigate();
  const { sendForgetPasswordRequest, forgetPasswordData, isForgetPasswordFetching, forgetPasswordErrMsg } = props;
  const [email, setEmail] = useState('');

  const handleChange = e => {
    setEmail(e.target.value)
  }

  const submitHandle = e => {
    e.preventDefault();
    sendForgetPasswordRequest(email)
  }

  if (forgetPasswordData && forgetPasswordData.data) {
    console.log(forgetPasswordData)
    sessionStorage.setItem('token', forgetPasswordData.data.token)
    sessionStorage.setItem('id', forgetPasswordData.data.id)
    navigate('/update-password')
  }
  return (
    <div>
      {(forgetPasswordErrMsg) ? (<Notification
        message={forgetPasswordErrMsg.message}
        statusType={forgetPasswordErrMsg.success}
      />) : ''}
      {isForgetPasswordFetching ? <Loader /> : (
        <div className='forgetPasswordContainer'>
          <h3 className="cardTitle">Forget your password?</h3>
          <p className="textHeader">Enter the email associated with your account and we’ll send you instructions to reset your password.</p>
          <Form onSubmit={submitHandle}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter your email" value={email} onChange={(e) => handleChange(e)} />
            </Form.Group>
            <div className="buttonConatiner">
              <Button className="buttonStyle" variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    forgetPasswordData: state.forgetPasswordReducer.forgetPasswordData,
    isForgetPasswordFetching: state.forgetPasswordReducer.isForgetPasswordFetching,
    forgetPasswordErrMsg: state.forgetPasswordReducer.forgetPasswordErrMsg
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendForgetPasswordRequest: (email) => dispatch(forgetPasswordAction.sendForgetPasswordRequest(email)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);
