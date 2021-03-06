import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './components/Editor';

class MyApp extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div id="myApp">
				<Editor />
			</div>
		);
	}
}

ReactDOM.render(<MyApp />,document.getElementById("editor-container"));
