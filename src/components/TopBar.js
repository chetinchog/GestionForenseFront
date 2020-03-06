import React from "react";
import { Button, Badge, Row, Col } from "react-bootstrap";

import SecurityManger from "../managers/SecurityManager";

const handleLogout = () => {
  SecurityManger.logout();
  window.location.assign("/");
};

function TopBar({ role, name }) {
  if (name && role)
    return (
      <Row>
        <Col sm={{ span: 4, offset: 9 }}>
          <br></br>
          <h5>
            <Badge variant="info">
              {name} ({role})
            </Badge>
            &nbsp;&nbsp;
            <Button size="sm" variant="outline-dark" onClick={handleLogout}>
              Logout
            </Button>
          </h5>
        </Col>
      </Row>
    );
  else return <br></br>;
}

export default TopBar;
