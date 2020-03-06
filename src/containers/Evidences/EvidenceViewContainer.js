import React, { Component } from "react";

import EvidenceManager from "../../managers/EvidenceManager";
import EvidenceView from "../../components/Evidences/EvidenceView/EvidenceView";
import Loading from "../../components/Loading";

class EvidenceViewContainer extends Component {
  state = {
    ready: false
  };

  getEvidence = async id => {
    if (this.state.evidence) return;
    const evidence = await EvidenceManager.getEvidence(id);
    this.setState({
      ready: true,
      evidence
    });
  };

  updateEvidence = async () => {
    const evidence = await EvidenceManager.getEvidence(this.state.evidence._id);
    this.setState({
      ready: true,
      evidence
    });
  };

  render() {
    const { id } = this.props;
    this.getEvidence(id);
    const { ready, evidence } = this.state;
    if (ready && evidence) {
      evidence.update = this.updateEvidence;
      return <EvidenceView {...{ evidence }}></EvidenceView>;
    } else return <Loading></Loading>;
  }
}

export default EvidenceViewContainer;
