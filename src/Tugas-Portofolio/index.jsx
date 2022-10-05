import React, { Component } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";

export default class TugasPortofolio extends Component {
  render() {
    return (
      <div id="home">
        <Navigation />
        <Hero/>
        <Profile/>
        <Contact />
        <Footer/>
      </div>
    );
  }
}
