import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import type { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IUserDataCard {
  icon: IconProp;
  text: string;
  className: string;
}

/**
 * @description 회원정보 카드 컴포넌트
 *
 * @param icon - 아이콘
 * @param text - 회원정보
 * @param className - 아이콘 이름
 */
const UserDataCard = ({ icon, text, className }: IUserDataCard) => {
  return (
    <div className="user-data-card-container">
      <div className="user-data-card">
        <FontAwesomeIcon icon={icon} className={className} />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default UserDataCard;
