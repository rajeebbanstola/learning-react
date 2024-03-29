import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

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

	function RenderComments({comments, addComment, dishId}){

		if(comments){
			return(
				<React.Fragment>
				<ul className="list-unstyled">
				<h4>Comments</h4>
				{ 
				comments.map((comment) => {
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
				<CommentForm dishId={dishId} addComment={addComment} />
				</React.Fragment>
			);
		} else {
			return <div></div>
		}
	}

 	const DishDetail = (props) => {
 		
		return (
			<div className="container">
			<Breadcrumb>
				<BreadcrumbItem>
					<Link to="/home">Home</Link>
				</BreadcrumbItem>
				<BreadcrumbItem>
					<Link to="/menu">Menu</Link>
				</BreadcrumbItem>
				<BreadcrumbItem active>
					{props.dish.name}
				</BreadcrumbItem>
			</Breadcrumb>
			<div className="row">
				<div className="col-12 col-md-5 m-1">
					<RenderDish dish={props.dish} />
				</div>
				<div className="col-12 col-md-5 m-1">
				<RenderComments comments={props.comments} addComment={props.addComment} dishId={props.dish.id} />
				</div>
			</div>
			</div>
		);
	}

	export default DishDetail;

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

 export class CommentForm extends Component {
    constructor(props){
        super(props)

         this.state = {
            isModalOpen: false
        };

         this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

     toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

     handleSubmit(values){
        this.toggleModal();

		this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);		
    }

     render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"> Submit comment</span>
                </Button>

                 <div className="row row-content">
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}> Submit comment</ModalHeader>
                        <ModalBody>
                            <div className="col-12 col-md-9">
                                <LocalForm onSubmit={(values) => this.handleSubmit(values)} >
                                    <Row className="form-group">
                                        <Label htmlFor="rating">Rating</Label>
                                        <Col md={10}>
                                            <Control.select model=".rating" name="rating" className="form-control" >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Control.select>
                                        </Col>
                                    </Row>

                                     <Row className="form-group">
                                        <Label htmlFor="author" md={2}>Your name</Label>
                                        <Col md={10}>
                                            <Control.text model=".author" id="author" name="author" placeholder="Author" className="form-control" validators={{ required, minLength:  minLength(3), maxLength: maxLength(15)}} />
                                            <Errors className="text-danger" model=".author" show="touched" messages={{ required: 'Required', minLength: 'Must be greater than 3 characters', maxLength: 'Must be 15 charaters or less'}} />
                                        </Col>
                                    </Row>

                                     <Row className="form-group">
                                        <Label htmlFor="feedback" md={2}>Your feedback</Label>
                                        <Col md={10}>
                                            <Control.textarea model=".comment" id="comment" name="comment" rows="6" className="form-control" validators={{ required }} />
                                            <Errors className="text-danger" model=".message" show="touched" messages={{ required: 'Required'}} />
                                        </Col>
                                    </Row>

                                     <Button type="submit" value="submit" color="primary">Submit</Button>
                                </LocalForm>
                            </div>
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        );
    }
} 