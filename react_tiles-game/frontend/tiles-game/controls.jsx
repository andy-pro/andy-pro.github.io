'use strict';

export default function Controls({level, button, onChange, onClick}) {

  return (
    <div className="tiles__controls center">
      <div>
        Level:
        <select className="tiles__select" value={level} onChange={onChange}>
          <option value="1">Beginner</option>
          <option value="2">Medium</option>
          <option value="3">Expert</option>
          <option value="4">Crazy</option>
        </select>
      </div>
      <div>
        <button className={"tiles__button " + button.class} onClick={onClick}>
          {button.caption}
        </button>
      </div>
    </div>
  );

}
