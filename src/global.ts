// 카카오 우편번호 api 연동
declare namespace daum {
  export class Postcode {
    constructor(options: { oncomplete: (data: { zonecode: string; address: string; [key: string]: string }) => void });
    open(): void;
  }
}

// // 아임포트 API 타입 정의 추가
// declare global {
//   interface Window {
//     IMP?: {
//       init: (userCode: string) => void;
//       request_pay: (
//         paymentData: Record<string unknown>,
//         callback: (response: Record<string unknown>) => void
//       ) => void;
//     };
//   }
// }

// // export {};
