import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <>
      <Container className='text-center'>

        <Row >
          <Col>
            <Link to="/UploadAgents">
              <span >
                <p className="HomeCategoriesBtn" >Upload new Agents</p>
              </span>
            </Link>
          </Col>
        </Row>

        <Row >
          <Col>
            <Link to="/UploadProperty">
              <span >
                <p className="HomeCategoriesBtn" >Upload new Property</p>
              </span>
            </Link>
          </Col>
        </Row>
        <Row >
          <Col>
            <Link to="/UploadProject">
              <span >
                <p className="HomeCategoriesBtn" >Upload Project</p>
              </span>
            </Link>
          </Col>
        </Row>
      </Container>


    </>
  )
}

export default Home