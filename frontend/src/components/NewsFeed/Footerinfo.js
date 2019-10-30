import React from 'react'
import {Card,Button,ButtonToolbar} from 'react-bootstrap'
function Footerinfo(props) {
    return (
//         <div className="card-footer d-flex ">
//             {props.details.time}
//             {/* <div className="btn_wrap ">
//                 <span className="sp">Share
//                                     </span>
//                 <div className="co">
//                     <a href="https://www.google.com/" title="Facebook"><i className="fab fa-facebook-f"></i></a>
//                     <a href="https://www.google.com/" title="twitter"><i className="fab fa-twitter"></i></a>
//                     <a href="https://www.google.com/" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
//                     <a href="https://www.google.com/" title="GitHub"><i className="fab fa-github"></i></a>
//                 </div>
//             </div> */}

// <ButtonToolbar className='ml-5'>
//                 <Card.Text style={{marginTop:'16px',color:'blue'}}>
//             Tags:
//             </Card.Text>
//                     {
//                         // ['JavaScript',"Java","Python",'HTML','Node.js','React js','C-Language','C++','JavaScript',"Java","Python",'HTML','Node.js']
//                         props.details.category
//                         .map(
//                             (skill,index)=>(
//                                 <Button 
//                                 key={index}
//                                 className="ml-2 mt-2 btn-md"
//                                 variant="outline-dark" 
//                                 style={{'borderRadius':'20px'}} >
//                                     {skill}
//                                     </Button>
                                    
//                             )
//                         )
                       
//                     }</ButtonToolbar>  
//         </div>


<Card.Footer className="text-muted border-0">
<span className="float-left ">Posted At :<b>{props.details.time}</b></span>
 <ButtonToolbar className='float-right ml-5'>
                 <Card.Text style={{marginTop:'3px',color:'blue'}}>
             Tags:
             </Card.Text>
                     {
                         // ['JavaScript',"Java","Python",'HTML','Node.js','React js','C-Language','C++','JavaScript',"Java","Python",'HTML','Node.js']
                         props.details.category
                         .map(
                             (skill,index)=>(
                                 <Button 
                                 key={index}
                                 className="ml-1 p-1 btn-sm"
                                 variant="outline-dark" 
                                 style={{'borderRadius':'10px',height:'25px'}} >
                                     {skill}
                                     </Button>
                                    
                             )
                         )
                       
                     }</ButtonToolbar>  


</Card.Footer>
                     



    )
}

export default Footerinfo
