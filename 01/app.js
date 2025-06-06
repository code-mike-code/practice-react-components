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
        this.id = setInterval(() => {
            const {counter} = this.state
            this.setState({ counter: counter + 1 })
        }, 5000)
        console.log('Komponent został zamontowany');
    }

    componentDidUpdate() {
        console.log('Komponent został zaktualizowany');
    }

    componentWillUnmount() {
        clearInterval( this.id )
        console.log('Komponent został usuniety z DOM');
    } 
}

root.render(<App/>);
