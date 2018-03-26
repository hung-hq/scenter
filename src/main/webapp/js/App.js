import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import Table from './Table';
import '../css/general.css';
import Users from './Users';

class App extends React.Component {
    render() {
        return (
            <div>
                <h4>React app</h4>
                <Table number={1} openSeats={[1, 2]} />
                <Table number={2} openSeats={[1, 2, 3]} />
                <Table number={3} openSeats={[1]} />
                <Table number={4} openSeats={[1, 2, 3, 4]} />
                <Users url="/users" />
            </div>
        )
    }
}

export default hot(module)(App);
