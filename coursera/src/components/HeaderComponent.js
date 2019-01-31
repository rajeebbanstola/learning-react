import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';


class Header extends Component{

	render(){
		return(
			<>
			 <Navbar dark color="primary">
		        <div className="container">
		          <NavbarBrand href="/">
		            Coursera
		          </NavbarBrand>
		        </div>
		    </Navbar>
			<Jumbotron>
				<div className="container">
					<div className="row row-header">
						<div className="col-12 col-sm-6">
							<h1>Coursera Full Stack React</h1>
							<p>Working well till now</p>
						</div>
					</div>
				</div>
			</Jumbotron>
			</>
		);
	}
}

export default Header;