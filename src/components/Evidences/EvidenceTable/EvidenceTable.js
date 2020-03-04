import React from "react";
import { Table } from "react-bootstrap";

import EvidenceTableHead from "./EvidenceTableHead";
import EvidenceTableBody from "./EvidenceTableBody";

function EvidencesTable({ listEvidences }) {
  return (
    <Table striped bordered hover size="sm">
      <EvidenceTableHead></EvidenceTableHead>
      <EvidenceTableBody {...{ listEvidences }}></EvidenceTableBody>
    </Table>
  );
}

export default EvidencesTable;
