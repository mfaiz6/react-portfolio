import './contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import { useContext, useRef } from 'react'
import { ThemeContext } from '../../context'




const Contact = () => {
    const formRef = useRef();

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    

  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's discuss your project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone} alt="" className="c-icon" />+123456789
                    </div>
                    <div className="c-info-item">
                        <img src={Email} alt="" className="c-icon" />email here
                    </div>
                    <div className="c-info-item">
                        <img src={Address} alt="" className="c-icon" />Address here
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What's your story?</b> Get in touch. Always freelancing if the right project comes along.
                </p>
                <form ref={formRef} >
                    <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder="Name" name="user_name" />
                    <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder="Subject" name="user_subject" />
                    <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder="Email" name="user_email" />
                    <textarea style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} rows="5" placeholder="Message" name="message" />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact