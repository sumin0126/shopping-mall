interface IUserDataList {
  title: string;
  children: React.ReactNode;
}

/**
 * @description 회원정보 목록 컴포넌트
 *
 * @param title - 목록 타이틀
 * @param children - 목록에 대한 회원정보
 */
const UserDataList = ({ title, children }: IUserDataList) => {
  return (
    <div className="user-data-list-container">
      <p className="user-data-list-title">{title}</p>
      <div className="user-data-list-content">{children}</div>
    </div>
  );
};

export default UserDataList;
