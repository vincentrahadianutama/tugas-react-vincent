import React from "react";

class Message extends React.Component {
    render(){
      return(
        <div>
          <small>{this.props.sender}:</small>
          <p>{this.props.content}</p>
          <hr/>
        </div>
      );
    }
  }
  
  // menggunakan komponen
  let chat = (
    <div>
    <Message sender="vincent" content="Hi, Apa kabar?" />
    <Message sender="sanbercode" content="Kabar Baik" />
    </div>
  );
  
  // render komponen ke RealDOM
  ReactDOM.render(chat, document.getElementById("root"));