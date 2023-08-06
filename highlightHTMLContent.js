function highlightHTMLContent(htmlContent, plainText, plainTextPositions){
  let mergedString ="";
  let startIndex = 0;
  for(let {start, end} of plainTextPositions){
      start += startIndex;
      end += startIndex;
      plainText = plainText.slice(0, start) + "<mark>" + plainText.slice(start, end)+"</mark>" + plainText.slice(end);
      startIndex += 13;
      }
  let len1 = htmlContent.length;
  let len2 = plainText.length;
  let i = 0;
  let j = 0;
  for( ;i<len1 && j<len2;)
  {
      while(htmlContent[i] === plainText[j])
      {
          mergedString += htmlContent[i];
          i++;
          j++;
      }
      if(htmlContent[i] === '<')
      {
          while(htmlContent[i] != '>')
          {
              mergedString += htmlContent[i];
              i++;
          }
          mergedString += htmlContent[i];
          i++;
      }
      if(plainText[j] === '<')
      {
          while(plainText[j] != '>')
          {
              mergedString += plainText[j];
              j++;
          }
          mergedString += plainText[j];
          j++;
      }
      if(plainText[j] === ' ' && htmlContent[i] != ' ')j++;
      if(htmlContent[i] === ' ' && plainText[j] != ' ')
      {
          mergedString += htmlContent[i];
          i++;
      }
  }
  while(i< len1)
  {
      mergedString += htmlContent[i];
      i++;
  }
  while(j< len2)
  {
      mergedString += plainText[j];
      j++;
  }
  return mergedString;
}
module.exports = highlightHTMLContent;
