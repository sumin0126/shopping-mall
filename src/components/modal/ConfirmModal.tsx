interface IConfirmModalProps {
  modalTitle: string;
  handleClickConfirm: () => void;
  handleClickCancel: () => void;
}

/**
 * @description 컨펌 모달 컴포넌트
 *
 * @param modalTitle - 모달 타이틀
 * @param handleClickConfirm - 확인 버튼 클릭 시, 실행될 함수
 * @param handleClickCancel - 취소 버튼 클릭 시, 실행될 함수
 */
const ConfirmModal = ({ modalTitle, handleClickConfirm, handleClickCancel }: IConfirmModalProps) => {
  return (
    <div className="confirm-modal-container">
      <div className="modal-overlay" />
      <div className="modal-wrapper">
        <p className="noti">알림</p>
        <p className="modal-title">{modalTitle}</p>
        <div className="button-wrapper">
          <button onClick={handleClickConfirm}>확인</button>
          <button onClick={handleClickCancel}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
