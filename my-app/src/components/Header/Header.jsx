import Logo from './Logo/Logo'
import "./header.css";
import Profile from './Profile/Profile';

export default function Header() {
    
    return (
        <header>
			<div className="max-width">
				<Logo/>
				<ul>
					{/* <!-- 로그인 --> */}
					<Profile/>
					<li>
						<a href="#" className="button">
							<img src="./assets/icon-modify-white.svg" alt="" />
							<span>Write</span>
						</a>
					</li>
					<li>
						<button className="button white">
							<img src="./assets/icon-logout.svg" alt="" />
							<span>Logout</span>
						</button>
					</li>
					{/* <!-- //로그인 --> */}

					{/* 로그아웃 */}
					{/* <li>
						<a href="#" className="button gray">
							<img src="./assets/icon-login.svg" alt="" />
							<span>Login</span>
						</a>
					</li>
					<li className="only-pc">
						<a href="#" claclassNamess="button gray">
							<img src="./assets/icon-register.svg" alt="" />
							<span>Register</span>
						</a>
					</li> */}

					{/* 로그아웃 */} 
				</ul>
			</div>
		</header>
    )
}