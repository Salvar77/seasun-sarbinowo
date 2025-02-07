import classes from "./Domki.module.scss";
import Link from "next/link";
import Image from "next/image";
import ImgNew from "@/assets/images/Instagram-Story-Template-1.png";
import Img1 from "@/assets/images/Sea_Sun_www-1.jpg";
import Img2 from "@/assets/images/Sea_Sun_www-2.jpg";
import Img3 from "@/assets/images/Sea_Sun_www-3.jpg";
import Img4 from "@/assets/images/Sea_Sun_www-4.jpg";
import Img5 from "@/assets/images/Sea_Sun_www-5.jpg";
import Img6 from "@/assets/images/Sea_Sun_www-6.jpg";
import Img7 from "@/assets/images/Sea_Sun_www-7.jpg";
import Img8 from "@/assets/images/Sea_Sun_www-8.jpg";
// import Img9 from '@/assets/images/Sea_Sun_www-9.jpg';
// import Img10 from '@/assets/images/Sea_Sun_www-10.jpg';
import Img11 from "@/assets/images/Sea_Sun_www-11.jpg";
import Img12 from "@/assets/images/Sea_Sun_www-12.jpg";
import Img13 from "@/assets/images/Sea_Sun_www-13.jpg";
import Img14 from "@/assets/images/Sea_Sun_www-14.jpg";
import Img15 from "@/assets/images/Sea_Sun_www-15.jpg";
// import outside from '@/assets/images/outside.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InfoGraph from "./InfoGraph";
import parking from "./img/parking.png";
import wifi from "./img/wifi.png";
import snow from "./img/snow.png";
import mute from "./img/mute.png";
import camera from "./img/camera.png";
import playground from "./img/playground.png";
import plant from "./img/plant.png";
import bedSheets from "./img/bedSheets.png";
import umbrella from "./img/umbrella.png";
import smartTv from "./img/smartTv.png";
import { useTranslation } from "next-i18next";

const Domki = () => {
  const { t } = useTranslation("cottages");
  const images = [
    {
      src: ImgNew,
      alt: "Sea & Sun - domki letniskowe Sarbinowo",
    },
    {
      src: Img1,
      alt: "Sea & Sun - domki letniskowe Sarbinowo",
    },
    {
      src: Img2,
      alt: "Sea & Sun - domki letniskowe Sarbinowo",
    },
    {
      src: Img3,
      alt: "Sea & Sun - domki letniskowe Sarbinowo",
    },
    {
      src: Img4,
      alt: "Sea & Sun - domki letniskowe Sarbinowo",
    },
    {
      src: Img5,
      alt: "Sea & Sun - domki letniskowe Sarbinowo",
    },
    {
      src: Img6,
      alt: "Sea & Sun - domki letniskowe Sarbinowo",
    },
    {
      src: Img7,
      alt: "Sea & Sun - domki letniskowe Sarbinowo",
    },
    {
      src: Img8,
      alt: "Sea & Sun - domki letniskowe Sarbinowo",
    },
    {
      src: Img11,
      alt: "Sea & Sun - domki letniskowe Sarbinowo",
    },
    {
      src: Img12,
      alt: "Sea & Sun - domki letniskowe Sarbinowo",
    },
    {
      src: Img13,
      alt: "Sea & Sun - domki letniskowe Sarbinowo",
    },
    {
      src: Img14,
      alt: "Sea & Sun - domki letniskowe Sarbinowo",
    },
    {
      src: Img15,
      alt: "Sea & Sun - domki letniskowe Sarbinowo",
    },
  ];
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h2 className={classes.subtitle}> Sea & Sun Sarbinowo</h2>
      <div className={classes.info}>
        <p>{t("cottages_text1")}</p>
        <p>{t("cottages_text2")}</p>

        <p>{t("cottages_text4")}</p>

        <p>{t("cottages_text5")}</p>
        <p>{t("cottages_text6")}</p>
      </div>

      <Slider {...settings} className={classes.carousel}>
        {images.map((image) => (
          <div key={image.src} className={classes.imgBox}>
            <Image
              src={image.src}
              alt={image.alt}
              className={`${classes.image} ${
                image.src === ImgNew ? classes.contain : ""
              }`}
            />
          </div>
        ))}
      </Slider>
      <div className={classes.infog}>
        <div className={classes.infoGraph}>
          <InfoGraph
            src={parking}
            title={t("parking_title")}
            text={t("parking_text")}
          />
          <InfoGraph
            src={bedSheets}
            title={t("bedSheets_title")}
            text={t("bedSheets_text")}
          />
          <InfoGraph src={snow} title={t("snow_title")} text={t("snow_text")} />
          <InfoGraph
            src={playground}
            title={t("playground_title")}
            text={t("playground_text")}
          />
          <InfoGraph src={wifi} title={t("wifi_title")} text={t("wifi_text")} />

          <InfoGraph
            src={plant}
            title={t("plant_title")}
            text={t("plant_text")}
          />
          <InfoGraph src={mute} title={t("mute_title")} text={t("mute_text")} />
          <InfoGraph
            src={camera}
            title={t("camera_title")}
            text={t("camera_text")}
          />
          <InfoGraph
            src={umbrella}
            title={t("umbrella_title")}
            text={t("umbrella_text")}
          />
          <InfoGraph
            src={smartTv}
            title={t("smartTv_title")}
            text={t("smartTv_text")}
          />
        </div>
        <Link href="/contact" className={classes.button}>
          {t("reservation_title")}
        </Link>
      </div>
    </>
  );
};

export default Domki;
