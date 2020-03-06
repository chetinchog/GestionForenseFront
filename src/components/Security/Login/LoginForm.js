import React, { Component } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

import LoginFormHandler from "../../../forms/Security/LoginFormHandler";
import Swal from "sweetalert2";

class LoginForm extends Component {
  state = {
    user: {
      username: "",
      password: ""
    },
    buttonDisable: false
  };

  handleOnChange = e => {
    const { id, value } = e.target;
    this.setState(({ user }) => ({
      user: { ...user, [id]: value }
    }));
  };

  handleSubmit = async e => {
    try {
      this.setState({ buttonDisable: true });
      const { user } = this.state;
      e.preventDefault();
      const currentUser = await LoginFormHandler.login(user);
      if (currentUser) window.location.assign("/");
      else
        Swal.fire({
          title: "¡Ups!",
          text: "Usuario y/o contraseña incorrectos",
          icon: "warning",
          confirmButtonText: "Entendido"
        });
    } catch (e) {
      console.log("e", e);
      Swal.fire({
        title: "¡Ups!",
        text: "Usuario y/o contraseña incorrectos",
        icon: "warning",
        confirmButtonText: "Entendido"
      });
      this.setState({ buttonDisable: false });
    }
    return false;
  };

  render() {
    const {
      user: { username, password },
      buttonDisable
    } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group as={Row} controlId="username">
          <Col sm="11">
            <Form.Control
              required
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={this.handleOnChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="password">
          <Col sm="11">
            <Form.Control
              required
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={this.handleOnChange}
            />
          </Col>
        </Form.Group>
        <Row>
          <Col sm={{ span: 2, offset: 10 }}>
            <Button
              disabled={buttonDisable}
              variant="primary"
              type="submit"
              onClick={() => {
                return false;
              }}
            >
              {buttonDisable ? "Ingresando..." : "Ingresar"}
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default LoginForm;
