'use strict';

// export {objectsToArrays, calcResult, diffCount, shuffleArray};

module.exports = {
  objectsToArrays: objectsToArrays,
  calcResult: calcResult,
  diffCount: diffCount,
  shuffleArray: shuffleArray
};

function objectsToArrays(objects) {
  /* convert [objects] to [arrays]
    принимает данные формы в формате jquery serializeArray();
    возвращает:
    [
      [ответы на вопрос №0],
      [ответы на вопрос №1],
      [ответы на вопрос №2],
      ...
    ]
    примеры:
    [{name: "0q_2a", value: "on"}] => [[2]]
    [{name: "2q_3a", value: "on"}] => [undefined, undefined, [3]]
    [{name: "1q_1a", value: "on"}, {name: "1q_3a", value: "on"}] => [undefined, [1,3]]
    [{name: "0q_1a", value: "on"}, {name: "3q_3a", value: "on"}] => [[1], undefined, undefined, [3]]
  */
  let arrays = [];
  objects.forEach(item => {
    item = item.name.split('_');
    let q = parseInt(item[0]); // номер вопроса
    arrays[q] = arrays[q] || [];
    arrays[q].push(parseInt(item[1])); // номер ответа;
  });
  return arrays;
}

function calcResult(test_data, answers) {
  /* все вопросы имеют одинаковый вес из 100% общего результата,
    ответы также имеют одинаковый вес из 100% одного вопроса,
    при этом правильный ответ добавляет свой вес, неправильный - отнимает */
  let result = 0;
  test_data.forEach((item, index) => {
    // let dif = _.xor(item.right, answers[index]).length,
    let dif = diffCount(item.right, answers[index]),
        right = item.right.length;
    result += Math.max((right-dif) / right, 0);
  });
  return +((result / test_data.length * 100).toFixed(2).replace(/[.,]00$/, ""));
}

// function diffCount(a1=[], a2=[]) { // error in jasmine
function diffCount(a1, a2) {
  /* вычисление количества отличий в двух массивах;
    в каждом массиве-аргументе не должно быть повторяющихся элементов
    примеры:
    ([1,2,3], [1,2,3])) => отличий: 0
    ([0,4], [4,0])) => отличий: 0
    ([3,4,0], [4,3,0,1])) => отличий: 1
  */
  a1 = a1 || [];
  a2 = a2 || [];
  let len1 = a1.length,
      len2 = a2.length,
      result = len1 + len2;
  for(let i = 0; i < len1; i++)
    for(let j = 0; j < len2; j++)
      if (a1[i] === a2[j]) {
        result -= 2;
        break;
      }
  return result;
}

// Shuffles an array in-place.
// Source: http://stackoverflow.com/a/12646864
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
