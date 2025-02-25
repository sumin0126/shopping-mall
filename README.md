# 🛍️ Shopping Mall

#### ❝ 상품 조회, 회원가입 및 로그인, 아이디/비밀번호 찾기, 마이페이지, 장바구니 등 쇼핑몰의 주요기능을 구현한 서비스입니다 ❞

<br/>


https://github.com/user-attachments/assets/1cab4eb4-0359-44f4-85cb-616002eb5e09




<br/><br/>

## 📍목차

### ▸ 개요

### ▸ 프로젝트 설명

### ▸ 주요 기능

### ▸ 부수적인 기능

<br/><br/>

## 🔧 개요

**▸ 프로젝트 이름** : Shopping Mall - 'minimute' Clone Project

**▸ 개발 기간** : 2024.12 ~ 2025.01

**▸ 사용 기술**
<br/><br/>
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=for-the-badge)
![scss](https://img.shields.io/badge/SCSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**https://dev.d1p0a0dshz98j5.amplifyapp.com/**

<br/><br/><br/>

## ✏️ 프로젝트 설명

가방 브랜드 **'minimute'** 웹사이트를 클론 코딩하여 주요 쇼핑몰 기능을 구현한 개인 프로젝트입니다.

TypeScript, React, Next.js를 기반으로 클라이언트 중심의 UI/UX 환경을 구축하고,

Axios와 JWT 기반 인증을 통해 사용자와 서버 간의 안전한 데이터 통신을 구현했습니다.

<br/><br/><br/>

## 💡 주요 기능

### ▸ 회원가입 기능


https://github.com/user-attachments/assets/ac820e8d-b112-48cb-8f75-4adb8f6ad2eb


사용자가 회원가입 시, 입력한 정보를 API 요청을 통해 서버에게 전달합니다
카카오 우편번호 API를 활용해 사용자가 주소를 쉽게 입력할 수 있으며,<br/>
필수 입력 사항에 대해 폼 유효성 검사를 수행합니다.


<br/><br/><br/>

### ▸ JWT 기반 로그인


https://github.com/user-attachments/assets/6fc446c2-4610-4c0f-a085-a77017bb83ee


사용자가 아이디와 비밀번호를 API 요청을 통해 서버에 전달하고, 서버는 토큰을 발급하여 클라이언트에게 전달합니다. <br/>
클라이언트는 받은 토큰을 localStorage에 저장하고, 이 토큰을 통해 사용자 인증 상태를 유지합니다. <br/>
페이지 접근 시 로그인 유무를 확인해 인증된 사용자만 마이페이지, 주문내역 등에 접근할 수 있습니다.

<br/><br/><br/>

### ▸ 카테고리별 상품 조회


https://github.com/user-attachments/assets/b35103fe-96ad-44eb-a307-1cb551fdf747


사용자가 네비게이션 바에서 특정 카테고리를 선택하면, 해당 카테고리의 코드(Category Code)에 따라 서버에 GET 요청을 보냅니다. <br/>
서버는 요청 받은 카테고리에 속하는 상품 목록을 반환하고, 클라이언트는 받은 데이터를 기반으로 페이지를 동적으로 렌더링합니다.


<br/><br/><br/>

### ▸ 장바구니 기능 (추가, 수량 변경, 삭제)


https://github.com/user-attachments/assets/0844f441-9880-4559-a2eb-63bc0532f205


- 상품 추가 : 사용자가 상품을 장바구니에 추가하면, 해당 상품의 id와 수량을 서버에 POST 요청하여 상품을 추가합니다.
- 수량 변경 : 장바구니에서 상품 수량을 변경하면, 해당 상품의 id와 수량을 서버에 재요청하여 수량을 변경해줍니다.
- 상품 삭제 : 장바구니에서 특정 상품을 삭제하면, 해당 상품의 id를 서버에 DELETE 요청을 보내 제거합니다.

<br/><br/><br/>

### ▸ 결제 페이지 이동 및 주문 정보 처리


https://github.com/user-attachments/assets/4c4464fb-eeab-4a9c-b9d6-97cc02b10170


결제 페이지에서는 사용자의 기본 회원 정보가 자동으로 입력되며, 사용자가 원할시에는 새로운 배송지 정보를 입력할 수도 있습니다.
사용자가 주문 정보를 입력하고 결제를 완료하면, 서버에 주문 정보를 POST 요청으로 전달하고 주문 내역 페이지로 이동합니다.

<br/><br/><br/>

### ▸ 주문 내역 확인


https://github.com/user-attachments/assets/47ed5262-b51f-4af1-9e44-77d27eed30d9


주문이 완료된 후에는 주문 내역 페이지에서 사용자별 주문 정보를 서버에 GET 요청으로 불러와 렌더링합니다.

<br/><br/><br/>

### ▸ 마이페이지


https://github.com/user-attachments/assets/50d6078a-aad6-45bc-9ef7-e8ae4f2a62d6


로그인한 사용자만 마이페이지에 접근할 수 있으며, 서버에 GET 요청을 보내 사용자 정보를 조회합니다.
정보 수정을 원할시에는 수정 버튼을 클릭하여 일부 정보를 수정할 수 있습니다.

<br/><br/><br/>

### ▸ 아이디/비밀번호 찾기


https://github.com/user-attachments/assets/d9aea0fb-80a9-4902-a39a-ca602ad64069


기능 구현중입니다...

<br/><br/><br/>

## 💡 부수적인 기능

### ▸ 메인페이지 이미지 슬라이더

'React-Slick-Carousel'을 활용해 자동 이미지 슬라이더를 구현했습니다.
사용자는 슬라이더를 수동으로 조작할 수도 있으며, 반응형 설정을 통해 다양한 디바이스에서도 최적의 UX를 제공합니다.

<br/><br/><br/>

### ▸ 카카오 우편번호 API 적용

회원가입, 새로운 배송지 등록 시에 카카오 우편번호 API를 연동하여 사용자 주소 검색을 자동화 했습니다.
'우편번호 찾기'버튼을 클릭하면 새로운 탭이 열리며, 사용자는 원하는 주소를 선택하면 해당 값이 입력폼에 자동으로 반영됩니다.

<br/><br/><br/>

### ▸ Recoil 기반 쇼룸 기능

Recoil 상태관리를 활용해 하단 Footer에 위치한 4곳의 쇼룸 버튼 중 하나를 클릭하면, 쇼룸 페이지로 이동 후 선택된 쇼룸 카드가 자동으로 열립니다.

<br/><br/><br/>

