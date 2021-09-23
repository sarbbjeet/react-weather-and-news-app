import { Component } from "react";

export default class CustomGooglePlacesApi extends Component {
  state = {
    suggestions: [],
    loading: false,
    value: "", //user search input
  };

  geocodeByAddress = async (address) => {
    const geocoder = new window.google.maps.Geocoder();
    const OK = window.google.maps.GeocoderStatus.OK;
    try {
      let result = null;
      await geocoder.geocode({ address }, (results, status) =>
        status !== OK ? (result = null) : (result = results)
      );
      return result;
    } catch (ex) {
      return null;
    }
  };

  //handle input props and style
  inputProps = (options = {}) => ({
    ...options,
    text: "text",
    value: this.state.value,
    onChange: ({ target: input }) => {
      this.setState({ value: input.value });
      if (!input.value.length) return this.setState({ suggestions: [] }); //clear suggestions
      this.fetchPredictions(input.value);
    },
  });

  //suggestion list style and mouse control
  //change the style of this list-items based upon mouse over, out etc.
  getSuggestionProps = (suggestion, style) => {
    const active = (state) => {
      this.setState({
        suggestions: this.state.suggestions.map((s) =>
          s.index === suggestion.index ? { ...s, active: state } : { ...s }
        ),
      });
      // const suggestions = [...this.state.suggestions];
      // suggestion.active = state;
      // suggestion[suggestion.index] = suggestion;
      // this.setState({ suggestions });
    };
    return {
      style: { ...style },
      key: suggestion.index,
      onMouseOver: () => active(true),
      onMouseOut: () => active(false),
      onClick: () => {
        this.setState({ value: suggestion.description });
        this.handleSelect(suggestion.description); //handle click item
      },
    };
  };

  autocompleteCallback = (predictions, status) => {
    if (status !== this.autocompleteOK) {
      this.props.onError(status);
      return;
    }
    this.setState({
      suggestions: predictions.map((p, i) => ({
        id: p.id,
        description: p.description,
        index: i,
        placeId: p.place_id,
      })),
    });
  };

  init = () => {
    if (!window.google) {
      throw new Error(
        "[react-places-autocomplete]: Google Maps JavaScript API library must be loaded. See: https://github.com/kenny-hibino/react-places-autocomplete#load-google-library"
      );
    }

    if (!window.google.maps.places) {
      throw new Error(
        "[react-places-autocomplete]: Google Maps Places library must be loaded. Please add `libraries=places` to the src URL. See: https://github.com/kenny-hibino/react-places-autocomplete#load-google-library"
      );
    }
    this.autocompleteService =
      new window.google.maps.places.AutocompleteService();
    this.autocompleteOK = window.google.maps.places.PlacesServiceStatus.OK;
    this.setState((state) => {
      if (state.ready) {
        return null;
      } else {
        return { ready: true };
      }
    });
  };

  async componentDidMount() {
    await this.init(); //initialize google api
    //this.fetchPredictions("midd");
  }

  fetchPredictions = (value) => {
    if (value.length) {
      this.setState({ loading: true });
      this.autocompleteService.getPlacePredictions(
        {
          ...this.props.searchOptions,
          input: value,
        },
        this.autocompleteCallback //callback
      );
    }
  };

  //   render() {
  //     return <div></div>;
  //   }
}

CustomGooglePlacesApi.defaultProps = {
  onError: (status) =>
    console.error(
      "[react-places-autocomplete]: error happened when fetching data from Google Maps API.\nPlease check the docs here (https://developers.google.com/maps/documentation/javascript/places#place_details_responses)\nStatus: ",
      status
    ),
  searchOptions: {},
};
