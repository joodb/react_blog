import '../../Button/button.css'
import modifyWhite from '../../assets/icon-modify-white.svg'
import logout from '../../assets/icon-logout.svg'

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
    </>
  )
}
