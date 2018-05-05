import React, { Component } from 'react';
import '../../../node_modules/@icon/font-awesome/font-awesome.css';
import ReactDOM from 'react-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../css/service-contact-style.css';



class ContactForm extends Component {
  state = {
  	name : "",
  	mail : "",
  	messeage : "",
  	phoneNumber : "",
  	messeageContent : "",

  }
  change = e => {
  		this.setState({
  			[e.target.name] : e.target.value
  		});
  };
  onSubmit = e =>{
  };
  render() {
    return (
    	<div className=" contact_form_row">
		<div className="container">
			<div className="contact_form">
				<div className="row ">
					<h1 className="contact_form_header">Contact form</h1>
				</div>
				<div className="row">
					<div className="row contact_form_input_row form-group">
							<div className="col-lg-4">
								<input name = "Name "type="text" className=" contact_text_field" placeholder="Name" value={this.state.Name} onChange = {e => this.change(e)}/>
							</div>
							<div className="col-lg-4 ">
								<input name = "mail" type="text" className="contact_text_field" placeholder="Mail" value={this.state.mail} onChange = {e => this.change(e)}/>
							</div>
							<div className="col-lg-4 ">
								<input name = "messeage" type="text" className="contact_text_field" placeholder="Messeage" value={this.state.messeage} onChange = {e => this.change(e)} />
							</div>

					</div>
					<div className="row contact_form_input_row">
						<div className="col-lg-4 col-sm-5 ">
							<input name= "phoneNumber" type="text" className=" contact_text_field" placeholder="Phone number" value={this.state.phoneNumber} onChange = {e => this.change(e) }/>

						</div>
						<div className="col-lg-8 col-sm-7">

							  <label id="label" htmlFor="Messeage">Write your message:</label>
							  <textarea name= "messeageContent" className="" rows="5" id="messeage" value={this.state.textarea} onChange = {e => this.change(e)} ></textarea>


						</div>

					</div>

					<div className="row contact_form_input_row ">

						<div className="col-sm-2 offset-sm-10">
							<button onClick ={e =>this.onSubmit(e)} className="send-btn " type="button">send</button>
						</div>
					</div>

				</div>
			</div>
		</div>
		</div>
    );
  }
}

export default ContactForm;
