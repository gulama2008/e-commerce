import { useState } from "react";
import { Carousel } from "antd";
import styles from "./CarouselBox.module.scss";
import banner0 from "../../assets/banner0.webp";
import banner1 from "../../assets/banner1.webp";
import banner2 from "../../assets/banner2.webp";
import banner3 from "../../assets/banner3.jpeg";

const CarouselBox = () => {
  const carouselImages = [banner0, banner1, banner2, banner3];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const previousImg = () => {
    setCurrentImgIndex((currentImgIndex + 3) % 4);
  };
  const nextImg = () => {
    setCurrentImgIndex((currentImgIndex + 1) % 4);
  };
  console.log(previousImg, nextImg);

  return (
    <Carousel autoplay>
      <div className={styles.container}>
        <img src={carouselImages[0]} alt="" className={styles.img} />
      </div>
      <div className={styles.container}>
        <img src={carouselImages[1]} alt="" className={styles.img} />
      </div>
      <div className={styles.container}>
        <img src={carouselImages[2]} alt="" className={styles.img} />
      </div>
      <div className={styles.container}>
        <img src={carouselImages[3]} alt="" className={styles.img} />
      </div>
    </Carousel>
  );
};

export default CarouselBox;
