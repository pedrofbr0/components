import React from "react";
import ReactDOM from "react-dom";
// var faker = require("faker");
import faker from "faker";
import CommentDetail from "./CommentDetail";
// we don't need to put the .js extension on the file name we are importing
// because we are importing a module and not a file.

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

// whenever we show a component inside of another, we don't use curly braces,
// we use the JSX tags

// Props are used to pass data from a parent component to a child component
// We can't pass data from a child component to a parent component (the other
// way around) because the parent component is not aware of the child component
// and therefore it can't pass data to it.
// They are passed as an argument to the child component as an object. The
// child component can then access the data by using the props object.

// Fixing the live reloading  
if (module.hot) {
    module.hot.accept();
}


const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" />
            <CommentDetail author="Alex"/>
            <CommentDetail author="Jane"/>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));