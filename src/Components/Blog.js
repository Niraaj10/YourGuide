import React from 'react'
import { getBlogInfo } from '../ApiData/ApiData'

const Blog = () => {

  const hanldeBlog = async () => {
    try {
      const info = await getBlogInfo('mumbai');
      console.log(info);
      
    } catch (error) {
      console.error("Error fetching data", error);
      
    }
  }

  hanldeBlog();



  return (
    <>
      <div>
        Blog Page

      </div>
    </>
  )
}

export default Blog
