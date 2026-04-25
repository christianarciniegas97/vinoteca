import { test as base} from "@playwright/test";
import Homepage from "../pages/homepage";


type MyFixtures = {
    homepage : Homepage
}

export const test = base.extend<MyFixtures>({
     
    homepage: async ({ page }, use ) =>{
        await use(new Homepage(page))
     }
})



export { expect } from "@playwright/test"


