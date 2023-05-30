import { faBarsStaggered, faUpload } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Add, Close } from "../../../../component/Admin/Button";
import Header from "../../../../component/Admin/Header/header";
import Heading from "../../../../component/Admin/Heading";
import Nav from "../../../../component/Admin/Nav";
import Title from "../../../../component/Admin/Title";
import { api } from "../../../../constants";

import styles from "../../Posts/NewPost.module.scss";

const cx = classNames.bind(styles);

function NewCategory() {
  const [categories, setCategories] = useState([
    {
      name: "",
      price: "",
      content: "",
      category_id: "",
      status: "",
    },
  ]);
  const [addCategory, setAddCategory] = useState({
    name: "",
    description: "",
    status: "1",
  });
  const param = useParams();
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
        setCategories(data.data);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className={cx("wrapper")}>
      <Row style={{ padding: "0" }}>
        <div className={cx("col-custom")}>
          <Nav path={"categories/category"} />
        </div>

        <Col className="col-lg-12" id="content">
          <Header />
          <div className={cx("content")}>
            {" "}
            <Title title={"Sản phẩm"} icon={faBarsStaggered} />
            <div className={cx("container-wrapper")}>
              <Heading
                title={param.id > 0 ? "Sửa chuyên mục" : "Thêm chuyên mục mới"}
              />
              <div className={cx("container-posts")}>
                {" "}
                <div className={cx("post-infor")}>
                  <span className={cx("post-heading")}>
                    Thông tin chuyên mục
                  </span>
                  <div>
                    <div className={cx("post-item")}>
                      <div className={cx("post-title")}>Tên chuyên mục</div>
                      <input
                        type="text"
                        className={cx("post-input")}
                        onChange={(e) => {
                          setAddCategory({
                            ...addCategory,
                            name: e.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className={cx("post-item")}>
                      <div className={cx("post-title")}>Trạng thái</div>
                      <select
                        className={cx("post-select", "post-input")}
                        onChange={(e) => {
                          setAddCategory({
                            ...addCategory,
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
                        onChange={(e) => {
                          setAddCategory({
                            ...addCategory,
                            description: e.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className={cx("post-btn")}>
                    {param.id >= 0 ? (
                      <Add
                        data={addCategory}
                        name={"Sửa"}
                        action={"UpdateCategories"}
                      />
                    ) : (
                      <Add
                        data={addCategory}
                        name={"Thêm"}
                        action={"AddCategories"}
                      />
                    )}
                    <Close />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default NewCategory;
