import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

import Button from "../button/btn";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import classNames from "classnames/bind";
import styles from "../List/List.module.scss";
const cx = classNames.bind(styles);

function List() {
  console.log(localStorage.getItem("jwt"));
  const navigate = useNavigate();
  function shortenText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength - 3) + "...";
    } else {
      return text;
    }
  }
  //fetch API
  const [products, setShowProducts] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [status, setStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  //
  const [activeButton, setActiveButton] = useState(1);
  var myHeaders = new Headers();
  myHeaders.append("Host", "chippisoft.com");

  myHeaders.append("Authorization", localStorage.getItem("jwt"));
  var formdata = new FormData();
  // formdata.append("username", "xuanninh1");
  // formdata.append("password", "xuanninh1");
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  //panigate
  const handlePageClick = (selectedPage) => {
    console.log(++selectedPage.selected);
    setCurrentPage(selectedPage.selected);
  };

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  // console.log(jsonObj);
  const fetchData = () => {
    fetch(
      `https://chippisoft.com/API/Getallproducts.php?page=${currentPage}`,
      requestOptions
    )
      .then((response) => response.text())
      // .then((data) => {
      //   //  console.log("day la data")
      //   console.log(data);
      //   JSON.parse(data);
      // })
      .then((result) => {
        const jsonObj = JSON.parse(result);
        console.log(jsonObj.status);
        setStatus(jsonObj.status);
        // setTotalPage(result.total_pages);
        setTotalPage(jsonObj.total_pages);
        setShowProducts(jsonObj.data);
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(fetchData, [currentPage]);

  return (
    <>
      <div id="container" className={cx("list", "desktop-reponsive")}>
        <div className={cx("list-block")}>
          <div className={cx("list-button")}>
            <div className={cx("btn")}>
              <Button
                className={cx({
                  "btn-see-detail": true,
                  "btn-buy-now": activeButton === 1,
                })}
                onClick={() => handleButtonClick(1)}
              >
                <p className={cx("text-btn")}>Tất cả</p>
              </Button>
            </div>
            <div className={cx("btn")}>
              <Button
                className={cx({
                  "btn-see-detail": true,
                  "btn-buy-now": activeButton === 2,
                })}
                onClick={() => handleButtonClick(2)}
              >
                <p className={cx("text-btn")}>Tool thiết kế</p>
              </Button>
            </div>
            <div className={cx("btn")}>
              <Button
                className={cx({
                  "btn-see-detail": true,
                  "btn-buy-now": activeButton === 3,
                })}
                onClick={() => handleButtonClick(3)}
              >
                <p className={cx("text-btn")}>Tool facebook</p>
              </Button>
            </div>
            <div className={cx("btn")}>
              <Button
                className={cx({
                  "btn-see-detail": true,
                  "btn-buy-now": activeButton === 4,
                })}
                onClick={() => handleButtonClick(4)}
              >
                <p className={cx("text-btn")}>Tool zalo</p>
              </Button>
            </div>
            <div className={cx("btn")}>
              <Button
                className={cx({
                  "btn-see-detail": true,
                  "btn-buy-now": activeButton === 5,
                })}
                onClick={() => handleButtonClick(5)}
              >
                <p className={cx("text-btn")}>Giải captcha</p>
              </Button>
            </div>
            <div className={cx("btn")}>
              <Button
                className={cx({
                  "btn-see-detail": true,
                  "btn-buy-now": activeButton === 6,
                })}
                onClick={() => handleButtonClick(6)}
              >
                <p className={cx("text-btn")}>Tool twitter</p>
              </Button>
            </div>
          </div>
          {!products ? (
            <div>Vui lòng đăng nhập để xem sản phẩm.</div>
          ) : (
            <Row xs={1} sm={2} xl={3} xxl={4} className={cx("list-produce")}>
              {products.map((product) => {
                return (
                  <Col className={cx("list-produce-block")} key={product.id}>
                    <div className={cx("produce")}>
                      <div className={cx("produce-element")}>
                        <img
                          className={cx("img-produce")}
                          src={require("../../../assets/img_produce.jpg")}
                        />
                        <div className={cx("infor")}>
                          <p className={cx("title")}>
                            {" "}
                            {shortenText(JSON.stringify(product.name), 15)}
                          </p>
                          <div className={cx("price-bought-block")}>
                            <label className={cx("price")}>
                              {product.price}{" "}
                              <label className={cx("price")}>Đ</label>
                            </label>
                            <label className={cx("bought")}>
                              {" "}
                              Đã mua: <label className="bought">25</label>{" "}
                            </label>
                          </div>

                          <p className={cx("des")}>
                            Mô tả:
                            {shortenText(JSON.stringify(product.content), 30)}
                          </p>
                        </div>
                        <div className={cx("block-btn")}>
                          <Row>
                            <Col>
                              <div className={cx("produce-btn")}>
                                <Button
                                  className={cx("btn-see-detail")}
                                  onClick={() => navigate("/detail")}
                                >
                                  <p className={cx("text-produce-btn")}>
                                    Xem chi tiết
                                  </p>
                                </Button>
                              </div>
                            </Col>
                            <Col>
                              <div className={cx("produce-btn")}>
                                <Button className={cx("btn-buy-now")}>
                                  <p className={cx("text-produce-btn")}>
                                    Mua ngay
                                  </p>
                                </Button>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                    {/* <div> {product.name}</div> */}
                  </Col>
                );
              })}
            </Row>
          )}
        </div>
        <div className={cx("paging")}>
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={totalPage}
            onPageChange={handlePageClick}
            containerClassName={cx("pagination")}
            nextClassName={"page-item"}
            previousClassName={"page-item"}
            previousLinkClassName={cx("page-link", "page-link-item")}
            pageClassName={cx("page-item")}
            pageLinkClassName={cx("page-link", "page-link-item")}
            nextLinkClassName={cx("page-link", "page-link-item")}
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName={"page-link"}
            activeClassName={cx("active", "page-link-item-selected")}
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </>
  );
}

export default List;
