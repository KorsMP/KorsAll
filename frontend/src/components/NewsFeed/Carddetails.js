import React from 'react'
import LeftSideDetails from './Leftinfo'
import RightSideDetails from './Rightinfo'
import Footerinfo from './Footerinfo'
import { withRouter } from 'react-router'
import { Redirect, Link } from 'react-router-dom'
function Carddetails(props) {
    function getLeftDetails() {
        return {

            upvote: props.details.upVote,
            downvote: props.details.downVote
        }
    };
    function getRightDetails() {
        console.log(props.details.question)
        return {
            question: props.details.question.substr(0, 130) + '.'.repeat(30),
        }
    }
    console.log(getLeftDetails())
    return (
        <Link to={{
            pathname: '/Answer',
            state: {
                questionId: props.details.id,
                question: props.details.question,
                categories: props.details.categories.split(','),
                upvote: props.details.upVote,
                downvote: props.details.downVote,
                displayName:props.details.displayName
            }
        }} style={{ color: '#000', textDecoration: 'none' }}>
            <div className="afterNav container">
                <div className="col-sm-8">
                    <div className="card w-77 carder"> {/* <!-- Individual Card  --> */}
                        <div className="card-body carder-body">{/* <!-- Card Body  --> */}
                            <div className="row rower">
                                {/* Left Info */}
                                <LeftSideDetails leftDetails={getLeftDetails()} ></LeftSideDetails>
                                <RightSideDetails rightDetails={getRightDetails()} ></RightSideDetails>
                            </div>
                        </div>
                        <Footerinfo details={{ time: props.details.createdAt, category: props.details.categories.split(',') }} />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default withRouter(Carddetails)
