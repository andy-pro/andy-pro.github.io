'use strict';

export default class Controls extends React.Component {

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.level !== this.props.level ||
      nextProps.button !== this.props.button
    );
  }

  render() {
    // console.log('controls render');
    return (
      <div className="tiles__controls center">
        <div>
          Level:
          <select className="tiles__select" value={this.props.level} onChange={this.props.onChange}>
            <option value="1">Beginner</option>
            <option value="2">Medium</option>
            <option value="3">Expert</option>
            <option value="4">Crazy</option>
          </select>
        </div>
        <div>
          <button className={"tiles__button " + this.props.button.class} onClick={this.props.onClick}>
            {this.props.button.caption}
          </button>
        </div>
      </div>
    );
  }

}
