import React, {Component} from 'react';

export default class TaskForm extends Component{

    state={
        title:'',
        description:''
        
    }    
    onSubmit= e => {
        this.props.addTask(this.state.title,this.state.description,this.state.password)
        
        e.preventDefault();
        
    }
    onChange = e =>{
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value,

        })

    }

    render(){
        
        return (
            <form onSubmit={this.onSubmit}>

            <input type="text" name="title"
             onChange= {this.onChange } placeholder="Escribe un a tarea"
             value={this.state.title}/>
            <br/>
            <br/>
            <textarea placeholder="Escriba la dscripción"
            name="description"
            onChange={this.onChange} 
            value={this.state.description}/>  
            <br/>
            <br/>
            <input type="password"
            name="password"
            onChange= {this.onChange } placeholder="Contraseña"
             value={this.state.password}/>

            <input type="submit" />
        </form>
        )
       
    }

}
