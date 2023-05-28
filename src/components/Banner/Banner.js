import homeBanner from "../../assets/images/banner/homeBanner.png";

const Banner = ({ image, texte }) => {
  return (
    <div className="Banner__conteneur">
      <h1 className="Banner__h1">Chez vous, partout et ailleurs</h1>
      <img className="Banner__img" src={homeBanner} alt="banner kasa" />
    </div>
  );
};

export default Banner;
