import React, { Component } from "react";
import Slider from "react-slick";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classNames from "classnames/bind";
import styles from "../Detail/Detail.module.scss";

const cx = classNames.bind(styles);
export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div className={cx("block-img-detail")}>
        <div className={cx("img-detail-desktop")}>
          <Row>
            <Col sm={3}>
              <Slider
                asNavFor={this.state.nav1}
                ref={(slider) => (this.slider2 = slider)}
                dots={false}
                slidesToShow={3}
                slidesToScroll={1}
                swipeToSlide={true}
                focusOnSelect={true}
                vertical={true}
                verticalSwiping={true}
                // adaptiveHeight={true}
              >
                <div className={cx("img-block")}>
                  <img
                    className={cx("sub-img-detail")}
                    src={require("../../../assets/1.jpg")}
                  />
                </div>
                <div className={cx("img-block")}>
                  <img
                    className={cx("sub-img-detail")}
                    src={require("../../../assets/1.jpg")}
                  />
                </div>
                <div className={cx("img-block")}>
                  <img
                    className={cx("sub-img-detail")}
                    src={require("../../../assets/2.jpg")}
                  />
                </div>
                <div className={cx("img-block")}>
                  <img
                    className={cx("sub-img-detail")}
                    src={require("../../../assets/3.jpg")}
                  />
                </div>
              </Slider>
            </Col>
            <Col sm={9}>
              <Slider
                asNavFor={this.state.nav2}
                ref={(slider) => (this.slider1 = slider)}
              >
                <div>
                  <img
                    className={cx("img-detail")}
                    src={require("../../../assets/1.jpg")}
                  />
                </div>
                <div>
                  <img
                    className={cx("img-detail")}
                    src={require("../../../assets/1.jpg")}
                  />
                </div>
                <div>
                  <img
                    className={cx("img-detail")}
                    src={require("../../../assets/2.jpg")}
                  />
                </div>
                <div>
                  <img
                    className={cx("img-detail")}
                    src={require("../../../assets/bk_sign.jpeg")}
                  />
                </div>
              </Slider>
            </Col>
          </Row>
        </div>
        <div className={cx("img-detail-mobile")}>
          <Slider
            asNavFor={this.state.nav2}
            ref={(slider) => (this.slider1 = slider)}
          >
            <div>
              <img
                className={cx("img-detail")}
                src={require("../../../assets/1.jpg")}
              />
            </div>
            <div>
              <img
                className={cx("img-detail")}
                src={require("../../../assets/1.jpg")}
              />
            </div>
            <div>
              <img
                className={cx("img-detail")}
                src={require("../../../assets/2.jpg")}
              />
            </div>
            <div>
              <img
                className={cx("img-detail")}
                src={require("../../../assets/bk_sign.jpeg")}
              />
            </div>
          </Slider>
          <Slider
            asNavFor={this.state.nav1}
            ref={(slider) => (this.slider2 = slider)}
            dots={false}
            slidesToShow={3}
            slidesToScroll={1}
            swipeToSlide={true}
            focusOnSelect={true}
            // vertical={true}
            // verticalSwiping={true}
          >
            <div className={cx("img-block")}>
              <img
                className={cx("sub-img-detail")}
                src={require("../../../assets/1.jpg")}
              />
            </div>
            <div className={cx("img-block")}>
              <img
                className={cx("sub-img-detail")}
                src={require("../../../assets/1.jpg")}
              />
            </div>
            <div className={cx("img-block")}>
              <img
                className={cx("sub-img-detail")}
                src={require("../../../assets/2.jpg")}
              />
            </div>
            <div className={cx("img-block")}>
              <img
                className={cx("sub-img-detail")}
                src={require("../../../assets/bk_sign.jpeg")}
              />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
