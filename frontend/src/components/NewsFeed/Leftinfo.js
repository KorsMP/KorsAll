import React from 'react'

function Leftinfo(props) {
    console.log(props.leftDetails)
    return (
        <div className="  col-3 ">
            <ul className="list-group list-group-flush ">

                {/* Up-Vote */}
                <li className="list-group-item border border-0">
                    <i className="fas fa-thumbs-up" style={{ 'fontSize': '20px' }}>  {props.leftDetails.upvote}</i>
                </li>

                {/* Comments */}
                <li className="list-group-item border border-0">
                    <i className="fas fa-comments" style={{ 'fontSize': '20px' }}> </i>
                </li>

                {/* Down-Vote */}
                <li className="list-group-item border border-0"><i className="fas fa-thumbs-down"
                    style={{ 'fontSize': '20px' }}>       {props.leftDetails.downvote}</i>
                </li>
            </ul>
            {/* <!-- End of LEft Info part  --> */}
        </div>
    )
}

export default Leftinfo
