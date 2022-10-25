import react from "react";
import { Navbar } from "../Component/Navbar";
import TravelImage from "../Assets/3DAssets/travel-list.png";
import Payment from "../Assets/3DAssets/payment.png";
import { DetailCard } from "../Component/DetailCard";
import PostmanCarousel from "../Component/PostmanCarousel";
export const Documentation = () => {
  return (
    <>
      <Navbar />
      <div className="IntroSection">
        <div className="LeftIntroContent">
          <div className="Content">
            <h2 className="Heading">Booking Api</h2>
            <p className="DescriptionText">
              Welcome to the booking api where user can book their mode of
              travel while travelling from one place to another.
            </p>
            <p>
              <a href="https://god.gw.postman.com/run-collection/24017825-e9898502-94c3-4a47-b980-89142bbf3adb?action=collection%2Ffork&amp;collection-url=entityId%3D24017825-e9898502-94c3-4a47-b980-89142bbf3adb%26entityType%3Dcollection%26workspaceId%3D3198dfc5-3073-439e-8560-ae541475bc1d">
                <img
                  src="https://run.pstmn.io/button.svg"
                  alt="Run in Postman"
                />
              </a>
            </p>
          </div>
        </div>
        <div className="RightIntroContent">
          <img src={TravelImage} alt="image" className="TravelImage" />
        </div>
      </div>
      <div className="PaymentSection">
        <div className="LeftIntroContent">
          <img src={Payment} alt="image" className="PaymentImage" />
        </div>
        <div className="PaymentRightIntroContent">
          <div className="Content">
            <h2 className="PaymemtHeading">Secured Payment</h2>
            <p className="DescriptionText">
              By utilising our payment gateway, payments are more secure due to
              the use of the stipe payment protocol, which decreases the
              likelihood of financial attacks.
            </p>
            <p>
              <a href="https://god.gw.postman.com/run-collection/24017825-e9898502-94c3-4a47-b980-89142bbf3adb?action=collection%2Ffork&amp;collection-url=entityId%3D24017825-e9898502-94c3-4a47-b980-89142bbf3adb%26entityType%3Dcollection%26workspaceId%3D3198dfc5-3073-439e-8560-ae541475bc1d">
                <img
                  src="https://run.pstmn.io/button.svg"
                  alt="Run in Postman"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <DetailCard />
      </div>
      <div className="ScreenshotCarasoul">
        <div className="LeftPostmanContent">
          <PostmanCarousel />
        </div>
        <div className="PostmanRightIntroContent">
          <div className="PostamnContent">
            <h2 className="PostmanHeading">Postman</h2>
            <p className="DescriptionText">
              Test our api on the postman to get the idea about the endpoints
              and use it to integrate in your frontend
            </p>
            <p>
              <a href="https://god.gw.postman.com/run-collection/24017825-e9898502-94c3-4a47-b980-89142bbf3adb?action=collection%2Ffork&amp;collection-url=entityId%3D24017825-e9898502-94c3-4a47-b980-89142bbf3adb%26entityType%3Dcollection%26workspaceId%3D3198dfc5-3073-439e-8560-ae541475bc1d">
                <img
                  src="https://run.pstmn.io/button.svg"
                  alt="Run in Postman"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Documentation;
