import Helper from "../lib/helper";

import RequestManager from "./RequestManager";
import {
  baseUrl,
  listEvidenceUrl,
  viewEvidenceUrl,
  newEvidenceUrl,
  approveEvidenceUrl
} from "../config/config";

const getListEvidence = async () =>
  Helper.Covenant((await RequestManager.get(baseUrl + listEvidenceUrl)).data);

const getEvidence = async _id =>
  Helper.Covenant(
    (await RequestManager.get(baseUrl + viewEvidenceUrl + `?_id=${_id}`)).data
  );

const setEvidence = async evidence =>
  Helper.Covenant(
    (await RequestManager.post(baseUrl + newEvidenceUrl, evidence)).data
  );

const approveEvidence = async evidence =>
  Helper.Covenant(
    (await RequestManager.post(baseUrl + approveEvidenceUrl, evidence)).data
  );

export default {
  getListEvidence,
  getEvidence,
  setEvidence,
  approveEvidence
};
