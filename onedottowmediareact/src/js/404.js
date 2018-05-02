function title(props) {
	return(
		<div className= "_404" >
			<h1>{props.title}</h1>
		</div>
		);
}

var title = (
  <div>
     <_404 title="404"/>
      
  </div>
);

ReactDOM.render(title, document.querySelector('#_404'));