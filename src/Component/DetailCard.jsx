import React from "react";
import Flight from "../Assets/3DAssets/departure-time.png";
import Suitcase from "../Assets/3DAssets/suitcase.png";
import Train from "../Assets/3DAssets/train.PNG";

export const DetailCard = () => {
  return (
    <>
      <div className="DetailCard">
        <div className="Card">
          <div className="ImageBox">
            <img src={Flight} alt="" className="CardImage" />
          </div>
          <div className="ContainerBox">
            <h2 className="CardText">
              Easily book your flight by using our api
            </h2>
          </div>
        </div>
        <div className="Card">
          <div className="ImageBox">
            <img src={Suitcase} alt="" className="CardImage" />
          </div>
          <div className="ContainerBox">
            <h2 className="CardText">Easily book your cabs by using our api</h2>
          </div>
        </div>
        <div className="Card">
          <div className="ImageBox">
            <img src={Train} alt="" className="CardImage" />
          </div>
          <div className="ContainerBox">
            <h2 className="CardText">
              Easily book your train by using our api
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
