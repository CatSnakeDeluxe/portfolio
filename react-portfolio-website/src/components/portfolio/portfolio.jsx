import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/JBW_6387.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>

          <div className='portfolio__item-image'>

            <img src={IMG1} alt="" />

          </div>

          <h3>Portfolio item title</h3>

          <div className='portfolio__item-cta'>

            <a href="https://github.com/CatSnakeDeluxe/portfolio" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/CatSnakeDeluxe/portfolio" className='btn btn-primary' target='_blank'>Live Demo</a>

          </div>

        </article>

        <article className='portfolio__item'>

          <div className='portfolio__item-image'>

            <img src={IMG1} alt="" />

          </div>
          
          <h3>Portfolio item title</h3>

          <div className='portfolio__item-cta'>

            <a href="https://github.com/CatSnakeDeluxe/portfolio" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/CatSnakeDeluxe/portfolio" className='btn btn-primary' target='_blank'>Live Demo</a>

          </div>

        </article>

        <article className='portfolio__item'>

          <div className='portfolio__item-image'>

            <img src={IMG1} alt="" />

          </div>
          
          <h3>Portfolio item title</h3>

          <div className='portfolio__item-cta'>

            <a href="https://github.com/CatSnakeDeluxe/portfolio" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/CatSnakeDeluxe/portfolio" className='btn btn-primary' target='_blank'>Live Demo</a>

          </div>

        </article>

        <article className='portfolio__item'>

          <div className='portfolio__item-image'>

            <img src={IMG1} alt="" />

          </div>
          
          <h3>Portfolio item title</h3>

          <div className='portfolio__item-cta'>

            <a href="https://github.com/CatSnakeDeluxe/portfolio" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/CatSnakeDeluxe/portfolio" className='btn btn-primary' target='_blank'>Live Demo</a>

          </div>

        </article>

        <article className='portfolio__item'>

          <div className='portfolio__item-image'>

            <img src={IMG1} alt="" />

          </div>
          
          <h3>Portfolio item title</h3>

          <div className='portfolio__item-cta'>

            <a href="https://github.com/CatSnakeDeluxe/portfolio" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/CatSnakeDeluxe/portfolio" className='btn btn-primary' target='_blank'>Live Demo</a>

          </div>

        </article>

        <article className='portfolio__item'>

          <div className='portfolio__item-image'>

            <img src={IMG1} alt="" />

          </div>
          
          <h3>Portfolio item title</h3>

          <div className='portfolio__item-cta'>

            <a href="https://github.com/CatSnakeDeluxe/portfolio" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/CatSnakeDeluxe/portfolio" className='btn btn-primary' target='_blank'>Live Demo</a>

          </div>

        </article>
        
      </div>

    </section>
  )
}

export default Portfolio