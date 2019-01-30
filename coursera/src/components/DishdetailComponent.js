import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishdetailComponent extends Component{

	renderDish(dish) {
		if( dish ){
			return(
				<Card>
					<CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
					<CardBody>
						<CardTitle>{this.props.dish.name}</CardTitle>
						<CardText>{this.props.dish.description}</CardText>
					</CardBody>
				</Card>
			);
		} else {
			return <div></div>;
		}
	}

	renderComments(dish){
		if(dish){
			return(
				<ul className="list-unstyled">
				<h4>Comments</h4>
				{ 
				dish.comments.map((comment) => {
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
			return <div></div>;
		}
	}

	render(){

		return (
			<div className="row">
				<div className="col-12 col-md-5 m-1">
					{ this.renderDish(this.props.dish) }
				</div>
				<div className="col-12 col-md-5 m-1">
					{ this.renderComments( this.props.dish ) }
				</div>
			</div>
		);
	}

}

export default DishdetailComponent;