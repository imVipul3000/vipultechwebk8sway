import React, { Component } from 'react';
import './Contact.css';
import axios from 'axios';

class contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject:'',
      message: '',
      sent:false
    }
}

change() {
  document.getElementById("ch1").value="Message sent!";
}

onNameChange(event) {
  this.setState({name: event.target.value})
}
onEmailChange(event) {
  this.setState({email: event.target.value})
}
onSubjectChange(event) {
  this.setState({subject: event.target.value})
}
onMsgChange(event) {
  this.setState({message: event.target.value})
}



submitEmail(e){
e.preventDefault();
let data1 = {
  name:this.state.name,
  email:this.state.email,
  subject:this.state.subject,
  message:this.state.message
}
axios({
  method: "POST", 
  url:"/email", 
  data: data1
}).then((response)=>{
  this.setState({sent:true});
  if (response.data.status === 'success'){
      alert("Message Sent."); 
      this.resetForm()
  }else if(response.data.status === 'fail'){
      alert("Message failed to send.")
  }
})
}
resetForm(){
this.setState({name: '', email: '',subject:'', message: ''});
this.setState({sent:false});
}

    render() {
        return (
          <React.Fragment>
            <div class="container">
               
                <h1>Contact Us</h1>
            <form method="post" onSubmit={this.submitEmail.bind(this)}>
          
              <label for="fname">Name</label>
              <input type="text" id="nname" name="name" placeholder="Your name.." required value={this.state.name} onChange={this.onNameChange.bind(this)} />
          
              <label for="email">Email</label>
              <input type="text" id="email" name="email" placeholder="Your Email.." required value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          
              <label for="country">Contact Number</label>
              <input type="text" id="subject" name="subject" placeholder="Your contact number.."  required value={this.state.subject} onChange={this.onSubjectChange.bind(this)} />
          
              <label for="subject">Mesage</label>
              <input type='text' name='message' placeholder="Enter your message" required value={this.state.message} onChange={this.onMsgChange.bind(this)}/>
          
              <input type="submit" onClick={this.change.bind()} id="ch1" value="Submit" />
          
            </form>
          </div>
          </React.Fragment>
        );
      }

      

    }    
    export default contact;
