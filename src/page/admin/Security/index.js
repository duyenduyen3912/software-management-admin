import { faLock, faPlus } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import Nav from "../../../component/Admin/Nav";
import Title from "../../../component/Admin/Title";
import styles from "./Security.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "react-bootstrap";
import Heading from "../../../component/Admin/Heading";
import Show from "../../../component/Admin/Show";
import { Add, Delete } from "../../../component/Admin/Button";
import Header from "../../../component/Admin/Header/header";
import { useLocation } from "react-router-dom";

const cx = classNames.bind(styles);
function Security() {
  const location = useLocation();
  const name = location.pathname;
  let router = name.substring(1);
  return (
    <>
      <div className={cx("wrapper")}>
        <Row style={{ padding: "0" }}>
          <div className={cx("col-custom")}>
            <Nav path={router} />
          </div>

          <Col className="col-lg-12" id="content">
            <Header />
            <div className={cx("content")}>
              <Title title="Bảo mật" icon={faLock} />
              <div className={cx("container-wrapper")}>
                <div className={cx("container-bg")}>
                  <Heading title={"Cấu hình và bảo mật"} />

                  <Row className={cx("status-wrap")}>
                    <Col>
                      <div className={cx("status")}>Status</div>
                      <select className={cx("select-option")}>
                        <option className={cx("option-item")}>ON</option>
                        <option className={cx("option-item")}>OFF</option>
                      </select>
                      <div className={cx("status-warn")}>
                        Hệ thống sẽ bật tính năng xác minh IP khi truy cập Admin
                        nếu bạn chọn ON( lưu ý: bạn phải nhập IP của bạn vào
                        danh sách phía dưới trước khi chọn ON chức năng này)
                      </div>
                    </Col>
                    <Col lg={7}>
                      <div className={cx("list-wrapper")}>
                        <div className={cx("list-heading")}>
                          <span className={cx("list-title")}>
                            Danh sách IP được truy cập admin
                          </span>
                          <Add name={"Thêm IP"} />
                        </div>
                        <Show />
                        <div className={cx("table-wrap")}>
                          <Table className={cx("table-custom")}>
                            <thead className={cx("table-heading")}>
                              <tr className={cx("table-line")}>
                                <th className={cx("table-col-heading")}>
                                  <div className={cx("table-col-item")}>
                                    {" "}
                                    IP
                                  </div>
                                </th>
                                <th className={cx("table-col-heading")}>
                                  <div className={cx("table-col-item")}>
                                    {" "}
                                    Thao tác
                                  </div>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className={cx("table-line-item")}>
                                <td className={cx("table-col")}>
                                  <div className={cx("table-col-item")}>
                                    {" "}
                                    192.161.0929392
                                  </div>
                                </td>
                                <td className={cx("table-col")}>
                                  <Delete />
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Security;
