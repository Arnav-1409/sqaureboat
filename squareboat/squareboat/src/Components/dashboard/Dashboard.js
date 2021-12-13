import React, { useState, useEffect } from 'react';
import { getAllJobAction } from '../../actions';
import { connect } from 'react-redux';
import './dashboard.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Notification from '../layout/Notification';
import Loader from '../layout/Loader';

const Dashboard = (props) => {
  const { sendAllJobRequest, allJobData, allJobErrMsg, isAllJobFetching } = props;
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    sendAllJobRequest();
    if (allJobData && allJobData.data) {
      setJobs(allJobData.data);
    }
  }, [])

  return (
    <div>
      {(allJobErrMsg) ? (<Notification
        message={allJobErrMsg.message}
        statusType={allJobErrMsg.success}
      />) : ''}
      <div>
        {isAllJobFetching ? <Loader /> : (
          <div class="wrapper">
            <Container>
              <Row sm className="g-4">
                {jobs.map((item, key) => (
                  <Col key={item.id}>
                    <Card  className="cardWrapper">
                      <Card.Body>
                        <Card.Title className="textWrapper">{item.title}</Card.Title>
                        <Card.Text className="textWrapper">
                          {item.description}
                        </Card.Text>
                        <Row>
                          <Col>
                            <Card.Text className="textWrapper">{item.location}</Card.Text>
                          </Col>
                          <Col>
                            <Button className="cardButton" variant="primary">
                              View Application
                            </Button>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>)}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    allJobData: state.getAllJobReducer.allJobData,
    allJobErrMsg: state.getAllJobReducer.allJobErrMsg,
    isAllJobFetching: state.getAllJobReducer.isAllJobFetching,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendAllJobRequest: (data) => dispatch(getAllJobAction.sendAllJobRequest(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
