import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from "./Slider.module.scss";
const cx = classNames.bind(styles);

function Slider() {
  return (
    <div className={cx("slider-block")}>
      <div className={cx("slider")}>
        <div className={cx("introduce")}>
          <p className={cx("title")}>Dịch vụ truyền thông xã hội</p>
          <p className={cx("content")}>
            Chippisoft là người bán hàng đầu các dịch vụ Tiếp thị Truyền thông
            Xã hội trên web. Cho dù đó là thứ bạn cần cho tài khoản mạng xã hội
            của mình hay bạn là người bán lại dịch vụ Trum.VIP, bạn sẽ tìm thấy
            tất cả ở đây.
          </p>
          <div className={cx("find")}>
            <input
              className={cx("input-find")}
              type="text"
              placeholder="tìm kiếm ở đây"
            />
            <div className={cx("icon-block")}>
              <FontAwesomeIcon
                className={cx("icon")}
                icon={faMagnifyingGlass}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <img className={cx("img")} src={require("../../assets/slider.png")} /> */}
    </div>
  );
}

export default Slider;
