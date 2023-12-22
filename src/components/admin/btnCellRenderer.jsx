import React, { Component } from 'react'

export default class btnCellRenderer extends Component {
    constructor(props) {
        super(props);
        this.btnClickedHandler = this.btnClickedHandler.bind(this);
      }
      btnClickedHandler() {
       this.props.clicked(this.props.value);
      }
      render() {
        return (
          <button class="btn btn-danger" onClick={this.btnClickedHandler}>Eliminar</button>
        )
      }
}
