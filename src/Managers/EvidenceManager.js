import {
  baseUrl,
  listEvidence,
  viewEvidence,
  newEvidence
} from "../config/config";
import Helper from "../lib/helper";

import RequestManager from "./RequestManager";

const getListEvidence = async () =>
  Helper.Covenant((await RequestManager.get(baseUrl + listEvidence)).data);

const getEvidence = async _id =>
  Helper.Covenant(
    (await RequestManager.get(baseUrl + viewEvidence + `?_id=${_id}`)).data
  );

const setEvidence = async evidence =>
  Helper.Covenant(
    (await RequestManager.post(baseUrl + newEvidence, evidence)).data
  );

export default { getListEvidence, getEvidence, setEvidence };
