import {
  faClipboard,
  faEdit,
  faFileExcel,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Col, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Add, Delete, Edit, Export } from "../../../component/Admin/Button";
import Header from "../../../component/Admin/Header/header";
import Heading from "../../../component/Admin/Heading";
import Nav from "../../../component/Admin/Nav";
import Show from "../../../component/Admin/Show";
import Title from "../../../component/Admin/Title";
import styles from "./Post.module.scss";

const cx = classNames.bind(styles);

function Posts() {
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
              <Title title={"Bài viết"} icon={faClipboard} />
              <div className={cx("container-wrapper")}>
                <Heading title={"Danh sách bài viết"} />
                <div className={cx("container-btn")}>
                  <Export />
                  <Add name={"Thêm bài viết mới"} />
                </div>
                <Show />
                <div className={cx("table-wrap")}>
                  {" "}
                  <Table className={cx("table-custom")}>
                    <thead className={cx("table-heading")}>
                      <tr className={cx("table-line")}>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}> #</div>
                        </th>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}> Tiêu đề</div>
                        </th>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}> Ảnh</div>
                        </th>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}> Ngày đăng</div>
                        </th>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}> Lượt xem</div>
                        </th>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}>
                            {" "}
                            Trạng thái
                          </div>
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
                          <div className={cx("table-col-item")}>
                            The orbitians
                          </div>
                        </td>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item", "img-wrap")}>
                            <img
                              src={require("../../../assets/posts.jpg")}
                              className={cx("table-img")}
                            />
                          </div>
                        </td>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item")}>
                            2022-10-05 09:58:33
                          </div>
                        </td>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item")}>35</div>
                        </td>
                        <td className={cx("table-col")}>
                          <span className={cx("table-col-active")}>
                            Hiển thị
                          </span>
                        </td>
                        <td className={cx("table-col")}>
                          <ul className={cx("table-col-item")}>
                            <Delete />
                            <br />
                            <Edit />
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Posts;
