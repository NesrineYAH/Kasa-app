import homeBanner from "../../assets/images/banner/homeBanner.png";

const Banner = ({ image, texte }) => {
  return (
    <div className="BannerContainer">
      <h1 className="BannerContainer__h1">Chez vous, partout et ailleurs</h1>
      <img
        className="BannerContainer__img"
        src={homeBanner}
        alt="banner kasa"
      />
      <div className="BannerContainer__shadow"></div>
    </div>
  );
};

export default Banner;
