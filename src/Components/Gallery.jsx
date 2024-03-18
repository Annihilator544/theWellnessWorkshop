
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
    },
    {
        original: "https://picsum.photos/id/1015/1000/600/",
        },
        {
        original: "https://picsum.photos/id/1019/1000/600/",
    },
    {
        original: "https://picsum.photos/id/1015/1000/600/",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
function Gallery(){
    return(<div className=" px-[70px] py-[80px] text-[#211E1D] bg-gradient-to-r from-[#F6C0A905] to-[#EB9ABA05]">
    <div className="flex flex-col gap-2">
        <pre className=" text-base font-bold text-left mb-2">G A L L E R Y</pre>
        <p className=" text-5xl font-medium text-left mb-3 max-w-[50%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    </div>
    <Slider {...settings} className=" flex gap-5">
        {images.map((image, index) => (
            <div key={index} className=" mx-4">
            <img src={image.original} alt="Gallery" />
            </div>
        ))}
      </Slider>
</div>)
}

export default Gallery