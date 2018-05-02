import React, { Component } from 'react';
import Image from '../images/404/sign.png'

class Page404 extends Component {
  render() {
    return (
    	<div className="Page404">
    		<div className="background">
	    		<div className="container">

					<div className="row error">
					    <div className="col-lg-6">

						    <div className="_404">
									<h1><b>404</b></h1>
							</div>

							<div className="paragraph">
							    <h6>Page not found</h6>
							</div>

							<div className="inparagraph">
						    	Sorry but the page you were looking for could not be<br></br><br></br>
						    	found on there. Try checking the URL for the error ,and<br></br><br></br>
						    	then press refresh button on your browser or try to<br></br><br></br>
						    	find something else in our website.
						    </div>

					    </div>

					    <div className="col-lg-6">
			    				<img className='img img-fluid' src={Image}/>
			    		</div> 

				    </div>

			    </div>
			</div>
      </div>
    );
  }
}


export default Page404;
