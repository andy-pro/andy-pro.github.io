/*
  Tiles Classic Game
  andy.pro
  https://github.com/andy-pro/Tiles-Game-React
  React
  04.11.2016
*/

'use strict';

import './index.scss';

import Logic from './logic';
/*
import React from 'react';
import CSSTransition from 'react-addons-css-transition-group';
*/
let CSSTransition = React.addons.CSSTransitionGroup;

export default class TilesGame extends React.Component {

  constructor(props) {

    super(props);

    this.icons = [
      // visit 'http://fontawesome.io/icons' for details
      "bullhorn", "telegram", "balance-scale", "coffee", "wifi", "github",
      "android", "html5", "bath", "thumbs-o-up", "bug", "child",
      "cutlery", "codepen", "thumbs-o-down", "scissors", "bicycle", "smile-o",
      "usb", "anchor", "bluetooth", "youtube-square", "envira", "bank",
      "car", "binoculars", "camera-retro", "firefox", "futbol-o", "cogs"
    ];

    this.presets = [
      {pairs: 6,  cols: 4}, // beginner, level 1
      {pairs: 8,  cols: 4}, // medium, level 2
      {pairs: 10, cols: 5}, // expert, level 3
      {pairs: 15, cols: 6}  // crazy, level 4
    ];

    // Bind instance methods / callbacks to the instance
    // http://www.newmediacampaigns.com/blog/refactoring-react-components-to-es6-classes
    this.restart = this.restart.bind(this);
    this.changeLevel = this.changeLevel.bind(this);
    this.logic = new Logic({
      on_show: this.showTile.bind(this),
      on_hide: this.hideTile.bind(this),
      on_miss: this.hideTwix.bind(this),
      on_hit: this.removeTwix.bind(this),
      on_gameover: this.gameOver.bind(this)
    });

    this.state = this.start();

  }

  start() {
    const level = +(this.state ? this.state.level : this.props.level);
    if(level < 1 || level > this.presets.length) {
      throw "you choosed invalid level!";
    }
    let preset = this.presets[level-1];
    return {
      tiles: this.logic.start(preset.pairs, this.icons.length),
      button: {caption: 'Restart', class: ''},
      time: '',
      level,
      cols: preset.cols
    }
  }

  restart() {
    this.setState(this.start());
  }

  changeLevel(event) {
    this.setState({
      level: event.target.value
    });
  }

  gameOver(time) {
    this.setState({
      button: {caption: 'Congratulations!', class: 'tiles__button--gameover'},
      time: 'Your time: ' + time + ' s'
    });
  }

  showTile(tile) {
    tile.show = true;
    this.forceUpdate();
  }

  hideTile(tile) {
    tile.show = false;
    this.forceUpdate();
  }

  removeTwix(tile1, tile2) {
    setTimeout( () => {
      tile1.remove = true;
      tile2.remove = true;
      this.forceUpdate();
    }, 500);
  }

  hideTwix(tile1, tile2) {
    setTimeout( () => {
      tile1.show = false;
      tile2.show = false;
      this.forceUpdate();
    }, 500);
  }

  render() {
    let icons = this.icons,
        pick = this.logic.pick,
        logic = this.logic,
        width = { width: (this.state.cols * 100 + 12) + "px" };
    return (
      <div className="tiles" style={width}>

        <div className="tiles__table">
          { this.state.tiles.map( tile => {
            return (
              <div className="tiles__nest" key={tile.id}>
                {
                  this.cssTransition("tile", 500, tile.remove ? '' :
                  <div className="tiles__item"
                  data-icon={tile.icon}
                  onMouseDown={pick.bind(logic, tile)}>
                    {
                      this.cssTransition("tile", 500, tile.show ?
                      <i className={"fa fa-5x fa-" + icons[tile.icon]}></i> : '')
                    }
                  </div>)
                }
              </div>
            );
          }) }
        </div>

        <div className="tiles__controls center">
          <div>
            Level:
            <select className="tiles__select" value={this.state.level} onChange={this.changeLevel}>
              <option value="1">Beginner</option>
              <option value="2">Medium</option>
              <option value="3">Expert</option>
              <option value="4">Crazy</option>
            </select>
          </div>
          <div>
            <button className={"tiles__button " + this.state.button.class} onClick={this.restart}>
              {this.state.button.caption} {this.state.time}
            </button>
          </div>
        </div>

      </div>
    );
  }

  cssTransition(name, to, content) {
    return (
      <CSSTransition transitionName={name} transitionEnterTimeout={to} transitionLeaveTimeout={to}>
        { content }
      </CSSTransition>
    );
  }

}

TilesGame.propTypes = { level: React.PropTypes.string };
TilesGame.defaultProps = { level: '2' };
