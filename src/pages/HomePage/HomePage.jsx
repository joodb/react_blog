import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'
import data from '../../data/data.json'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function HomePage() {
    
    return (
        <BrowserRouter>
            <Header users={data.users}/>
            
            {/* 라우터 처리 */}
                <Routes>
                    <Route path="/" element={
                        <> 
                            <Banner/>
                            <Main posts={data.posts} users={data.users}/>
                        </>
                    } />
                    <Route path="/post-view.html" element={
                        <>
                        {/* post-view안에있는 내용들이 출력된다. */}
                        <h1>Hello world</h1>
                            {/* <Banner/>
                            <Main posts={data.posts} users={data.users}/> */}
                        </>
                    } />
                </Routes>
            <Footer/>
        </BrowserRouter>
    )
}