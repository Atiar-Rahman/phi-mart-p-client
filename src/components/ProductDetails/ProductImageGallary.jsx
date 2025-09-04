import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Thumbs } from "swiper/modules";

import defaultImage from "../../assets/default prduct image.png";
const ProductImageGallary = ({images,productName}) => {
    // eslint-disable-next-line no-unused-vars
    const [thumbsSwiper,setThumbsSwiper] = useState(null)
    const displayImages = images.length > 0 ? images : [defaultImage];
  return (
    <div className="rounded-lg border overflow-hidden">
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className="product-main-slider"
      >
        {displayImages.map((imageobj, index) => (
          <SwiperSlide key={index}>
            <img src={imageobj.image} alt={productName} className="h-full w-full object-contain" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImageGallary;
