import React from 'react';
import {Form} from './Form';
import {List} from './List';

export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: '',
            userInputs: [],
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            userInput: e.target.value,
        })
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.userInput === '') return;
        this.setState({
            userInput: '',
            userInputs: [...this.state.userInputs, this.state.userInput ]
        })
    }

    removeTask = (index) => {
        const newInputs = this.state.userInputs.filter((task, taskIndex) => {return taskIndex !== index})
        this.setState({
            userInputs: newInputs
        })
    }

    render (){
        return (
            <div className='app'>
                <Form
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    value={this.state.userInput}
                />
                <List
                    input={this.state.userInputs}
                    delete={(index) => {this.removeTask(index)}}
                />
            </div>
        )
    }
}