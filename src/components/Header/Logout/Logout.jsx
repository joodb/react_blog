import '../../Button/button.css'
import login from '../../../assets/icon-login.svg'
import register from '../../../assets/icon-register.svg'

export default function Button() {
  return (
    <>
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
