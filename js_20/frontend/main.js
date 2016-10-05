'use strict';

import 'normalize-css/normalize.css';
import './main.scss';
import './close-btn/index.scss';
import './flash';
import objectShower from './object-shower';
import data from './data.json';

$(() => {

  $('#flash').flash();

  $.flash('<h2><a href="https://lodash.com/" target="_blank">Lodash</a></h2>A modern JavaScript utility library delivering modularity, performance & extras. <h3>Why Lodash?</h3>Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.', 30);

  $('.input-data').append(objectShower('Input data', data));

  let skills, names, friends;

  skills = _.map(data, item => item.skills);
  skills = _.union.apply(null, skills);
  skills = _.sortBy(skills, item => item.toLowerCase());

  names = _.sortBy(data, item => item.friends.length);
  names = _.map(names, item => item.name);

  friends = _.map(data, item => _.map(item.friends, sub => sub.name));
  friends = _.union.apply(null, friends);

  $('.output-data')
    .append(objectShower('Unique skills, sorted alphabetically', skills))
    .append(objectShower('Names, sorted by number of friends', names))
    .append(objectShower('Unique friends', friends));

});
