const puppeteer = require('puppeteer')

const scraper = (async () => {
  //Setup browser using puppeteer
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: false,
  });
  const page = await browser.newPage();

  //Go to the page
  await page.goto('https://ninokuni.marblex.io/en/price');
  await page.waitForSelector('#price > div.top > div.info > div.exchange > div.area')
  
  //Set timeout to load all the components in the page 
  await page.waitForTimeout(2000);
  
  //Get the value of the selector
  const token = await page.$$eval('#price > div.top > div.info > div.exchange > div.area', (el) => {
    return el.map((el) => {
      if (el.querySelector('div.swiper-slide.swiper-slide-next > div > p.num') !== null) {
        return el.querySelector('div.swiper-slide.swiper-slide-next > div > p.num').textContent
      }
      return {token : el.querySelector('p.num').textContent, updatedate : el.querySelector('p.update').textContent}
    })
  })
  
  //Close browser
  await browser.close()

  //Change the hours of the date
  const updatedate = new Date(token[1].updatedate);
  updatedate.setHours(updatedate.getHours() - 2);

  return ({
    nkt: parseInt(token[1].token),
    nktprice: token[0],
    nka: parseInt(token[3].token),
    nkaprice: token[2],
    date: updatedate,
  }) 
})

module.exports = scraper