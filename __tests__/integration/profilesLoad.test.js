describe('Profiles load', () => {

  beforeAll(async () => {
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    await page.goto('http://127.0.0.1:8000/__tests__/integration/index.html');
    // await page.goto('http://127.0.0.1:8000/');
    await page.evaluate(() => { config.profiles = ['http://localhost:8000/__tests__/__fixtures__/verso_profile_response_short.json']})
    // await page.evaluate(() => { bfe.setConfig(config)})
    await page.evaluate(() => { bfeditor = bfe.fulleditor(config, "bfeditor") })
    // await page.evaluate(() => { location.reload })

    // this.bfeditor = await page.evaluate(() => { bfe.fulleditor(config, "bfeditor") })
    // var bfeditor = bfe.fulleditor(config, "bfeditor");
    // await page.reload()
    // await page.waitFor(1000)
    // await page.goto('http://127.0.0.1:8000/');
    await expect(page).toClick('a[href="#create"]', { text: 'Editor' })
    await page.screenshot({path: 'screenshot.png', fullPage: true})
    await page.waitFor(1000)
  });

  it('loads profile for Monograph Instance', async () => {

    const monograph_sel = 'ul.nav-sidebar > li:first-child > a:first-child'
    await expect(page).toClick(monograph_sel, { text: 'Monograph' })

    const instance_sel = 'a#sp-0_0'
    await expect(page).toClick(instance_sel, { text: 'Instance' })

    await page.waitFor(1000)

    // await page.screenshot({path: 'screenshot.png', fullPage: true})

    await expect_regex_in_selector_textContent('div#bfeditor-formdiv > form > div > h4', /^BIBFRAME Instance/)
  })

  async function expect_regex_in_selector_textContent(sel, regex) {
    const sel_text  = await page.$eval(sel, e => e.textContent)
    expect(sel_text).toMatch(regex)
  }
})
