import { getFrequencyCounter, findIntersection} from '../helpers/helpers';


describe("get frequency counter", function () {
  test("works", function () {
    const result = getFrequencyCounter([
      { "id": 1, "title": "t1" },
      { "id": 2, "title":   "t2" },
      { "id": 3, "title": "t1" },
    ], "title", "id");
    expect(result).toEqual(
      {
        "t1": [1, 3],
        "t2": [2]
      }
    );
  });
});


describe("get intersection of 2 arrays", function () {
  test("return common items in 2 arrays if exist", function () {
    const result = findIntersection(
      [1,2,3,4], [2,4,6]
    );
    expect(result).toEqual(
      [2,4]
    );
  });

  test("return [] no common items in 2 arrays", function () {
    const result = findIntersection(
      [1, 2, 3, 4], [7,8]
    );
    expect(result).toEqual(
      []
    );
  });
});