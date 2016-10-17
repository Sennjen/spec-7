var Cards = React.createClass({
    getInitialState: function() {
        return {
            cards: []
        };
    },

    componentDidMount: function() {
        this.serverRequest = $.get(this.props.source, function (result) {
            this.setState({
                cards: result.cards
            });
        }.bind(this));
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    render: function() {
        return (
            <div>
                {this.state.cards.map(function(result, i){
                        return <div className="container tour-item" data-i={i}>
                            <div className="left">
                                {i+1 & 1 ? <PrintDesc data={result}/> : <PrintImage img={result.img}/>}
                            </div>
                            <div className="right">
                                {i+1 & 1 ? <PrintImage img={result.img}/> : <PrintDesc data={result}/>}
                            </div>
                        </div>
                    }
                )}
            </div>
        );
    }
});
class PrintImage extends React.Component {
    render() {
        return (
            <div className="ani-wrapper">
                <img className="no-retina" src={'/images/'+this.props.img}/>
            </div>
        )
    }
}
class PrintDesc extends React.Component {
    render() {
        return (
            <div className="tour-content">
                <h2>{this.props.data.title}</h2>
                <p className="desc">{this.props.data.description}</p>
            </div>
        )
    }
}


ReactDOM.render(
    <Cards source="/data.json" />,
    document.getElementById('tour')
);