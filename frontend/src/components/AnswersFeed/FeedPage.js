import React, { useState, Component } from 'react'
import { Card, Button, ButtonToolbar, Row, Form, ListGroup, Col } from 'react-bootstrap'
import { func } from 'prop-types'
import chatHttpServer from '../../utils/chatHttpServer'
import AnswerCard from './DisplayAnswer'
class FeedPage extends Component {

    constructor(props) {
        super(props)
        console.log(this.props.location.state)
        this.state = {
            resp: null,
            show: false,
            questionId: this.props.location.state.questionId,
            upvote: this.props.location.state.upvote,
            downvote: this.props.location.state.downvote,
            createdBy: this.props.location.state.displayName,
            upvoteonce: false,
            downvoteonce: false,
            answer: '',
            isLoaded: false,
        }
        chatHttpServer.userSessionCheck()
            .then(res => {
                if (!res.isAuthenticated)
                    window.location.assign('/')
            })
    }

    componentWillMount() {
        chatHttpServer.userSessionCheck()
            .then(res => {
                if (!res.isAuthenticated)
                    window.location.assign('/')
            })
    }

    async componentDidMount() {
        console.log("hello")
        let res = await chatHttpServer.getAnswers({ 'questionId': this.state.questionId })
        console.log(res)
        if (res.success) {
            this.setState({ resp: res.result })
            console.log(this.state.resp.map(obj => obj.id))
            this.setState({ isLoaded: true })
        }
    }

    // async onclickHandler(pageNum) {
    //     this.setState({ pageNumber: pageNum });
    //     console.log("onclick", this.state.pageNumber)
    //     let res = await chatHttpServer.getQuestions({ 'page': pageNum })
    //     console.log(res)
    //     if (res.success) {
    //         this.setState({ resp: res.result })
    //         this.setState({ isLoaded: true })
    //     }
    // }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    async addAnswer() {
        let data = {
            questionId: this.state.questionId,
            answer: this.state.answer
        }
        let res = await chatHttpServer.addAnswer(data)
        console.log(res)
        if (res.success) {
            alert("Answer has posted successfully :)")
            window.location.assign('/Answer')
        }
        else {
            alert("Could not post,Please try again  :(")
        }
    }

    upvoteHandler() {
        console.log(this.state.upvote)
        if (!this.state.upvoteonce) {
            this.setState({ upvote: this.state.upvote + 1 })
            this.setState({ upvoteonce: true })
            let data = {
                id: this.state.questionId,
                voteType: "upVote",
                table: "question"
            }
            chatHttpServer.updateVotes(data)
        }
    }

    downvoteHandler() {
        console.log(this.state.downvote)
        if (!this.state.downvoteonce) {
            this.setState({ downvote: this.state.downvote + 1 })
            this.setState({ downvoteonce: true })
            let data = {
                id: this.state.questionId,
                voteType: "downVote",
                table: "question"
            }
            chatHttpServer.updateVotes(data)
        }
    }

    render() {
        return (
            <>
                <Row style={{ marginTop: '20px', width: '90%', marginLeft: '100px' }}>
                    <Card style={{ width: '100%', height: 'auto', paddingTop: '20px' }}>
                        <Card.Body>




                            <Card className="" style={{ width: '100%', height: 'auto', marginBottom: '10px' }}>
                                <Row>
                                    <Col xs={2}><ListGroup className="border-0">
                                        <ListGroup.Item className="border-0 mt-3 " action onClick={() => this.upvoteHandler()} ><i className="fas fa-thumbs-up" style={{ 'fontSize': '30px' }}>  {this.state.upvote}</i></ListGroup.Item>

                                        <ListGroup.Item className="border-0 mt-3" action onClick={() => this.downvoteHandler()}><i className="fas fa-thumbs-down"
                                            style={{ 'fontSize': '30px' }}>       {this.state.downvote}</i></ListGroup.Item>

                                    </ListGroup></Col>
                                    <Col xs={9}>
                                        <Row>
                                            <Card.Title className='text-left mt-2'>
                                                <b>{this.props.location.state.question} </b>
                                            </Card.Title>
                                        </Row>
                                        <Row className="mb-0" >
                                            <Card.Body className="mb-0">


                                                <ButtonToolbar>
                                                    <Card.Text style={{ marginTop: '10px', color: 'blue' }}>
                                                        Tags:
            </Card.Text>
                                                    {
                                                        this.props.location.state.categories.map((skill, index) => (
                                                            <Button
                                                                key={index}
                                                                className="ml-2 p-1 mt-2 btn-sm"
                                                                variant="outline-dark"
                                                                style={{ 'borderRadius': '20px' ,height:'25px' }} >
                                                                {skill}
                                                            </Button>

                                                        )
                                                        )

                                                    }</ButtonToolbar>
                                            </Card.Body>
                                           
                                        </Row>
                                        <Card.Footer className="text-muted border-0 float-left ">Posted By : <b>{this.state.createdBy}</b></Card.Footer>
                                    </Col>
                                </Row>
                            </Card>

                            <Card className="mx-auto mt-5 shadow-lg" style={{ width: '70rem' }}>
                                <Card.Body>
                                    <Form>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Control className="border" style={{ border: '20px' }} as="textarea" rows="3" name="answer" onChange={event => this.handleChange(event)} />
                                        </Form.Group>
                                    </Form>
                                </Card.Body>
                                <Card.Footer className="text-muted border-0"><Button onClick={() => { this.addAnswer() }}>Post Answer</Button></Card.Footer>
                            </Card>
                        </Card.Body>
                    </Card>
                </Row>



                <Row className="mx-auto" style={{ marginTop: '20px', width: '80%', marginLeft: '60px' }}>
                    <Card style={{ width: '100%', height: 'auto', paddingTop: '20px' }}>
                        <Card.Body>
                            {
                                this.state.isLoaded ?

                                    this.state.resp.map((obj) => (
                                        <AnswerCard key={obj.id} details={obj} />
                                    ))
                                    : <></>
                            }
                        </Card.Body>
                    </Card>
                </Row>

            </>
        );
    }
}

export default FeedPage
// function FeedPage(props) {
//     props = props.location.state
//     console.log(props)
//     return (
//         <>
//             <Row style={{ marginTop: '20px', width: '90%', marginLeft: '100px' }}>
//                 {name(props)}
//             </Row>
//         </>
//     )
// }

// function upVoteHandler(props) {
//     return (
//         props.upvote = props.upvote + 1
//     )
// }

// function upVoteHandler() {
//     //props.upvote += 1;
//     const [value, setValue] = useState(true); //boolean state
//     return () => setValue(!value); // toggle the state to force render
// }

// const name = (props) => {
//     // const [upvote, setupvote] = useState(props.upvote);
//     const supvote = upVoteHandler()
//     return (

//         <Card style={{ width: '100%', height: 'auto', paddingTop: '20px' }}>
//             <Card.Body>
//                 <Row>
//                     <Col xs={2}><ListGroup className="border-0">
//                         <ListGroup.Item className="border-0 mt-3 mb-3" action onClick={supvote}><i className="fas fa-thumbs-up" style={{ 'fontSize': '30px' }}>  {props.upvote}</i></ListGroup.Item>
//                         <ListGroup.Item className="border-0"></ListGroup.Item>
//                         <ListGroup.Item className="border-0 mt-5"><i className="fas fa-thumbs-down"
//                             style={{ 'fontSize': '30px' }}>       {props.downvote}</i></ListGroup.Item>

//                     </ListGroup></Col>
//                     <Col xs={9}><Card className="" style={{ width: '100%', height: '200px', marginBottom: '10px' }}>
//                         <Card.Title className='text-left m-2'>
//                             <b>{props.question} </b>
//                         </Card.Title>
//                         <Card.Body>


//                             <ButtonToolbar>
//                                 <Card.Text style={{ marginTop: '25px', color: 'blue' }}>
//                                     Tags:
//             </Card.Text>
//                                 {
//                                     props.categories.map((skill, index) => (
//                                         <Button
//                                             key={index}
//                                             className="ml-2 mt-2 btn-md"
//                                             variant="outline-dark"
//                                             style={{ 'borderRadius': '20px' }} >
//                                             {skill}
//                                         </Button>

//                                     )
//                                     )

//                                 }</ButtonToolbar>
//                         </Card.Body>
//                     </Card></Col>

//                 </Row>

//                 <Card className="mx-auto mt-5 shadow-lg" style={{ width: '70rem' }}>
//                     <Card.Body>
//                         <Form>
//                             <Form.Group controlId="exampleForm.ControlTextarea1">
//                                 <Form.Control className="border" style={{ border: '20px' }} as="textarea" rows="3" name="question" onChange={event => this.handleChange(event)} />
//                             </Form.Group>
//                         </Form>
//                     </Card.Body>
//                     <Card.Footer className="text-muted border-0"><Button onClick={() => { }}>Post Answer</Button></Card.Footer>

//                 </Card>
//             </Card.Body>
//         </Card>


//     )
// }
