import React, { useState ,useEffect} from 'react'
import { Row, Container, Card, Button, ListGroup,ButtonToolbar } from 'react-bootstrap'
import './style.css'
import UserStatus from './ActivityStatus'
import chatHttpServer from '../../utils/chatHttpServer'
import { Redirect, Link } from 'react-router-dom'

import SkillComponent from './SkillComponent'
const Profile=()=> {
    const[mailId,setmailId]= useState("");
    const[profileName,setProfileName] = useState("");
    const[acadamicDeatils,setAcademicDetails]=useState("");
    const[questions,setQuestions]=useState([])
    const[skills,setSkills] = useState([])
    const[userSkills,setUserSkills] = useState([])
    const[tempSkills,setTempSkills] = useState("")
    useEffect(()=>{
        console.log("in")
        chatHttpServer.getUserInfo()
        .then(res=>{
           console.log(res)
           setmailId(res.email);
           setProfileName(res.firstName)
           setAcademicDetails({
               section:res.section,
               year : res.year,
               branch:res.branch
            });
            if((res.skills).length>0)
            setUserSkills(res.skills.split(","))
        })

        chatHttpServer.getQuestionsByUser()
        .then(res=>{
           setQuestions(res.result)
        })

        chatHttpServer.getCategories()
        .then(res=>{
            console.log(res)
           let skillArray= res.map((obj,index)=>(
                 {
                    key:index,
                value:obj.catName,
                text:obj.catName
                }
           ))
           setSkills(skillArray)
        }
        )

return () => {
    alert("unmount")
  console.log('will unmount');
}


},[]);





    return (
        <>
            <Row className="pt-4">
                {/* profile Card */}
                <Card 
                className="pt-5 border-0 ml-5" 
                style={{ width: '20rem',backgroundColor:'transparent' }}>
                    <Card.Img 
                    className="mx-auto  
                    rounded-circle  Image" 
                    variant="top" 
                    style={{ width: "150px", height: "150px", }} />
                    <Card.Body >
                        <Card.Title 
                        style={{fontSize:"30px",fontWeight:'bolder',}}
                        ><u > {profileName}</u></Card.Title>
                      
                            <ListGroup className="border-0" >
                                
                                <ListGroup.Item 
                                className="border-0"
                                style={{backgroundColor:'transparent',padding:'0px'}}
                                > <i className="pr-2  far fa-envelope"></i>{mailId}</ListGroup.Item>
                                <ListGroup.Item 
                                className="border-0"
                                style={{backgroundColor:'transparent',padding:'1px'}}
                                >
                                    {acadamicDeatils.year+' '+acadamicDeatils.branch+' - '+acadamicDeatils.section}
                                </ListGroup.Item>
                               
                                {/* <ListGroup.Item  
                                className="border-0"
                                style={{backgroundColor:'transparent'}}
                                >
                                    <i className="float-left pl-2 fab fa-linkedin-in" /> :
                                    </ListGroup.Item>
                                    <ListGroup.Item  
                                className="border-0"
                                style={{backgroundColor:'transparent'}}
                                >
                                   
                                    <span className="float-left pl-2  fab fa-github"/> :
                                    </ListGroup.Item> */}
                                    <ListGroup.Item  
                                className="border-0"
                                style={{backgroundColor:'transparent',paddingBottom:'0px'}}
                                >
                                   <Card.Link href="#edit" style={{padding:'0px'}}>
                                    <span  className=" pl-2  fas fa-user-edit"/> EDIT
                                    </Card.Link>
                                    </ListGroup.Item>
                                    
                                    <ListGroup.Item  
                                         className="border-0"
                                         style={{backgroundColor:'transparent'}}
                                     >
                                         <span className="float-left " style={{fontSize:'20px'}}>
                                             <strong>ABOUT:</strong></span><span className="float-right pt-1  fas fa-pen"/><br/>
                                    <span className="float-left ">"<i>qwery bcoudcnhj cwonh j cwno cwnaijop cwo j cwnjrhjnv nfjfnjnhjnhj fffrawrfew ffvfgv"</i></span>
                                    </ListGroup.Item>
                            </ListGroup>

                        
                    </Card.Body>
                </Card>

                {/* basic info Card skills and all */}
                <Card className=" p-3" style={{ width: '55rem', height: 'auto', marginLeft: '40px',backgroundColor:'transparent' }}>
                    <Card.Body>
                        {/* //skills card */}
                        <SkillComponent details={{skills:skills,userSkills:userSkills}}></SkillComponent>
                                   <Card className="mt-3 p-1 shadow-lg " >
                    <Card.Title> 
                        <Button   
                                className="ml-2 mt-2 btn-md"
                                variant="outline-dark" 
                                style={{'borderBottomLeftRadius':'30px','borderBottomRightRadius':'30px',
                                borderWidth:'4px',
                                
                                fontSize:"30px",fontWeight:'bolder'}} >
                                    ACTIVE STATUS
                                    </Button>
                        </Card.Title>
                    <Card.Body style={{height:'320px'}}>
                        <UserStatus/>
                    </Card.Body>
                </Card>

                {/* POSTED QUESTIONS */}
                <Card className="mt-3 p-1 shadow-lg " >
                    <Card.Title> 
                        <Button   
                                className="ml-2 mt-2 btn-md"
                                variant="outline-dark" 
                                style={{'borderBottomLeftRadius':'30px','borderBottomRightRadius':'30px',
                                borderWidth:'4px',
                                
                                fontSize:"30px",fontWeight:'bolder'}} >
                                    Posted Questions
                                    </Button>
                        </Card.Title>
                    <Card.Body>
                    <ListGroup className="border-0" >           
                {
                    questions.map(
                        (question,index)=>(
                <ListGroup.Item 
                key={index} 
                className="border-0"
                style={{backgroundColor:'transparent',paddingBottom:'0px'}}
                >
                    <Link to={{
                        pathname: '/Answer',
                        state: {
                            questionId: question.id,
                            question:question.question,
                            categories: question.categories.split(','),
                            upvote: question.upVote,
                            downvote: question.downVote,
                            displayName:question.displayName
                        }
                        }}>
                    <Card className="float-left" style={{padding:'0px'}}>
                    <span  className="float-left mt-1  far fa-question-circle"/> <span>{index+1} . {(question.question).substring(0,60)+'.'.repeat(10)+'[Go To Question]'}
                    </span>
                    </Card>
                    </Link>
                    </ListGroup.Item>
                        )
                    )
                }
                            </ListGroup>                         
                    </Card.Body>
                </Card>
                    </Card.Body>
                </Card>
                {/* activity and all card */}
                {/* <Container className="p-3">
                    <Card className="bg-dark mx-auto" style={{ width: '40rem', height: '40rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
    </Card.Text>
                            <Card.Link href="#cardlink">Card Link</Card.Link>
                            <Card.Link href="#anotherlink">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Container> */}
            </Row>
        </>
    )
}

export default Profile