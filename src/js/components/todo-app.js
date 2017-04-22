import React from 'react';
//IMPORT COMPONENTS
import Title from './todo-app/todo-title';
import TodoForm from './todo-app/todo-form';
import TodoList from './todo-app/todo-list';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {data: []};


  }
  processData(info){
    let data = this.state.data;
    let id = (Math.floor(Math.random()*90000) + 10000).toString();
    let text = info;
    let complete = "false";

    data = data.concat([{id, text, complete}]);
    console.log('This is my data: ' + data);
    this.setState({data});
  }
  render(){
    return(
      <div>
        <Title/>
        <TodoForm onTextSubmit={this.processData.bind(this)}/>
        <TodoList data={this.state.data}/>
      </div>
    );
  }
};
