
import React, { Component } from 'react';

import './App.css';

import NavBar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";
import ImageController from './SideBar/ImageController';
import ContainerComponent from './ContainerComponent';
import Data from "./urls";

class App extends Component {
    state = {
        sideDrawerOpen: false
    }

    drawerToggleClick = () => {
    console.log(this.state.sideDrawerOpen);
    this.setState({sideDrawerOpen: !this.state.sideDrawerOpen});
}
    constructor(props){
        super(props);
        //console.log(urlData);
        this.state = {key: "rain", svgIndex: 0, audioIndex: 0, poemIndex: 0, data: Data};
        this.changeSvgKey = this.changeSvgKey.bind(this);
    }

  render() {
    return (
      <div className="App">
          <header className="App-header">
              <h1 className="App-title">Fin header</h1>
          </header>
          <main>
              <div id="nav">
                  {/*nav bar */}
                    <NavBar drawerClickHandler={this.drawerToggleClick} />
                    <SideBar show={this.state.sideDrawerOpen} click={this.drawerToggleClick}>
                        <ImageController callback={this.changeSvgKey.bind(this)}
                            SvgKeys={Data[this.state.key].svgUrl}/>
                    </SideBar>
              </div>
              <div className="container" >

                  {/*Replaces the div-placeholder from earlier versions. Keep the SVGImageContainer.
                    -Jonas */}
                  <ContainerComponent data={this.state.data} />
              </div>
          </main>
          {/*<footer>
              <p>vakker footer</p>
          </footer>*/}

      </div>
    );
  }
  changeSvgKey(e){
        console.log("Changing SVG");
        console.log(e);
  }

}

export default App;