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
  const { number, state, description, image, createdAt, updatedAt } = evidence;
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col sm={9}>
          <Card>
            <Card.Header></Card.Header>
            <Card.Body>
              <Row className="justify-content-md-center">
                <Col sm={11}>
                  <Row className="justify-content-md-center">
                    <Col sm={6}>
                      <p>
                        Caso: <b>{number}</b>
                      </p>
                      <p>
                        Estado: <b>{state}</b>
                      </p>
                      <p>Descripción:</p>
                      <p>
                        <b>{description}</b>
                      </p>
                      <p>
                        Creación:{" "}
                        <b>{moment(createdAt).format("DD/MM/YYYY")}</b>
                      </p>
                      <p>
                        Actualización:{" "}
                        <b>{moment(updatedAt).format("DD/MM/YYYY")}</b>
                      </p>
                    </Col>
                    <Col sm={6}>
                      <Row className="justify-content-md-center">
                        <img
                          className="img-responsive"
                          src={image}
                          alt={description}
                          style={{
                            position: "absolute",
                            maxWidth: "600px",
                            width: "100%",
                            maxHeight: "220px",
                            height: "100%"
                          }}
                        ></img>
                      </Row>
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
