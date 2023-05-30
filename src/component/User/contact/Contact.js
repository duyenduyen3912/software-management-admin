import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
const cx = classNames.bind(styles);

function Contact() {
  return (
    <div className={cx("block")}>
      <div className={cx("contact")}>
        <div className={cx("title")}>
          LIÊN HỆ VỚI CHÚNG TÔI ĐỂ ĐƯỢC HỖ TRỢ SỚM NHẤT
        </div>
        <div className={cx("facebook")}>
          <div className={cx("sub-title")}>Facebook</div>
          <a>
            {" "}
            <div className={cx("name")}> Nguyễn Quang Huy </div>{" "}
          </a>
        </div>
        <div className={cx("zalo")}>
          <div className={cx("sub-title")}>Zalo</div>
          <div className={cx("phone-number")}>0888.1651.96</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
