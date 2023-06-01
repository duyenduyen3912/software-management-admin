import { faBars, faPlay, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Intro() {
  const naviagte = useNavigate();
  document.title = "Chippisoft";
  const _handleClickSubmenu = (event) => {
    let element = event.target.id;
    console.log(element);
    if (element === "list") {
      document.getElementById("list").style.display = "none";
      document.getElementById("close").style.display = "block";
      document.getElementById("Header-submenu").style.display = "block";
      document.getElementById("Header-submenu").classList.remove(cx("close"));
      document.getElementById("Header-submenu").classList.add(cx("open"));
    } else if (element === "close") {
      document.getElementById("list").style.display = "block";
      document.getElementById("close").style.display = "none";
      document.getElementById("Header-submenu").classList.remove(cx("open"));
      document.getElementById("Header-submenu").classList.add(cx("close"));
      setTimeout(() => {
        document.getElementById("Header-submenu").style.display = "none";
      }, 100);
    }
  };
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("header")}>
          <ul className={cx("header-list")}>
            <li className={cx("header-image")}>
              <img
                src={require("../../../assets/logo.png")}
                className={cx("header-img")}
              />
              <span className={cx("header-name", "name-logo")}>
                {" "}
                CHIPPISOFT{" "}
              </span>
            </li>
            <li className={cx("header-item")}>
              <span className={cx("header-name")}> SẢN PHẨM </span>
            </li>
            <li className={cx("header-item")}>
              <span className={cx("header-name")}> BÀI VIẾT </span>
            </li>
            <li className={cx("header-item")}>
              <span className={cx("header-name")}>NẠP TIỀN </span>
            </li>
          </ul>
          <div className={cx("header-user")}>
            <img
              src={require("../../../assets/logo.png")}
              className={cx("user-img")}
            />
            <span className={cx("user-name")}>
              {" "}
              {localStorage.getItem("username") ? (
                <span onClick={() => naviagte(`/home`)}>Home</span>
              ) : (
                <span onClick={() => naviagte(`/sign`)}>Login</span>
              )}{" "}
            </span>
          </div>
          <div className={cx("header-icon-wrap")}>
            <FontAwesomeIcon
              icon={faBars}
              className={cx("header-icon")}
              id="list"
              onClick={_handleClickSubmenu}
            />
            <FontAwesomeIcon
              icon={faXmark}
              className={cx("header-icon")}
              style={{ display: "none" }}
              id="close"
              onClick={_handleClickSubmenu}
            />
          </div>
        </div>
        <div className={cx("header-submenu")} id="Header-submenu">
          <li className={cx("submenu-item")}>username</li>
          <li className={cx("submenu-item")}>Sản phẩm</li>
          <li className={cx("submenu-item")}>Bài viết</li>
          <li className={cx("submenu-item")}>Nạp tiền</li>
        </div>
        <div className={cx("container")}>
          <div className={cx("container-intro")}>
            <div className={cx("intro-infor")}>
              <div className={cx("intro-heading")}>
                Dịch vụ truyền thông xã hội
              </div>
              <div className={cx("intro-des")}>
                Chippisoft là người bán hàng đầu các dịch vụ Tiếp thị Truyền
                thông Xã hội trên web. Cho dù đó là thứ bạn cần cho tài khoản
                mạng xã hội của mình hay bạn là người bán lại dịch vụ CHPPISOFT,
                bạn sẽ tìm thấy tất cả ở đây.
              </div>
              <div className={cx("intro-btn")}>
                <button className={cx("btn-wrap", "btn-sp")}>
                  <span className={cx("btn-name")}>Hỗ trợ: 0123456789</span>
                </button>
                <button className={cx("btn-tn")}>
                  <span className={cx("btn-name")}>Thử ngay</span>
                  <FontAwesomeIcon icon={faPlay} className={cx("btn-icon")} />
                </button>
              </div>
            </div>

            <div className={cx("intro-img-wrap")}>
              <img
                className={cx("intro-img")}
                src={require("../../../assets/desktop.png")}
              />
            </div>
          </div>
          <div className={cx("container-sv", "container-intro")}>
            <div className={cx("img-left-wrap", "intro-img-wrap")}>
              <img
                className={cx("img-left", "intro-img")}
                src={require("../../../assets/support.png")}
              />
            </div>
            <div className={cx("intro-infor", "bg-white")}>
              <div className={cx("bg-white", "intro-heading")}>
                Dịch vụ chất lượng
              </div>
              <div className={cx("bg-white", "intro-des")}>
                Với hàng loạt các dịch vụ của chúng tôi cung cấp với những tính
                năng tuyệt vời, đem lại chất lượng dịch vụ tốt nhất. Bạn có thể
                sử dụng tất cả các dịch vụ đó bất kể khách hàng của bạn là ai!
              </div>
            </div>
          </div>
          <div className={cx("container-intro", "platform")}>
            <div className={cx("intro-infor")}>
              <div className={cx("intro-heading", "heading-3")}>
                Hỗ trợ chiến lược kinh doanh của bạn
              </div>
              <div className={cx("intro-des")}>
                Mang lại trải nghiệm đặc biệt cho khách hàng khi sử dụng dịch vụ
                của chúng tôi.
              </div>
              <Row className={cx("intro-platform-list")}>
                <Col
                  xs={12}
                  sm={6}
                  md={6}
                  lg={3}
                  className={cx("platform-item")}
                >
                  <div className={cx("intro-platform")}>
                    <div className={cx("platformt-img-wrap")}>
                      <img
                        src={require("../../../assets/fb_logo.png")}
                        className={cx("platformt-img")}
                      />
                    </div>
                    <div className={cx("platformt-name")}>FACEBOOK</div>
                  </div>
                </Col>
                <Col
                  xs={12}
                  sm={6}
                  md={6}
                  lg={3}
                  className={cx("platform-item")}
                >
                  <div className={cx("intro-platform")}>
                    <div className={cx("platformt-img-wrap")}>
                      <img
                        src={require("../../../assets/tw_logo.jpg")}
                        className={cx("platformt-img")}
                      />
                    </div>
                    <div className={cx("platformt-name")}>TWITTER</div>
                  </div>
                </Col>
                <Col
                  xs={12}
                  sm={6}
                  md={6}
                  lg={3}
                  className={cx("platform-item")}
                >
                  <div className={cx("intro-platform")}>
                    <div className={cx("platformt-img-wrap")}>
                      <img
                        src={require("../../../assets/ig_logo.jpeg")}
                        className={cx("platformt-img")}
                      />
                    </div>
                    <div className={cx("platformt-name")}>INSTAGRAM</div>
                  </div>
                </Col>
                <Col
                  xs={12}
                  sm={6}
                  md={6}
                  lg={3}
                  className={cx("platform-item")}
                >
                  <div className={cx("intro-platform")}>
                    <div className={cx("platformt-img-wrap")}>
                      <img
                        src={require("../../../assets/tiktok_logo.jpg")}
                        className={cx("platformt-img")}
                      />
                    </div>
                    <div className={cx("platformt-name")}>TIKTOK</div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className={cx("container-rs")}>
            <div className={cx("rs-top")}>
              <div className={cx("rs-heading")}>Tại sao chọn ?</div>
              <div className={cx("rs-des")}>
                Trong quá trình phát triển tính năng, sự hài lòng của quý khách
                là điều quan trọng nhất. Vì thế chúng tôi luôn quan tâm đến chất
                lượng dịch vụ ổn định và hoàn thiện tốt nhất.
              </div>
            </div>
            <div className={cx("rs-content")}>
              <div className={cx("rs-img-wrap")}>
                <img
                  className={cx("rs-img")}
                  src={require("../../../assets/square.png")}
                />
              </div>
              <div className={cx("rs-list")}>
                <div className={cx("rs-item")}>
                  <div className={cx("rs-item-img-wrap")}>
                    <img
                      className={cx("rs-item-img")}
                      src={require("../../../assets/setting.png")}
                    />
                  </div>
                  <div className={cx("rs-item-content")}>
                    <div className={cx("rs-item-content-heading")}>
                      Dịch vụ chất lượng
                    </div>
                    <div className={cx("rs-item-content-des")}>
                      Cung cấp hầu như đầy đủ tất cả dịch vụ truyền thông xã
                      hội. Điều quan trọng nhất là chất lượng dịch vụ tốt nhất
                      đáp ứng nhu cầu của khách hàng.
                    </div>
                  </div>
                </div>

                <div className={cx("rs-item")}>
                  <div className={cx("rs-item-img-wrap")}>
                    <img
                      className={cx("rs-item-img")}
                      src={require("../../../assets/security.png")}
                    />
                  </div>
                  <div className={cx("rs-item-content")}>
                    <div className={cx("rs-item-content-heading")}>
                      An toàn, bảo mật thông tin
                    </div>
                    <div className={cx("rs-item-content-des")}>
                      Đối với thông tin cá nhân của khách hàng, chúng tôi luôn
                      ưu tiên đặt lên hàng đầu trong việc bảo mật thông tin và
                      an toàn dữ liệu.
                    </div>
                  </div>
                </div>
                <div className={cx("rs-item")}>
                  <div className={cx("rs-item-img-wrap")}>
                    <img
                      className={cx("rs-item-img")}
                      src={require("../../../assets/flash.png")}
                    />
                  </div>
                  <div className={cx("rs-item-content")}>
                    <div className={cx("rs-item-content-heading")}>
                      Tốc độ xử lý nhanh
                    </div>
                    <div className={cx("rs-item-content-des")}>
                      Thời gian là vàng. Không để khách hàng phải mất nhiều thời
                      gian để chờ đợi. Với tốc độ xử lý cực nhanh, tức thì sẽ
                      đem lại trải nghiệm tốt hơn cho bạn.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("container-sv", "container-intro")}>
            <div className={cx("container-ct")}>
              <div className={cx("intro-heading", "bg-white")}>
                Giới thiệu về những dịch vụ mới
              </div>
              <div className={cx("intro-des", "bg-white")}>
                Nếu bạn muốn nhận thông tin cập nhật mới nhất từ chúng tôi, chỉ
                cần nhập email của bạn vào. Bạn có thể bỏ theo dõi bất cứ lúc
                nào. Quyền riêng tư và thông tin cá nhân của bạn sẽ được xử lý.
              </div>
              <div className={cx("ct-input-wrap")}>
                <input
                  className={cx("ct-input")}
                  type="text"
                  placeholder="Viết email của bạn..."
                />
                <button className={cx("ct-button")}>THEO DÕI</button>
              </div>
            </div>
            <div className={cx("rs-img-wrap", "img-right")}>
              <img
                className={cx("rs-img")}
                src={require("../../../assets/unity.png")}
              />
            </div>
          </div>
          <div
            className={cx("container-sv", "container-intro", "container-su")}
          >
            <div className={cx("container-su-top")}>
              <div className={cx("intro-heading", "bg-white")}>
                Làm thế nào để sử dụng dịch vụ?
              </div>
              <div className={cx("su-des", "bg-white")}>
                Thật dễ dàng so với những gì bạn nghĩ. Chỉ cần 3 bước đơn giản
              </div>
            </div>
            <Row className={cx("su-step")}>
              <Col
                xs={12}
                sm={6}
                xl={3}
                md={6}
                lg={4}
                className={cx("su-item")}
              >
                <div className={cx("su-step-item")}>
                  <img
                    className={cx("su-img")}
                    src={require("../../../assets/searching.png")}
                  />
                  <button className={cx("su-btn")}>TRUY CẬP TRANG WEB </button>
                  <div className={cx("step-number")}>1</div>
                </div>
              </Col>
              <Col
                xs={12}
                sm={6}
                xl={3}
                md={6}
                lg={4}
                className={cx("su-item")}
              >
                <div className={cx("su-step-item")}>
                  <img
                    className={cx("su-img")}
                    src={require("../../../assets/login.png")}
                  />
                  <button className={cx("su-btn")}>ĐĂNG NHẬP TÀI KHOẢN </button>
                  <div className={cx("step-number")}>2</div>
                </div>
              </Col>
              <Col
                xs={12}
                sm={6}
                xl={3}
                md={6}
                lg={4}
                className={cx("su-item")}
              >
                <div className={cx("su-step-item")}>
                  <img
                    className={cx("su-img")}
                    src={require("../../../assets/service.png")}
                  />
                  <button className={cx("su-btn")}>TRUY CẬP DỊCH VỤ </button>
                  <div className={cx("step-number")}>3</div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
