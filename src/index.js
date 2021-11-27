import React from "react";
import ReactDOM from "react-dom";
// var faker = require("faker");
import faker from "faker";

// there are 3 major tenet (principles) of components in react:
// Component Nesting:
// - components can be nested (shown) inside other components
// Component Reusability:
// - components can be reused easily throughtout the application
// Component Configuration:
// - components can be configured to work with different data when created

// a naive component aprroach would be to create a component for each page, only one
// component per page, and then render the component in the index.js file
// this is not a good approach, as it is not reusable, and it is not
// maintainable

// Semantic UI is a library that provides a set of components that can be
// used to build user interfaces more easily, so we don't have to write CSS.

// In this case we'll use semantic-mini.css: we just have put the link in the
// index.html file.

// We can use faker.js to create fake data for us. Just donwload the package
// and install it in the terminal. Then, import the package in the index.js file

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">

                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>

                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 5:42PM</span>
                    </div>
                    <div className="text">Nice blog post!</div>

                </div>
        
            </div>
            <div className="comment">

                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>

                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 5:42PM</span>
                    </div>
                    <div className="text">Nice blog post!</div>

                </div>

            </div>
            <div className="comment">

                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>

                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 5:42PM</span>
                    </div>
                    <div className="text">Nice blog post!</div>

                </div>

            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));