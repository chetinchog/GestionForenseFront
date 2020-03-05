const env = process.env.REACT_APP_NODE_ENV;

const local = {
  baseUrl: "http://localhost:5001/gestionforense/us-central1",
  listEvidence: "/listevidence",
  viewEvidence: "/viewevidence"
};

const prod = {
  baseUrl: "https://us-central1-gestionforense.cloudfunctions.net",
  listEvidence: "/listevidence",
  viewEvidence: "/viewevidence"
};

const config = {
  local,
  prod
};

module.exports = config[env || "prod"];
