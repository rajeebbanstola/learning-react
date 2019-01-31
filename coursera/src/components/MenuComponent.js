import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderMenuItem({dish, onClick}) {

	return(
		<Link to={`/menu/${dish.id}`}>
		<Card>
			<CardImg width="100%" src={dish.image} alt={dish.name} />
			<CardImgOverlay>
				<CardTitle>{dish.name}</CardTitle>
			</CardImgOverlay>
		</Card>
		</Link>
	);

}

const Menu = (props) => {

		if(props.dishes){

			const menu = props.dishes.map((dish) => {
				return (
					<div key={dish.id} className="col-12 col-md-2 m-1">
						<RenderMenuItem dish={dish} />
					</div>
				);
			});

			return (
				<div className="container">
					<div className="row">
						<Breadcrumb>
							<BreadcrumbItem>
								<Link to="/home">Home</Link>
							</BreadcrumbItem>
							<BreadcrumbItem active>
								<Link to="/menu">Menu</Link>
							</BreadcrumbItem>
						</Breadcrumb>
						<div className="col-12">
							<h2>Menu</h2>
							<hr />
						</div>
					</div>
					<div className="row">
						{ menu }
					</div>
				</div>
			);
		} else {
			return <div></div>
		}
	}

export default Menu;