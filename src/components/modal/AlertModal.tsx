interface IAlertModalProps {
  modalTitle: string;
  handleClickConfirm: () => void;
}

/**
 * @description 알림 모달 컴포넌트
 *
 * @param modalTitle - 모달 타이틀
 * @param handleClickConfirm - 확인 버튼 클릭 시, 실행될 함수
 */
const AlertModal = ({ modalTitle, handleClickConfirm }: IAlertModalProps) => {
  return (
    <div className="alert-modal-container">
      <div className="modal-overlay" />
      <div className="modal-wrapper">
        <p className="noti">알림</p>
        <p className="modal-title">{modalTitle}</p>
        <button onClick={handleClickConfirm}>확인</button>
      </div>
    </div>
  );
};

export default AlertModal;
