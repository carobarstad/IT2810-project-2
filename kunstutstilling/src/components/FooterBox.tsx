import React, { Component } from "react";

/**
 * Component for the footer of the application
 */
export default class Footer extends Component {

  render() {
    return (
      <footer className="footer">
        <p>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>{" "}
        </p>
        <p>
          Sounds made by Mike Koenig from{" "}
          <a href="http://soundbible.com/" title="Flaticon">
            www.soundbible.com
          </a>{" "}
        </p>
        <p>
          Sounds made by Daniel Simion from{" "}
          <a href="http://soundbible.com/" title="Flaticon">
            www.soundbible.com
          </a>{" "}
        </p>
        <p>
          Poems retrieved from{" "}
          <a href="https://poetrydb.org/index.html" title="Flaticon">
            www.poetrydb.org
          </a>{" "}
        </p>
      </footer>
    );
  }
}
