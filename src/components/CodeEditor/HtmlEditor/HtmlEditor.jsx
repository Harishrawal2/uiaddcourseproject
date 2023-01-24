import React from 'react';
import './HtmlEditor.css';

class HtmlEditor extends React.Component {
  state = {
    html: '',
    css: ''
  }

  handleHTMLChange = (event) => {
    this.setState({html: event.target.value});
  }

  handleCSSChange = (event) => {
    this.setState({css: event.target.value});
  }

  render() {
    return (
      <div className="HtmlEditor">
        <textarea onChange={this.handleHTMLChange} placeholder="Enter HTML code here"></textarea>
        <textarea onChange={this.handleCSSChange} placeholder="Enter CSS code here"></textarea>
        <div className="result" dangerouslySetInnerHTML={{__html: this.state.html}} />
        <style>{this.state.css}</style>
      </div>
    );
  }
}

export default HtmlEditor;
