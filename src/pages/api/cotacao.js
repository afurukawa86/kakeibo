import puppeteer from 'puppeteer';

export default async function (req, res) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const url = `https://www.google.com/search?q=dolar+real&oq=dolar+real&aqs=chrome..69i57j0l5j0i10j0.2164j1j4&sourceid=chrome&ie=UTF-8`;
    await page.goto(url);
    const resultado = await page.evaluate(() => document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value);
    await browser.close();

    resultado;

    res.json([{ cotacao: resultado }]);
}