describe("Test List, logic part:", function() {

  var logic = require('../../frontend/test-list/logic');

  describe("convert array of objects to array of arrays:", function() {

    var objectsToArrays = logic.objectsToArrays;

    // format the input data corresponds jquery serializeArray();

    it("test 1", function() {
      var data = [{name: "0q_2a", value: "on"}];
      expect(objectsToArrays(data)).toEqual( [ [2] ] );
    });
    it("test 2", function() {
      var data = [{name: "2q_3a", value: "on"}];
      expect(objectsToArrays(data)).toEqual( [undefined, undefined, [3]] );
    });
    it("test 3", function() {
      var data = [{name: "1q_1a", value: "on"}, {name: "1q_3a", value: "on"}];
      expect(objectsToArrays(data)).toEqual( [undefined, [1,3]] );
    });
    it("test 4", function() {
      var data = [{name: "0q_1a", value: "on"}, {name: "3q_3a", value: "on"}];
      expect(objectsToArrays(data)).toEqual( [[1], undefined, undefined, [3]]  );
    });

  });

  //=======================================================================

  describe("counting the number of differences between two arrays:", function() {

    var diffCount = logic.diffCount;

    it("test 1", function() {
      expect(diffCount()).toEqual( 0 );
    });
    it("test 2", function() {
      expect(diffCount(undefined)).toEqual( 0 );
    });
    it("test 3", function() {
      expect(diffCount(undefined, undefined)).toEqual( 0 );
    });
    it("test 4", function() {
      expect(diffCount([], undefined)).toEqual( 0 );
    });
    it("test 6", function() {
      expect(diffCount([])).toEqual( 0 );
    });
    it("test 7", function() {
      expect(diffCount([], [])).toEqual( 0 );
    });
    it("test 5", function() {
      expect(diffCount([1], undefined)).toEqual( 1 );
    });
    it("test 8", function() {
      expect(diffCount([1,2,3], [1,2,3])).toEqual( 0 );
    });
    it("test 9", function() {
      expect(diffCount([1,2,3], [])).toEqual( 3 );
    });
    it("test 10", function() {
      expect(diffCount([], [1,2,3,4])).toEqual( 4 );
    });
    it("test 11", function() {
      expect(diffCount([0,4], [4,0])).toEqual( 0 );
    });
    it("test 12", function() {
      expect(diffCount([3,4,0], [4,3,0,1])).toEqual( 1 );
    });
    it("test 13", function() {
      expect(diffCount([1,2], [1,2,3,4])).toEqual( 2 );
    });
    it("test 14", function() {
      expect(diffCount([2,1,4], [4,2])).toEqual( 1 );
    });
    it("test 15", function() {
      expect(diffCount([5,6,4,1], [1,2,3,4])).toEqual( 4 );
    });
    it("test 16", function() {
      expect(diffCount([1,2,3,4], [11,12,13,14])).toEqual( 8 );
    });

  });

  //=======================================================================

  describe("calculation test result:", function() {

    // var test_data = require('../frontend/test-data.json');

    var test_data = [
      {right: [1, 2, 4]},
      {right: [2]},
      {right: [2]},
      {right: [2, 3]}
    ];

    var answers;
    beforeEach(function() {
      answers = [
        [1, 2, 4],
        [2],
        [2],
        [2, 3]
      ];
    });

    var calcResult = logic.calcResult;

    it("test 1", function() {
      expect(calcResult(test_data, answers)).toEqual( 100 );
    });

    it("test 2", function() {
      answers[1] = [];
      expect(calcResult(test_data, answers)).toEqual( 75 );
    });

    it("test 3", function() {
      answers[1] = [];
      answers[2] = [];
      expect(calcResult(test_data, answers)).toEqual( 50 );
    });

    it("test 4", function() {
      answers[1] = [];
      answers[2] = [];
      answers[3] = [];
      expect(calcResult(test_data, answers)).toEqual( 25 );
    });

    it("test 5", function() {
      answers = [];
      expect(calcResult(test_data, answers)).toEqual( 0 );
    });

    it("test 6", function() {
      answers = [[1],,,]; // 1/3 from 25
      expect(calcResult(test_data, answers)).toEqual( 8.33 );
    });

    it("test 7", function() {
      answers = [[1, 2],,,]; // 2/3 from 25
      expect(calcResult(test_data, answers)).toEqual( 16.67 );
    });

    it("test 8", function() {
      answers = [,,,[2]]; // 1/2 from 25
      expect(calcResult(test_data, answers)).toEqual( 12.5 );
    });

  });

  //=======================================================================

  describe("shuffle array:", function() {

    var shuffleArray = logic.shuffleArray;

    var a1, a2;
    beforeEach(function() {
      a1 = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
      a2 = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    });

    it("test 1 - source arrays are equal", function() {
      expect( a1 ).toEqual( a2 );
    });
    it("test 2 - equal length after shuffle", function() {
      expect(shuffleArray(a1).length).toEqual( a2.length );
    });
    // после перемешивания, с большой долей вероятности,
    // массивы не должны быть идентичны
    it("test 3 - after shuffle: not equal", function() {
      expect(shuffleArray(a1)).not.toEqual( a2 );
    });
    // и повторим несколько раз
    it("test 3.1 - after shuffle: not equal", function() {
      expect(shuffleArray(a1)).not.toEqual( a2 );
    });
    it("test 3.2 - after shuffle: not equal", function() {
      expect(shuffleArray(a1)).not.toEqual( a2 );
    });
    it("test 3.3 - after shuffle: not equal", function() {
      expect(shuffleArray(a1)).not.toEqual( a2 );
    });
    it("test 4 - should shuffle the original array", function() {
      expect(shuffleArray(a1)).toBe( a1 );
    });

  });

});
