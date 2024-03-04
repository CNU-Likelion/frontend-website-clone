**사진 앞에 글자 넣기**
- 자신의 부모(이미지) 에 [position: relative;]
- 자신(텍스트) 에 [position: absolute;]

**CSS 배경색 (background-color) 투명**
-> background-color: transparent;


**flex**
- flex : 1차원 레이아웃 시스템 (한 방향)
- Flex Container (부모요소)
- Flex Item (자식요소)
-> flex container 에 [display: flex;]
-> flex-wrap : 줄넘김 처리 설정
-> nowrap (기본값) : 줄바꿈 X
-> wrap : 줄바꿈 O
-> wrap-reverse : 줄바꿈 O, 아이템 역순 배치


**grid** 
- grid : 2차원 레이아웃 시스템 (두 방향)
- Grid Container (부모요소)
- Grid Item (자식요소)
-> grid container에 [display: grid;] 로 적용 
-> grid-template-columns 로 열의 배치를 결정
+ fr (fraction) : 숫자의 비율대로 트랙의 크기를 나눔 
-> repeat(반복횟수, 반복값);
-> minmax(최소, 최대);
-> auto-fit : column의 개수를 미리 정하지 않고 설정된 너비가 허용하는 한 최대한 셀을 채움