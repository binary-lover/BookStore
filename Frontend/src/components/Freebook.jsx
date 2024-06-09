import React from 'react'
import List from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';


function Freebook() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
    const freeData = List.filter((item) => item.catogory === "free");
    const url = "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149350186.jpg?t=st=1717917871~exp=1717921471~hmac=d0fe9b429fdd851c3cbe894457be70ac9c0f580067f8bbfda31c7c03a97c494a&w=740"

    return (
        <>
            <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 mt-10 ">
                <div className="mb-2">
                    <h1 className="font-semibold text-xl pb-2">Free Books</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque accusantium velit sapiente. Ab perferendis assumenda quasi voluptates eius veniam.</p>
                </div>

                <div>
                    <Slider {...settings}>
                        {freeData.map((item)=>(
                            <Cards item={item} url={url} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Freebook
