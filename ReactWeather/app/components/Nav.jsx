const React = require('react');
const {Link} = require('react-router');

const Nav = React.createClass({
    render: function() {
        return (
            <div>
                <h2>Nav Component</h2>
                <Link to="/" activeClassName="active">Get Weather</Link>
                <Link to="/about" activeClassName="active">About</Link>
                <Link to="/examples" activeClassName="active">Examples</Link>
            </div>
        );
    }
});

module.exports = Nav;