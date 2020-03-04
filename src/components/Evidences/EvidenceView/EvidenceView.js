import React from "react";
import moment from "moment";
import { Button } from "react-bootstrap";

import SecurityManager from "../../../Managers/SecurityManager";

function EvidenceView({ evidence }) {
  return (
    <div>
      <p>Evidencia: {evidence.number}</p>
      <p>Estado: {evidence.state}</p>
      <p>Descripción:</p>
      <p>{evidence.description}</p>
      <p>Creación: {moment(evidence.createdAt).format("DD/MM/YYYY")}</p>
      <p>Actualización: {moment(evidence.updatedAt).format("DD/MM/YYYY")}</p>
      <img alt="In progress..."></img>
      {SecurityManager.getRol() === "Fiscal" && (
        <div>
          <Button>Aceptar</Button>
          <Button>Rechazar</Button>
        </div>
      )}
    </div>
  );
}

export default EvidenceView;
