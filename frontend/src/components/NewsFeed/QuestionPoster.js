import React, { Component } from 'react'
import { Row, Container, Card, Button, ListGroup, ButtonToolbar, Form } from 'react-bootstrap'
import { Dropdown } from 'semantic-ui-react'
import Select from 'react-select';
import chatHttpServer from '../../utils/chatHttpServer'
import { withRouter } from 'react-router'
import {

  useHistory

} from "react-router-dom";


async function getCategories() {
  let res = await chatHttpServer.getCategories();
  let cat = res.map((state) => ({
    label: state.catName,
    value: state.catName,
  }))
  console.log(cat, typeof cat)
  return cat;
}

// async function addQuestion(props, data) {
//   //useHistory().push('/home')


//   // let res = await chatHttpServer.addQuestion(data)
//   // console.log(res)
//   // if (res.success) {
//   //   alert("Question has added successfully :)")
//   //   props.history.push('/Home')
//   // }
//   // else{
//   //   alert("Could not add,Please try again  :(")
//   // }
// }

class QuestionPoster extends Component {
  constructor(props) {
    super(props)

    this.state = {
      history: '',
      question: '',
      categories: [],
      options: []
    }
  }

  handleChangeSelect = (categories) => {
    this.setState({ categories });
  }

  onClickHandler = () => {
    let data = {}
    data['question'] = this.state.question
    let cat = this.state.categories;
    let arr = []
    for (var i = 0; i < cat.length; i++)
      arr.push(cat[i].value);
    if (arr.length == 0)
      arr.push('none')
    data['categories'] = arr.join(',')
    console.log(data)
    this.addQuestion(data)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  async componentDidMount() {
    let res = await getCategories()
    this.setState({ options: res });
    console.log(this.state.options)
  }

  async addQuestion(data) {
    let res = await chatHttpServer.addQuestion(data)
    console.log(res)
    if (res.success) {
      alert("Question has added successfully :)")
      window.location.assign('/Home')
    }
    else {
      alert("Could not add,Please try again  :(")
    }
  }

  render() {
    const { selectedOption } = this.state;
    return (
      <React.Fragment>
        <Row className=" p-4" style={{ marginLeft: '180px' }}>
          <Card className=" shadow-lg" style={{ width: '40rem' }}>
            <Card.Body>
              <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control style={{ border: '20px' }} as="textarea" rows="3" name="question" onChange={event => this.handleChange(event)} />
                </Form.Group>
              </Form>
              {/* <Form.Label className="float-left">
                Categories
              </Form.Label> */}
              <Select
                isMulti
                placeholder='Categories'
                value={selectedOption}
                onChange={this.handleChangeSelect}
                options={this.state.options}
              />
              {/* <Dropdown
                placeholder='Categories'
                fluid
                multiple
                search
                selection
                options={this.state.options}
                onChange={this.handleChangeSelect}
              /> */}
            </Card.Body>
            <Card.Footer className="text-muted"><Button onClick={this.onClickHandler}>Post Question</Button></Card.Footer>
          </Card>
        </Row>
      </React.Fragment>
    );
  }
}

export default withRouter(QuestionPoster)