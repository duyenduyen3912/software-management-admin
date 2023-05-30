import { faBackward, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";

import { useLocation } from "react-router-dom";
import { api } from "../../../constants";
import { Add, Delete, Edit, View } from "../../../component/Admin/Button";
import Header from "../../../component/Admin/Header/header";
import Heading from "../../../component/Admin/Heading";
import Nav from "../../../component/Admin/Nav";
import Show from "../../../component/Admin/Show";
import Title from "../../../component/Admin/Title";
import styles from "./Product.module.scss";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

function Product() {
  // route
  const location = useLocation();
  const name = location.pathname;
  let router = name.substring(1);

  // state
  const [product, setProduct] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  //handleClick
  const handlePageClick = (selectedPage) => {
    console.log(++selectedPage.selected);
    setCurrentPage(selectedPage.selected);
  };

  // fetch
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Host", "chippisoft.com");

    var formData = new FormData();
    formData.append("username", "duyenduyen");
    formData.append("password", "Duyen123!");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      // body: formData,
      redirect: "follow",
    };
    fetch(`${api.ListProduct}${currentPage}`, requestOptions)
      .then((response) => response.text())
      .then((data) => JSON.parse(data))
      .then((result) => {
        setTotalPage(result.total_pages);
        setProduct(result.data);
      })
      .catch((error) => console.log("error", error));
  }, [currentPage]);

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
                <Heading title={"Danh sách sản phẩm"} />
                <Add
                  name={"Thêm mới"}
                  action={"Redirect"}
                  data={"product/new"}
                />
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
                          <div className={cx("table-col-item")}>
                            {" "}
                            Tên sản phẩm
                          </div>
                        </th>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}> Phân loại</div>
                        </th>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}> Giá</div>
                        </th>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}> Nội dung</div>
                        </th>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}>
                            {" "}
                            Trạng thái
                          </div>
                        </th>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}> Chi tiết</div>
                        </th>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}> Thao tác</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.map((item, index) => (
                        <tr className={cx("table-line-item")}>
                          <td className={cx("table-col")}>
                            <div className={cx("table-col-item")}>
                              {currentPage != 1
                                ? `${currentPage.toString()}${index.toString()}`
                                : ++index}
                            </div>
                          </td>

                          <td className={cx("table-col")}>
                            <div className={cx("table-col-item")}>
                              {item.name}
                            </div>
                          </td>
                          <td className={cx("table-col")}>
                            <div className={cx("table-col-item")}>Thiết kế</div>
                          </td>
                          <td className={cx("table-col")}>
                            <div className={cx("table-col-item")}>
                              {item.price}
                            </div>
                          </td>
                          <td className={cx("table-col")}>
                            <div className={cx("table-col-item")}>
                              {item.content}
                            </div>
                          </td>
                          <td className={cx("table-col")}>
                            <div className={cx("table-col-item")}>
                              <span className={cx("table-col-active")}>
                                {item.status ? "Hiển thị" : "Ẩn"}
                              </span>
                            </div>
                          </td>
                          <td className={cx("table-col")}>
                            <div className={cx("table-col-item")}>
                              <span className={cx("item-sold")}>
                                Đã xem: 22
                              </span>
                              <br />
                              <span className={cx("item-seen")}>
                                Đã bán: 22
                              </span>
                            </div>
                          </td>

                          <td className={cx("table-col")}>
                            <div className={cx("table-col-item")}>
                              <View />
                              <br />
                              <Edit />
                              <br />
                              <Delete id={item.id} />
                              <br />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <div className={cx("paging")}>
                    <ReactPaginate
                      previousLabel={"<"}
                      nextLabel={">"}
                      pageCount={totalPage}
                      onPageChange={handlePageClick}
                      containerClassName={"pagination"}
                      previousLinkClassName={cx(
                        "pagination-previous",
                        "page-link"
                      )}
                      nextLinkClassName={cx("pagination-previous", "page-link")}
                      // previousClassName={cx("navigate-btn")}
                      // nextClassName={cx("navigate-btn")}
                      disabledClassName={"disabled"}
                      activeClassName={"active"}
                      activeLinkClassName={cx("pagination-item", "active")}
                      pageLinkClassName={cx("page-link-item")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Product;
