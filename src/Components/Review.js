import React, { useEffect, useRef, useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avt1 from '../Assests/img/avatar/3d-cartoon-style-character (1).jpg';
import avt2 from '../Assests/img/avatar/portrait-beautiful-young-woman-with-stylish-hairstyle-glasses.jpg';
import avt3 from '../Assests/img/avatar/3d-cartoon-style-character.jpg';
import avt4 from '../Assests/img/avatar/androgynous-avatar-non-binary-queer-person (1).jpg';
import avt5 from '../Assests/img/avatar/androgynous-avatar-non-binary-queer-person.jpg';
import avt6 from '../Assests/img/avatar/androgynous-avatar-non-binary-queer-person (2).jpg';
import prevbtn from '../Assests/svg/prevbtn.svg';
import nextbtn from '../Assests/svg/nextbtn.svg';
import Quo from '../Assests/svg/Quo.svg';


const Review = () => {
    const [currentIndex, setCurrentIndex] = useState(0);


    const reviews = [
        { id: 1, content: "This is the first review." },
        { id: 2, content: "This is the second review." },
        { id: 3, content: "This is the third review." },

    ];


    const prevReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    const nextReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };









    return (
        <>
            <div className='ReviewPage mt-20 flex flex-col justify-center items-center mb-10'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-5xl font-bold'>What our happy clients say</div>
                    <button className='mt-16 mb-4 bg-[#41D6C7] text-white font-bold p-2 px-5 rounded-3xl'>Write Review</button>
                </div>

                <div className='Imgs grid grid-cols-6 gap-12 items-center px-40 py-10'>
                    <div className='rotate-12'>
                        <img src={avt1} alt="" className='w-20 rounded-3xl' />
                    </div>
                    <div className='text-white'>.</div>
                    <div className='-rotate-[20deg]'>
                        <img src={avt2} alt="" className='w-20 rounded-3xl' />
                    </div>
                    <div className='text-white'>.</div>
                    <div className='rotate-12'>
                        <img src={avt3} alt="" className='w-20 rounded-3xl' />
                    </div>
                    <div className='text-white'>.</div>
                    <div className='text-white'>.</div>
                    <div className='rotate-12'>
                        <img src={avt4} alt="" className='w-20 rounded-3xl' />
                    </div>
                    <div className='text-white'>.</div>
                    <div className='rotate-12'>
                        <img src={avt5} alt="" className='w-20 rounded-3xl' />
                    </div>
                    <div className='text-white'>.</div>
                    <div className='-rotate-45'>
                        <img src={avt6} alt="" className='w-20 rounded-3xl' />
                    </div>

                </div>
                <div>

                    <div className='flex flex-col items-center'>
                        <div>
                            <img src={Quo} alt="" className='w-5 mb-4' />
                        </div>
                        <div className="flex justify-between items-center gap-48">
                            <button onClick={prevReview} className='p-2 rounded-full border'><img src={prevbtn} alt="" /></button>
                            <div className="review w-52 flex flex-col justify-center items-center">

                                {reviews[currentIndex].content}
                                {/* {reviews.map(rev => (
                                    <div>{rev.text}</div>
                                ))} */}
                            </div>
                            <button onClick={nextReview} className='p-2 rounded-full border'><img src={nextbtn} alt="" /></button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Review
