import React from "react";

import EvidenceTableRow from "./EvidenceTableRow";

function EvidencesTableBody({ listEvidences }) {
  return (
    <tbody>
      {listEvidences && listEvidences.map((evidence, i) => (
        <EvidenceTableRow key={i} {...{ evidence }}></EvidenceTableRow>
      ))}
      <EvidenceTableRow
        {...{ evidence: { action: "/evidences/new", actionName: "Cargar evidencia" } }}
      ></EvidenceTableRow>
    </tbody>
  );
}

export default EvidencesTableBody;
