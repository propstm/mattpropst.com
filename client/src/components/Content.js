import React from 'react';
import Header from './Header';
//import Skills from './Skills';
import LatestContent from './LatestContent';

import mongoose from 'mongoose';
const url = 'mongodb://heroku_mongodb1985:m0ng0L0gin_2_TH3_DataB@s3!@ds045664.mlab.com:45664/heroku_4w2sh82g';

class Content extends React.Component{
	constructor(props){
		super(props);
		this.testDB = this.testDB.bind();
	}
	testDB(){
		console.log("IN TEST DB");
		//====MONGOOSE CONNECT===//
		mongoose.connect(url, function (err, db) {
			if (err) {
	  			console.log('Unable to connect to the mongoDB server. Error:', err);
			} else {
	  			console.log('Connection established to', url);
			}
   		});
   		//==========================//
	}

	render(){
		this.testDB();
		return (
			<div className="contentContainer">
				<Header />
				<div className="about">
					<p>I am a software developer living and working in Boston, MA. Over the past few years I've worked in the LAMP Stack, also worked with MS SQL.  Along with web i've also been developing for iOS with Objective-C for the last several years. Full stack is a loaded term (the stack seems to change so quickly as of late) but I enjoy being able to create a site and understand the data flow/architecture from front to back.</p>  
					<p>I decided to create this site because I didn't have an updated website or portfolio online, and this site could serve as a good sample project while learning React. While I may be missing a few features I know i'd like to continue to build out this site to include a blog, contact form, and portfolio.</p>
				</div>
				<div className="latest">
					<LatestContent />
				</div>
				<div className="currently">
					<p><span className="heading">Actively Learning:</span> <a href="https://www.linkedin.com/learning/paths/become-a-mern-stack-javascript-developer" target="_blank" rel="noopener noreferrer">Become a MERN Stack JavaScript Developer via LinkedIn Learning</a></p>
					<p><span className="heading">Reading:</span> <a href="https://www.amazon.com/gp/product/1786464535/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1" target="_blank" rel="noopener noreferrer">React Design Patterns and Best Practices</a></p>
					<p><span className="heading">Listening To (Audiobook):</span> <a href="http://www.audible.com/pd/Science-Technology/The-Rise-of-Superman-Audiobook/B00I9LARGO?source_code=GPAGBSH0508140001&mkwid=s0THZlvXz_dc&pcrid=167187978705&pmt=&pkw=&cvosrc=ppc%20cse.google%20shopping.279850140&cvo_crid=167187978705&cvo_pid=43266390212" target="_blank" rel="noopener noreferrer">The Rise of Superman: Decoding the Science of Ultimate Human Performance</a></p>
				</div>
			</div>
				
		
		)
	}
}

export default Content;

