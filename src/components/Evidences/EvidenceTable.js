import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import EvidenceTableContainer from "../../containers/Evidences/EvidenceTableContainer";

class EvidenceTable extends Component {
  route = path => this.props.history.push(path);

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Evidencias</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              variant="secondary"
              size="sm"
              onClick={e => this.route("/")}
            >
              Volver
            </Button>
          </Col>
        </Row>
        <br></br>
        <Row className="justify-content-md-center">
          <Col sm={11}>
            <EvidenceTableContainer></EvidenceTableContainer>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EvidenceTable;
