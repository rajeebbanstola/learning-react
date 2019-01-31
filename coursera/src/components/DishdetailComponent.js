import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

	function RenderDish({dish}) {
		if( dish ){
			return(
				<Card>
					<CardImg width="100%" src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			);
		} else {
			return <div></div>;
		}
	}

	function RenderComments({comments}){
		if(comments){
			return(
				<ul className="list-unstyled">
				<h4>Comments</h4>
				{ 
				comments.comments.map((comment) => {
					return (
						<li key={comment.id}>
						{comment.comment}
						<br />
						-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
						<br />
						<br />
						</li>
					);
				}) 
				}
				</ul>
			);
		} else {
			return <div></div>
		}
	}

 	const DishDetail = (props) => {

		return (
			<div className="container">
			<div className="row">
				<div className="col-12 col-md-5 m-1">
					<RenderDish dish={props.dish} />
				</div>
				<div className="col-12 col-md-5 m-1">
					<RenderComments comments={props.dish} />
				</div>
			</div>
			</div>
		);
	}

	export default DishDetail;