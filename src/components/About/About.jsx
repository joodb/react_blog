import './about.css'
import Facebook from '../../assets/Facebook.svg';
import Twitter from '../../assets/Twitter.svg';
import Instagram from '../../assets/Instagram.svg';
import Github from '../../assets/Github.svg';
import Categories from '../Categories/Categories';

export default function About({users}) {
    console.log({users});
    return (
        <aside className="about">
            <h2>About Me</h2>
            <img src={users[0].profileImg} alt="" className="user-profile" />
            <p className="user-name">Chilli</p>
            <p className="user-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            
            <h3>Categories</h3>
            <Categories/>
            
            <h3>Follow</h3>
            <ul className="sns">
                <li>
                    <a href="#">
                        <img src={Facebook} alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Twitter} alt="Twitter" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Github} alt="GitHub" />
                    </a>
                </li>
            </ul>
        </aside>
    )
}
