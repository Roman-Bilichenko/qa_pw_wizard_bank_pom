const { expect } = require("@playwright/test");

export class CustomersListPage {
  constructor(page) {
    this.page = page;
    this.lastRow = page.getByRole("row").last();
    this.rawCustomers = page.getByRole("row");
    this.lastRowFirstCell = this.lastRow.getByRole("cell").nth(0);
    this.lastRowSecondCell = this.lastRow.getByRole("cell").nth(1);
    this.lastRowThirdCell = this.lastRow.getByRole("cell").nth(2);
    this.lastRowForthCell = this.lastRow.getByRole("cell").nth(3);
    this.searchField = page.getByPlaceholder("Search Customer");
    this.firstRow = page.getByRole("row").nth(1);
    this.firstRowFirstCell = this.firstRow.getByRole("cell").nth(0);
    this.firstRowSecondCell = this.firstRow.getByRole("cell").nth(1);
    this.firstRowThirdCell = this.firstRow.getByRole("cell").nth(2);
    this.secondRow = page.getByRole("row").nth(2);
  }

  async open() {
    await this.page.goto("/angularJs-protractor/BankingProject/#/manager/list");
  }

  async reloadPage() {
    await this.page.reload();
  }

  async assertLastRowFirstName(firstName) {
    await expect(this.lastRowFirstCell).toContainText(firstName);
  }

  async assertLastRowLastName(lastName) {
    await expect(this.lastRowSecondCell).toContainText(lastName);
  }

  async assertLastRowPostCode(postCode) {
    await expect(this.lastRowThirdCell).toContainText(postCode);
  }

  async assertLastRowAccountNumber(accountNumber) {
    await expect(this.lastRowForthCell).toContainText(accountNumber);
  }

  async assertLastRowAccountNumberNotEmpty() {
    await expect(this.lastRowForthCell).not.toBeEmpty();
  }

  async searchCustomer(name) {
    await this.searchField.fill(name);
  }

  async deleteFirstRowCustomer() {
    await this.firstRow.getByRole("button", { name: "Delete" }).click();
  }

  async assertCustomerNotVisible(name) {
    await expect(this.page.locator("table")).not.toContainText(name);
  }

  async assertOnlyOneCustomerInList() {
    const rowCount = await this.page.getByRole("row").count();
    expect(rowCount).toBe(2);
  }
}
