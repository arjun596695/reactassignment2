import React, { Component } from 'react';

class Forms extends Component{
    constructor(props){
        super(props)
        this.state={
            'username':'',
            'feedback':'',
            'email':'',
            'subjects':''
        }
    }
    handleUsernameChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handleFeedbackChange=(event)=>{
        this.setState({
            feedback:event.target.value
        })
    }  
    handleEmailChange=(event)=>{
        this.setState({
            email:event.target.value
        })
    } 
    handleSubjectsChange=(event)=>{
        this.setState({
            subjects:event.target.value
        })
    }
    handleSubmit=(event)=>{
        alert(`${this.state.username} ${this.state.feedback} ${this.state.email} ${this.state.subjects}`)
        event.preventDefault()
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <div>
            <h1>Registration</h1>
            </div>
            <div>
             <label>First Name</label>
             <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
            </div>
            <div>
                <label>Last Name</label>
                <input value={this.state.feedback} onChange={this.handleFeedbackChange}></input>
            </div>
            <div>
                <label>Email</label>
                <input value={this.state.email} onChange={this.handleEmailChange}></input>
            </div>
            <div>
                <label>Subjects</label>
                <select value={this.state.sub} onChange={this.handleSubjectsChange}>
                    <option value='datamining'>DataMining</option>
                    <option value='angular'>Angular</option>
                    <option value='vue'>Vue</option>
                </select>
            </div>
            <button type="submit">Submit</button>
            </form>
        )
    }
}
export default Forms;