import React from 'react'
import Airr from '../Assests/img/Air.png';
import Seaa from '../Assests/img/Sea.png';
import Cloud from '../Assests/img/cloud.png';
import Checkk from '../Assests/svg/checkk.svg';

const About = () => {
  return (
    <>
      <div className='mt-20 flex '>
        <div className='basis-1/2 flex h-[90vh] borde'>

          <div className='m-auto h-[60vh] w-[80%] borde'>
            <div>
              <div className='font-bold text-xl mb-4'>Welcome To <span className='text-[#41D6C7] text-5xl fig'>YourGuide</span></div>
              <p className='mb-9'>At <span className='text-[#41D6C7]'>YourGuide</span>, we believe that every journey should be as unique as you are. Our mission is to help you discover, plan, and enjoy your perfect trip, whether it's a weekend getaway, an adventurous expedition, or a family vacation. </p>

              {/* <p>Our team of travel enthusiasts is dedicated to providing you with curated itineraries that include must-see attractions, hidden gems, and local favorites. We understand that planning a trip can be overwhelming, so we’ve simplified the process by offering detailed guides, recommendations, and maps, ensuring you have all the information you need right at your fingertips.</p> */}

              <div className='text-xl font-bold mb-4'>Discover Our <span className='text-3xl text-[#41D6C7]'>Travel Guideline</span></div>
              <div>
                <ul className='list-disc list-inside'>
                  <li className='pb-5'>
                    Research Your Destination: Use our search feature to find detailed information about your desired location, including top attractions, activities, and cultural insights.
                  </li>
                  <li className='pb-5'>
                    Create Your Itinerary: Customize your trip plan by selecting activities, accommodations, and dining options that align with your interests and budget.
                  </li>
                  <li className='pb-5'>

                    Stay Informed: Read through our travel guides and tips to stay informed about local customs, weather conditions, and important travel advisories.
                  </li>
                  <li className=''>                    

                  Pack Smart: Follow our packing lists tailored to different types of trips and climates to ensure you have everything you need.
                  </li>
                </ul>
              </div>
            </div>


          </div>
        </div>

        <div className='basis-1/2 flex h-[90vh]  relative'>
          {/* <div className='absolute z-20'> */}
          <img src={Cloud} alt="" className='absolute z-20' />
          {/* </div> */}
          <div className='relative h-[75vh] w-[90%] mx-auto my-12'>
            <img src={Airr} alt="" className='absolute z-10 mx-auto h-[630px] left-[143px]' />
            <img src={Seaa} alt="" className='absolute z-0 mx-auto h-[500px] left-[171px] top-[60px]' />

          </div>

        </div>
      </div>
    </>
  )
}

export default About
