import React from 'react';
import bgImg from '../Assests/img/image.png'

const Footer = () => {


    
    
    return (
        <>
            <div>
                {/* footer */}
                <div className='relative bg-[#003531]'>
                    {/* <img src={bgImg} alt="" style={background: -webkit-linear-gradient(top, rgba(255,0,0,0), rgba(255,0,0,1));}/> */}
                    <div className='transparent-gradient absolute z-10 w-full'></div>
                    <img src={bgImg} alt="background" className="w-full h-full object-cover relative z-0" />

                </div>


            </div>
        </>
    )
}

export default Footer
