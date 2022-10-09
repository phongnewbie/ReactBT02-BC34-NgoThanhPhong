import React, { Component } from 'react'
import './main.css'
import dataGlasses from './dataGlasses.json'
import 'bootstrap/dist/css/bootstrap.min.css'
export default class ShowGlasses extends Component {
    state = {
        glassType: {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./GlassesImg/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
      };
      render() {
        let { glassType } = this.state;
        return (
          <div>
            <header>
              <div className="header container">
                <h1 style={{ color: "red", backgroundColor: "cornflowerblue" }}>
                  TRY GLASSES APP ONLINE
                </h1>
              </div>
            </header>
            <div className="container glasses py-3">
              <div className="row justify-content-between">
                <div className="col-6 glasses__left">
                  <div className="row" id="glassesList">
                    {dataGlasses.map((glass, index) => {
                      return (
                        <button key={index} className="col-4">
                          <img
                            onClick={() => {
                              this.setState({
                                glassType: glass
                              });
                            }}
                            src={glass.url}
                            alt=""
                            style={{ height: 50 }}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="col-5 glasses__right">
                  <div className="glasses__card">
                    <div className="glasses__model" id="avatar">
                      <img src={glassType.url} alt="" />
                    </div>
                    <div
                      id="glassesInfo"
                      className="glasses__info"
                      style={{ display: "block" }}
                    >
                      <h5>Name: {glassType.name}</h5>
                      <button className="btn btn-danger">
                        Price: {glassType.price}$
                      </button>
                      <h5>Describie: {glassType.desc}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }       
        
    