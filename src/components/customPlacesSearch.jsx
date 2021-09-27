/* google places suggestion using custom google places library
 */

import React from "react";
import CustomGooglePlacesApi from "../utils/customGooglePlacesApi";

export default class CustomPlacesSearch extends CustomGooglePlacesApi {
  handleSelect = async (address) => {
    try {
      const result = await this.geocodeByAddress(address);
      const latlng = await {
        lat: result[0].geometry.location.lat(),
        lng: result[0].geometry.location.lng(),
      };

      setTimeout(
        () =>
          this.props.history.push({
            pathname: "/weather/dashboard",
            state: { Latlang: latlng, address },
          }),
        500
      );

      //console.log(latlng);
    } catch (ex) {
      window.location = "/weather"; //reload page
      console.log("outpur", ex);
    }
  };

  render() {
    return (
      <div className="mt-3" style={{ maxWidth: "250px" }}>
        <input
          className="form-control"
          {...this.inputProps({ placeholder: "enter city name" })}
          style={{ width: "100%" }}
        />
        <div
          className="mt-2"
          style={{
            borderRadius: "10px",
            backgroundColor: "#ffffff",
            width: "100%",
            boxShadow: "10px 10px 20px grey",
          }}
        >
          {this.state.error && <div>{this.state.error}</div>}
          {this.state.suggestions &&
            this.state.suggestions.map((suggestion) => {
              const style = suggestion.active
                ? {
                    backgroundColor: "#000000",
                    color: "white",
                    cursor: "pointer",
                  }
                : {
                    backgroundColor: "#ffffff",
                    cursor: "pointer",
                  };
              return (
                <div
                  {...this.getSuggestionProps(suggestion, {
                    ...style,
                    borderBottom: "1px solid gray",
                  })}
                >
                  {/* {this.addressByLatlng({ lat: 1.34, lon: -3.24 })} */}
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
