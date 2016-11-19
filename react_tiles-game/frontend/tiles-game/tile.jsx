'use strict';

let CSSTransition = React.addons.CSSTransitionGroup;

import app from './index';

export default class Tile extends React.Component {

  constructor(props) {
    super(props);
    this.attrs = {
      /* for touchscreen: 'onTouchStart', for desktop: 'onMouseDown' */
      [app.pickEvent]: this.pick
    };
    // console.log(this.props.tile.icon_class);
    this.style = {
      width: this.props.size,
      height: this.props.size
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.tile != this.props.tile;
  }

  pick = () => {
    if (!this.props.tile.blocked) {
      this.props.onPick(this.props.tile);
    }
  }

  render() {
    // console.log('render tile:', this.props.tile.icon_class, this.props.removed);
    // console.log('render tile:', JSON.stringify(this.props.tile));
    return (
      <div className="tiles__nest" style={this.style}>
        {cssTransition("tile", 500,
          this.props.tile.exist &&
          <div className="tiles__item" {...this.attrs}>
            {cssTransition("tile", 500,
              this.props.tile.show &&
              <i className={"fa fa-5x fa-" + this.props.tile.icon_class}></i>
            )}
          </div>
        )}
      </div>
    );
  }

}

function cssTransition(name, to, content) {
  return (
    <CSSTransition transitionName={name} transitionEnterTimeout={to} transitionLeaveTimeout={to}>
      { content }
    </CSSTransition>
  );
}
