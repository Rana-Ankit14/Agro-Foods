import React from "react";
import Carousel from "react-material-ui-carousel";

const Item = (props) => {
  return (
    <div>
      <div>
        {props.maxHeight === 400 ? (
          <img
            src={props.item}
            width="100%"
            style={{ maxHeight: 400 }}
            className="img-fluid"
          />
        ) : (
          <img
            src={props.item}
            width="100%"
            // style={{ height: props.maxHeight }}
            className="img-fluid"
          />
        )}
      </div>
      {/* <div>
        <Button className="CheckButton">Check it out!</Button>
      </div> */}
    </div>
  );
};

export const CarouselComponent = ({
  autoplay = true,
  timeout = 500,
  maxHeight = 400,
  items = [
    "https://thumbs.dreamstime.com/b/big-sale-badge-discount-banner-shape-vector-phone-screen-coupon-design-icon-smartphone-mobile-web-template-promotion-interface-181699474.jpg",
    "https://jpcamara.com/wp-content/uploads/2015/02/carousel.jpg",
    "https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-open-school-quarter-e-commerce-promotion-c4d-background-banner-image_198091.jpg",
  ],
}) => {
  console.log({ items });
  return (
    <div className="m-0">
      <Carousel animation="slide" timeout={timeout} autoPlay={autoplay}>
        {items.map((item, i) => (
          <Item key={i} item={item} maxHeight={maxHeight} />
        ))}
      </Carousel>
    </div>
  );
};

// <div class="carousel-wrapper">
// <Carousel>
//   <div>
//     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU1dFR0DR4d0wILeQRaH1oo1Dlsag-Gp2dXg&usqp=CAU" />
//     <p className="legend">Legend 1</p>
//   </div>
//   <div>
//     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU1dFR0DR4d0wILeQRaH1oo1Dlsag-Gp2dXg&usqp=CAU" />
//     <p className="legend">Legend 2</p>
//   </div>
//   <div>
//     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU1dFR0DR4d0wILeQRaH1oo1Dlsag-Gp2dXg&usqp=CAU" />
//     <p className="legend">Legend 3</p>
//   </div>
