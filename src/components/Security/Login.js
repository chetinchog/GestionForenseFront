import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import LoginForm from "../../components/Security/Login/LoginForm";

class Home extends Component {
  route = path => this.props.history.push(path);

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>¡Bienvenido!</h1>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row className="justify-content-md-center">
          <Col sm={8}>
            <Card>
              <Card.Header>Login</Card.Header>
              <Card.Body>
                <Row className="justify-content-md-center">
                  <Col sm={10}>
                    <LoginForm {...this.props}></LoginForm>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
