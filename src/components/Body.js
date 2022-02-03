import email from "../images/email.png"
import linkedin from "../images/linkedin.png"

export default function Body() {
    return (
        <div className="body-div">
            <h1 className="my-name">Gilbert Sahyoun</h1>
            <h5 className="my-job">Frontend Developper</h5>
            <div className="buttons-div">               
                <a href="mailto:gilbertsahyoun.business@gmail.com" className="email-btn" target="_blank"><img src={email} className="email-img"/>Email</a>               
                <a href="https://www.linkedin.com/in/gilbert-sahyoun-27b1b5217/" className="linkedin-btn" target="_blank"><img src={linkedin} className="linkedin-img"/>Linkedin</a>   
            </div>
            <h2 className='subtitles'>About</h2>
            <p className='text'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h2 className='subtitles'>Interests</h2>
            <p className='text'>Web development. Soccer. Basketball. Netflix. Video games. Hunting. Offroad.</p>
        </div>
    )
}