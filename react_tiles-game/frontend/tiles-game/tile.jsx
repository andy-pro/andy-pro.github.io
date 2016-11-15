'use strict';

let CSSTransition = React.addons.CSSTransitionGroup;
let event, attrs = {};

function setupEvent() {
  // onMouseDown onClick onTouchStart
  event = window.__is_touchpad__ ? 'onTouchStart' : 'onMouseDown';
  // alert(event);
}

function Tile({tile, onPick, size}) {
  attrs[event] = () => onPick(tile);
  var style = {
    width: size,
    height: size
  };
  return (
    <div className="tiles__nest" style={style}>
      {cssTransition("tile", 500,
        tile.exist &&
        <div className="tiles__item" {...attrs}>
          {cssTransition("tile", 500,
            tile.show &&
            <i className={"fa fa-5x fa-" + tile.icon_class}></i>
          )}
        </div>
      )}
    </div>
  );
}

function cssTransition(name, to, content) {
  return window.__is_touchpad__ ?
  (
    content || ''
  ) : (
    <CSSTransition transitionName={name} transitionEnterTimeout={to} transitionLeaveTimeout={to}>
      { content }
    </CSSTransition>
  );
}

export {Tile, setupEvent};
