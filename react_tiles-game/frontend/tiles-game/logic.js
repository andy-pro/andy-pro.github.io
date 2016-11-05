/*
  Tiles Classic Game
  andy.pro
  https://github.com/andy-pro/Tiles-Game-React
  10.07.2016
*/

'use strict';

export default class TilesGameLogic {

  constructor(opts) {
    let dummy = () => {};
    // events binding
    [ 'on_show',
      'on_hide',
      'on_hit',
      'on_miss',
      'on_gameover' ]
    .forEach(
      opt => { this[opt] = opts[opt] || dummy }
    );
  }

  pick(latter) {
    // vars 'latter' and 'former' match the current and previous tiles
    if(NODE_ENV == 'development') {
      console.log(latter);
    }
    let former = this.former;
    if(former === null) { // first click for pair
      this.former = latter;
      this.on_show(latter);
    } else { // second click for pair
      if(former.id == latter.id) { // need to close the tile, it is the same!
        this.on_hide(latter);
      } else { // different tiles
        this.on_show(latter);
        if(former.icon == latter.icon) { // the contents of the tiles is same, both should disappear
          this.on_hit(former, latter);
          if(!--this.count) {
            this.gameover = true;
            this.on_gameover(Math.floor((performance.now() - this.starttime)/1000));
          }
        } else{ // different contents, both should close
          this.on_miss(former, latter);
        }
      }
      // after second click we must reset previous tile
      this.former = null;
    }
  }

  start(num_pairs, num_icons) {

    this.count = num_pairs;
    this.former = null;
    this.gameover = false;

    let icons = [],
        tiles = [];

    // get randomized list of indexes
    for(let i = 0, l = num_icons; i < l; i++) {
      icons[i] = Math.floor(i % num_icons);
    }
    shuffle(icons);

    for(let i = 0, l = num_pairs * 2; i < l; i++) {
      tiles.push({
        // show: true, // uncomment this for God-mode :)
        id: i,
        icon: icons[i % num_pairs]
      });
    }

    shuffle(tiles); // comment this for half-God-mode :)

    this.starttime = performance.now();

    return tiles;

    // Shuffles an array in-place, source: http://stackoverflow.com/a/12646864
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }

  }

}
