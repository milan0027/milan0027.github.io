import React from "react";
import js_logo from "../assets/images/js_logo.png";
import c_logo from "../assets/images/c_logo.png";
import cplusplus_logo from "../assets/images/c++_logo.png";
import java_logo from "../assets/images/java_logo.png";
import mysql from "../assets/images/mysql_logo.png";
import firebase from "../assets/images/firebase_logo.png";
import mariadb from "../assets/images/mariadb_logo.png";
import monogdb from "../assets/images/mongoDB_logo.png";
import html_logo from "../assets/images/html_logo.png";
import css_logo from "../assets/images/css_logo.png";
import react_logo from "../assets/images/react_logo.png";
import redux_logo from "../assets/images/redux_logo.png";
import nodejs_logo from "../assets/images/nodejs_logo.png";
import express_logo from "../assets/images/express_logo.png";
import jquery_logo from "../assets/images/jquery_logo.png";
import bootstrap_logo from "../assets/images/bootstrap_logo.png";
import git_logo from "../assets/images/git_logo.png";
import postman_logo from "../assets/images/postman_logo.png";

const Skills = () => {
  return (
    <>
      <div className='div-item div-item-left' id='skills'>
        <h1 className='item-header-text'>Skills</h1>

        <div className='skill-section'>
          <h2>Languages</h2>
          <div className='skill-items'>
            <div className='skill-item'>
              <div className='skill-img'>
                <img src={c_logo} alt='js'></img>
              </div>
              <div className='skill-text'>C</div>
            </div>
            <div className='skill-item'>
              <div className='skill-img'>
                <img src={cplusplus_logo} alt='js'></img>
              </div>
              <div className='skill-text'>C++</div>
            </div>
            <div className='skill-item'>
              <div className='skill-img'>
                <img src={js_logo} alt='js'></img>
              </div>
              <div className='skill-text'>Javascript</div>
            </div>
            <div className='skill-item'>
              <div className='skill-img'>
                <img src={java_logo} alt='js'></img>
              </div>
              <div className='skill-text'>Java</div>
            </div>
          </div>
        </div>

        <div className='skill-section'>
          <h2>Databases</h2>
          <div className='skill-items'>
            <div className='skill-item'>
              <div className='skill-img'>
                <img src={monogdb} alt='js'></img>
              </div>
              <div className='skill-text'>MongoDB</div>
            </div>
            <div className='skill-item'>
              <div className='skill-img'>
                <img src={mysql} alt='js'></img>
              </div>
              <div className='skill-text'>MySQL</div>
            </div>
            <div className='skill-item'>
              <div className='skill-img'>
                <img src={mariadb} alt='js'></img>
              </div>
              <div className='skill-text'>MariaDB</div>
            </div>
            <div className='skill-item'>
              <div className='skill-img'>
                <img src={firebase} alt='js'></img>
              </div>
              <div className='skill-text'>Firebase</div>
            </div>
          </div>
        </div>

        <div className='skill-section'>
          <h2>Web Development</h2>
          <div className='skill-items'>
            <div className='skill-item'>
              <div className='skill-img'>
                <img src={html_logo} alt='js'></img>
              </div>
              <div className='skill-text'>HTML</div>
            </div>
            <div className='skill-item'>
              <div className='skill-img'>
                <img src={css_logo} alt='js'></img>
              </div>
              <div className='skill-text'>CSS</div>
            </div>
            <div className='skill-item'>
              <div className='skill-img'>
                <img src={react_logo} alt='js'></img>
              </div>
              <div className='skill-text'>React</div>
            </div>
            <div className='skill-item'>
              <div className='skill-img'>
                <img src={redux_logo} alt='js'></img>
              </div>
              <div className='skill-text'>Redux</div>
            </div>
            <div className='skill-item'>
              <div className='skill-img'>
                <img src={nodejs_logo} alt='js'></img>
              </div>
              <div className='skill-text'>Node JS</div>
            </div>
            <div className='skill-item'>
              <div className='skill-img'>
                <img src={express_logo} alt='js'></img>
              </div>
              <div className='skill-text'>Express</div>
            </div>
            <div className='skill-item'>
              <div className='skill-img'>
                <img src={jquery_logo} alt='js'></img>
              </div>
              <div className='skill-text'>jQuery</div>
            </div>
            <div className='skill-item'>
              <div className='skill-img'>
                <img src={bootstrap_logo} alt='js'></img>
              </div>
              <div className='skill-text'>Bootstrap</div>
            </div>
          </div>
        </div>

        <div className='skill-section'>
          <h2>Others</h2>
          <div className='skill-items'>
            <div className='skill-item'>
              <div className='skill-img'>
                <img src={git_logo} alt='js'></img>
              </div>
              <div className='skill-text'>Git</div>
            </div>
            <div className='skill-item'>
              <div className='skill-img'>
                <img src={postman_logo} alt='js'></img>
              </div>
              <div className='skill-text'>Postman</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
