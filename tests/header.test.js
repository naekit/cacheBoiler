const puppeteer = require("puppeteer")

let browser, page

beforeEach(async () => {
	jest.setTimeout(30000)
	browser = await puppeteer.launch({
		headless: false,
		args: ["--no-sandbox", "--disable-setuid-sandbox"],
	})
	page = await browser.newPage()
	await page.goto("localhost:3000")
})

afterEach(async () => {
	await browser.close()
})

test("Header has correct text", async () => {
	const text = await page.$eval("a.brand-logo", (el) => el.innerHTML)

	expect(text).toEqual("Blogster")
})

test("Clicking login starts oauth flow", async () => {
	await page.click(".right a")

	const url = await page.url()

	expect(url).toMatch(/accounts\.google\.com/)
})
