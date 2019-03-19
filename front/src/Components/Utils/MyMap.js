import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Grid from "@material-ui/core/Grid";

import markers from "./markers.js"

export class MyMap extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    markers: markers
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    let markersInfo = this.state.markers

    const style = {
      width: "85vw",
      height: "75vh"
    };

    let markers = markersInfo.map((item, i) => {
      let lat = item.lat;
      let lng = item.lng;
      return (
        <Marker
          onClick={this.onMarkerClick}
          key={i}
          title={item.title}
          position={{ lat: lat, lng: lng }}
          time={item.time}
        />
      );
    });

    if (!this.props.loaded) {
      return <div>Loading...</div>;
    }

    return (
      <Grid container justify="center">
        <Grid item>
          <div style={style}>
            <Map
              google={this.props.google}
              style={style}
              initialCenter={{ lat: 43.215988, lng: 1.84313 }}
              zoom={11}
              onClick={this.onMapClicked}
            >
              {markers}
              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
              >
                <div>
                  <h4>{this.state.selectedPlace.title}</h4>
                  <p>{this.state.selectedPlace.time}</p>
                </div>
              </InfoWindow>
            </Map>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MyMap);
