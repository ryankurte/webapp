'use strict';

import React, {PropTypes} from 'react';

import window from 'global/window';
const windowAlert = window.alert;

import Immutable from 'immutable';
import autobind from 'autobind-decorator';
import {scaleOrdinal, schemeCategory10} from 'd3-scale';
import {rgb} from 'd3-color';

import MapGL, {SVGOverlay, CanvasOverlay} from 'react-map-gl';
import alphaify from 'alphaify';

const color = scaleOrdinal(schemeCategory10);

import config from '../../config.json'

const initialPoints = [
  {location: [-122.39508481737994, 37.79450507471435], id: 0},
  {location: [-122.39750244137034, 37.79227619464379], id: 1},
  {location: [-122.4013303460217, 37.789251178427776], id: 2},
  {location: [-122.40475531334141, 37.786862920252986], id: 3},
  {location: [-122.40505751634022, 37.78861431712821], id: 4},
  {location: [-122.40556118800487, 37.79060449046487], id: 5},
  {location: [-122.4088854209916, 37.790047247333675], id: 6},
  {location: [-122.4091876239904, 37.79275381746233], id: 7},
  {location: [-122.40989276432093, 37.795619489534374], id: 8},
  {location: [-122.41049717031848, 37.79792786675678], id: 9},
  {location: [-122.4109001076502, 37.80031576728801], id: 10},
  {location: [-122.41916032295062, 37.79920142331301], id: 11}
];

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
      mapboxApiAccessToken: config.MAPBOX_TOKEN,
      mapStyle: "mapbox://styles/mapbox/outdoors-v9",
      points: Immutable.fromJS(initialPoints)
    }
  }

  @autobind componentDidMount() {
    this.setState({height:window.innerHeight});
    this.setState({width:window.innerWidth});
    window.addEventListener('resize', this._onWindowResize);
  }

  @autobind _onWindowResize() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  @autobind
  _onChangeViewport(viewport) {
    this.setState({viewport});
  }

  @autobind
  _redrawCanvasOverlay({ctx, width, height, project}) {
    ctx.clearRect(0, 0, width, height);
  }

  @autobind
  _onClick(coordinates, pos) {
    console.log("Clicked: " + JSON.stringify(pos))
    windowAlert(`${coordinates}\n${JSON.stringify(pos)}`);
  }

  @autobind _redrawSVGOverlay(opt) {
    if (!this.state.points.size) {
      return null;
    }
    const pointString = this.state.points.map(
      point => opt.project(point.get('location').toArray())
    ).join('L');

    return (
      <path
        style={ {stroke: '#1FBAD6', strokeWidth: 2, fill: 'none'} }
        d={ `M${pointString}` }/>
    );
  }

  _renderOverlays(viewport) {
    return [
      <SVGOverlay key="svg-overlay" { ...viewport }
        redraw={ this._redrawSVGOverlay }/>
    ];
  }

  render() {
    const viewport = {
      ...this.state.viewport,
      ...this.props,
      ...this.state
    };
    return (
      <MapGL { ...viewport } 
        onChangeViewport={ this._onChangeViewport }
        onClick={ this._onClick }>
          { this._renderOverlays(viewport) }
      </MapGL>
    );
  }
}

export default MapComponent;
