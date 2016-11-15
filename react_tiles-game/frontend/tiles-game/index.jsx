/*
  Tiles Classic Game
  andy.pro
  https://github.com/andy-pro/Tiles-Game-React
  React
  04.11.2016
*/

'use strict';

import './index.scss';

/*
import React from 'react';
*/

import update from 'immutability-helper';

// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

import Logic from './logic';
import {Tile, setupEvent} from './tile';
import Controls from './controls';

let CSSTransition = React.addons.CSSTransitionGroup;

export default class TilesGame extends React.Component {

  constructor(props) {
    super(props);
    this.logic = new Logic({
      on_show: this.showTile.bind(this, 1),
      on_hide: this.showTile.bind(this, 0),
      on_miss: this.showTwix.bind(this, 'show', 0),
      on_hit:  this.showTwix.bind(this, 'exist', 0),
      on_gameover: this.gameOver
    });
    setupEvent();
    this.state = this.start();
  }

  start() {
    let level = +(this.level || this.props.level);
    if(level < 1 || level > presets.length) {
      throw "you choosed invalid level!";
    }
    let preset = presets[level-1];
    this.starttime = performance.now();
    this.level = level;
    this.cols = preset.cols;
    return {
      tiles: this.logic.start(preset.pairs, icon_classes),
      button: {caption: 'Restart', class: ''}
    }
  }

  restart = () => this.setState(this.start());

  changeLevel = e => this.restart(this.level = e.target.value);

  gameOver = () => this.setState({
    button: {
      caption: 'Congratulations! Your time: ' +
        Math.floor((performance.now() - this.starttime)/1000) + ' s',
      class: 'tiles__button--gameover'
    }
  });

  showTile(value, tile) {
    this.setState({
      tiles: update(this.state.tiles, {[tile.index]: {show: {$set: value}}})
    });
  }

  showTwix(action, value, tile1, tile2) {
    setTimeout(() => {
      action = {[action]: {$set: value}};
      this.setState({
        tiles: update(this.state.tiles, {[tile1.index]: action, [tile2.index]: action})
      });
    }, 500);
  }

  render() {
    let size = window.__is_touchpad__ ? 80 : 100,
        style = { width: (this.cols * size + 12) + "px" },
        onPick = this.logic.pick.bind(this.logic);
    return (
      <div className="tiles" style={style}>

        <div className="tiles__table">
          {this.state.tiles.map((tile, index) => {
            tile.index = index;
            return (
              <Tile
                key={index}
                tile={tile}
                onPick={onPick}
                size={size+'px'}
              />
            );
          })}
        </div>

        <Controls
          level={this.level}
          button={this.state.button}
          onChange={this.changeLevel}
          onClick={this.restart}
        />

      </div>
    );
  }

}

TilesGame.propTypes = { level: React.PropTypes.string };
TilesGame.defaultProps = { level: '2' };


const icon_classes = [
  // visit 'http://fontawesome.io/icons' for details
  "bullhorn", "telegram", "balance-scale", "coffee", "wifi", "github",
  "android", "html5", "bath", "thumbs-o-up", "bug", "child",
  "cutlery", "codepen", "thumbs-o-down", "scissors", "bicycle", "smile-o",
  "usb", "anchor", "bluetooth", "youtube-square", "envira", "bank",
  "car", "binoculars", "camera-retro", "firefox", "futbol-o", "cogs"
];

const presets = [
  {pairs: 6,  cols: 4}, // beginner, level 1
  {pairs: 8,  cols: 4}, // medium, level 2
  {pairs: 10, cols: 5}, // expert, level 3
  {pairs: 15, cols: 6}  // crazy, level 4
];
