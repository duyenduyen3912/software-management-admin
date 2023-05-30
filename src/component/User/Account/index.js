import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Account.module.scss";
import { Col, Row, Table } from "react-bootstrap";
// import Nav from "../../../component/User/Nav";

const cx = classNames.bind(styles);
function Account() {
  return (
    <div className={cx("wrapper")}>
      {/* <Row>
        <Col xl={2}>
          <Nav />
        </Col> */}
      {/* <Col xl={10}> */}
      <div className={cx("container-wrapper")}>
        <Row>
          <Col xl={4}>
            <div className={cx("account-about")}>
              <div className={cx("user-infor")}>
                <div className={cx("about-img-wrap")}>
                  <img
                    className={cx("about-img")}
                    src={require("../../../assets/avatar.jpg")}
                  />
                </div>
                <div className={cx("about-tick")}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={cx("about-icon")}
                  />
                </div>
              </div>

              <div className={cx("about-name")}>Nguyen Quang Huy</div>
              <div className={cx("about-email")}>
                @nguyenquanghuy7765@gmail.com
              </div>
              <div className={cx("about-spending")}>
                <div className={cx("spending")}>
                  <div className={cx("spending-number")}>100k</div>
                  <div className={cx("spending-text")}>Đã nạp</div>
                </div>
                <div className={cx("spending-item")}>
                  <div className={cx("spending-number")}>34.0k</div>
                  <div className={cx("spending-text")}>Đã mua</div>
                </div>
                <div className={cx("spending")}>
                  <div className={cx("spending-number")}>66.0k</div>
                  <div className={cx("spending-text")}>Số dư</div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={7}>
            <div className={cx("account-infor")}>
              <div className={cx("noti-heading")}>Thông tin cá nhân</div>
              <div className={cx("noti-item")}>
                <div className={cx("noti-name")}>Họ và tên</div>
                <input type="text" className={cx("noti-input")} />
              </div>
              <div className={cx("noti-item")}>
                <div className={cx("noti-name")}>Số điện thoại</div>
                <input type="text" className={cx("noti-input")} />
              </div>
              <div className={cx("noti-item")}>
                <div className={cx("noti-name")}>Địa chỉ email</div>
                <input type="text" className={cx("noti-input")} />
              </div>
              <div className={cx("noti-item")}>
                <div className={cx("noti-name")}>Mật khẩu hiện tại</div>
                <input type="text" className={cx("noti-input")} />
              </div>
              <div className={cx("noti-item")}>
                <div className={cx("noti-name")}>Mật khẩu mới</div>
                <input type="password" className={cx("noti-input")} />
              </div>
              <div className={cx("noti-item")}>
                <div className={cx("noti-name")}>Xác nhận mật khẩu</div>
                <input type="password" className={cx("noti-input")} />
              </div>
            </div>
          </Col>
        </Row>
        <div className={cx("table-wrap")}>
          <Table className={cx("table-custom")}>
            <thead className={cx("table-heading")}>
              <tr className={cx("table-line")}>
                <th className={cx("table-col-heading")}>
                  <div className={cx("table-col-item")}> #</div>
                </th>
                <th className={cx("table-col-heading")}>
                  <div className={cx("table-col-item")}> Mã giao dịch</div>
                </th>
                <th className={cx("table-col-heading")}>
                  <div className={cx("table-col-item")}> Tên sản phẩm</div>
                </th>
                <th className={cx("table-col-heading")}>
                  <div className={cx("table-col-item")}> Giá tiền</div>
                </th>
                <th className={cx("table-col-heading")}>
                  <div className={cx("table-col-item")}> Thời gian</div>
                </th>
                <th className={cx("table-col-heading")}>
                  <div className={cx("table-col-item")}> Thao tác</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={cx("table-line-item")}>
                <td className={cx("table-col")}>
                  <div className={cx("table-col-item")}> 1</div>
                </td>
                <td className={cx("table-col")}>
                  <div className={cx("table-col-item")}> GD116432472</div>
                </td>
                <td className={cx("table-col")}>
                  <div className={cx("table-col-item")}>
                    {" "}
                    Adobe Photoshop CS6
                  </div>
                </td>
                <td className={cx("table-col")}>
                  <div className={cx("table-col-item")}> 2.000.000$</div>
                </td>
                <td className={cx("table-col")}>
                  <div className={cx("table-col-item")}> 20:14 22/02/2023</div>
                </td>
                <td className={cx("table-col")}>
                  <button className={cx("btn-col")}> Download </button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      {/* </Col>
      </Row> */}
    </div>
  );
}

export default Account;
