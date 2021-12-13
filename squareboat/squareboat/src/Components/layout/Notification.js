import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert'

const Notification = ({ message, statusType }) => {
  const [status, setStatus] = useState('');
  useEffect(() => {
    statusType === true ? setStatus('success') : setStatus('danger');
  }, [])
  let heading = status === 'success' ? 'Hurrayy!' : 'Ohh Noo!';
  return (
    <Alert variant={status}>
      <Alert.Heading>{heading}</Alert.Heading>
      <p>
        {message}
      </p>
    </Alert>
  )
}

export default Notification;
