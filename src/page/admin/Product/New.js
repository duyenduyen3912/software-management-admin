import { faBarsStaggered, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Add, Close } from "../../../component/Admin/Button";
import Header from "../../../component/Admin/Header/header";
import Heading from "../../../component/Admin/Heading";
import Nav from "../../../component/Admin/Nav";
import Title from "../../../component/Admin/Title";
import styles from "../Posts/NewPost.module.scss";

const cx = classNames.bind(styles);

function New() {
  const [avt, setAvt] = useState();
  useEffect(() => {
    return () => {
      avt && URL.revokeObjectURL(avt.preview);
    };
  }, [avt]);
  const handleChange = (e) => {
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
              <Heading title={"Thêm sản phẩm mới"} />
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
                          <input type="text" className={cx("post-input")} />
                        </div>

                        <div className={cx("post-item")}>
                          <div className={cx("post-title")}>Loại sản phẩm</div>
                          <input type="text" className={cx("post-input")} />
                        </div>
                        <div className={cx("post-item")}>
                          <div className={cx("post-title")}>Giá</div>
                          <input type="number" className={cx("post-input")} />
                        </div>
                        <div className={cx("post-item")}>
                          <div className={cx("post-title")}>Trạng thái</div>
                          <select className={cx("post-select", "post-input")}>
                            <option className={cx("post-option", "post-input")}>
                              Hiển thị
                            </option>
                            <option className={cx("post-option", "post-input")}>
                              Ẩn
                            </option>
                          </select>
                        </div>
                        <div className={cx("post-item")}>
                          <div className={cx("post-title")}>Nội dung*</div>
                          <textarea type="text" className={cx("post-input")} />
                        </div>
                      </div>
                      <div className={cx("post-btn")}>
                        <Add name={"Thêm mới"} />
                        <Close />
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
