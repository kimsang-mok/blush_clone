import "./NavigationBar.scss"

function NavigationBar() {
    return (
        <div className="navigation">
            <nav className="navigation-container">
                <a href="/" className="logo">
                    <img src="https://assets-global.website-files.com/5f610469be9ecb5b03a480e0/5f6bd3008ad4df07bab659fc_happy.svg" alt="" />
                    <p>blush</p>
                </a>
                <div className="navigation-left">
                    <a href="/">Collection</a>
                    <a href="/">Artists</a>
                </div>
                <div className="navigation-right">
                    <button>Join the List</button>
                    <button>Try Blush</button>
                </div>
            </nav>
        </div>

    )
}

export default NavigationBar