class Trusted extends React.Component {
    render(){
        return(
            <div className="inside">
                <ul>
                    <li className="uber"><span>Uber</span></li>
                    <li className="shopify"><span>Airbnb</span></li>
                    <li className="salesforce"><span>Salesforce</span></li>
                    <li className="twitter"><span>Twitter</span></li>
                    <li className="evernote"><span>Evernote</span></li>
                    <li className="adidas"><span>Adidas</span></li>
                    <li className="huge"><span>Huge</span></li>
                </ul>
            </div>
        )
    }
}
ReactDOM.render(
    <Trusted/>,
    document.getElementById('trusted-by')
);