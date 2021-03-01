import React from 'react';
import {Form} from './Form';
import {List} from './List';

//localStorage.clear();
let todos;
export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newTask: '',
            allTasks: [],
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            newTask: e.target.value,
        })
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.newTask === '') return;
        this.setState({
            newTask: '',
            allTasks: [...this.state.allTasks, this.state.newTask ]
        })
    }

    removeTask = (index) => {
        const newTasks = this.state.allTasks.filter((_, taskIndex) => taskIndex !== index);
        this.setState({
            allTasks: newTasks
        })
    }

    componentDidMount() {
        if (localStorage.getItem("list")) {
            todos = JSON.parse(localStorage.getItem("list"))
            this.setState({
                allTasks: todos
            })
        }
    }

    componentDidMount() {
        const storedTasks = JSON.parse(localStorage.getItem("list"));
        this.setState({
            allTasks: storedTasks
        });
        console.log(localStorage.getItem("list"));
    }

    render (){
        return (
            <div className='app'>
                <Form
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    inputValue={this.state.newTask}
                />
                <List
                    input={this.state.allTasks}
                    onDelete={(index) => {this.removeTask(index)}}
                />
            </div>
        )
    }
}