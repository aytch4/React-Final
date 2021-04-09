import React from "react";
import {Button, ButtonGroup} from 'reactstrap'

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      rating: 0,
  };
 
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    //this.setState({comment: event.target.value});
    this.setState(() => ({comment: event.target.value}));
  }
            
  handleSubmit(event) {
    event.preventDefault();
    this.props.addNewReview(this.props.id, { ...this.state});    
  }

  handleClick(event) {
    const value = event.target.value;
    console.log(value);
    this.setState({
      ...this.state,
      rating: event.target.value,
    }) 
  }


          
  render() {
    return (
      <div>
        <div>
          <ButtonGroup>
            <Button className="btn btn-info" value="1 star" onClick={this.handleClick}>1 star</Button>
            <Button className="btn btn-info" value="2 stars" onClick={this.handleClick}>2 stars</Button>
            <Button className="btn btn-info" value="3 stars" onClick={this.handleClick}>3 stars</Button>
            <Button className="btn btn-info" value="4 stars" onClick={this.handleClick}>4 stars</Button>
            <Button className="btn btn-info" value="5 stars" onClick={this.handleClick}>5 stars</Button>
          </ButtonGroup> 
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Review:
            <br/>
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
            <br/>
            <input type="submit" value="Submit" />
        </form>
        <br/>
      </div>
    );
  }
}
