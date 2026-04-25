import { test } from "../fixtures/base";


test.describe("Homepage test", ()=>{

    test("should see homepage", async({ homepage}) => {
        await homepage.goTo()
        //await homepage.validateHeader()
    })


})  