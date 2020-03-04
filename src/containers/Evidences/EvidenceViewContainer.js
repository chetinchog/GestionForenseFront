import React, { Component } from "react";

import EvidenceManager from "../../Managers/EvidenceManager";
import EvidenceView from "../../components/Evidences/EvidenceView/EvidenceView";
import Loading from "../../components/Loading";

class EvidenceViewContainer extends Component {
  state = {
    ready: false,
    evidence: []
  };

  getEvidence = async id => {
    const evidence = await EvidenceManager.getEvidence(id);
    this.setState({
      ready: true,
      evidence
    });
  };

  render() {
    const { id } = this.props;
    this.getEvidence(id);
    if (this.state.ready)
      return <EvidenceView {...{ evidence: this.state.evidence }}></EvidenceView>;
    else return <Loading></Loading>;
  }
}

export default EvidenceViewContainer;
