import React, { Component } from 'react'
import './image-section.css'

const styles = {
    backgroundImage: '',
    minHeight: '',
}

export default class ImageSection extends Component {
  constructor(props) {
      super(props);
      styles.backgroundImage = `url(${require('../' + this.props.source)})`;
      styles.minHeight = this.props.height;
  }
  render() {
    return (
        <div class="pimg1" style={styles}>
            <div class="ptext">
                <span class="border">
                    {this.props.content}
                </span>
            </div>
        </div>
    )
  }
}
