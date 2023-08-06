const highlightHTMLContent = require('./highlightHTMLContent')
// Example inputs
const htmlContent = '<p><span>Some HTML content here</span></p>';
  const plainText = 'Some HTML content';
  const plainTextPositions = [{ start: 5, end: 21 }];

// Call the highlightHTMLContent function with your inputs
const highlightedContent = highlightHTMLContent(htmlContent, plainText, plainTextPositions);

console.log(highlightedContent);