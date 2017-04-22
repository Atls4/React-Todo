import React from 'react';

export default class TodoForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(event){
    this.setState({value: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
    let info = this.state.value.toString().trim();
    this.props.onTextSubmit(info);
    this.setState({value: ''})
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}
