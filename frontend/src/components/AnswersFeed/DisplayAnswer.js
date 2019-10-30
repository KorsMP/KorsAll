
import { Card, Button, ButtonToolbar, Row, Form, ListGroup, Col } from 'react-bootstrap'
import React, { Component } from 'react'
import chatHttpServer from '../../utils/chatHttpServer'

export class DisplayAnswer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            answerId: props.details.answerId,
            upVote: props.details.upVote,
            downVote: props.details.downVote,
            time:props.details.createdAt,
            name:props.details.displayName,
            upVoteonce: false,
            downVoteonce: false,
        }
    }

    upvoteHandler() {
        console.log(this.state.upVote)
        if (!this.state.upVoteonce) {
            this.setState({ upVote: this.state.upVote + 1 })
            this.setState({ upVoteonce: true })
            let data = {
                id: this.state.answerId,
                voteType: "upVote",
                table: "answer"
            }
            chatHttpServer.updateVotes(data)
        }
    }

    downvoteHandler() {
        console.log(this.state.downVote)
        if (!this.state.downVoteonce) {
            this.setState({ downVote: this.state.downVote + 1 })
            this.setState({ downVoteonce: true })
            let data = {
                id: this.state.answerId,
                voteType: "downVote",
                table: "answer"
            }
            chatHttpServer.updateVotes(data)
        }
    }

    render() {
        return (
            <Card className=" " style={{ width: '100%', height: 'auto', marginBottom: '10px' }}>
                <Row>
                    <Col xs={2}><ListGroup className="border-0">

                        <ListGroup.Item
                            className="border-0 mt-3 "
                            action onClick={() => this.upvoteHandler()} >
                            <i className="fas fa-thumbs-up" style={{ 'fontSize': '30px' }}>
                                {this.state.upVote}
                            </i>
                        </ListGroup.Item>

                        <ListGroup.Item
                            className="border-0 mt-3"
                            action onClick={() => this.downvoteHandler()}>
                            <i className="fas fa-thumbs-down" style={{ 'fontSize': '30px' }}>
                                {this.state.downVote}
                            </i>
                        </ListGroup.Item>

                    </ListGroup></Col>
                    <Col className="" xs={9}>
                        <Card.Body className=" mt-2 mb-2  ">
                            <Card.Text style={{ marginTop: '0px' }}>

                                {this.props.details.answer}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
                <Card.Footer className="text-muted border-0"><span className="float-left">Posted By :<b>{this.state.time}</b></span><span className="float-right">Posted By :<b>{this.state.name}</b></span></Card.Footer>
                            
            </Card>

        )
    }
}

export default DisplayAnswer



