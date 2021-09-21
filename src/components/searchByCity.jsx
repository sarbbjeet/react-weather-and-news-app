import React from "react";
import Form from "./common/form.jsx";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

export default class SearchByCity extends Form {
  componentDidMount() {}
  state = {
    city: "",
  };
  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((Latlang) => {
        this.setState({ city: address });
        setTimeout(
          () =>
            this.props.history.push({
              pathname: "/weather/dashboard",
              state: { Latlang },
            }),
          500
        );
      })
      .catch((error) => console.error("Error", error));
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.city}
        onChange={(addr) => this.setState({ city: addr })}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="mt-3" style={{ width: "300px" }}>
            <input
              {...getInputProps({
                placeholder: "Search Places ...",
                className: "location-search-input",
              })}
              style={{ width: "100%" }}
            />

            <div
              style={{ width: "100%" }}
              className="autocomplete-dropdown-container"
            >
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? {
                      backgroundColor: "#000000",
                      color: "white",
                      cursor: "pointer",
                    }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style: { ...style, borderBottom: "2px solid white" },
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      //<div style={{ width: "300px" }} className="mt-3">
      //   <input style={{ width: "100%" }} type="text" />
      //   <ul
      //     className="mt-1"
      //     style={{
      //       zIndex: "20",
      //       // minHeight: "0px",
      //       maxHeight: "100px",
      //       background: "red",
      //       padding: "0px",
      //       width: "100%",
      //       listStyle: "none",
      //       overflowY: "scroll",
      //     }}
      //   >
      //     <li
      //       style={{
      //         borderBottom: "2px solid white",
      //         textDecoration: "none",
      //         padding: "5px",
      //       }}
      //     >
      //       h1
      //     </li>
      //   </ul>
      // </div>
    );
  }
}
