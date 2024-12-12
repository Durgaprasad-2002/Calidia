import React, { useEffect } from "react";
import "../index.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles.css";

import { useTranslation } from "react-i18next";

// Optimized image imports
import Img1 from "../../Images/CoverImages/cv1.webp";
import Img2 from "../../Images/CoverImages/cv2.webp";
import Img3 from "../../Images/CoverImages/cv3.webp";
import Img4 from "../../Images/CoverImages/cv4.webp";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

// Array of slider images
const sliderImageUrl = [Img1, Img2, Img3, Img4];

const Slider = () => {
  const { t } = useTranslation();

  // const [imagesLoaded, setImagesLoaded] = useState(false);

  // Use useEffect to ensure images are cached
  useEffect(() => {
    const loadImages = () => {
      const imagePromises = sliderImageUrl.map((imageUrl) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = imageUrl;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      Promise.all(imagePromises)
        .then(() => {
          // setImagesLoaded(true);
        })
        .catch((err) => console.error("Error loading images:", err));
    };

    loadImages();
  }, []);

  return (
    <div className="parent">
      {/* Overlay Text Section */}
      <div className="Text-over-outer">
        <div className="Text-over">
          <h3>
            <i>{t("footer_t1")}</i> {t("navbar_t1")}
          </h3>
          <p>{t("slider_t1")}</p>
        </div>
      </div>

      {/* Carousel Component */}
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={5000}
        swipeable={false}
        draggable={false}
        showDots={false}
        arrows={false}
        infinite
        customTransition="transform 0.5s ease-in-out, opacity 0.5s ease-in-out"
        transitionDuration={500}
        dotListClass="custom-dot-list-style"
        containerClass="carousel-container"
        keyBoardControl={true}
      >
        {sliderImageUrl.map((imageUrl, index) => (
          <div className="slider" key={index}>
            <img
              src={imageUrl}
              alt={`slider-Img-${index}`}
              loading="lazy"
              tabIndex="-1"
              className="carousel-image"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;

// -----------------------------------------------------------------------------------

// import React, { Suspense } from "react";
// import "../index.css";

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import "../styles.css";

// import { useTranslation } from "react-i18next";

// // Optimized image imports
// import Img1 from "../../Images/CoverImages/cv1.webp";
// import Img2 from "../../Images/CoverImages/cv2.webp";
// import Img3 from "../../Images/CoverImages/cv3.webp";
// import Img4 from "../../Images/CoverImages/cv4.webp";

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 0 },
//     items: 1,
//     slidesToSlide: 1,
//   },
// };

// // Array of slider images
// const sliderImageUrl = [Img1, Img2, Img3, Img4];

// const Slider = () => {
//   const { t } = useTranslation();

//   return (
//     <div className="parent">
//       {/* Overlay Text Section */}
//       <div className="Text-over-outer">
//         <div className="Text-over">
//           <h3>
//             <i>{t("footer_t1")}</i> {t("navbar_t1")}
//           </h3>
//           <p>{t("slider_t1")}</p>
//         </div>
//       </div>

//       {/* Carousel Component */}
//       <Carousel
//         responsive={responsive}
//         autoPlay={true}
//         autoPlaySpeed={5000}
//         swipeable={true}
//         draggable={true}
//         showDots={false}
//         infinite={true}
//         arrows={false}
//         dotListClass="custom-dot-list-style"
//         containerClass="carousel-container"
//         keyBoardControl={true}
//       >
//         {sliderImageUrl.map((imageUrl, index) => (
//           <div className="slider" key={index}>
//             <Suspense
//               fallback={<div className="image-placeholder">Loading...</div>}
//             >
//               <img
//                 src={imageUrl}
//                 alt={`slider-Img-${index}`}
//                 loading="lazy"
//                 tabIndex="-1"
//                 className="carousel-image"
//               />
//             </Suspense>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default Slider;
