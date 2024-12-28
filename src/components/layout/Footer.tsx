/**
 * @description 푸터 컴포넌트
 */
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <p>CUSTOMER CARE</p>
        <ul>
          <li>account</li>
          <li>notice</li>
          <li>FAQ</li>
          <li>terms of use</li>
          <li>privacy policy</li>
          <li>tracking</li>
        </ul>
      </div>

      <div className="footer-center">
        <p>CONTACT</p>
        <ul>
          <li>cs@minitmute.com</li>
          <li>info@minitmute.com</li>
        </ul>
      </div>

      <div className="footer-right">
        <p>SHOWROOM</p>
        <button>HANNAM SHOWROOM</button>
        <button>SEONGSU SHOWROOM</button>
        <button>SHINSEGAE SHOWROOM</button>
        <button>TOKYO SHOWROOM</button>
      </div>
    </div>
  );
};

export default Footer;
