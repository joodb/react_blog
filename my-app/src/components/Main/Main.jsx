import './main.css'
import About from '../About/About'
import Posts from '../Posts/Posts'


export default function Main() {
    return (
		<main>
			{/* <!-- posts --> */}
			<div className="max-width">
				<Posts/>
				{/* <!-- //posts --> */}

                <About/>
			</div>
		</main>
		/* <!-- //main --> */
    )
}