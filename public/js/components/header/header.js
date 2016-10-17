class Header extends React.Component {
    render() {
        return (
            <div className="inside">
                <nav>
                    <Logo/>
                    <Menu results={[
                            {
                             link:'/#tour',
                             name: 'Tour',
                             title: '',
                             class: ''
                            },
                            {
                             link:'/customers',
                             name: 'Customers',
                             title: 'See customers prototyping with InVision',
                             class: ''
                            },
                            {
                             link:'/new-features',
                             name: 'New Features',
                             title: 'See new prototyping and mockup features',
                             class: ''
                            },
                            {
                             link:'/enterprise',
                             name: 'Enterprise',
                             title: 'View our enterprise-grade prototyping tool',
                             class: ''
                            },
                            {
                             link:'/',
                             name: 'Blog',
                             title: 'Design productivity and collaboration blog',
                             class: ''
                            },
                            {
                             link:'/',
                             name: 'Login',
                             title: '',
                             class: ''
                            },
                            {
                             link:'/',
                             name: 'Sign Up Free',
                             title: '',
                             class: 'signup'
                            }
                        ]}/>
                </nav>
            </div>
        );
    }
}

class Logo extends React.Component {
    render() {
        return (
            <div className="main-logo-wrapper">
                <a href="/" id="logo">InVision</a>
            </div>
        );
    }
}

class Menu extends React.Component {
    render() {
        return (
            <ul>
                {this.props.results.map((result) => (
                    <ListItemWrapper data={result} />
                ))}
            </ul>
        )
    }
}

class ListItemWrapper extends React.Component {
    render() {
        return <li className={this.props.data.class}>
            <a href={this.props.data.link} title={this.props.data.title}>{this.props.data.name}</a>
        </li>;
    }
}

ReactDOM.render(
    <Header/>,
    document.getElementById('main-nav-wrapper')
);
