import React from 'react';

import TodoItem from './todo-list/todo-item';

export default class TodoList extends React.Component{
  render(){
    let nodes = this.props.data.map((items)=>{
        return(
          <TodoItem text={items.text} nodeId={items.id} key={items.id} complete={items.complete}/>
        );
      }
    );
    return(
      <ul>
        {nodes}
      </ul>
    );
  }
}
