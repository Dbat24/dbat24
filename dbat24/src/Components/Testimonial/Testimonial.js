import React from "react";
import Slider from "react-slick";
import "./Testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const data = [
    {
      name: "Zaynab",
      position: "CEO",
      des: "I like the website very interactive",
      img: "https://media.istockphoto.com/id/1586524541/photo/happy-saleswoman-working-at-a-hardware-store.jpg?s=1024x1024&w=is&k=20&c=WcNrKw5PZCOKT5b5KC9XzlcaJjdkq8dyyX2QY6wPxys=",
    },
    {
      name: "Hawau",
      position: "CEO",
      des: "I like the website very interactive",
      img: "https://media.istockphoto.com/id/513498618/photo/business-woman-working-at-a-warehouse.jpg?s=1024x1024&w=is&k=20&c=_2yIswmpbzUzc3ZolWfroKC2bzaC6Sdh3nuLwrjkCBo=",
    },
    {
      name: "John Doe",
      position: "Product Manager",
      des: "I like the website very interactive",
      img: "https://media.istockphoto.com/id/1542566108/photo/young-businessman-smiling-at-camera.jpg?s=1024x1024&w=is&k=20&c=KRl4dBPDmythu0fINY6rw8pvuTdmvGLaSrW6fMeMjyA=",
    },
    {
      name: "Aisha",
      position: "CEO",
      des: "I like the website very interactive",
      img: "https://media.istockphoto.com/id/1432250388/photo/smiling-woman-with-blond-short-hair-sitting-in-the-office-and-looking-directly-at-the-camera.jpg?s=1024x1024&w=is&k=20&c=7a8FOMaJsHQ-qICHX8HZbtAY_-2_TeAmfd3oEpCzRmg=",
    },
    {
      name: "Ben",
      position: "Project Manager",
      des: "I like the website very interactive",
      img: "https://media.istockphoto.com/id/2159002964/photo/robotics-handshake-and-engineering-team-in-factory-for-manufacturing-agreement-or-industry-4.jpg?s=1024x1024&w=is&k=20&c=ZEGOrKhLlyAEaR-FdAfTU8sz1O0Ln3RCENqt9dXuRgI=",
    },
    {
      name: "Frank",
      position: "CTO",
      des: "I like the website very interactive",
      img: "https://plus.unsplash.com/premium_photo-1683134157126-2f0cfd8ee388?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    initialSlide: 0,
    autoplay: true,
    rows: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  const colors = [
    "#1F77B4",
    "#FF7F0E",
    "#2CA02C",
    "#D62728",
    "#9467BD",
    "#8C564B",
    "#E377C2",
    "#7F7F7F",
    "#BCBD22",
    "#17BECF",
    "#FFBB78",
    "#98DF8A",
    "#C49C94",
    "#C5B0D5",
    "#AEC7E8",
  ];

  return (
    <div className="container testimonial-section" id="testimonial">
      <div className="section-title">
        <h5>Testimonial</h5>
        <span className="line"></span>
      </div>

      <div className="testimonial-slider">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div className="content-slider-main" >
              <div className="content-slider" style={{ backgroundColor: colors[index] }} key={index}>
                <img
                  src={item.img}
                  alt="testimonial images"
                  className="center-image"
                />
                <p >{item.des}</p>
                <p>{item.name}</p>
                <p>{item.position}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
