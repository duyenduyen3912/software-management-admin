import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Col, Row } from "react-bootstrap";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Intro() {
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("header")}>
          <ul className={cx("header-list")}>
            <li className={cx("header-item")}>
              <img
                src={require("../../assets/logo.jpg")}
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
              src={require("../../assets/avatar.jpg")}
              className={cx("user-img")}
            />
            <span className={cx("user-name")}> Username </span>
          </div>
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
                src={require("../../assets/desktop.png")}
              />
            </div>
          </div>
          <div className={cx("container-sv", "container-intro")}>
            <div className={cx("img-left-wrap", "intro-img-wrap")}>
              <img
                className={cx("img-left", "intro-img")}
                src={require("../../assets/support.png")}
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
                <Col>
                  <div className={cx("intro-platformt")}>
                    <div className={cx("platformt-img-wrap")}>
                      <img
                        src={require("../../assets/support.png")}
                        className={cx("platformt-img")}
                      />
                    </div>
                    <div className={cx("platformt-name")}>FACEBOOK</div>
                  </div>
                </Col>
                <Col className={cx("platform-item")}>
                  <div className={cx("intro-platformt")}>
                    <div className={cx("platformt-img-wrap")}>
                      <img
                        src={require("../../assets/support.png")}
                        className={cx("platformt-img")}
                      />
                    </div>
                    <div className={cx("platformt-name")}>TWITTER</div>
                  </div>
                </Col>
                <Col className={cx("platform-item")}>
                  <div className={cx("intro-platformt")}>
                    <div className={cx("platformt-img-wrap")}>
                      <img
                        src={require("../../assets/support.png")}
                        className={cx("platformt-img")}
                      />
                    </div>
                    <div className={cx("platformt-name")}>INSTAGRAM</div>
                  </div>
                </Col>
                <Col className={cx("platform-item")}>
                  <div className={cx("intro-platformt")}>
                    <div className={cx("platformt-img-wrap")}>
                      <img
                        src={require("../../assets/support.png")}
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
                  src={require("../../assets/background_intro.png")}
                />
              </div>
              <div className={cx("rs-list")}>
                <div className={cx("rs-item")}>
                  <div className={cx("rs-item-img-wrap")}>
                    <img
                      className={cx("rs-item-img")}
                      src={require("../../assets/choice1.png")}
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
                      src={require("../../assets/choice2.png")}
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
                      src={require("../../assets/choice3.png")}
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
                src={require("../../assets/new.png")}
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
              <div className={cx("su-step")}>
                <Col>
                  <div className={cx("su-step-item")}>
                    <img
                      className={cx("su-img")}
                      src={require("../../assets/web.png")}
                    />
                    <button className={cx("su-btn")}>
                      TRUY CẬP TRANG WEB{" "}
                    </button>
                    <div className={cx("step-number")}>1</div>
                  </div>
                </Col>
                <Col className={cx("su-item")}>
                  <div className={cx("su-step-item")}>
                    <img
                      className={cx("su-img")}
                      src={require("../../assets/web2.png")}
                    />
                    <button className={cx("su-btn")}>
                      ĐĂNG NHẬP TÀI KHOẢN{" "}
                    </button>
                    <div className={cx("step-number")}>2</div>
                  </div>
                </Col>
                <Col className={cx("su-item")}>
                  <div className={cx("su-step-item")}>
                    <img
                      className={cx("su-img")}
                      src={require("../../assets/web3.png")}
                    />
                    <button className={cx("su-btn")}>TRUY CẬP DỊCH VỤ </button>
                    <div className={cx("step-number")}>3</div>
                  </div>
                </Col>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
