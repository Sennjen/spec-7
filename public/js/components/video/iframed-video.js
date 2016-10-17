class EmbedVideo extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        document.getElementById('hero_modal').className = "hero-modal";
        var iframe = document.querySelector('iframe');
        var player = $f(iframe);
        player.api("pause");
    }
    render() {
        return (
                <a href="#" className="hero-modal-close" rel="nofollow" onClick={this.handleClick}></a>
        );
    }
}

ReactDOM.render(
    <EmbedVideo/>,
    document.getElementById('video-close-btn')
);