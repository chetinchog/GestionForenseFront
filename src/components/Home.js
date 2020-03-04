import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

class Home extends Component {
  route = path => this.props.history.push(path);

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Inicio</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col sm={3}>
            <Link to="/evidences">
              <Card bg="primary" text="white" className="text-center p-3">
                <blockquote className="blockquote mb-0 card-body">
                  <p>Gestionar evidencias</p>
                </blockquote>
              </Card>
            </Link>
            {/* <Button onClick={e => this.route("/evidences")}>Ver Evidencias</Button> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
