import React, { Component } from "react";
import { Link } from "react-router-dom";
import { allDays } from '../../services/api'
import './Plan.scss'
import {Button, Spinner, Container, Row, Col} from 'reactstrap';
import ProgressBar from '../progress/Progress'
import piggy from '../../assets/img/shapeIT/piggy-bank-icon-png-14.jpg';


class Plan extends Component {
  state = {
    listOfDays: [],
  }

  _isMounted = false;

  getAllDays = () => {
        allDays()
        .then(response => {
          if (this._isMounted) {
            this.setState({
              listOfDays: response,
            });
          }
          // console.log("listOfDays ====== ", this.state.listOfDays);
    });
  };

  componentDidMount() {
    this._isMounted = true;
    this.getAllDays();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }


  render() {
    
    // // SORT DAYS IN ORDER
    // let copiedListOfDays = [...this.state.listOfDays]
    // let sortedListOfDays = copiedListOfDays.sort(function (a, b) {
    //    if (a.name > b.name) {
    //      return 1;
    //  } else {
    //      return -1;
    //  }
    //  })


    return (
      <div>
        {
          this.state.listOfDays 
          ? (
          <div>
          <p className="h1">Plan</p>
          <div className="plan-container">
          <ul className="flex-5-cols plan-ul">
          {this.state.listOfDays.map((el) => {
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
          <Row className="row align-items-end">
            <Col xs="6">
            <ProgressBar value={Math.round((this.props.loggedInUser.currentDay-1)*100/30)} />
            <div className="margin-top">{Math.round((this.props.loggedInUser.currentDay-1)*100/30)} % completed</div>
            </Col>
            <Col xs="6">
            <div><img src={ piggy } alt="Shape IT logo" /></div>
            + {this.props.loggedInUser.currentDay*5} points
            </Col>
          </Row>
          </Container>
          <Button as={Link} to={"/day/" + this.props.loggedInUser.currentDay} href={"/day/" + this.props.loggedInUser.currentDay} className="btn-round margin-top-bottom" color="primary" size="lg">
            SHAPE!
          </Button>
          </div>
          <p className="margin-top">Legend: <span style={{color: "#51bcda"}}>Days completed</span> | <span style={{color: "#D24B90"}}>Days off</span> | Days not yet activated</p>
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
