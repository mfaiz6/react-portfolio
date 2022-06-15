import React from 'react'
import './about.css'
import Award from '../../img/award.png'

const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://media.istockphoto.com/photos/cheerful-fashionable-adult-man-in-city-setting-picture-id1310533180?b=1&k=20&m=1310533180&s=170667a&w=0&h=EdRuvIkrMifhyZJkHXf5Pk68ri44_g7OFnU8lIdbc-c=" alt="" className="a-img" />
            </div>
        </div>

        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus hic voluptates quod accusantium cumque asperiores dolorum nemo, iste qui ratione iure officiis voluptas aperiam rem provident. Earum consequuntur at consequatur.
            </p>
            <p className="a-desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt velit voluptate totam saepe nam beatae impedit? Unde id modi soluta aliquid quia consequuntur esse architecto, a cupiditate, veritatis tempore illo adipisci perferendis ullam quisquam ipsa, fugit odit? Delectus, cum facilis!
            </p>
            <div className="a-award">
                <img src={Award} alt="" className="a-award-img" />
                <div className="a-award-texts">
                    <h4 className="a-award-title">International Design Awards 2021</h4>
                    <p className="a-award-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ut. Eius neque dicta praesentium.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About