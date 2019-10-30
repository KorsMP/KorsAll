import React, { Component } from 'react'
import axios from 'axios'
import Carddetails from './Carddetails'
import './Cardstyling.css'
import QuestionPost from './QuestionPoster'
import { Pagination } from 'react-bootstrap'
import chatHttpServer from '../../utils/chatHttpServer'
/*

Card-Body
    -Left Side Info Contains Details About: 
        -up vote   (Icon and Number)
        -down vote (Icon and Number)
        -comments  (Icon and Number)
    -Right Side Info Contains Details About:
        -Question upto - words
        -Answer upto   - words

Card-Footer:
    -Share
        -facebook
        -github
        -twitter
        -linkedin

*/

class Feedcard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            resp: null,
            show: false,
            pageNumber: 1
        }
    }

    componentWillMount() {
        chatHttpServer.userSessionCheck()
            .then(res => {
                if (!res.isAuthenticated)
                    window.location.assign('/')
            })
    }
    /*
        -Left Side Info Contains Details About: 
        -up vote   (Icon and Number)
        -down vote (Icon and Number)
        -comments  (Icon and Number)
        */
    //    <!-- Left Side -Info -->

    async componentDidMount() {

        console.log("hello")
        let res = await chatHttpServer.getQuestions({ 'page': this.state.pageNumber })
        console.log(res)

        if (res.success) {
            this.setState({ resp: res.result })
            this.setState({ isLoaded: true })
        }

    }

    async onclickHandler(pageNum) {
        this.setState({ pageNumber: pageNum });
        console.log("onclick", this.state.pageNumber)
        let res = await chatHttpServer.getQuestions({ 'page': pageNum })
        console.log(res)
        if (res.success) {
            this.setState({ resp: res.result })
            this.setState({ isLoaded: true })
        }
    }

    render() {
        return (
            <div style={{ height: "600px" }}>
                <QuestionPost />
                {
                    this.state.isLoaded
                        ? this.state.resp.map(obj => (<Carddetails key={obj.id} details={obj}></Carddetails>))
                        : <div className="spinner-border" style={{ width: '6rem', height: "6rem" }} role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                }
                <div className="footer ">
                    <Pagination>
                        <Pagination.Prev onClick={() => this.onclickHandler(this.state.pageNumber - 1)} />
                        <Pagination.Item active={this.state.pageNumber === 1} onClick={() => this.onclickHandler(1)}>{1}</Pagination.Item>
                        <Pagination.Item active={this.state.pageNumber === 2} onClick={() => this.onclickHandler(2)}>{2}</Pagination.Item>
                        <Pagination.Item active={this.state.pageNumber === 3} onClick={() => { this.onclickHandler(3) }}>{3}</Pagination.Item>
                        <Pagination.Item active={this.state.pageNumber === 4} onClick={() => { this.onclickHandler(4) }}>{4}</Pagination.Item>
                        <Pagination.Item active={this.state.pageNumber === 5} onClick={() => { this.onclickHandler(5) }}>{5}</Pagination.Item>
                        <Pagination.Item active={this.state.pageNumber === 6} onClick={() => { this.onclickHandler(6) }}>{6}</Pagination.Item>
                        <Pagination.Next onClick={() => this.onclickHandler(this.state.pageNumber + 1)} />
                    </Pagination>
                </div>
            </div>
        );
    }
}
export default Feedcard
