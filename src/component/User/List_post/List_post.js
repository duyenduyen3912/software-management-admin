import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "../button/btn";
import classNames from "classnames/bind";
import styles from "../List_post/List_post.module.scss";
const cx = classNames.bind(styles);

function List_post() {
  const navigate = useNavigate();
  function shortenText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength - 3) + "...";
    } else {
      return text;
    }
  }
  // const [buttonStates, setButtonStates] = useState([
  //   "primary-hover-btn",
  //   "primary-btn",
  //   "primary-btn",
  //   "primary-btn",
  // ]);
  // const buttonClick = (index) => {
  //   const newButtonStates = buttonStates.map((buttonState, i) => {
  //     // console.log(buttonState);
  //     return i === index ? "primary-hover-btn" : "primary-btn";
  //   });

  //   setButtonStates(newButtonStates);
  // };
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  return (
    <>
      <div className={cx("list", "desktop-reponsive")}>
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
          <Row sm={2} xl={3} xxl={4} className={cx("list-produce")}>
            <Col className={cx("list-produce-block")}>
              <div className={cx("produce")}>
                <div className={cx("produce-element")}>
                  <img
                    className={cx("img-produce")}
                    src={require("../../../assets/img_produce.jpg")}
                  />
                  <div className={cx("infor")}>
                    <p className={cx("title")}>ADOBE PHOTOSHOP</p>
                    <div className={cx("admin-block")}>
                      <label className={cx("admin")}>ADMIN</label>
                      <label className={cx("bought")}>
                        {" "}
                        Lượt đọc: <label className="bought">25</label>{" "}
                      </label>
                    </div>

                    <p className={cx("des")}>
                      Mô tả:
                      {shortenText(
                        "Công cụ hỗ trợ trong việc chỉnh sửa ảnh, phục vụ nhu cầu của mọi người, đặc biệt là những người làm trong ngành thiết kế",
                        60
                      )}
                    </p>
                  </div>
                  <div className={cx("block-btn")}>
                    <div className={cx("produce-btn")}>
                      <Button
                        className={cx("btn-see-detail")}
                        onClick={() => navigate("/post")}
                      >
                        <p className={cx("text-produce-btn")}>Xem chi tiết</p>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col className={cx("list-produce-block")}>
              <div className={cx("produce")}>
                <div className={cx("produce-element")}>
                  <img
                    className={cx("img-produce")}
                    src={require("../../../assets/img_produce.jpg")}
                  />
                  <div className={cx("infor")}>
                    <p className={cx("title")}>ADOBE PHOTOSHOP</p>
                    <div className={cx("admin-block")}>
                      <label className={cx("admin")}>ADMIN</label>
                      <label className={cx("bought")}>
                        {" "}
                        Lượt đọc: <label className="bought">25</label>{" "}
                      </label>
                    </div>

                    <p className={cx("des")}>
                      Mô tả:
                      {shortenText(
                        "Công cụ hỗ trợ trong việc chỉnh sửa ảnh, phục vụ nhu cầu của mọi người, đặc biệt là những người làm trong ngành thiết kế",
                        60
                      )}
                    </p>
                  </div>
                  <div className={cx("block-btn")}>
                    <div className={cx("produce-btn")}>
                      <Button className={cx("btn-see-detail")}>
                        <p className={cx("text-produce-btn")}>Xem chi tiết</p>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col className={cx("list-produce-block")}>
              <div className={cx("produce")}>
                <div className={cx("produce-element")}>
                  <img
                    className={cx("img-produce")}
                    src={require("../../../assets/img_produce.jpg")}
                  />
                  <div className={cx("infor")}>
                    <p className={cx("title")}>ADOBE PHOTOSHOP</p>
                    <div className={cx("admin-block")}>
                      <label className={cx("admin")}>ADMIN</label>
                      <label className={cx("bought")}>
                        {" "}
                        Lượt đọc: <label className="bought">25</label>{" "}
                      </label>
                    </div>

                    <p className={cx("des")}>
                      Mô tả:
                      {shortenText(
                        "Công cụ hỗ trợ trong việc chỉnh sửa ảnh, phục vụ nhu cầu của mọi người, đặc biệt là những người làm trong ngành thiết kế",
                        60
                      )}
                    </p>
                  </div>
                  <div className={cx("block-btn")}>
                    <div className={cx("produce-btn")}>
                      <Button className={cx("btn-see-detail")}>
                        <p className={cx("text-produce-btn")}>Xem chi tiết</p>
                      </Button>
                    </div>

                    {/*
                     */}
                  </div>
                </div>
              </div>
            </Col>
            <Col className={cx("list-produce-block")}>
              <div className={cx("produce")}>
                <div className={cx("produce-element")}>
                  <img
                    className={cx("img-produce")}
                    src={require("../../../assets/img_produce.jpg")}
                  />
                  <div className={cx("infor")}>
                    <p className={cx("title")}>ADOBE PHOTOSHOP</p>
                    <div className={cx("admin-block")}>
                      <label className={cx("admin")}>ADMIN</label>
                      <label className={cx("bought")}>
                        {" "}
                        Lượt đọc: <label className="bought">25</label>{" "}
                      </label>
                    </div>

                    <p className={cx("des")}>
                      Mô tả:
                      {shortenText(
                        "Công cụ hỗ trợ trong việc chỉnh sửa ảnh, phục vụ nhu cầu của mọi người, đặc biệt là những người làm trong ngành thiết kế",
                        60
                      )}
                    </p>
                  </div>
                  <div className={cx("block-btn")}>
                    <div className={cx("produce-btn")}>
                      <Button className={cx("btn-see-detail")}>
                        <p className={cx("text-produce-btn")}>Xem chi tiết</p>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col className={cx("list-produce-block")}>
              <div className={cx("produce")}>
                <div className={cx("produce-element")}>
                  <img
                    className={cx("img-produce")}
                    src={require("../../../assets/img_produce.jpg")}
                  />
                  <div className={cx("infor")}>
                    <p className={cx("title")}>ADOBE PHOTOSHOP</p>
                    <div className={cx("admin-block")}>
                      <label className={cx("admin")}>ADMIN</label>
                      <label className={cx("bought")}>
                        {" "}
                        Lượt đọc: <label className="bought">25</label>{" "}
                      </label>
                    </div>

                    <p className={cx("des")}>
                      Mô tả:
                      {shortenText(
                        "Công cụ hỗ trợ trong việc chỉnh sửa ảnh, phục vụ nhu cầu của mọi người, đặc biệt là những người làm trong ngành thiết kế",
                        60
                      )}
                    </p>
                  </div>
                  <div className={cx("block-btn")}>
                    <div className={cx("produce-btn")}>
                      <Button className={cx("btn-see-detail")}>
                        <p className={cx("text-produce-btn")}>Xem chi tiết</p>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col className={cx("list-produce-block")}>
              <div className={cx("produce")}>
                <div className={cx("produce-element")}>
                  <img
                    className={cx("img-produce")}
                    src={require("../../../assets/img_produce.jpg")}
                  />
                  <div className={cx("infor")}>
                    <p className={cx("title")}>ADOBE PHOTOSHOP</p>
                    <div className={cx("admin-block")}>
                      <label className={cx("admin")}>ADMIN</label>
                      <label className={cx("bought")}>
                        {" "}
                        Lượt đọc: <label className="bought">25</label>{" "}
                      </label>
                    </div>

                    <p className={cx("des")}>
                      Mô tả:
                      {shortenText(
                        "Công cụ hỗ trợ trong việc chỉnh sửa ảnh, phục vụ nhu cầu của mọi người, đặc biệt là những người làm trong ngành thiết kế",
                        60
                      )}
                    </p>
                  </div>
                  <div className={cx("block-btn")}>
                    <div className={cx("produce-btn")}>
                      <Button className={cx("btn-see-detail")}>
                        <p className={cx("text-produce-btn")}>Xem chi tiết</p>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default List_post;
