import { useState } from "react";
import Button from "../button/btn";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AsNavFor from "../img_detail/img_detail";
import classNames from "classnames/bind";
import styles from "../Detail/Detail.module.scss";

const cx = classNames.bind(styles);

function Detail() {
  const [quantity, setQuantity] = useState(30);

  const handleIncrement = () => {
    var num = +quantity;

    setQuantity(num + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (selectedImage) => {
    setSelectedImage(selectedImage);
    console.log(typeof selectedImage);
  };
  var link_img = '"' + selectedImage + '" ';
  return (
    <div className={cx("block")}>
      <Row>
        <Col xl={7}>
          <AsNavFor />
        </Col>

        <Col xl={5}>
          <div className={cx("infor-detail")}>
            <div className={cx("nav")}>
              <p>Sản phẩm / thiết kế</p>
            </div>
            <div className={cx("title")}>Adobe Photoshop CS6</div>
            <div className={cx("price")}>$2.000.000</div>
            <div className={cx("introduce")}>
              <p>
                Sản phẩm hỗ trợ thiết kế ảnh 2D, 3D, vector với nhiều tính năng
                ưu việt vjppro
              </p>
            </div>{" "}
            <div>
              <p>Số ngày: </p>
            </div>
            <div className={cx("day")}>
              <Button className={cx("primary-btn")} onClick={handleDecrement}>
                -
              </Button>

              <input
                className={cx("input-day")}
                type="number"
                value={quantity}
                onChange={(quantity) => setQuantity(quantity.target.value)}
              />
              <Button className={cx("primary-btn")} onClick={handleIncrement}>
                +
              </Button>
            </div>
            <div className={cx("button-block")}>
              <Button className={cx("buy-now-btn")}>
                {" "}
                <p className={cx("text-buy-now")}>MUA NGAY</p>{" "}
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <div className={cx("des")}>
        <p className={cx("title-des")}>Mô tả chi tiết</p>
        <p className={cx("des-content")}>viết đoạn văn ngắn tại đây</p>
      </div>
    </div>
  );
}

export default Detail;
