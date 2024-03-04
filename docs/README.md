# 3주차 배운 내용

## grid-template-columns

- Repeat() 함수를 사용하여 일정 값을 row track에 반복할 수 있음
 > grid-template-columns: repeat(3, 1fr);

## box-sizing

- border-box: 내용 및 속성, width, height, padding, border 포함
- content-box: 내용 및 속성만 포함

## ::after

- 선택한 요소의 맨 마지막 자식으로 의사 요소를 하나 생성
- content 속성을 이용하여 글자나 이미지를 추가할 수 있음

## calc()

- 고정된 너비의 여백을 가진 요소를 배치할 수 있음
 > flex: 0 0 calc(25% - 18px);
   width: calc(100% - 80px);

## 투명도

- opacity: 0.5;
- 0 ~ 1 => 0에 가까울수록 투명도가 높음