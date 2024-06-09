import React from 'react'
import List from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import { Link } from 'react-router-dom';

function Course() {
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
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3
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
    const premiumBooks = List.filter((item) => (
        item.price > 0
    ))
    const url = "https://img.freepik.com/free-vector/world-book-day-vertical-poster-template_23-2148870862.jpg?t=st=1717925342~exp=1717928942~hmac=33b59a557bdab061d56fac6018217cb4e48cf5a7687a90535c83a3c4e237f46f&w=740"

    return (
        <>
            <div className=" max-w-screen-2x1 container mx-auto md:px-20">
                <div className="mt-28 justify-center items-center text-center ">
                    <h1 className="text-2xl  md:text-4xl ">We're Delighted to to have you <span className="text-pink-500">Here! :)</span> </h1>
                    <p className="mt-12 p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam aliquid soluta! Atque est inventore labore quia quisquam qui blanditiis culpa magni neque aspernatur dolorem libero sed, quo modi quos ipsum? Ipsum facilis numquam modi! Ea consequuntur a tempora corporis amet officia facere, harum inventore in odio deleniti perferendis? Pariatur mollitia nostrum vel, dicta a amet numquam. Laudantium dignissimos voluptates modi minus reprehenderit veniam eos obcaecati maxime temporibus, molestiae vero, assumenda totam est odit deleniti! Doloribus, ratione recusandae voluptatibus dolores possimus ipsa, autem quis aliquid eos nisi magnam, porro beatae tempora! Fugiat unde a corporis modi saepe architecto, facilis nostrum!</p>

                    {/* i want to rout to the privious page and not neccaserty the home page it could any */}
                    <Link to="/home">
                        <button className="bg-pink-500 text-white mt-6 px-2 py-2 rounded-md hover:bg-pink-700 duration-100">Back</button>
                    </Link>

                    <div>
                        <h1 className="text-2xl mt-12 text-left">Premium Courses</h1>
                        <Slider {...settings} className="mt-6">
                            {
                                premiumBooks.map((item) => (
                                    <Cards item={item} url={url} key={item.id} />
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Course
