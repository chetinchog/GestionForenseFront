import React from "react";
import { Button } from "react-bootstrap";
import moment from "moment";

function EvidencesTableRow({ evidence }) {
  const { action, actionName } = evidence;
  return (
    <tr key={evidence._id}>
      <td>{evidence.number}</td>
      <td>{evidence.state}</td>
      <td>{evidence.description}</td>
      <td>
        {evidence.createdAt && moment(evidence.createdAt).format("DD/MM/YYYY")}
      </td>
      <td>
        {evidence.modifiedAt &&
          moment(evidence.modifiedAt).format("DD/MM/YYYY")}
      </td>
      <td>
        <Button
          variant={(action && "primary") || "info"}
          href={action || `/evidences/view/${evidence._id}`}
        >
          {actionName || "Ver detalle"}
        </Button>
      </td>
    </tr>
  );
}

export default EvidencesTableRow;
