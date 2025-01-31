import { useFormContext } from 'react-hook-form';

import type { IMethodForm } from '@/containers/payment/PayMentContainer';

/**
 * @description 상품 결제 - 결제수단 컨테이너
 */
const PaymentMethodContainer = () => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext<IMethodForm>();

  // 은행 선택 시, 선택한 은행으로 업데이트 해주는 함수
  const handleChangeBank = (bankName: string) => {
    setValue('bankSelect', bankName);
  };

  return (
    <div className="payment-method-container">
      {/* 은행 선택 */}
      <div className="bank-wrapper">
        <label htmlFor="bankSelect">은행</label>
        <select {...register('bankSelect')} onChange={e => handleChangeBank(e.target.value)}>
          <option value="국민은행">국민은행</option>
          <option value="신한은행">신한은행</option>
          <option value="우리은행">우리은행</option>
          <option value="새마을금고">새마을금고</option>
          <option value="카카오뱅크">카카오뱅크</option>
        </select>
      </div>

      {/* 입금 계좌번호 */}
      <div className="account-number-input-wrapper">
        <label htmlFor="accountNumber">입금 계좌번호</label>
        <input
          {...register('accountNumber', {
            required: '계좌번호는 필수 입력사항입니다.',
          })}
          type="text"
          className="accountNumber-input"
          placeholder="- (하이픈)을 빼고 입력해주세요"
        />
        {errors.accountNumber && <p className="accountNumber-error-message">{errors.accountNumber.message}</p>}
      </div>

      {/* 입금자명 */}
      <div className="depositor-name-input-wrapper">
        <label htmlFor="depositorName">입금자명</label>
        <input
          {...register('depositorName', {
            required: '입금자명은 필수 입력사항입니다.',
          })}
          type="text"
          className="depositor-name-input"
        />
        {errors.depositorName && <p className="depositorName-error-message">{errors.depositorName.message}</p>}
      </div>
    </div>
  );
};

export default PaymentMethodContainer;
