import './intro.css'
import Me from '../../img/me.png'


const Intro = () => {
  return (
    <div className='i'>

        <div className="i-left">

            <div className="i-left-wrapper">
                <h2 className='i-intro'>Hello, My name is</h2>
                <h1 className='i-name'>John Barret</h1>

                <div className="i-title">
                    <div className="i-title-wrapper">
                    <div className="i-title-item">Full Stack Developer</div>
                    <div className="i-title-item">Frontend Developer</div>
                    <div className="i-title-item">Backend Developer</div>
                    <div className="i-title-item">MERN Developer</div>
                    <div className="i-title-item">UI/UX Designer</div>
                    </div>
                </div>
                <p className="i-desc">
                   I design and develop services for customers of all sizes, specializing in creating stylish & modern websites, web services and online stores.
                </p>
            </div>
            <svg className='i-scroll' xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 267 512.46"><path fill-rule="nonzero" d="M133.5 0c36.67 0 70.05 15.03 94.25 39.21l.06.07C251.99 63.47 267 96.84 267 133.5v151.22c0 36.67-15.03 70.04-39.21 94.24l-.06.06c-24.2 24.18-57.57 39.19-94.23 39.19-36.67 0-70.05-15.02-94.25-39.21l-.06-.06C15.01 354.74 0 321.37 0 284.72V133.5c0-36.67 15.03-70.04 39.21-94.25l.06-.06C63.47 15.02 96.84 0 133.5 0zM98.79 447.32l34.7 34.72 34.77-34.72 15.16 15.24-49.98 49.9-49.89-49.9 15.24-15.24zm34.71-130.89c12.5 0 22.74-10.23 22.74-22.73v-30.34c0-12.51-10.24-22.74-22.74-22.74-12.5 0-22.73 10.23-22.73 22.74v30.34c0 12.5 10.23 22.73 22.73 22.73zm0-294.87c-30.81 0-58.8 12.59-79.05 32.85-20.31 20.3-32.89 48.29-32.89 79.09v151.22c0 30.8 12.58 58.79 32.85 79.05 20.29 20.3 48.28 32.88 79.09 32.88 30.81 0 58.8-12.58 79.05-32.85 20.3-20.29 32.89-48.28 32.89-79.08V133.5c0-30.8-12.59-58.79-32.85-79.05-20.29-20.3-48.28-32.89-79.09-32.89z"/></svg>
        </div>

        <div className="i-right">
            <div className="i-bg">
            <img src={Me} alt="" className="i-img" />
            </div>
        </div>

    </div>
  )
}

export default Intro