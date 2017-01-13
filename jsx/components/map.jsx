'use strict';

import React, {PropTypes} from 'react';

import window from 'global/window';
const windowAlert = window.alert;

import autobind from 'autobind-decorator';
import {scaleOrdinal, schemeCategory10} from 'd3-scale';
import {rgb} from 'd3-color';

import MapGL, {SVGOverlay, CanvasOverlay} from 'react-map-gl';
import alphaify from 'alphaify';

const color = scaleOrdinal(schemeCategory10);

const token = "pk.eyJ1Ijoicnlhbmt1cnRlIiwiYSI6ImNpd3ExNWlmMzAwNnoyem84djN0djlnb3kifQ.6is1bfUHgRNMWhgzrcUh5w"

class MapComponent extends React.Component {

  static propTypes = {
    //width: PropTypes.number.isRequired,
    //height: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 37.7736092599127,
        longitude: -122.42312591099463,
        zoom: 12.011557070552028,
        startDragLngLat: null,
        isDragging: false
      },
      width: 100,
      height: 100,
      mapboxApiAccessToken: token
    };
  }

  @autobind componentDidMount() {
    this.setState({height:window.innerHeight});
    this.setState({width:window.innerWidth});
  }

  @autobind
  _onChangeViewport(viewport) {
    this.setState({viewport});
  }

  @autobind
  _redrawCanvasOverlay({ctx, width, height, project}) {
    ctx.clearRect(0, 0, width, height);
  }

  render() {
    const viewport = {
      ...this.state.viewport,
      ...this.props,
      ...this.state
    };
    return (
      <MapGL { ...viewport } onChangeViewport={ this._onChangeViewport }>
      </MapGL>
    );
  }
}

export default MapComponent;
