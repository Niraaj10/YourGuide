import React from 'react';
import bgImg from '../Assests/img/image.png'

const Footer = () => {




    return (
        <>
            <div className='flex flex-col justify-center items-center '>
                {/* footer */}
                <div className='relative bg-[#003531]'>
                    {/* <img src={bgImg} alt="" style={background: -webkit-linear-gradient(top, rgba(255,0,0,0), rgba(255,0,0,1));}/> */}
                    <div className='transparent-gradient absolute z-10 w-full'></div>
                    <img src={bgImg} alt="background" className="w-full h-full object-cover relative z-0" />

                </div>
                <div className=' bg-[#003531] grid grid-cols-2 lg:grid-cols-4 lg:gap-40 gap-7 px-12 py-12 pb-24 lg:py-10 lg:pt-28 lg:pb-28 lg:px-36 w-full'>
                    <div className='pr-32'>
                        <h2 className='fig text-[8vw] lg:text-5xl lg:top-3 text-[#41D6C7] font-extrabold'>YourGuide.</h2>
                    </div>
                    <div className='lg:hidden block'>

                    </div>
                    <div className='text-[#777E90] hidden lg:block '>
                        <div className='font-bold pb-4'>Destination</div>
                        <ul className='text-sm'>
                            <li>Countries</li>
                            <li>All Fligth Routes</li>
                        </ul>
                    </div>
                    <div className='text-[#777E90]'>
                        <div className='font-bold pb-4'>Hepl</div>
                        <ul className='text-sm'>
                            <li>Help center</li>
                            <li>FAQs</li>
                            <li>Privacy policy</li>
                            <li>Cookie policy</li>
                        </ul>
                    </div>
                    <div className='text-[#777E90]'>
                        <div className='font-bold pb-4'>Company</div>
                        <ul className='text-sm'>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Press</li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer
