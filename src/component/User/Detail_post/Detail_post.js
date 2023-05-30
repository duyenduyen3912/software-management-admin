import { useState } from "react";
import Button from "../button/btn";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SimpleSlider from "./Slick_post";
import classNames from "classnames/bind";
import styles from "../Detail_post/Detail_post.module.scss";

const cx = classNames.bind(styles);

function Detail_post() {
  return (
    <div className={cx("block")}>
      <div className={cx("img-block")}>
        <img
          className={cx("img")}
          src={require("../../../assets/bk_sign.jpeg")}
        />
      </div>
      <div className={cx("post-content-block")}>
        <div className={cx("title")}>The Orbitians</div>
        <div className={cx("date-submit")}>Minted on Sep 30, 2022</div>
        <div className={cx("author-block")}>
          <p className={cx("text-author")}>Tác giả</p>
          <p className={cx("author-name")}>ADMIN</p>
        </div>
        <div className={cx("text-post")}>
          <p className={cx("text-content")}>Bài viết</p>
          <p className={cx("content")} style={{ whiteSpace: "pre-line" }}>
            The Orbitians is a collection of 10,000 unique NFTs on the
            Ethereumblockchain. There are all sorts of beings in the NFT
            Universe. The most advanced and friendly of the bunch are Orbitians.
            They live in a metal space machines, high up in the sky and only
            have one foot on Earth. These Orbitians are a peaceful race, but
            they have been at war with a group of invaders for many generations.
            The invaders are called Upside-Downs, because of their inverted
            bodies that live on the ground, yet do not know any other way to be.
            Upside-Downs believe that they will be able to win this war if they
            could only get an eye into Orbitian territory, so they've taken to
            make human beings their target.
          </p>
        </div>
      </div>
      <div className={cx("other-post")}>
        {/* <div className={cx("title-other-post")}>Một số bài viết khác</div>
        <SimpleSlider /> */}
      </div>
    </div>
  );
}

export default Detail_post;
