import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setFlats } from "../actions";

import Flat from "../containers/flat";

class FlatList extends Component {
  componentWillMount() {
    //TODO:dispatch an action to update the Reduc state tree (flats)
    this.props.setFlats();
  }

  render() {
    return (
      <div className="flat-list col-sm-7">
        {this.props.flats.map((flat) => {
          return <Flat key={flat.name} flat={flat} />;
        })}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setFlats: setFlats }, dispatch);
}

function mapReduxStateToProps(reduxState) {
  return {
    flats: reduxState.flats,
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(FlatList);
