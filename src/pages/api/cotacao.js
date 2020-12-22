import puppeteer from 'puppeteer-core';
import getOptions from './_lib/chromeOptions'

const isDev = !process.env.AWS_REGION;

export default async function (req, res) {
    const options = await getOptions(isDev)
    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    const url = `https://www.google.com/search?q=dolar+real&oq=dolar+real&aqs=chrome..69i57j0l5j0i10j0.2164j1j4&sourceid=chrome&ie=UTF-8`;
    await page.goto(url);
    const resultado = await page.evaluate(() => document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value);
    await browser.close();

    resultado;

    res.json([{ cotacao: resultado }]);
}