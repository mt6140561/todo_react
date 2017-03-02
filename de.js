import React from "react";
import ReactDOM from "react-dom";

class ToDo extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        value: 'To Do',
        item: [],
        out: ''
      };
    }
    render() {
      return (
        <div>
        
        <h1>{this.state.value}</h1>
        <textarea id="jack"/>
        <button onClick={()=>this.addItem(document.getElementById('jack').value)}>{this.state.item.length}               </button>
        <ul>
         <div>
            {this.state.item.map(x=>(<li><button onClick={()=>this.delete(x.id)}>{x.item} {x.id}</button></li>))}
        </div>
        </ul>
          <p>{this.state.out}</p>
        </div>
      );
    }
    addItem(n) {
      var ite = {item:n,id:Date.now()};
      this.setState({
        item: this.state.item.concat(ite),
        value: "hello",
        out: 8
      });

    }
  
  delete(id){
    
    var i = 0;
    var x = this.state.item;
    for (var t = 0;t<x.length;t++){
      if (x[t].id==id){
        i=t;
      }
    }
    x.splice(i,1);
    this.setState({item:x, value:"hello",out:id});
  }
}


ReactDOM.render(<ToDo/>, document.getElementById('root'));