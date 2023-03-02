import {GooglePage} from './pageObjectsGoogle'
const fs = require('fs')
const google = new GooglePage()

test('do a search', async () => {
    await google.search('star wars legos')
    let text = await google.getResults()
    expect(text).toContain('star wars legos')
    await fs.writeFile(`${__dirname}/starWarsScreen.png`,
    await google.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Save Successful Gold Star')
    })
    await google.driver.quit()
})