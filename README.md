# 열품타 clone Project
https://github.com/yulpumta-clone-team/yulpumta-clone 

> 공부기록 및 일정관리
> https://yulpumta.herokuapp.com/ 

## 목차

1. **기술 스택**
2. **주요 기능**
3. **프로젝트 구현 기술**
4. **UI/UX**

## 1. **기술 스택**

### Client

- react
- react-hook-form
- redux
- Styled-components
- victory
- yup

### Server

- nodeJs
- express
- mongoose
- bcrypt, jsonwebtoken

## 2.**주요 기능**

### 1. 회원가입 및 로그인

> 간단한 입력을 통해 이메일과 유저내임, 비밀번호로 회원가입이 가능합니다.

### 2. 과목추가 및 시간기록

> 과목을 생성하고 하루 단위로 공부시간을 기록할 수 있습니다.

### 3. 플래너 - 계획 CRUD

> 일정을 추가, 삭제, 편집이 가능합니다.

### 4. 통계 - 공부기록확인

> 일간, 주간, 월간 공부기록을 확인할 수 있습니다.

### 4.1 일간 공부기록확인

> 일간 정보의 경우 달력에 시간별로 색깔이 다르게 표시되며, 하루동안 공부기록을 세세하게 확인할 수 있습니다.

### 4.2 주간/ 월간 공부기록확인

> 그래프를 통해 공부누적시간을 시각적으로 표현했습니다.

### 5. 랭킹

> 전체 사용자의 상위 50명 랭킹을 실시간으로 보여줍니다.

### 6. 그룹

> 그룹을 생성하고 팀원들의 공부기록을 대략적으로 파악할 수 있습니다.

### 6.1 그룹 출석부

> 설정한 최소 시간 이상으로 공부한 팀원을 달력에 표시합니다.

### 6.2 그룹 랭킹

> 그룹 내 랭킹을 확인할 수 있습니다.


## 3. **프로젝트 구현 기술**

### Client

### 1. redux 

> redux로 state를 관리하고, api를 요청했습니다. 

### 2. form validation

> react-hooks-form과 yup을 이용해 validation check

### 3. 달력

> 별도의 라이브러리 없이 달력을 구현했습니다.

### 4. hoc를 이용한 auth

### 5. styeld-compent를 활용한 css 작업

> GlabalStyle과 Theme으로 반복되는 컴포넌트를 줄였습니다. 

### Server

## 4. **UI/UX**

