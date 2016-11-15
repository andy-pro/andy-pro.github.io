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
    // if(NODE_ENV == 'development') {
    //   console.log(latter, this);
    // }
    let former = this.former;
    if(former === null) { // first click for pair
      this.former = latter;
      this.on_show(latter);
    } else { // second click for pair
      if(former.id === latter.id) { // need to close the tile, it is the same!
        this.on_hide(latter);
      } else { // different tiles
        this.on_show(latter);
        if(former.icon_id === latter.icon_id) { // the contents of the tiles is same, both should disappear
          this.on_hit(former, latter);
          if(!--this.count) {
            this.gameover = true;
            this.on_gameover();
          }
        } else{ // different contents, both should close
          this.on_miss(former, latter);
        }
      }
      // after second click we must reset previous tile
      this.former = null;
    }
  }

  start(num_pairs, icon_classes) {

    this.count = num_pairs;
    this.former = null;
    this.gameover = false;

    let icons = [],
        tiles = [],
        num_icons = icon_classes.length;

    // get randomized list of indexes
    for(let i = 0; i < num_icons; i++) {
      icons[i] = Math.floor(i % num_icons);
    }
    shuffle(icons);

    for(let i = 0, l = num_pairs * 2; i < l; i++) {
      let icon_id = icons[i % num_pairs];
      tiles.push({
        // show: true, // uncomment this for God-mode :)
        id: i,
        icon_id,
        icon_class: icon_classes[icon_id],
        exist: true
      });
    }

    shuffle(tiles); // comment this for half-God-mode :)

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
