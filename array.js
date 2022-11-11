const arr1 = new Array();
const arr2 = [];
const arr3 = [1, 2, 3, 4, 5];
const arr4 = new Array(5);
const arr5 = new Array(5).fill(5);
const arr6 = Array.from(Array(5), function (value, index) {
  return index + 1;
});
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(arr6);

/**
 * length를 변경하는 건 사용하지 않는 걸 권장함
 */
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.length);
// length를 줄이면 뒤의 요소가 삭제됨
// arr.length = 3;
// length를 늘리면 빈 값으로 요소가 추가됨
// arr.length = 10;

// join
console.log(arr.join(', '));

// reverse
console.log(arr.reverse());
console.log(arr);

// concat
const arr7 = [1, 2, 3, 4, 5, 6, 7];
const arr8 = [8, 9];
console.log(arr7.concat(arr8));

// push, pop
arr.push(7);
arr.push(7, 8, 9);
console.log(arr);
arr.pop(); // 9 제거
arr.pop(); // 8 제거
console.log(arr.pop()); // pop은 제거한 값을 반환함
console.log(arr);

// shift, unshift
arr.shift();
arr.shift();
console.log(arr);
arr.unshift(10);
console.log(arr);

// slice : 끝 요소의 바로 직전까지 짤림, 원본 배열 변경 안됨
console.log(arr.slice(2, 4));
console.log(arr);

// splice
console.log(arr.splice(2, 2));
console.log(arr);

/**
 * 배열 순회
 */
const arr9 = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < 6; i += 1) {
  console.log(arr9[i]);
}

// for of
for (const item of arr9) {
  console.log(item);
}

/**
 * 배열은 객체와 타입이 동일하기 때문에 객체처럼 사용할 수 있다
 * 하지만 추천하는 사용법은 아님
 */
arr9['key'] = 'value';
console.log(arr9);
// key가 추가됐음에도 불구하고 배열의 길이가 6으로 고정되어있음 - 배열의 길이는 내부적으로 관리되기 때문에 객체처럼 들어가도 달라지지 않음
console.log(arr9.length);
