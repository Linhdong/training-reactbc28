import React, { Component } from "react";
import { connect } from "react-redux";
import Buger from "./Buger";
import Menu from "./Menu";

class DemoBuger extends Component {
  render() {
    return (
      <div className="container">
        <h3>Demo Burger</h3>
        <div className="row">
          <div className="col-6">
            <Buger />
          </div>
          <div className="col-6">
            <Menu />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(DemoBuger);
