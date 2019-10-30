import React from 'react'

function Rightinfo(props) {
    return (
        // {/* <!-- Right Side Question Part --> */}
        <div className=" col-8 ">
            <div className="col-sm">
                <p className="card-text"><strong>  {props.rightDetails.question}
                </strong></p>
            </div>
            <div className="col-sm">
                <p className="card-text">             {props.rightDetails.categories}
                </p>
            </div>
             {/* <!-- End of col-8 Question --> */}
           
        </div>
    )
}

export default Rightinfo
