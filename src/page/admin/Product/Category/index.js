import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Add, Delete, Edit, View } from "../../../../component/Admin/Button";

import Header from "../../../../component/Admin/Header/header";
import Heading from "../../../../component/Admin/Heading";
import Nav from "../../../../component/Admin/Nav";
import Show from "../../../../component/Admin/Show";
import Title from "../../../../component/Admin/Title";
import { api } from "../../../../constants";

import styles from "../Product.module.scss";

const cx = classNames.bind(styles);

function Category() {
  const location = useLocation();
  const name = location.pathname;
  let router = name.substring(1);

  const [categories, setCategories] = useState([]);
  var myHeaders = new Headers();
  myHeaders.append("Host", "chippisoft.com");
  myHeaders.append("Authorization", localStorage.getItem("jwt"));

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  useEffect(() => {
    fetch(api.GetCategories, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const jsonObj = JSON.parse(result);
        setCategories(jsonObj.data);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <div className={cx("warpper")}>
        <Row style={{ padding: "0" }}>
          <div className={cx("col-custom")}>
            <Nav path={router} />
          </div>

          <Col className="col-lg-12" id="content">
            <Header />
            <div className={cx("content")}>
              <Title title={"Sản phẩm"} icon={faBarsStaggered} />
              <div className={cx("container-wrapper")}>
                <Heading title={"Danh sách chuyên mục"} />
                <Add
                  name={"Thêm mới"}
                  action={"Redirect"}
                  data={"product/category/new"}
                />
                <Show />
                <div className={cx("table-wrap")}>
                  <Table className={cx("table-custom")}>
                    <thead className={cx("table-heading")}>
                      <tr className={cx("table-line")}>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}> #</div>
                        </th>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}>
                            {" "}
                            Tên chuyên mục{" "}
                          </div>
                        </th>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}> Mô tả </div>
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
                      {categories.map((item, index) => {
                        return (
                          <tr className={cx("table-line-item")} key={index}>
                            <td className={cx("table-col")}>
                              <div className={cx("table-col-item")}>
                                {" "}
                                {++index}
                              </div>
                            </td>
                            <td className={cx("table-col")}>
                              <div className={cx("table-col-item")}>
                                {item.name}
                              </div>
                            </td>
                            <td className={cx("table-col")}>
                              <div className={cx("table-col-item")}>
                                {item.description}
                              </div>
                            </td>

                            <td className={cx("table-col")}>
                              <div className={cx("table-col-item")}>
                                <span
                                  className={cx("active", "table-col-active")}
                                >
                                  Hiển thị
                                </span>
                              </div>
                            </td>

                            <td className={cx("table-col")}>
                              <div className={cx("table-col-item")}>
                                {/* <Edit
                                  id={item.id}
                                  action={"UpdateCategories"}
                                  name={item.name}
                                /> */}

                                <Delete id={item.id} name={"categories"} />
                              </div>
                            </td>
                          </tr>
                        );
                      }, [])}
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

export default Category;
