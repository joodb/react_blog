import './author.css'
import profile from '../../assets/images/profile.jpg'

export default function Author() {
    return (
        <dl className="author-wrap">
            <dt className="a11y-hidden">Author</dt>
            <dd className="author"><img src={profile} alt="" /> Chilli</dd>
            <dt className="a11y-hidden">Created</dt>
            <dd className="created">2022.05.25</dd>
        </dl>
    )
}