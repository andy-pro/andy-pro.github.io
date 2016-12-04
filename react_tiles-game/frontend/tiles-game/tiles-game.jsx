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

import app from './index';
import Logic from './logic';
import Tile from './tile';
import Controls from './controls';

export default class TilesGame extends React.Component {

  static propTypes = {
    level: React.PropTypes.string
  };

  static defaultProps = {
    level: '2'
  };

  constructor(props) {
    super(props);
    this.logic = new Logic({
      // on_show: this.setForTile.bind(this, 1),
      // on_hide: this.setForTile.bind(this, 0),
      on_show: this.updateTiles.bind(this, 'show', 1),
      on_hide: this.updateTiles.bind(this, 'show', 0),
      on_miss: this.updateTilesDelay.bind(this, 'show', 0),
      on_hit:  this.updateTilesDelay.bind(this, 'exist', 0),
      on_gameover: this.gameOver
    });
    this.onPick = this.logic.pick.bind(this.logic);
    this.tileSize = app.isTouch ? 80 : 100;
    this.state = this.start();
  }

  start() {
    let level = +(this.level || this.props.level);
    if(level < 1 || level > app.presets.length) {
      throw "you choosed invalid level!";
    }
    let preset = app.presets[level-1];
    this.starttime = performance.now();
    this.level = level;
    this.cols = preset.cols;
    this.style = {
      width: (this.cols * this.tileSize + 12) + "px"
    };
    return {
      tiles: this.logic.start(preset.pairs, app.iconClasses),
      button: {caption: 'Restart', class: ''}
    }
  }

  restart = () => this.setState(this.start());
  // restart = () => {
  //   this.state = this.start();
  //   this.forceUpdate();
  // }

  changeLevel = e => this.restart(this.level = e.target.value);

  gameOver = () => this.setState({
    button: {
      caption: 'Congratulations! Your time: ' +
        Math.floor((performance.now() - this.starttime)/1000) + ' s',
      class: 'tiles__button--gameover'
    }
  });

  updateTilesDelay(action, value, tile1, tile2) {
    /* manipulation of the properties 'show', 'exist', 'blocked' */
    // console.log(JSON.stringify(arguments));
    if (action === 'exist' && !value) {
      this.updateTiles('blocked', 1, [tile1, tile2]);
    }
    setTimeout(
      () => this.updateTiles(action, value, [tile1, tile2]),
      500
    );
  }

  updateTiles(key, value, tiles) {
    if (!(tiles instanceof Array)) {
      tiles = [tiles];
    }
    this.setState(prevState => ({
      tiles: update(
        prevState.tiles,
        // tiles.reduce((state, tile) => Object.assign(state, {[tile.index]: {[key]: {$set: value}}}), {})
        tiles.reduce((state, tile) => (state[tile.index] = {[key]: {$set: value}}, state), {})
      )
    }));
  }

  render() {
    // console.log('render all tiles');
    return (
      <div className="tiles" style={this.style}>
        <div className="tiles__table">
          {this.state.tiles.map((tile, index) => {
            tile.index = index; // tiles-array index for immutability-helper
            return (
              <Tile
                key={index}
                tile={tile}
                onPick={this.onPick}
                size={this.tileSize+'px'}
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
