import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import EvidenceForm from "../../components/Evidences/EvidenceNew/EvidenceForm";

class EvidenceNew extends Component {
  route = path => this.props.history.push(path);

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Nueva evidencia</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              variant="secondary"
              size="sm"
              onClick={e => this.route("/evidences")}
            >
              Volver
            </Button>
          </Col>
        </Row>
        <br></br>
        <Row className="justify-content-md-center">
          <Col sm={11}>
            <EvidenceForm {...this.props}></EvidenceForm>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EvidenceNew;
