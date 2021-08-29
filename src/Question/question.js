import React from "react";

// import ReactDOM from 'react-dom';

import Interaction from "../Common/interaction";

export default class Question extends React.Component {
  render() {
    if (this.props.question) {
        return (
        <div className="question">
            {this.props.question.question} 
            <Interaction source={this.props.question} />
        </div>
        );
    }
  }
}

// export default Question;
