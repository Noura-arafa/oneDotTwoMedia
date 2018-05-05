import React, { Component } from 'react';
import imgr from '../images/threeDots-red.png'
import imgg from '../images/red-white rectangle.png'

class Dot extends Component {

	constructor(props) {
	    super(props);
  	}
  	

	render() {
      return (
	    		<div className="row row-striped with-padding" id={this.props.id}>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-12">
								<img className="threeDots" src={imgr}/>
								<h1 className="h1-dot">{this.props.headline}</h1>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<p className="paragraph-dot">{this.props.paragraph}</p>
								<img className="paragraphRectangle" src={imgg}/>
							</div>
						</div>
					</div>

					<div className="col-md-6">
						{
							// var x= this.props.img;
						  //<img id="image" class="img-responsive" src={require( this.props.img )}/>
							// <img id="image" class="img-responsive" src=<Image />/>
							<img id="image" className="img-responsive" src={require('../images/'+ this.props.folder.toLowerCase() + '/'+ this.props.img.toLowerCase() + '.png')}/>

					}

					</div>
				</div>
	    );
	 }
}

export default Dot;
