import React from "react";
import moment from "moment";
import Swal from "sweetalert2";
import { Button, Container, Row, Col, Card } from "react-bootstrap";

import SecurityManager from "../../../managers/SecurityManager";
import EvidenceManager from "../../../managers/EvidenceManager";

let buttonDisable = false;

const handleApprovement = (evidence, state) => {
  buttonDisable = true;
  const newEvidence = {
    _id: evidence._id,
    state: state
  };
  Swal.fire({
    title: "¡Atención!",
    text: `¿Está seguro que desea ${
      state ? "aprobar" : "rechazar"
    } la evidencia?`,
    icon: "warning",
    confirmButtonText: "Continuar"
  }).then(async () => {
    await EvidenceManager.approveEvidence(newEvidence);
    try {
      Swal.fire({
        title: `¡Evidencia  ${state ? "aprobada" : "rechazada"}!`,
        text: `Se ${
          state ? "aprobó" : "rechazó"
        } correctamente la evidencia para el caso "${evidence.number}"`,
        icon: "success",
        confirmButtonText: "Entendido"
      });
      evidence.update();
      buttonDisable = false;
    } catch (e) {
      Swal.fire({
        title: "¡Ups!",
        text: `No se ha podido ${state ? "aprobar" : "rechazar"} la evidencia`,
        icon: "error",
        confirmButtonText: "Entendido"
      });
      buttonDisable = false;
    }
  });
};

function EvidenceView({ evidence }) {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col sm={9}>
          <Card>
            <Card.Header></Card.Header>
            <Card.Body>
              <Row className="justify-content-md-center">
                <Col sm={11}>
                  <Row>
                    <Col>
                      <p>Caso: {evidence.number}</p>
                      <p>Estado: {evidence.state}</p>
                      <p>Descripción:</p>
                      <p>{evidence.description}</p>
                      <p>
                        Creación:{" "}
                        {moment(evidence.createdAt).format("DD/MM/YYYY")}
                      </p>
                      <p>
                        Actualización:{" "}
                        {moment(evidence.updatedAt).format("DD/MM/YYYY")}
                      </p>
                    </Col>
                    <Col>
                      <img alt="In progress..."></img>
                    </Col>
                  </Row>
                  {SecurityManager.getRole() === "Fiscal" && (
                    <Row className="justify-content-md-center">
                      <Col sm={3}>
                        <br></br>
                        <Button
                          disabled={buttonDisable}
                          variant="success"
                          onClick={e => handleApprovement(evidence, true)}
                        >
                          {buttonDisable ? "Actualizando..." : "Aceptar"}
                        </Button>
                      </Col>
                      <Col sm={3}>
                        <br></br>
                        <Button
                          disabled={buttonDisable}
                          variant="danger"
                          onClick={e => handleApprovement(evidence, false)}
                        >
                          {buttonDisable ? "Actualizando..." : "Rechazar"}
                        </Button>
                      </Col>
                    </Row>
                  )}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default EvidenceView;
