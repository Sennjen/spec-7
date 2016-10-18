class Hero extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        document.getElementById('hero_modal').className += " is-open";
        document.getElementById('embed-video').play();
    }
    render() {
        return (
            <div>
                <div className="hero-container">
                    <h1 className="hero-title">Design better. Faster. Together.</h1>
                    <h2 className="hero-subtitle">The world's leading prototyping, collaboration &amp; workflow platform</h2>
                    <p className="button hero-button"><a className="trial-trigger standard-trigger" href="https://projects.invisionapp.com/d/signup">Get Started — Free Forever!</a></p>
                    <a href="#" className="hero-play" rel="nofollow" title="Play video" onClick={this.handleClick}></a>
                </div>
                <a href="#tour" className="hero-scroll"></a>
            </div>
        );
    }
}

ReactDOM.render(
    <Hero/>,
    document.getElementById('hero-container')
);