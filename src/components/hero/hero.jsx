import './hero.css'
import Navbar from '../navbar/navbar'
function hero() {
    return (
        <div className='hero'>
            <Navbar />
            <h1>A modern publishing platform</h1>
            <p>Grow your audience and build your online brand</p>
            <div className="hero-btn">
                <button>Start for Free</button>
                <button>Learn More</button>
            </div>
        </div>
    )
}

export default hero