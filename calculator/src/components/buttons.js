import React from "react";

class ButtonPad extends React.Component {
  state = {
    num: "",
    prevValue: "",
    operation: "",
    answer: ""
  };

  render() {
    return (
      <div className="buttons">
        <div className="answer">
          <p className="answerP" value={this.props.answer}></p>
        </div>
        <div className="buttonPad">
          <input
            className="inputs"
            type="button"
            value="AC"
            onClick={this.props.handleChange}
            name="AC"
          ></input>
        </div>
        <div className="buttonPad">
          <input
            className="inputs"
            type="button"
            value="+"
            onClick={this.props.handleChange}
            name="operation"
          ></input>
        </div>
        <div className="buttonPad">
          <input
            className="inputs"
            type="button"
            value="-"
            onClick={this.props.handleChange}
            name="operation"
          ></input>
        </div>
        <div className="buttonPad">
          <input
            className="inputs"
            type="button"
            value="x"
            onClick={this.props.handleChange}
            name="operation"
          ></input>
        </div>
        <div className="buttonPad">
          <input
            className="inputs"
            type="button"
            value="/"
            onClick={this.props.handleChange}
            name="operation"
          ></input>
        </div>
        <div className="buttonPad">
          <input
            className="inputs"
            type="button"
            value="+|-"
            onClick={this.props.handleChange}
            name="operation"
          ></input>
        </div>
        <div className="buttonPad">
          <input
            className="inputs"
            type="button"
            value="9"
            onClick={this.props.handleChange}
            name="num"
          ></input>
        </div>
        <div className="buttonPad">
          <input
            className="inputs"
            type="button"
            value="8"
            onClick={this.props.handleChange}
            name="num"
          ></input>
        </div>
        <div className="buttonPad">
          <input
            className="inputs"
            type="button"
            value="7"
            onClick={this.props.handleChange}
            name="num"
          ></input>
        </div>
        <div className="buttonPad">
          <input
            className="inputs"
            type="button"
            value="6"
            onClick={this.props.handleChange}
            name="num"
          ></input>
        </div>
        <div className="buttonPad">
          <input
            className="inputs"
            type="button"
            value="5"
            onClick={this.props.handleChange}
            name="num"
          ></input>
        </div>
        <div className="buttonPad">
          <input
            className="inputs"
            type="button"
            value="4"
            onClick={this.props.handleChange}
            name="num"
          ></input>
        </div>
        <div className="buttonPad">
          <input
            className="inputs"
            type="button"
            value="3"
            onClick={this.props.handleChange}
            name="num"
          ></input>
        </div>
        <div className="buttonPad">
          <input
            className="inputs"
            type="button"
            value="2"
            onClick={this.props.handleChange}
            name="num"
          ></input>
        </div>
        <div className="buttonPad">
          <input
            className="inputs"
            type="button"
            value="1"
            onClick={this.props.handleChange}
            name="num"
          ></input>
        </div>

        <div id="buttonPad">
          <input
            className="inputs"
            type="button"
            value="0"
            onClick={this.props.handleChange}
            name="num"
          ></input>
        </div>
      </div>
    );
  }
}

export default ButtonPad;