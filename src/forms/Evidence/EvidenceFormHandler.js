import EvidenceManager from "../../managers/EvidenceManager";
import Helper from "../../lib/helper";

const newEvidence = async evidence =>
  new Promise(async (resolve, reject) => {
    try {
      evidence.image = await Helper.imageToBase64(evidence.image);
      resolve(await EvidenceManager.setEvidence(evidence));
    } catch (e) {
      reject(e);
    }
  });

export default { newEvidence };
