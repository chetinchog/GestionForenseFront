import ENV from "./../config/config";

import RequestManager from "./RequestManager";

const getListEvidence = async () =>
  (await RequestManager.get(ENV.baseUrl + ENV.listEvidence)).data;

const getEvidence = async _id =>
  (await RequestManager.get(ENV.baseUrl + ENV.viewEvidence + `?_id=${_id}`))
    .data;

export default { getListEvidence, getEvidence };
