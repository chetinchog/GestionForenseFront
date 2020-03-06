import React from "react";
import SecurityManager from "../../../managers/SecurityManager";

import EvidenceTableRow from "./EvidenceTableRow";

function EvidencesTableBody({ listEvidences }) {
  return (
    <tbody>
      {listEvidences &&
        listEvidences.map((evidence, i) => (
          <EvidenceTableRow key={i} {...{ evidence }}></EvidenceTableRow>
        ))}
      {SecurityManager.getRole() === "Perito" && (
        <EvidenceTableRow
          {...{
            evidence: {
              action: "/evidences/new",
              actionName: "Cargar evidencia"
            }
          }}
        ></EvidenceTableRow>
      )}
    </tbody>
  );
}

export default EvidencesTableBody;
