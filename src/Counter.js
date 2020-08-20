import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: props.initialCount
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.changeCount(-1)}>-</button>
                <span>{this.state.count}</span>
                <button onClick={() => this.changeCount(1)}>+</button>
            </div>
        );
    }

    changeCount(number) {
        this.setState(prevState => {
            return {count: prevState.count + number}
        })
    }
}

export default Counter;
