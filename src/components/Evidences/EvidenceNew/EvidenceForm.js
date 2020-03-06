import React, { Component } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

import EvidenceFormHandler from "../../../forms/Evidence/EvidenceFormHandler";
import Swal from "sweetalert2";

class EvidenceForm extends Component {
  state = {
    evidence: {
      number: "",
      description: "",
      image: ""
    },
    buttonDisable: false
  };

  route = path => this.props.history.push(path);

  handleOnChange = e => {
    const { id, value } = e.target;
    this.setState(({ evidence }) => ({
      evidence: { ...evidence, [id]: value }
    }));
  };

  handleSubmit = async e => {
    try {
      this.setState({ buttonDisable: true });
      const { evidence } = this.state;
      e.preventDefault();
      await EvidenceFormHandler.newEvidence(evidence);
      Swal.fire({
        title: "¡Evidencia cargada!",
        text:
          "Se cargó correctamente la evidencia para el caso " + evidence.number,
        icon: "success",
        confirmButtonText: "Continuar"
      });
      this.route("/evidences");
    } catch (e) {
      console.log("e", e)
      Swal.fire({
        title: "¡Ups!",
        text: "No se ha podido cargar la evidencia",
        icon: "error",
        confirmButtonText: "Entendido"
      });
      this.setState({ buttonDisable: false });
    }
    return false;
  };

  render() {
    const {
      evidence: { number, description, image },
      buttonDisable
    } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group as={Row} controlId="number">
          <Form.Label column sm="1">
            Caso *
          </Form.Label>
          <Col sm="11">
            <Form.Control
              required
              type="text"
              placeholder="Número de caso"
              value={number}
              onChange={this.handleOnChange}
            />
          </Col>
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Descripción *</Form.Label>
          <Form.Control
            required
            as="textarea"
            placeholder="Descripción de la evidencia"
            rows="3"
            value={description}
            onChange={this.handleOnChange}
          />
        </Form.Group>
        <Form.Group as={Row} controlId="image">
          <Form.Label column sm="2">
            Archivo *
          </Form.Label>
          <Col sm="10">
            <Form.Control
              required
              type="text"
              placeholder="Foto de la evidencia"
              value={image}
              onChange={this.handleOnChange}
            />
          </Col>
        </Form.Group>
        <Button
          disabled={buttonDisable}
          variant="primary"
          type="submit"
          onClick={() => {
            return false;
          }}
        >
          {buttonDisable ? "Guardando..." : "Guardar"}
        </Button>
      </Form>
    );
  }
}

export default EvidenceForm;
