const obj1 = new Object();
const obj2 = {};
const obj3 = {name: 'oh'};
console.log(obj1);
console.log(obj2);
console.log(obj3);

// 추가
const obj = {name: 'kim'};
obj['email'] = 'email@naver.com';
console.log(obj);
obj.phone = '01012345678';
console.log(obj);

// 삭제
delete obj.phone;
console.log(obj);

// in으로 key가 존재하는지 확인 - true,false 반환
console.log('email' in obj);
console.log('phone' in obj);

// object의 key, value의 집합을 구하는 방법
console.log(Object.keys(obj));
console.log(Object.values(obj));

// 객체 순회 방법 - for in
for (const key in obj) {
  console.log(key, obj[key]);
}
