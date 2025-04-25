const { expect } = require("@playwright/test");

export class BankManagerMainPage {
  constructor(page) {
    this.page = page;
    this.addCustomerButton = page.getByRole("button", { name: "Add Customer" });
    this.openAccountButton = page.getByRole("button", { name: "Open Account" });
    this.customersButton = page.getByRole("button", { name: "Customers" });
  }

  async open() {
    await this.page.goto("/angularJs-protractor/BankingProject/#/manager");
  }

  async assertAddCustomerButtonVisible() {
    await expect(this.addCustomerButton).toBeVisible();
  }

  async assertOpenAccountButtonVisible() {
    await expect(this.openAccountButton).toBeVisible();
  }

  async assertCustomersButton() {
    await expect(this.customersButton).toBeVisible();
  }
}
