/**
 * 문제: 중복 제거된 연결 리스트 만들기
 * 
 * 문제 설명:
    연결 리스트가 주어지면, 이 리스트에서 중복된 모든 노드를 제거하는 함수를 작성하세요. 반환되는 리스트는 여전히 원래 리스트의 순서를 유지해야 합니다.

 * 예시:
    입력: 1 -> 2 -> 3 -> 2 -> 1
    출력: 1 -> 2 -> 3
 */

function ListNode(value) {
  this.value = value;
  this.next = null;
}

function removeDuplicates(head) {
  let current = head;
  let prev = null;
  let values = new Set();

  while (current !== null) {
    if (values.has(current.value)) {
      prev.next = current.next;
    } else {
      values.add(current.value);
      prev = current;
    }
    current = current.next;
  }
  return head;
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(1);

let result = removeDuplicates(head);
while (result != null) {
  console.log(result.value);
  result = result.next;
}
