import React from "react";
import "./App.css";

class Contactform extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert("thanks for the submission. the page will now refresh.");
  }

  render() {
    return (
      <div>
        <form name="contact" method="post">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="name">Name</label> <br />
        <input type="text" id="name" name="name" required />
      </p>
      <p>
        <label htmlFor="email">Email</label> <br />
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="message">Message</label> <br />
        <textarea id="message" name="message" required></textarea>
      </p>
      <p>
        <input type="submit" value="Submit message" />
      </p>
    </form>
        {/* <form
          name="contact"
          // action="https://send.pageclip.co/vKmFJdXlwFsRoY4Ue1mgG2qt2sLHMvqM"
          className="pageclip-form"
          method="post"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input
            autoComplete="off"
            type="text"
            name="artist name"
            placeHolder="artist name"
          />
          <input
            autoComplete="off"
            type="text"
            name="music name"
            placeHolder="album or song name"
          />
          <input
            autoComplete="off"
            type="text"
            name="spotify link"
            placeHolder="spotify link"
          />
          <button
            type="submit"
            className="pageclip-form__submit form-button"
            // onClick={this.handleClick}
          >
            <span>Send</span>
          </button>
        </form> */}
      </div>
    );
  }
}

export default Contactform;
