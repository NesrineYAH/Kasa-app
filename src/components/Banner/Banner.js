import homeBanner from "../../assets/images/banner/homeBanner.png";

const Banner = () => {
  return (
    <div className="banner-conteneur">
      <img className="banner-img" src={homeBanner} alt="banner kasa" />
    </div>
  );
};

export default Banner;
