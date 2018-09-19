
import React, { Component } from 'react';

import './App.css';

import NavBar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";
import ImageController from './SideBar/ImageController';
import PoemController from './SideBar/PoemController';
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
        this.state = {key: "rain", svgKey: "Happy Rain", audioKey: 0, poemKey: 0, data: Data};
        this.changeSvgKey = this.changeSvgKey.bind(this);
        this.changePoemKey = this.changePoemKey.bind(this);
        this.changeCategoryKey = this.changeCategoryKey.bind(this);
    }

  render() {
    return (
      <div className="App">
          <header className="App-header">
              <h1 className="App-title">Prosjekt 2</h1>
              <h3 className="App-undertitle">IT2810</h3>
          </header>
          <main>
              <div id="nav">
                  {/*nav bar */}
                    <NavBar drawerClickHandler={this.drawerToggleClick} callback={(e) => this.changeCategoryKey(e)}
                            keys={Object.keys(this.state.data)}/>
                    <SideBar show={this.state.sideDrawerOpen} click={this.drawerToggleClick}>
                        <ImageController callback={(e) => this.changeSvgKey(e)}
                            SvgKeys={Data[this.state.key].svgUrl}/>

                        <PoemController callback={(e) => this.changePoemKey(e)}
                                         PoemKeys={Data[this.state.key].poemUrl}/>

                    </SideBar>
              </div>
              {/*Replaces the div-placeholder from earlier versions. Keep the SVGImageContainer.
                -Jonas */}
              <ContainerComponent data={this.state.data} categoryKey={this.state.key} svgKey={this.state.svgKey} />
          </main>
          {/*<footer>
              <p>vakker footer</p>
          </footer>*/}

      </div>
    );
  }

  changePoemKey(e){
    try{
        let newPoemKey = e["title"];
        this.setState({
            ...this.state,
            poemKey: newPoemKey
        });
    }
    catch (e) {
        console.log(e);
    }
  }

  changeSvgKey(e){
      try{
          let newSvgKey = e["title"];
          this.setState({
              ...this.state,
          svgKey: newSvgKey
          });

          console.log(this.state);
        }
        catch (e) {
            console.log(e);
        }
  }

  changeCategoryKey(e){
        try{
            let newKey = e["catKey"];
            let data = this.state.data[newKey];
            let newSvgKey = Object.keys(data["svgUrl"])[0];
            this.setState({
                ...this.state,
                key: newKey,
                svgKey: newSvgKey
            });
            console.log(this.state);

        }
        catch (e) {
            console.log(e);
        }
  }

}

export default App;