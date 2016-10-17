class Video extends React.Component {
    render() {
        return (
            <video id="big-video-vid_html5_api" preload="auto" data-setup="{}"
                   autoPlay src="/images/enterprise-loop.mp4">
            </video>
        );
    }
}

ReactDOM.render(
    <Video/>,
    document.getElementById('big-video-wrap')
);