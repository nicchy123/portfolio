import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAccusoft } from "react-icons/fa";
import Image from "next/image";
const Testimonial = () => {
  const clients = [
    {
      name: "Nahidul islam chy",
      time: "Worked 1 month ago",
      comment:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
      imgage: <Image className="rounded-full" width={50} height={50} src={'/images/client1.avif'}/>,
    },
    {
      name: "Najatul islam chy",
      time: "Worked 2 month ago",
      comment:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
      imgage:<Image className="rounded-full" width={50} height={50} src={'/images/client2.avif'}/>,
    },
    {
      name: "Nasibul islam chy",
      time: "Worked 3 month ago",
      comment:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
      imgage: <Image className="rounded-full" width={30} height={50} src={'/images/client3.avif'}/>,
    },
    {
      name: "Naderul islam chy",
      time: "Worked 4 month ago",
      comment:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
      imgage: <Image className="rounded-full" width={50} height={50} src={'/images/client4.avif'}/>,
    },
    {
      name: "Najibul islam chy",
      time: "Worked 5 month ago",
      comment:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
      imgage: <Image className="rounded-full" width={50} height={50} src={'/images/client5.jpeg'}/>,
    },
    {
      name: "Nakibul islam chy",
      time: "Worked 6 month ago",
      comment:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
      imgage: <Image className="rounded-full" width={50} height={50} src={'/images/client7.avif'}/>,
    },
    {
      name: "Najatul islam chy",
      time: "Worked 7 month ago",
      comment:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
      imgage: <Image className="rounded-full" width={50} height={50} src={'/images/client8.jpg'}/>,
    },
    {
      name: "MOksud islam chy",
      time: "Worked 8 month ago",
      comment:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
      imgage: <Image className="rounded-full" width={50} height={50} src={'/images/client9.jpg'}/>,
    },
  ];
  const settings = {
    
    focusOnSelect: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div id="testimonial" className="container px-4 py-32">
      <h1 className="text-center text-4xl font-bold">Testimonial</h1>
      <p className="text-center mt-2 text-[#858585] text-lg">My Clients Say</p>
      <div>
        <div className="mx-auto px-4">
          <Slider {...settings}>
            {clients.map((c) => (
              <div className="mx-auto m-4 text-[#595959]
              ">
                <div className="m-4  bg-white p-5 rounded-md">
                  <div className="flex justify-start items-center gap-4">
                    <div>{c.imgage}</div>
                    <div>
                      <p className="text-black">{c.name}</p>
                      <p>{c.time}</p>
                    </div>
                  </div>
                  <p className="bg-white p-5 rounded-md">{c.comment}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
