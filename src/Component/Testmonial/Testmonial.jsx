import React from 'react';
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import ava04 from '../../assets/images/ava-4.jpg'

const Testmonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: 2000,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }


    return <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>
            TickEase is incredibly user-friendly. It's designed to feel comfortable in your hand, so you can use it easily, even in hard to reach areas.
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'> Sunny Maurya</h6>
                    <p>customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>
            Attending events has never been easier! Thanks to TickEase., I effortlessly discovered exciting happenings in my area. They have everything from festivals to workshops, so there's something for everyone. The website is easy to use, and they give lots of details about each event, which makes planning my weekends super easy. I definitely recommend it!
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Manjot Kaur Channi</h6>
                    <p>customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
            Attending events has never been easier! Thanks to TickEase., I effortlessly discovered exciting happenings in my area. They have everything from festivals to workshops, so there's something for everyone. The website is easy to use, and they give lots of details about each event, which makes planning my weekends super easy. I definitely recommend it!
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava04} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Mansi Arya</h6>
                    <p>customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam impedit optio ducimus quis, nam a, ex provident quisquam debitis eum aspernatur iusto dicta cum sapiente aperiam.
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Tanishq Ranjan </h6>
                    <p>customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
            Booking tickets through TickEase was a breeze, transforming my concert-going experience. With just a few taps, I secured seats to my favorite band's performance. The app's user-friendly interface made the process smooth, leaving me more time to anticipate the electrifying atmosphere and mesmerizing music.
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Ishita Gattani </h6>
                    <p>customer</p>
                </div>
            </div>
        </div>

    </Slider>

}

export default Testmonial