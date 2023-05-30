import { faBarsStaggered, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Add, Close, Edit } from "../../../component/Admin/Button";
import Header from "../../../component/Admin/Header/header";
import Heading from "../../../component/Admin/Heading";
import Nav from "../../../component/Admin/Nav";
import Title from "../../../component/Admin/Title";
import { api } from "../../../constants";
import styles from "../Posts/NewPost.module.scss";

const cx = classNames.bind(styles);

function New() {
  const param = useParams();

  const [avt, setAvt] = useState();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    content: "",
    category_id: "",
    status: "1",
    stt: "1",
    discount: "",
    version: "",
    id: param.id,
  });

  if (param.id > 0) document.title = "Edit";
  else document.title = "Add";

  var myHeaders = new Headers();
  myHeaders.append("Authorization", localStorage.getItem("jwt"));
  myHeaders.append("Host", "chippisoft.com");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    fetch(`${api.ProductDetail}?id=${param.id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        setProduct(data.data[0]);
      })
      .catch((error) => console.log("error", error));
  }, []);
  useEffect(() => {
    return () => {
      avt && URL.revokeObjectURL(avt.preview);
    };
  }, [avt]);
  const handleChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    console.log(file.preview);
    setAvt(file);
    e.target.value = null;
  };

  return (
    <div className={cx("wrapper")}>
      <Row style={{ padding: "0" }}>
        <div className={cx("col-custom")}>
          <Nav path={"product/list"} />
        </div>

        <Col className="col-lg-12" id="content">
          <Header />
          <div className={cx("content")}>
            <Title title={"Sản phẩm"} icon={faBarsStaggered} />
            <div className={cx("container-wrapper")}>
              <Heading
                title={
                  param.id >= 0 ? "Sửa thông tin sản phẩm" : "Thêm sản phẩm mới"
                }
              />
              <div className={cx("container-posts")}>
                {" "}
                <Row>
                  <Col xs={3}>
                    <div className={cx("post-img-wrap")}>
                      <label for="file" className={cx("for-input-file")}>
                        <FontAwesomeIcon
                          className={cx("file-icon")}
                          icon={faUpload}
                        />
                        <br />
                        Dung lượng file tối đa 1MB. Định dạng: JPG, PNG
                      </label>
                      <br />
                      <input
                        type="file"
                        className={cx("post-img")}
                        id="file"
                        name="file"
                        onChange={handleChange}
                      />
                      <br />
                      {avt && <img src={avt.preview} width="70%" />}
                    </div>
                  </Col>
                  <Col sm={8}>
                    {" "}
                    <div className={cx("post-infor")}>
                      <span className={cx("post-heading")}>
                        Thông tin sản phẩm
                      </span>
                      <div>
                        <div className={cx("post-item")}>
                          <div className={cx("post-title")}>Tên sản phẩm</div>
                          <input
                            type="text"
                            className={cx("post-input")}
                            defaultValue={product.name}
                            onChange={(e) => {
                              setProduct({
                                ...product,
                                name: e.target.value,
                              });
                            }}
                          />
                        </div>

                        <div className={cx("post-item")}>
                          <div className={cx("post-title")}>Loại sản phẩm</div>
                          <input
                            type="text"
                            className={cx("post-input")}
                            defaultValue={product.category_id}
                            onChange={(e) => {
                              setProduct({
                                ...product,
                                category_id: e.target.value,
                              });
                            }}
                          />
                        </div>
                        <div className={cx("post-item")}>
                          <div className={cx("post-title")}>Version</div>
                          <input
                            type="text"
                            className={cx("post-input")}
                            defaultValue={product.version}
                            onChange={(e) => {
                              setProduct({
                                ...product,
                                version: e.target.value,
                              });
                            }}
                          />
                        </div>
                        <div className={cx("post-item")}>
                          <div className={cx("post-title")}>Discount</div>
                          <input
                            type="number"
                            className={cx("post-input")}
                            defaultValue={product.discount}
                            onChange={(e) => {
                              setProduct({
                                ...product,
                                discount: e.target.value,
                              });
                            }}
                          />
                        </div>
                        <div className={cx("post-item")}>
                          <div className={cx("post-title")}>Giá</div>
                          <input
                            type="number"
                            className={cx("post-input")}
                            defaultValue={product.price}
                            onChange={(e) => {
                              setProduct({
                                ...product,
                                price: e.target.value,
                              });
                            }}
                          />
                        </div>
                        <div className={cx("post-item")}>
                          <div className={cx("post-title")}>Trạng thái</div>
                          <select
                            className={cx("post-select", "post-input")}
                            defaultValue={product.status}
                            onChange={(e) => {
                              setProduct({
                                ...product,
                                status: e.target.value,
                              });
                            }}
                          >
                            <option className={cx("post-option", "post-input")}>
                              1
                            </option>
                            <option className={cx("post-option", "post-input")}>
                              0
                            </option>
                          </select>
                        </div>
                        <div className={cx("post-item")}>
                          <div className={cx("post-title")}>Nội dung*</div>
                          <textarea
                            type="text"
                            className={cx("post-input")}
                            defaultValue={product.content}
                            onChange={(e) => {
                              setProduct({
                                ...product,
                                content: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div className={cx("post-btn")}>
                        {param.id >= 0 ? (
                          <Add data={product} name={"Sửa"} action={"Update"} />
                        ) : (
                          <Add data={product} name={"Thêm"} action={"Add"} />
                        )}

                        <Close name={"product"} />
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
  );
}

export default New;
