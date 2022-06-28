import './main.css'
import About from '../About/About'
import Posts from '../Posts/Posts'


export default function Main( { posts, users }) {
    return (
		<main>
			{/* <!-- posts --> */}
			<div className="max-width">
				<Posts posts={posts}/>
				{/* <!-- //posts --> */}

				<About users={users}/>
			</div>
		</main>
		/* <!-- //main --> */
    )
}