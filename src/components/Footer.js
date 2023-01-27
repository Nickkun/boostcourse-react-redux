import React, { Component } from "react";

class Footer extends Component {
  render() {
    console.info("Footer render");
    return (
      <footer>
        <h2>홍길동</h2>
        my React app is very good!
      </footer>
    );
  }
}

export default Footer;