import React, { Component } from "react";

import EvidenceManager from "../../Managers/EvidenceManager";
import EvidenceTable from "../../components/Evidences/EvidenceTable/EvidenceTable";
import Loading from "../../components/Loading";

class EvidenceTableContainer extends Component {
  state = {
    ready: false,
    listEvidences: []
  };

  getListEvidence = async () => {
    const listEvidences = await EvidenceManager.getListEvidence();
    this.setState({
      ready: true,
      listEvidences
    });
  };

  render() {
    this.getListEvidence();
    if (this.state.ready)
      return <EvidenceTable {...{ listEvidences: this.state.listEvidences }}></EvidenceTable>;
    else return <Loading></Loading>;
  }
}

export default EvidenceTableContainer;
