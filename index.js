// The application must include Triangle, Circle, and Square classes, as well as tests for each of these classes using Jest. While not a requirement, it is recommended that you place any common functionality and properties shared by the Triangle, Circle, and Square classes in a parent Shape class and use inheritance to reuse the code in the child classes.
// Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.

// The following example test should pass:
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />'); 

const inquirer = require("inquirer");
const fs = require("fs");

const { Circle, Square, Triangle } = require('./lib/shapes');

const generateSVG = (shape, text) =>
`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape}

    ${text}

    </svg>
  `;


inquirer
  .prompt([
    {
      type: "list",
      name: "shape",
      message: "Choose a shape",
      choices: ["circle", "square", "triangle"],
    },
    {
      type: "input",
      name: "shapeColor",
      message:
        "Choose a color for shape",
    },
    {
      type: "input",
      name: "text",
      message: "Enter up to 3 characters for the text inside logo",
    },
    {
      type: "input",
      name: "textColor",
      message:
        "Choose a color for text",
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

