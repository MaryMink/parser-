const cheerio = require('cheerio')
const axios = require('axios')

axios.get('http://www.reyestr.court.gov.ua/').then((response) => {
  const $ = cheerio.load(response.data)
  const urlElems = $('table');
  for (let i = 0; i < urlElems.length; i++) {
    const number = $(urlElems[i]).find('a[href]')[0]
    console.log(number);
      const urlText = $(number).text()
      console.log(urlText)
   
  }
})