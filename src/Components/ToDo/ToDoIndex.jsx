import React, { Component } from 'react';
import {Input, Button, } from 'reactstrap';
// import List from './List';

class ToDoApp extends Component {
    constructor(props) {
      super(props);
      this.state = {
        term: "",
        tasks: [],
      };
      
    }

    onChange = (event) => {
     this.setState({term: event.target.value});
              }
            
   onSubmit = (event) => {
       debugger
       let taskArray = this.state.tasks
       taskArray.push(this.state.term)
        this.setState({
                  term: '',
                  tasks: taskArray,
                });
              }


    displayTasks = () => {
        return(
            this.state.tasks.map((task, index) => {
                debugger
                return <li key={index} ><input type="checkbox"  onClick={(e) => this.removeTask(e, index)} />{task}</li>
            })
        )
    }

    removeTask = (event, index) => {
        let list = this.state.tasks;
        list.splice(index, 1)
        this.setState({
            tasks: list
        })
    }
    
    render(){
        return (
            <div>
                <Input placeholder="Add Task" onChange={this.onChange} />
                <Button onClick={(e) => this.onSubmit(e)}>Add Task to List</Button>
                <div>
                    {this.displayTasks()}
                </div>
            </div>
        )
    }

    }


export default ToDoApp;
