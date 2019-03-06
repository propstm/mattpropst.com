import React from 'react';

class LatestContent extends React.Component{
	constructor(props){
		super(props);
		this.state = {data: ""};
	}
	componentDidMount() {
		this.getDataFromDb();
	}

	render(){
		return (
			<div>{this.state.data}</div>
		);
	}

	getDataFromDb = () => {
		fetch("/api/getData")
		  .then(data => data.json())
		  .then(res => this.setState({data: res.result}));
	  };
	
}

export default LatestContent;