import insta from "../images/insta.png"
import facebook from "../images/facebook.png"

export default function Footer() {
    return (
        <div className="footer-div">
            <a href="https://www.instagram.com/gilbert.sahyoun.17/" target="_blank"><img src={insta} className="insta-img"/></a>
            <a href="https://www.facebook.com/jilbert.sahyoun" target="_blank"><img src={facebook} className="facebook-img"/></a>        
        </div>
    )
}