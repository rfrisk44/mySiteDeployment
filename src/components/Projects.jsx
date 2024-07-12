import React from 'react'
import ProjectCarousel from './ProjectCarousel'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className='text-center'>
        <div className='companies'>
            <h2>Companies I've Worked With</h2>
            <div>
                <p className='fw-bold'>IC Landscape</p>
                <Link to="https://iclandscape.com/">iclandscape.com</Link>
            </div>
        </div>
        <p className='fw-bold fs-2'>Explore My Previous Projects!🚀</p>
        <ProjectCarousel/>
    </div>
  )
}

export default Projects