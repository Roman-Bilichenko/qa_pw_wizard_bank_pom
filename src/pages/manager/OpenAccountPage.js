const { expect } = require("@playwright/test");

export class OpenAccountPage {
  constructor(page) {
    this.page = page;
    this.currencyDropDown = page.getByTestId("currency");
    this.customerNameDropDown = page.getByTestId("userSelect");
    this.customerNameDropDown = page.getByTestId("userSelect");
    this.processButton = page.getByRole("button", { name: "Process" });
    this.customersButton = page.getByRole("button", { name: "Customers" });
  }

  async open() {
    await this.page.goto(
      "/angularJs-protractor/BankingProject/#/manager/openAccount"
    );
  }
  
  async reloadPage() {
    await this.page.reload();
  }

  async selectCurrency(currency) {
    await this.currencyDropDown.selectOption(currency);
  }

  async selectCustomerName(fullName) {
    await this.customerNameDropDown.selectOption(fullName);
  }

  async assertSelectedCurrency(currency) {
    const currencyOptionText = await this.currencyDropDown.inputValue();
    expect(currencyOptionText).toBe(currency);
  }

  async clickProcessButton() {
    await this.processButton.click();
  }
}
