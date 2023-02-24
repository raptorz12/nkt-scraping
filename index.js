const puppeteer = require('puppeteer')

const main = (async () => {
  const browser = await puppeteer.launch({
    defaultViewport: false,
  });
  const page = await browser.newPage();

  await page.goto('https://ninokuni.marblex.io/en/price');
  await page.waitForSelector('#price > div.top > div.info > div.exchange > div.area')

  const token = await page.$$eval('#price > div.top > div.info > div.exchange > div.area', (el) => {
    return el.map((el) => {
      if (el.querySelector('div.swiper-slide.swiper-slide-next > div > p.num') !== null) {
        return el.querySelector('div.swiper-slide.swiper-slide-next > div > p.num').textContent
      }
      return el.querySelector('p.num').textContent
    })
  })

  await browser.close()
  
  return ({
    nkt: token[0],
    nktprice: token[1],
    nka: token[2],
    nkaprice: token[3]
  }) 
})

main()
  .then(data => console.log(data))
  