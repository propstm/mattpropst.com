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
					<a href="https://www.linkedin.com/in/mattpropst" target="_blank"><img src={linkedInImg} alt="LinkedIn Icon" /></a>
					<a href="http://stackoverflow.com/users/story/408974" target="_blank"><img src={stackOverflowImg} alt="Stack Overflow Icon" /></a>
					<a href="https://www.twitter.com/propstm" target="_blank"><img src={twitterImg} alt="Twitter Icon" /></a>
				</div>
			</div>
			)
	}
}

export default Header;

