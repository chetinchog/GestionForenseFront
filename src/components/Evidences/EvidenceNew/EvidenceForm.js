import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

function EvidenceForm() {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log("EvidenceForm -> form", form);
    return false;
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} controlId="number">
        <Form.Label column sm="1">
          Caso
        </Form.Label>
        <Col sm="11">
          <Form.Control type="text" placeholder="Número de caso" />
        </Col>
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>

      <Form.Group as={Row} controlId="formBasicCheckbox">
        <Form.Label column sm="1">
          Archivo
        </Form.Label>
        <Col sm="11">
          <Form.Control type="text" placeholder="foto1.png" />
        </Col>
      </Form.Group>

      <Button variant="primary" type="submit">
        Guardar
      </Button>
    </Form>
  );
}

export default EvidenceForm;
