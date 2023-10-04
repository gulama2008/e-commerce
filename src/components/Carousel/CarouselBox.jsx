import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import styles from "./CarouselBox.module.scss";


const CarouselBox = () => {
  const carouselImages = [
    "src/assets/banner0.webp",
    "src/assets/banner1.webp",
    "src/assets/banner2.webp",
    "src/assets/banner3.jpeg",
  ];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  // useEffect(() => {
  //   console.log("test useeffect");
  //   let i = 0;
  //   let changeCarouselImage = () => {
  //     setInterval(() => {
  //       console.log("before change", i);
  //       setCurrentImgIndex(i % 4);
  //       i++;
  //       console.log("after change", i);
  //     }, 5000)
  //   };
  //   changeCarouselImage();
  //   return clearInterval(changeCarouselImage);
  // }, [currentImgIndex]);
  const previousImg = () => {
    setCurrentImgIndex((currentImgIndex + 3) % 4);
  };
  const nextImg = () => {
    setCurrentImgIndex((currentImgIndex + 1) % 4);
  };

  return (
    // <div className={styles.container}>
    //   <img src="src/assets/arrow-left-icon.png" alt="" onClick={previousImg} />
    //   <img
    //     src={carouselImages[currentImgIndex]}
    //     alt=""
    //     className={styles.img}
    //   />
    //   <img src="src/assets/arrow-right-icon.png" alt="" onClick={nextImg} />
    // </div>
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
