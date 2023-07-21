import { Component } from "react";
import "./modal.scss";

class Modal extends Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <>
        <button onClick={() => this.setState({ isOpen: true })}>
          Open modal
        </button>
        {this.state.isOpen && (
          <div className="modal">
            <div className="modal__body">
              <h1>Modal title</h1>
              <p>Awesome modal</p>
              <button onClick={() => this.setState({ isOpen: false })}>
                Close modal
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Modal;
