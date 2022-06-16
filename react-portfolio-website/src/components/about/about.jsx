import React from 'react';
import './about.css';
import ME from '../../assets/person.png'
import {FaAward} from 'react-icons/fa'
import {AiFillFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>

      <h5>Get to know me</h5>
      <h2>About me</h2>

      <div className='container  about__container'>

        <div className="about__me">

          <div className="about__me-image">

            <img src={ME} alt="" />

          </div>

        </div>

        <div className="about__content">

          <div className='about__cards'>

          <article className='about__card'>

            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>2 years Studying</small>

          </article>

          <article className='about__card'>

            <AiFillFolderOpen className='about__icon'/>
            <h5>Projects</h5>
            <small>8 completed</small>

          </article>

        </div>

          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos beatae laboriosam, repellendus similique voluptatum perspiciatis explicabo ducimus in ut porro quia esse libero incidunt molestiae aliquam, tenetur at quos dolore?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>

    </section>
  )
}

export default About