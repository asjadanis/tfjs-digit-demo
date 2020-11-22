## Tensorflow JS - Digit Recognition

A client side demo application for single-digit recognition using tensorflow-js in the browser in a React app.

*Note: The model was trained in python using tensorflow-2 and mnist digit data.*
*The model was converted for tf-js using [tensorflow-converter](https://github.com/tensorflow/tfjs/tree/master/tfjs-converter).*

*To see how the model was trained refer to [mnist-digit-recog](https://github.com/asjadanis/mnist-digit-recog)*

*This project was bootstrapped with [react-redux-boilerplate](https://github.com/asjadanis/react-redux-boilerplate).*

## DEMO

![Alt Text](https://media.giphy.com/media/K8gg7QoXeZ8qxI4dLm/giphy.gif)


## To Run locally and experiment

* git clone `https://github.com/asjadanis/tfjs-digit-demo.git`
* create a `.env` file in project root-directory
* add `REACT_APP_MODEL_URL=https://storage.googleapis.com/mnist-digit/1/mnist-tf-js/model.json`
* `yarn install`
* `yarn start`
