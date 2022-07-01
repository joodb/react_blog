import "./header.css";
import Profile from './Profile/Profile';
import Login from '../Header/Login/Login';
import logo from '../../assets/Logo.svg'

export default function Header({users}) {
    return (
			<header>
				<div className="max-width">
				<h1>
            <a href="./">
                <img src={logo} alt="My Blog" />
            </a>
        </h1>
				<ul>
					<Profile profileImg={users[0].profileImg}/>
					<Login/>
				</ul>
			</div>
		</header>
    )
}