import '../../Button/button.css'
import modifyWhite from '../../../assets/icon-modify-white.svg'
import logout from '../../../assets/icon-logout.svg'
import login from '../../../assets/icon-login.svg'
import register from '../../../assets/icon-register.svg'

export default function Button() {
  return (
    <>
      <li>
        <a href="#" className="button">
          <img src={modifyWhite} alt="" />
          <span>Write</span>
        </a>
      </li>
      <li>
        <button className="button white">
          <img src={logout} alt="" />
          <span>Logout</span>
        </button>
      </li>

      <li>
        <a href="#" className="button gray">
          <img src={login} alt="" />
          <span>Login</span>
        </a>
      </li>
      <li className="only-pc">
        <a href="#" className="button gray">
          <img src={register} alt="" />
          <span>Register</span>
        </a>
      </li> 

    </>
  )
}
