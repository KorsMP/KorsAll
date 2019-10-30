import React, { useState, useEffect, Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { Row, Container, Card, Button, ListGroup, ButtonToolbar } from 'react-bootstrap'
import chatHttpServer from '../../utils/chatHttpServer'

// function SkillComponent(props) {

//     const [tempSkill, setTempSkill] = useState([])
//     //const [addSkill, setAddSkill] = useState([])
//     const [userSkill, setUserSkill] = useState(props.details.userSkills)

//     function handleDropdown(e, { value }) {
//         setTempSkill(value)
//     }

//     function addSkillHandler() {
//         let temp = tempSkill
//         console.log(temp, typeof temp, userSkill, typeof userSkill)
//         temp.push(...userSkill)
//         let set = new Set(temp)
//         temp = Array.from(set)
//         console.log(temp)
//         setUserSkill(temp)
//         setTempSkill([])
//     }
//     useEffect(() => {

//         return () => {
//             let temp=userSkill
//             console.log(temp)
//             chatHttpServer.updateSkills({ skills: temp })
//                 .then(res => console.log(res))
//                 .catch(err => console.log(err))
//         };
//     }, [])

//     return (
//         <Card className=" p-1 shadow-lg " >
//             <Card.Title>
//                 <Button
//                     className="ml-2 mt-2 btn-md"
//                     variant="outline-dark"
//                     style={{
//                         'borderBottomLeftRadius': '30px', 'borderBottomRightRadius': '30px',
//                         borderWidth: '4px',

//                         fontSize: "30px", fontWeight: 'bolder'
//                     }} >
//                     Skills
//                         </Button>
//             </Card.Title>
//             <Card.Body>

//                 <ButtonToolbar>
//                     {
//                         userSkill.map(
//                             (skill, index) => (
//                                 <Button
//                                     key={index}
//                                     className="ml-2 mt-2 btn-md"
//                                     variant="outline-dark"
//                                     style={{ 'borderRadius': '20px' }} >
//                                     {skill}
//                                 </Button>
//                             )
//                         )
//                     }</ButtonToolbar>
//                 <Row className="mx-auto">
//                     <Dropdown style={{ width: '80%', marginRight: '20px' }}
//                         placeholder='Categories'
//                         fluid
//                         multiple
//                         search
//                         clearable
//                         selection
//                         options={props.details.skills}
//                         onChange={handleDropdown}
//                     /> <Button
//                         key={'a'}
//                         className="btn-md"
//                         variant="outline-danger"
//                         style={{ 'borderRadius': '10px' }}
//                         onClick={addSkillHandler}
//                     >
//                         Add
//                   </Button>
//                 </Row>

//             </Card.Body>
//         </Card>

//     )
// }

//export default SkillComponent




class SkillComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            tempSkill: [],
            userSkill: this.props.details.userSkills
        }
    }

    handleDropdown = (e, { value }) => {
        this.setState({ tempSkill: value })
    }

    addSkillHandler = () => {
        let temp = this.state.tempSkill
        //console.log(temp, typeof temp, userSkill, typeof userSkill)
        temp.push(...this.state.userSkill)
        let set = new Set(temp)
        temp = Array.from(set)
        console.log(temp)
        this.setState({ userSkill: temp })
        this.setState({ tempSkill: [] })
    }

    componentWillUnmount() {
        console.log("127 unmount")
        console.log(this.state.userSkill)
        chatHttpServer.updateSkills({ skills: this.state.userSkill })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Card className=" p-1 shadow-lg " >
                <Card.Title>
                    <Button
                        className="ml-2 mt-2 btn-md"
                        variant="outline-dark"
                        style={{
                            'borderBottomLeftRadius': '30px', 'borderBottomRightRadius': '30px',
                            borderWidth: '4px',

                            fontSize: "30px", fontWeight: 'bolder'
                        }} >
                        Skills
                        </Button>
                </Card.Title>
                <Card.Body>

                    <ButtonToolbar>
                        {
                            this.state.userSkill.map(
                                (skill, index) => (
                                    <Button
                                        key={index}
                                        className="ml-2 mt-2 btn-md"
                                        variant="outline-dark"
                                        style={{ 'borderRadius': '20px' }} >
                                        {skill}
                                    </Button>
                                )
                            )
                        }</ButtonToolbar>
                    <Row className="mx-auto">
                        <Dropdown style={{ width: '80%', marginRight: '20px' }}
                            placeholder='Categories'
                            fluid
                            multiple
                            search
                            clearable
                            selection
                            options={this.props.details.skills}
                            onChange={this.handleDropdown}
                        /> <Button
                            key={'a'}
                            className="btn-md"
                            variant="outline-danger"
                            style={{ 'borderRadius': '10px' }}
                            onClick={this.addSkillHandler}
                        >
                            Add
                  </Button>
                    </Row>

                </Card.Body>
            </Card>

        )
    }
}

export default SkillComponent
