import React, {Component} from 'react';

import './Task.css'

class Task extends Component{
    StyleCompleted(){
        return{
            fontSize:'20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: 'none'
        }
    }

    render(){
        const {task}= this.props;
    

        return <div style={this.StyleCompleted()} >
        {task.id}--->
        {task.title}-
        {task.description}---
       
        {task.done}
        <input type="checkbox"  onChange={this.props.checkDone.bind(this, task.id)} />
        <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>
            X
        </button></div>
    }
}


const btnDelete = {
    fontSize: '18px',
    background: 'red',
    color: '#fff',
    border:'none',
    padding: '10px 15px',
    borderRadius:'50%',
    cursos:'pointer'

}

export default Task