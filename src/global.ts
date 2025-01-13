// 카카오 우편번호 api 연동
declare namespace daum {
  export class Postcode {
    constructor(options: { oncomplete: (data: { zonecode: string; address: string; [key: string]: string }) => void });
    open(): void;
  }
}
