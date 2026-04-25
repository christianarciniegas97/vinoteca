import {  expect, Locator, Page } from "@playwright/test"

export default class Homepage {
    
    page : Page

    readonly topHeaderContainer :  Locator
    readonly topHeaderText  : Locator

    constructor(page: Page){
        this.page = page
        this.topHeaderContainer = page.locator("#upper-advice")
        this.topHeaderText = page.getByText(/OFF en vinos seleccionados/) 
    }
    
    async goTo(){
      await this.page.goto("/")
    }

    /*examples*/
    async validateHeader() {
        await this.validateTopHeader()
    }

    /*examples*/
    async validateTopHeader () {
        await expect(this.topHeaderContainer).toBeVisible()
        await expect(this.topHeaderText).toBeVisible()
    }

}

