import chrome from 'chrome-aws-lambda'

const chromeExecPaths = {
    win32: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    linux: '/usr/bin/google-chrome',
    darwin: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
}

const exePath = chromeExecPaths[process.platform]

export default async function getOptions(isDev) {
    let options = {};

    if (isDev) {
        options = {
            args: [],
            executablePath: exePath,
            headless: true
        }
    } else {
        options = {
            args: chrome.args,
            executablePath: await chrome.executablePath,
            headless: chrome.headless
        }
    }

    return options
}