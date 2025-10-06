import "./Hero.css";

const Hero = () => {
    return(
        <section className="hero-container">
            <div className="hero-slogan">
                <span>Find the best in this season 🔥</span>
                <h2>Special collection for everyone</h2>
                <a href="/">Discover Now</a>
            </div>
            <div className="hero-image-container">
                <img src="/public/images/hero.png" alt="" />
            </div>
        </section>
    );
};


export default Hero;