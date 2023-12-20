import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Testimonial = () => {
  const clients = [
    {
      name: "Safayat Hussain",
      time: "Worked 1 month ago",
      comment:
        "Nasir has a deep understanding of front-end technologies and stays up to date with the latest trends and best practices. Their ability to translate design mockups into pixel-perfect code is truly impressive.",
      image: 'https://i.ibb.co/Wn4SNtR/349356280-1456390798465380-2066592246355141294-n.jpg'
    },
    {
      name: "Ittehad Najat",
      time: "Worked 2 month ago",
      comment:
        "Overall, I highly recommend Nasir as a front-end developer. His technical expertise, collaborative nature, and commitment to delivering exceptional results make them a valuable asset to any development team.",
      image:'https://i.ibb.co/2g1x7xj/299990102-615870670174120-9045903469412015109-n.jpg'
    },
    {
      name: "Nahidul Islam Chy",
      time: "Worked 3 month ago",
      comment:
        "Nasir is a talented developer. His work is impressive, showcasing a strong understanding of design and proficiency in front-end. Highly recommended!",
      image: '/images/client3.avif'
    },
    {
      name: "Naderul islam chy",
      time: "Worked 4 month ago",
      comment:
        "I've had the pleasure of working with nasir as a front-end developer, and I must say, their skills are remarkable. Their code is clean, well-structured, and easily maintainable.",
      image: 'https://i.ibb.co/ssKYqjv/339422984-1563990844123782-2227693371655056820-n.jpg'
    },
    {
      name: "Shipon ahmed",
      time: "Worked 5 month ago",
      comment:
        "Nasir is an exceptional front-end developer. Their attention to detail and ability to create stunning user interfaces is truly commendable. Highly recommended!",
      image: '/images/client5.jpeg'
    },
 
  ];
  const settings = {
    infinite: true,
    dots: true,
    focusOnSelect: true,
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
    <div id="testimonial" className="container px-4 py-20">
 
      <h1 className="text-center text-4xl font-bold">Testimonial</h1>
      <p className="text-center mt-2 text-[#858585] text-lg">My Clients Say</p>
      <div>
        <div className="mx-auto px-4 mt-8">
          <Slider {...settings}>
            {clients.map((client,i) => (
              <div key={i} className="mx-auto m-4 text-[#595959]
              ">
                <div className=" w-96 h-72 bg-white p-10 rounded-md shadow-lg mx-auto">
                  <div className="flex justify-start items-center gap-4">
                    <div>
                    <Image className="rounded-full w-10 h-10 object-cover" alt="photo" width={30} height={30} src={client.image}/>
                      
                      </div>
                    <div>
                      <p className="text-black">{client.name}</p>
                      <p>{client.time}</p>
                    </div>
                  </div>
                  <p className="bg-white p-5 rounded-md">{client.comment}</p>
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
