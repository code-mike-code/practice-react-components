import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { counter: 0 }
    }
    render() {
        console.log('render');

        return <h1>{ this.state.counter }</h1>
    }

    componentDidMount() {
        console.log('Komponent został zamontowany');
    }

    componentDidUpdate() {
        console.log('Komponent został zaktualizowany');
    }
}

root.render(<App/>);
