const puppeteer = require("puppeteer")

test("adds two numbers", () => {
	expect(1 + 2).toBe(3)
})

test("We can launch a browser", async () => {
	const browser = await puppeteer.launch({
		headless: false,
		args: ["--no-sandbox", "--disable-setuid-sandbox"],
	})
	const page = await browser.newPage()
	await page.goto("localhost:3000")
	const text = await page.$eval("a.brand-logo", (el) => el.innerHTML)

	expect(text).toEqual("Blogster")

	await browser.close()
}, 10000)
