import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import EvidenceViewContainer from "../../containers/Evidences/EvidenceViewContainer";

class EvidenceView extends Component {
  route = path => this.props.history.push(path);

  render() {
    const {
      match: { params: id }
    } = this.props;
    return (
      <Container>
        <Row>
          <Col>
            <h1>Evidencia</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <br></br>
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
            <EvidenceViewContainer {...id}></EvidenceViewContainer>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EvidenceView;
