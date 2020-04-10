import React, { Component } from "react";

class Flat extends Component {
  render() {
    const style = {
      backgroundImage: `${this.props.flat.imageUrl}`,
    };

    return (
      <div>
        <div className="card-trip" style={style}>
          <div className="card-trip-infos">
            <div>
              <h2>{this.props.flat.name}</h2>
              <p>
                {this.props.flat.price} {this.props.flat.priceCurrency}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Flat;
