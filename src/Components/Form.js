import React from 'react';


class Form extends React.Component{
constructor(props){
super(props)
this.state= {
    username:'',
    password:'',
    age:'',
    gender:'Gender',
    occupation:''
    
}
  
}    

handleChange= event => {
this.setState({username:event.target.value});
}

handleChangePassword= event=>{
    this.setState({password:event.target.value});
}

handleChangeAge= event =>{
    this.setState({age:event.target.value});
}

handleSelect = event =>{
    this.setState({gender:event.target.value});
}

handleChangeOccupation = event =>{
    this.setState({occupation:event.target.value});
}

handleSubmit= (event) =>{
console.log(this.state);

}
    render(){
        return(
            <div className="form">
                <form onSubmit={this.handleSubmit}>
<div className='username'>
 <input name='username' placeholder='Username' type="text" value={this.state.username} onChange={this.handleChange} required/> <br/>
 </div>
 
  <div className='password'>
 <input name='password' placeholder='Password' type="password" value={this.state.password} onChange={this.handleChangePassword} required/> <br/>
 </div>

 <div className='age'>
 <input name='age' placeholder='Age' type="number" value={this.state.age} onChange={this.handleChangeAge} required/> <br/>
 </div>
 
 <div className='gender'>
 <select  name='gender' placeholder='Gender'  value={this.state.gender} onChange={this.handleSelect} required>
 <option defaultValue="Gender" disabled selected hidden>Gender</option>
<option>Female</option>
<option>Male</option>
<option>Other</option>
</select> <br/>
</div>
<div className='occupation'>
     <input name='Occupation' placeholder='Occupation' type="text" value={this.state.name} onChange={this.handleChangeOccupation}required/><br/>
 </div>

<div className='createAccount'>
<button type="submit" onClick={this.handleSubmit}>Create Account</button>
</div>
                </form>
            </div>
        );
    }
}
export default Form
