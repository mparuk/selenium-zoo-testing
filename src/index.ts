
import assert from "node:assert";
import { findPackageJSON } from "node:module";
import { Builder, Browser, By, until } from "selenium-webdriver";

async function scenario1() {
    const driver = await new Builder()
        .forBrowser(Browser.CHROME) // Bisa diganti dengan Browser.EDGE, Browser.FIREFOX, dll.
        .build();

    try {
        await driver.get("http://127.0.0.1:5500/");
        const username = await driver.findElement(By.id("username"))
        const password = await driver.findElement(By.id("password"))
        await username.sendKeys("fast_user")
        await password.sendKeys("fast123")
        const loginBtn = await driver.findElement(By.id("loginBtn"))
        await loginBtn.click()

        const actualURL = "http://127.0.0.1:5500/items.html"
        await driver.wait(until.urlIs("http://127.0.0.1:5500/items.html"), 5000)
        assert.strictEqual(
            await driver.getCurrentUrl(), actualURL, "failed login to Zoo Animal Databse"
        )

        

        await driver.get("http://127.0.0.1:5500/");
        const username2 = await driver.findElement(By.id("username"))
        const password2 = await driver.findElement(By.id("password"))
        await username2.sendKeys("fast_user")
        await password2.sendKeys("fast123123")
        const loginBtn2 = await driver.findElement(By.id("loginBtn"))
        await loginBtn2.click()

        const error = await driver.findElement(By.id("errorMessage"))
        assert.ok(error)

        //console.log(await driver.getTitle());
        await driver.sleep(3000);

    } finally {
        await driver.quit();
    }
}

async function scenario2() {
    const driver = await new Builder()
        .forBrowser(Browser.CHROME) // Bisa diganti dengan Browser.EDGE, Browser.FIREFOX, dll.
        .build();

    try {
        await driver.get("http://127.0.0.1:5500/");

        const start = Date.now()

        const username = await driver.findElement(By.id("username"))
        const password = await driver.findElement(By.id("password"))
        await username.sendKeys("slow_user")
        await password.sendKeys("slow123")
        const loginBtn = await driver.findElement(By.id("loginBtn"))
        await loginBtn.click()

        await driver.wait(until.urlContains("items.html"), 5000)

        const cards = await driver.findElements(By.className("animal-card"))
        const elephant = await driver.findElement(By.id("animal-2-image"))

        const loadTime = Date.now() - start
        if(loadTime > 10000){
            console.log("tes gagal")
        }

        for(const card of cards){
            const name = await card.findElement(By.className("animal-name")).getText()
            if(name === "African Elephant"){
                const description = await card.findElement(By.className("animal-description")).getText()
                assert.strictEqual(
                    description, "The largest living land animal, recognized for its long trunk, large ears, and strong family bonds within herds."
                )
                console.log("deskripsi sudah sesuai")

                const meta = await card.findElements(By.className("meta-item"))
                console.log(await meta[0].getText())
                console.log(await meta[1].getText())
            }
            
        }
    } finally {
        await driver.sleep(3000);
        await driver.quit();
    }
}

async function main1() {
    const driver = await new Builder()
        .forBrowser(Browser.CHROME) // Bisa diganti dengan Browser.EDGE, Browser.FIREFOX, dll.
        .build();

    try {
        await driver.get("http://127.0.0.1:5500/");
        const username = await driver.findElement(By.id("username"))
        const password = await driver.findElement(By.id("password"))
        await username.sendKeys("fast_user")
        await password.sendKeys("fast123")
        const loginBtn = await driver.findElement(By.id("loginBtn"))
        await loginBtn.click()

        const actualURL = "http://127.0.0.1:5500/items.html"
        await driver.wait(until.urlIs("http://127.0.0.1:5500/items.html"), 5000)
        assert.strictEqual(
            await driver.getCurrentUrl(), actualURL, "ga ketemu"
        )

        await driver.get("http://127.0.0.1:5500/");
        const username2 = await driver.findElement(By.id("username"))
        const password2 = await driver.findElement(By.id("password"))
        await username2.sendKeys("fast_user")
        await password2.sendKeys("fast123123")
        const loginBtn2 = await driver.findElement(By.id("loginBtn"))
        await loginBtn2.click()

        const error = await driver.findElement(By.id("errorMessage"))
        assert.ok(error)
        
        //console.log(await driver.getTitle());
        await driver.sleep(3000);

    } finally {
        await driver.quit();
    }
}

async function main2() {
    const driver = await new Builder()
        .forBrowser(Browser.CHROME) // Bisa diganti dengan Browser.EDGE, Browser.FIREFOX, dll.
        .build();

    try {
        const start = Date.now()
        await driver.get("http://127.0.0.1:5500/");
        const username = await driver.findElement(By.id("username"))
        const password = await driver.findElement(By.id("password"))
        await username.sendKeys("slow_user")
        await password.sendKeys("slow123")
        const loginBtn = await driver.findElement(By.id("loginBtn"))
        await loginBtn.click()

        await driver.wait(until.urlContains("items.html"), 5000)
        const cards = await driver.findElements(By.className("animal-card"))

        const loadTime = Date.now() - start
        if(loadTime > 10000){
            console.log("test gagal")
        }

        for(const card of cards){
            const name = await card.findElement(By.className("animal-name")).getText()
            if(name === "African Elephant"){
                const description = await card.findElement(By.className("animal-description")).getText()
                assert.strictEqual(
                    description, "The largest living land animal, recognized for its long trunk, large ears, and strong family bonds within herds."
                )
                console.log("deskripsi sesuai")

                const meta = await card.findElements(By.className("meta-item"))
                console.log(await meta[0].getText())
                console.log(await meta[1].getText())
            }
        }

        //console.log(await driver.getTitle());
        await driver.sleep(5000);

    } finally {
        await driver.quit();
    }
}

main2().catch(console.error);
