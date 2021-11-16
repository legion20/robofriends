import React from "react";
import CardList from '../components/CardList';
import Scroll from '../components/Scroll.js';
import SearchBox from '../components/SearchBox'

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => {this.setState({robots: users})});
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredrobots = robots.filter((robots) => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredrobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;
