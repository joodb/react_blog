import './profile.css'

export default function Profile({profileImg}) {
    console.log({profileImg});
    return (
        <li className="profile-img">
            <a href="#">
                <img src={process.env.PUBLIC_URL+profileImg} alt="My Page" />
            </a>
        </li>
    )
}