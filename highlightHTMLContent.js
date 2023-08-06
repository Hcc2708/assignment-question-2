function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
  const htmlPositions = [];
  let startIndex = 0;

  for (const { start, end } of plainTextPositions) {
    const plainTextSubstring = plainText.substring(start, end);
    const htmlStartIndex = htmlContent.indexOf(plainTextSubstring, startIndex);
    const htmlEndIndex = htmlStartIndex + plainTextSubstring.length;
    if (htmlStartIndex !== -1) {
      htmlPositions.push({ start: htmlStartIndex, end: htmlEndIndex });
      startIndex = htmlEndIndex;
    }
  }

  let highlightedContent = htmlContent;
  let offset = 0;
  for (const { start, end } of htmlPositions) {
    const markedContent = `<mark>${highlightedContent.slice(start + offset, end + offset)}</mark>`;
    highlightedContent =
      highlightedContent.slice(0, start + offset) +
      markedContent +
      highlightedContent.slice(end + offset);
    offset += markedContent.length - (end - start);
  }

  return highlightedContent;
}
module.exports = highlightHTMLContent;
