import react from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../Assets/ss1.png";
import img2 from "../Assets/ss2.png";

export const PostmanCarousel = () => {
  return (
    <>
      <div className="Corousel">
        <Carousel>
          <div>
            <img src={img1} className="PostmanSS" />
          </div>
          <div>
            <img src={img2} className="PostmanSS" />
          </div>
        </Carousel>
      </div>
    </>
  );
};
export default PostmanCarousel;
