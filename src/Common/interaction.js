import React from "react";

// import ReactDOM from 'react-dom';

// function getDate(date){
//     let newDate = new Date(date)
//     return `${newDate.getMonth() + 1}/${newDate.getDate()}/${newDate.getFullYear()}`
// }

export default class Interaction extends React.Component {
  getDate(date) {
    let newDate = new Date(date);
    return `${
      newDate.getMonth() + 1
    }/${newDate.getDate()}/${newDate.getFullYear()}`;
  }
  render() {
    return (
      <div className="interaction">
        {/* {this.props.source} */}
        #comments: {this.props.source.comments.count}
        #likes: {this.props.source.likes.length}
        date created: {this.getDate(this.props.source.dateCreated)}
      </div>
    );
  }
}

// export default Question;
