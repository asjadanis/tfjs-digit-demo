import * as tf from "@tensorflow/tfjs";

export const processCanvasData = (dataString) => {
  const image = tf.browser.fromPixels(dataString);
  const resizedImage = image.resizeNearestNeighbor([28, 28]);
  const mean = resizedImage.mean(2);
  const reshapedImage = mean.expandDims(2);
  const expandedDimensions = reshapedImage.expandDims().toFloat();
  const average = expandedDimensions.div(255.0);
  return average;
};
