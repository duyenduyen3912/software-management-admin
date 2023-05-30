import { useState } from "react";
import Button from "../button/btn";
import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classNames from "classnames/bind";
import styles from "../List_post/List_post.module.scss";
const cx = classNames.bind(styles);
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  function shortenText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength - 3) + "...";
    } else {
      return text;
    }
  }
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  return (
    <div className={cx("slick-block")}>
      {" "}
      <Slider {...settings}>
        <div className={cx("slick-produce")}>
          <div className={cx("list-produce-block")}>
            <div className={cx("produce")}>
              <div className={cx("produce-element")}>
                <img
                  className={cx("img-produce")}
                  src={require("../../../assets/img_produce.jpg")}
                />
                <div className={cx("infor")}>
                  <p className={cx("title")}>ADOBE PHOTOSHOP</p>
                  <div className={cx("author-view-block")}>
                    <label className={cx("author")}>ADMIN</label>
                    <label className={cx("view")}>
                      {" "}
                      Lượt đọc <label className="view">25</label>{" "}
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
                    <Button className={cx("primary-btn")}>
                      <p className={cx("text-produce-btn")}>Xem chi tiết</p>
                    </Button>
                  </div>
                  <div className={cx("produce-btn")}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("slick-produce")}>
          <div className={cx("list-produce-block")}>
            <div className={cx("produce")}>
              <div className={cx("produce-element")}>
                <img
                  className={cx("img-produce")}
                  src={require("../../../assets/img_produce.jpg")}
                />
                <div className={cx("infor")}>
                  <p className={cx("title")}>ADOBE PHOTOSHOP</p>
                  <div className={cx("author-view-block")}>
                    <label className={cx("author")}>ADMIN</label>
                    <label className={cx("view")}>
                      {" "}
                      Lượt đọc <label className="view">25</label>{" "}
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
                    <Button className={cx("primary-btn")}>
                      <p className={cx("text-produce-btn")}>Xem chi tiết</p>
                    </Button>
                  </div>
                  <div className={cx("produce-btn")}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("slick-produce")}>
          <div className={cx("list-produce-block")}>
            <div className={cx("produce")}>
              <div className={cx("produce-element")}>
                <img
                  className={cx("img-produce")}
                  src={require("../../../assets/img_produce.jpg")}
                />
                <div className={cx("infor")}>
                  <p className={cx("title")}>ADOBE PHOTOSHOP</p>
                  <div className={cx("author-view-block")}>
                    <label className={cx("author")}>ADMIN</label>
                    <label className={cx("view")}>
                      {" "}
                      Lượt đọc <label className="view">25</label>{" "}
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
                    <Button className={cx("primary-btn")}>
                      <p className={cx("text-produce-btn")}>Xem chi tiết</p>
                    </Button>
                  </div>
                  <div className={cx("produce-btn")}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("slick-produce")}>
          <div className={cx("list-produce-block")}>
            <div className={cx("produce")}>
              <div className={cx("produce-element")}>
                <img
                  className={cx("img-produce")}
                  src={require("../../../assets/img_produce.jpg")}
                />
                <div className={cx("infor")}>
                  <p className={cx("title")}>ADOBE PHOTOSHOP</p>
                  <div className={cx("author-view-block")}>
                    <label className={cx("author")}>ADMIN</label>
                    <label className={cx("view")}>
                      {" "}
                      Lượt đọc <label className="view">25</label>{" "}
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
                    <Button className={cx("primary-btn")}>
                      <p className={cx("text-produce-btn")}>Xem chi tiết</p>
                    </Button>
                  </div>
                  <div className={cx("produce-btn")}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("slick-produce")}>
          <div className={cx("list-produce-block")}>
            <div className={cx("produce")}>
              <div className={cx("produce-element")}>
                <img
                  className={cx("img-produce")}
                  src={require("../../../assets/img_produce.jpg")}
                />
                <div className={cx("infor")}>
                  <p className={cx("title")}>ADOBE PHOTOSHOP</p>
                  <div className={cx("author-view-block")}>
                    <label className={cx("author")}>ADMIN</label>
                    <label className={cx("view")}>
                      {" "}
                      Lượt đọc <label className="view">25</label>{" "}
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
                    <Button className={cx("primary-btn")}>
                      <p className={cx("text-produce-btn")}>Xem chi tiết</p>
                    </Button>
                  </div>
                  <div className={cx("produce-btn")}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("slick-produce")}>
          <div className={cx("list-produce-block")}>
            <div className={cx("produce")}>
              <div className={cx("produce-element")}>
                <img
                  className={cx("img-produce")}
                  src={require("../../../assets/img_produce.jpg")}
                />
                <div className={cx("infor")}>
                  <p className={cx("title")}>ADOBE PHOTOSHOP</p>
                  <div className={cx("author-view-block")}>
                    <label className={cx("author")}>ADMIN</label>
                    <label className={cx("view")}>
                      {" "}
                      Lượt đọc <label className="view">25</label>{" "}
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
                    <Button className={cx("primary-btn")}>
                      <p className={cx("text-produce-btn")}>Xem chi tiết</p>
                    </Button>
                  </div>
                  <div className={cx("produce-btn")}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
