import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import Footer from "./components/Footer";
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
      selected_content_id: 2,
      subject: { title: 'WEB', sub: 'World Wide Web!' },
      welcome: { title: 'Welcome', desc: 'Hello, React!!!' },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is HyperText Markup Language" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "Javascript", desc: "Javascript is for interactive" }
      ]
    }
  }

  render() {
    console.info("App render");
    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];   //현재 순번에 해당하는 content
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
}
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub} onChangePage={function () {
          this.setState({ mode: 'welcome' });
        }.bind(this)}></Subject>
        <TOC onChangePage={function(id) {
          this.setState({mode: 'read', selected_content_id: Number(id)});
        }.bind(this)} data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
