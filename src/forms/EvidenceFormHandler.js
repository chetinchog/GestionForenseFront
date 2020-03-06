import EvidenceManager from "../managers/EvidenceManager";

const newEvidence = async evidence =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(await EvidenceManager.setEvidence(evidence));
    } catch (e) {
      reject(e);
    }
  });

export default { newEvidence };
