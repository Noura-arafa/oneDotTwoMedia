import React, { Component } from 'react';
// import '../css/dot-style.css'

class Image extends Component{

	bla() {
	 	return ("../images/" + this.props.folderName + "/" + this.props.folderName + this.props.idx)
	}

	/*render() {
	
	    return(
	    	<img id="image" className="img-responsive" src={this.bla}/>
	    );
	}*/
}

class Dot extends Component {

	constructor(props) {
	    super(props);
  	}

	render() {
      return (
	    		<div className="row row-striped" id="with-padding">
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-12">
								<img className="threeDots" src="../images/threeDots-red.png"/>
								<h1 className="h1"><b>{this.props.headline}</b></h1>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<p className="paragraph">Increase visibility of your business. build customer loyalty and expand your customer base.</p>
								<img className="paragraphRectangle" src="../images/red-white rectangle.png"/>
							</div>
						</div>
					</div>

					<div className="col-md-6">
						{/*<Image idx={this.props.idx} folderName={this.props.headline}/>*/}

					</div>
				</div>
	    );
	 }
}

export default Dot;
