import React from 'react';

class LatestContent extends React.Component{
	componentDidMount() {
		this.getDataFromDb();
	  }

	render(){
		return (
			<div>TEST!</div>
		);
	}

	getDataFromDb = () => {
		fetch("/api/getData")
		  .then(data => data.json())
		  .then(res => console.log(res));
	  };
	
}

export default LatestContent;