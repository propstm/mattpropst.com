import React from 'react';
import linkedInImg from './../images/linkedin-logo.png'
import stackOverflowImg from './../images/stack.png'
import twitterImg from './../images/twitter-logo-silhouette.png'


class Header extends React.Component{
	render(){
		return (
			<div className="header">
				<h1>MATT PROPST</h1>
				<div className="socialLinks">
					<img src={linkedInImg} alt="Stack Overflow Icon" />
					<img src={stackOverflowImg} alt="Stack Overflow Icon" />
					<img src={twitterImg} alt="Stack Overflow Icon" />
				</div>
			</div>
			)
	}
}

export default Header;

