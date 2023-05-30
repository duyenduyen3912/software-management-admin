import { useState } from "react";
import Button from "../button/btn";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AsNavFor from "../img_detail/img_detail";
import classNames from "classnames/bind";
import styles from "../Detail/Detail.module.scss";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
//import Axios from "axios";
const cx = classNames.bind(styles);

function Detail() {
  const params = useParams();
  const id = params.id;
  const [product, setProduct] = useState([
    {
      name: "",
      price: "",
      content: "",
      category_id: "",
      status: "",
    },
  ]);
//  console.log(id);
  //console.log(prop.idDetail)
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
  var myHeaders = new Headers();
  myHeaders.append("Host", "chippisoft.com");
  myHeaders.append("Authorization", localStorage.getItem("jwt"));

  var formdata = new FormData();

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  

  const fetchDetail = () => {
    fetch(`https://chippisoft.com/API/Product.php?id=${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        // console.log(result);
        const jsonObj = JSON.parse(result);
        console.log(jsonObj.data)
        setProduct(jsonObj.data);

      })
      .catch((error) => console.log("error", error));
  };
  useEffect(fetchDetail, []);
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
              <p>Sản phẩm / {product[0].category_id}</p>
            </div>
            <div className={cx("title")}>{product[0].name}</div>
            <div className={cx("price")}>${product[0].price}</div>
            <div className={cx("discount")}>Đã bán:{product[0].discount}</div>
            {/* <div className={cx("introduce")}>
              <p>
              version: {product[0].version}
              </p>
            </div>{" "} */}
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
        <p className={cx("des-content")}>
         version: {product[0].version}
        </p>
        <p className={cx("des-content")}>
          {product[0].content}
        </p>
        <p className={cx("des-content")}>
         
        </p>
      </div>
    </div>
  );
}

export default Detail;
