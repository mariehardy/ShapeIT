import React, { Component } from "react";
import { Link } from "react-router-dom";
import { allDays } from '../../services/api'
import './Plan.scss'
import {Button, Spinner, Container, Row, Col} from 'reactstrap';


class Plan extends Component {
  state = {
    listOfDays: [],
  }

  getAllDays = () => {
        allDays()
        .then(response => {
          this.setState({
            listOfDays: response,
          });
          console.log("listOfDays ====== ", this.state.listOfDays);
    });
  };

  componentDidMount() {
    this.getAllDays();
  }

  


  render() {
    
    // SORT DAYS IN ORDER
    let copiedListOfDays = [...this.state.listOfDays]
    let sortedListOfDays = copiedListOfDays.sort(function (a, b) {
       if (a.name > b.name) {
         return 1;
     } else {
         return -1;
     }
     })


    return (
      <div>
        {
          this.state.listOfDays 
          ? (
          <div className="plan-container">
          <p className="h1">Plan</p>
          <ul className="flex-5-cols plan-ul">
          {sortedListOfDays.map((el) => {
              {/* console.log("el ========= ", el); */}
              {/* console.log("this.props.loggedInUser.currentDay ========= ", this.props.loggedInUser.currentDay); */}
              return (
                <li key={el._id} className="plan-li align-items-top">                
                { el.name === 6 || el.name === 7 || el.name === 13 || el.name === 14 || el.name === 20 || el.name === 21 || el.name === 27 || el.name === 28
                ? (
                    <p style={{color: "#D24B90"}}>{el.name}</p>
                  )
                  : (
                    el.name <= this.props.loggedInUser.currentDay 
                  ? (
                    <p><Link  to={"/day/" + el.name}>{el.name}</Link></p> 
                  )
                  : (
                    <p>{el.name}</p>
                  )
                  )
                }
                </li>
              );
            })}
          </ul>
          <Container>
          <Row>
            <Col xs="6">{Math.ceil(this.props.loggedInUser.currentDay*100/30)} %</Col>
            <Col xs="6">+ {this.props.loggedInUser.currentDay*5} points</Col>
          </Row>
          </Container>
          <Button as={Link} to={"/day/" + this.props.loggedInUser.currentDay} href={"/day/" + this.props.loggedInUser.currentDay} className="btn-round button-margin" color="primary" size="lg">
            SHAPE!
          </Button>
          <p className="button-margin">Legend: <span style={{color: "#51bcda"}}>Daya completed</span> | <span style={{color: "#D24B90"}}>Days off</span> | Days not yet activated</p>
          </div>
          ) 
          : (
              <Spinner color="warning" />
          )
        }
      </div>
    );
  }
}

export default Plan;
