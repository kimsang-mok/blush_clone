import "./Footer.scss"

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-container">
                    <div className="logo"><a href="/">
                        <img src="https://assets-global.website-files.com/5f610469be9ecb5b03a480e0/5f6bd3008ad4df07bab659fc_happy.svg" alt="logo" />
                        <p>Blush</p>
                    </a></div>
                    <div className="footer-items">
                        <h3>Get to Know us</h3>
                        <ul>
                            <a href="/">Pricing Plans</a>
                            <a href="/">About Us</a>
                            <a href="/">Join the Community</a>
                            <a href="/">Become an Illustrator</a>
                        </ul>
                    </div>
                    <div className="footer-items">
                        <h3>Try Blush</h3>
                        <ul>
                            <a href="/">Web App</a>
                            <a href="/">Figma Plugin</a>
                            <a href="/">Sketch Plugin</a>
                        </ul>
                    </div>
                    <div className="footer-items">
                        <h3>Stay in Touch</h3>
                        <ul>
                            <a href="/">Instagram</a>
                            <a href="/">Twitter</a>
                            <a href="/">Dribble</a>
                            <a href="/">Behance</a>
                            <a href="/">LinkedIn</a>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer