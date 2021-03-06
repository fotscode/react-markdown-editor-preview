import React, { Component } from 'react';
import marked from 'marked';

class Editor extends React.Component{
  constructor(props){
    super(props);
    this.state={
      input:'# This is a header\n## This is a subheader\n[this is a link](https://www.twitter.com/fotsme)\n\n`this is code`\n\n```\nthis\nis\nblock\ncode\n```\n- list item\n\n> Block Quote\n\n**bold text**\n\n![sampleimg](https://d17fnq9dkz9hgj.cloudfront.net/uploads/2017/10/PF2015_267_Kittens_Shelter-630-240x240.jpg)'
    }

 this.handleChange=this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({input:event.target.value});
  }

  render(){
    // make marks;
    let preview=marked(this.state.input);
    document.getElementById('preview').innerHTML=preview;


    return(
        <div id="editor-container">
          <textarea id="editor" value={this.state.input} onChange={this.handleChange}>
          </textarea>
        </div>

    );
  }
}

export default Editor;
