import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './updatePassword.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { updatePasswordAction } from '../../actions';
import { connect } from 'react-redux';
import Notification from '../layout/Notification';
import Loader from '../layout/Loader';

const UpdatePassword = (props) => {
  const navigate = useNavigate();
  const { sendUpdatePasswordRequest, updatePasswordData, updatePasswordErrMsg, isUpdatePasswordFetching } = props;
  const [inputs, setInputs] = useState({
    password: '',
    confirmPassword: '',
  });

  const handleChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })
  }

  const submitHandle = e => {
    e.preventDefault();
    let data = inputs;
    data["token"] = sessionStorage.getItem('token');
    sendUpdatePasswordRequest(data);
  }

  if (updatePasswordData && updatePasswordData.data) {
    sessionStorage.setItem('token', updatePasswordData.data.token);
    sessionStorage.setItem('id', updatePasswordData.data.id);
    setTimeout(() => {
      navigate('/');
    }, 5000)
  }

  return (
    <div>
      {(updatePasswordData || updatePasswordErrMsg) ? (<Notification
        message={(updatePasswordData && updatePasswordData.message) || updatePasswordErrMsg.message}
        statusType={(updatePasswordData && updatePasswordData.success) || updatePasswordErrMsg.success}
      />) : ''}
      {isUpdatePasswordFetching ? <Loader /> : (
        <div className='updatePasswordContainer'>
          <h3 className="cardTitle">Reset Your Password</h3>
          <p className="textHeader">Enter your new password below.</p>
          <Form onSubmit={submitHandle}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Enter your password" value={inputs.password} onChange={(e) => handleChange(e)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" name="confirmPassword" placeholder="Enter your password" value={inputs.confirmPassword} onChange={(e) => handleChange(e)} />
            </Form.Group>
            <div className="buttonConatiner">
              <Button className="buttonStyle" variant="primary" type="submit">
                Reset
              </Button>
            </div>
          </Form>
        </div>)}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    updatePasswordData: state.updatePasswordReducer.updatePasswordData,
    updatePasswordErrMsg: state.updatePasswordReducer.updatePasswordErrMsg,
    isUpdatePasswordFetching: state.updatePasswordReducer.isUpdatePasswordFetching,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendUpdatePasswordRequest: (data) => dispatch(updatePasswordAction.sendUpdatePasswordRequest(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePassword);
