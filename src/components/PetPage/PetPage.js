import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, Col, Container, Modal, Row, Table } from "react-bootstrap";
import * as api from "../../api/api";
import { AddToCartInput } from "../AddToCart/AddToCartComponent";
import { ApiConfig } from "../../config/ApiConfig";

// interface ArticlePageProperties{
//     match: {
//         params: {
//             aId: number;
//         }
//     }
// }

export class PetPage extends React.Component{

    state;

    constructor(props){
        super(props);

        this.state = {
            isLoggedIn: true,
            message: '',
            pet: undefined,
            photos: [],
            imageModal: {
                visible: false
            }
        }
    }

    render(){
        return(
            <Container>
                <Card bg="dark" text="white">
                    <Card.Body>
                        <Card.Title className="text-center mb-1">
                            <FontAwesomeIcon icon={faBoxOpen} />
                            <strong className="text-center">{this.state.pet ? this.state.pet.name : 'We have no this article in our offer!'}</strong>
                        </Card.Title>
                        <Row>
                            <Col xs="12" lg="8">
                                <div className="excerpt" mb-1>
                                    {this.state.pet?.except}
                                </div>
                                <hr style={{backgroundColor: '#DDDDDD'}}/>
                                <div className="description mb-3">
                                    {this.state.pet?.description}
                                </div>
                                <Table className="m-1" bordered variant="secondary">
                                    <thead>
                                        <tr>
                                            <th className="text-center" colSpan={2}>Features</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                          
                                    </tbody>
                                </Table>
                                <div className="mt-3">Promoted: </div>
                                <div className="mt-3">Status: </div>
                            </Col>
                            <Col xs="12" lg="4">
                                <Row>
                                    <Col xs="12" className="image-hover cursor-change">
                                        <img src={ApiConfig.baseUrl + 'resources/' + this.state.pet?.photoPath }
                                         alt={'Image-' + this.state.pet?.petId} onClick={() => this.showPhoto(this.state.pet?.photoPath)}
                                         style={{width: '320px', height: '240px', border: '3px solid #DDDDDD'}} className="w-100"/>
                                    </Col>
                                </Row>
                                <Row>
                                   
                                </Row>
                                <br/>
                                <Row>
                                    <Col xs="12">
                                        <AddToCartInput article={this.state.pet}/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <br/> <hr/>
                        <Row>
                            <Col xs="12" className='text-center'>
                                <h3>
                                Price: 
                                </h3>
                                
                            </Col>
                        </Row>

                    </Card.Body>
                    <Modal size="lg" centered show={this.state.imageModal.visible} onHide={() => this.setImageModalVisibleState(false)}>
                        <Modal.Header className="text-center">
                               <strong>{this.state.pet?.name + " photo " }</strong> 
                        </Modal.Header>
                        <Modal.Body style={{display: 'inline-block', border: '3px solid black'}}>
                        {/* {this.state.photos.filter(photo => photo.used).map(photo => {
                                return(
                                    <img src={ApiConfig.PHOTO_PATH + 'small/' + photo.imagePath }
                                alt={'Image-' + this.state.article?.articleId}
                                style={{width: '320px', height: '240px', border: '3px solid #DDDDDD'}} className="w-100 mb-1"/>
                                );
                            }, this)} */}
                            <Button style={{position: 'absolute', left:'0%', top: '50%'}}>{"<"}</Button>
                            <Button style={{position: 'absolute', right: '0%', top: '50%'}}>{">"}</Button>
                        </Modal.Body>
                    </Modal>
                </Card>
            </Container>
        );
    }

    // componentDidMount(){
    //     // this.getArticle();
    // }
    // componentDidUpdate(oldProps) {
    //     if (this.props.match.params.aId === oldProps.match.params.aId) {
    //         return;
    //     }

    //     // this.getArticle();
    // }

}