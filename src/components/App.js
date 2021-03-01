import React, {Component} from 'react';
import {Form} from './Form';
import {List} from './List';

//localStorage.clear();
export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newTask: '',
            allTasks: []
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
        }, () => localStorage.setItem("list", JSON.stringify(newTasks)))
    }

    checkboxChange = (index,e) => {
        const copiedTasks = [...this.state.allTasks];
        if (e.target.id === `input-${index}`) {
            copiedTasks[index].isDone = !copiedTasks[index].isDone;
        }

        this.setState({
            allTasks: copiedTasks
        }, () => localStorage.setItem("list", JSON.stringify(copiedTasks)))
    } 

    componentDidMount() {
        let savedTasks = JSON.parse(localStorage.getItem("list"));
        if (localStorage.getItem("list")) {
            this.setState({
                allTasks: savedTasks 
            })
        }
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