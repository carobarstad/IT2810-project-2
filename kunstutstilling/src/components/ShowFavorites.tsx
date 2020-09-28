import React, { Component } from "react";

interface State {
  active: string;
  message: string;
}

interface Props {
  active: string;
}

/**
 * Component for button that handles display of favorites
 */
export default class ShowFavorites extends Component<Props, State> {
  constructor(initState: { active: string }) {
    super(initState);
    this.state = { active: "false", message: "Show favorite images" };
  }

  /**
   * Function that handles click on button. 
   * Changes the sessionStorage-variable for each ArtworkBox-display 
   * to show favorites or all, and sets their style attribute accordingly
   * - triggering a rerender. 
   */
  toggleFavorites() {
    let ArtworkBoxes = document.getElementsByClassName(
      "ArtworkBox"
    ) as HTMLCollectionOf<HTMLElement>;
    let NoFavorites = document.getElementsByClassName("NoFavoritesMessage")[0]
    if (this.state.active === "true") {
      //Already showing favorites and wants to view the rest:

      for (let i = 1; i <= ArtworkBoxes.length; i++) {

        sessionStorage.setItem("liked" + i + "display", "display: block;");
        ArtworkBoxes[i - 1].setAttribute(
          "style",
          sessionStorage.getItem("liked" + i + "display")! +
            sessionStorage.getItem("artwork" + i + "grid")!
        );

      }
      this.setState({ active: "false", message: "Show favorite images" })
      sessionStorage.removeItem("favoriteDisplay")
      NoFavorites.setAttribute('style', 'display: none')
    } else {
      let counter = 0;
      for (let i = 1; i <= ArtworkBoxes.length; i++) {
        
        if (!localStorage.getItem("artwork" + i)) {
          sessionStorage.setItem("liked" + i + "display", "display: none;");
          ArtworkBoxes[i - 1].setAttribute(
            "style",
            sessionStorage.getItem("liked" + i + "display")! +
              sessionStorage.getItem("artwork" + i + "grid")!
          );
          counter ++;
        }
        if (counter === 6){
          NoFavorites.setAttribute('style', 'display: block')
        }
      
      }
      
      this.setState({ active: "true", message: "Show all images" });
      sessionStorage.setItem("favoriteDisplay", "true");
    }
  }

  /**
   * Function that runs on render, handling the display of the 
   */
  componentDidMount() {
    if (sessionStorage.getItem("favoriteDisplay")) {
      
      this.setState({ active: "true", message: "Show all images" });
    
    }
  }

  render() {
    return (
      <button className="SettingsButton" onClick={() => this.toggleFavorites()}>
        {this.state.message}
      </button>
    );
  }
}
