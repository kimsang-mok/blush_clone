import "./Home.scss"
import Blogs from "./Blogs"
import NavigationBar from "../../Components/Navigation/NavigationBar"
import Footer from "../../Components/FooterComponent/Footer"

function Home() {
    return (
        <>
            <NavigationBar />
            <main>
                <div className="heading">
                    <div className="hero">
                        <div className="hero-header">
                            <h1>Karen Hong Explains How Illustrations Help Headspace Spread Mindfulness</h1>
                            <h2>A Brand Illustrator for Headspace shares how the company uses illustrations to help people all around the globe improve their mental well-being. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus ipsa minus sapiente dolorem, illum incidunt consectetur praesentium, neque totam sunt nemo fuga a dolor magni. Assumenda ducimus ab ipsa iste?</h2>
                        </div>
                    </div>
                </div>
            </main>
            <Blogs />
            <Footer />
        </>
    )
}

export default Home