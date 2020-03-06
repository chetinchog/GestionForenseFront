const env = process.env.REACT_APP_NODE_ENV;

const local = {
  baseUrl: "http://localhost:5001/gestionforense/us-central1",
  listEvidenceUrl: "/listevidence",
  viewEvidenceUrl: "/viewevidence",
  newEvidenceUrl: "/newevidence",
  approveEvidenceUrl: "/approveevidence",
  loginUrl: "/login"
};

const prod = {
  baseUrl: "https://us-central1-gestionforense.cloudfunctions.net",
  listEvidenceUrl: "/listevidence",
  viewEvidenceUrl: "/viewevidence",
  newEvidenceUrl: "/newevidence",
  approveEvidenceUrl: "/approveevidence",
  loginUrl: "/login"
};

const config = {
  local,
  prod
};

module.exports = config[env || "prod"];
