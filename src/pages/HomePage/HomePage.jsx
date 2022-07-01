import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'
import PostView from '../../components/PostView'
import data from '../../data/data.json'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function HomePage() {
    
    return (
        <BrowserRouter>
            <Header users={data.users}/>

            <Routes>
                <Route path="/" element={
                    <> 
                        <Banner/>
                        <Main posts={data.posts} users={data.users}/>
                    </>
                } />
                <Route path="/post-view" element={
                    <>
                        <div className="banner" /* style="background-image: url(./images/post-background6.jpg)" */>
                            <div className="max-width">
                                <div className="banner-contents">
                                    <p className="today">May <em>25</em> Wednesday</p>
                                </div>
                            </div>
                        </div>
                        <PostView/>
                        
                    </>
                } />
            </Routes>

            <Footer/>
        </BrowserRouter>
    )
}