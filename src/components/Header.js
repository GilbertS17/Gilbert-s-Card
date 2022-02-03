import image from "../images/my-photo.jpg"

export default function Header() {
    return (
        <div className="head-div">
            <img src={image} className="my-photo"/>
        </div>
    )
}
