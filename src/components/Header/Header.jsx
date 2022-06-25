import Logo from './Logo/Logo'
import "./header.css";
import Profile from './Profile/Profile';
import Login from '../Header/Login/Login';
import Logout from '../Header/Logout/Logout';

export default function Header() {
    
    return (
        <header>
			<div className="max-width">
				<Logo/>
				<ul>
					<Profile/>
					<Login/>
					<Logout/>
				</ul>
			</div>
		</header>
    )
}