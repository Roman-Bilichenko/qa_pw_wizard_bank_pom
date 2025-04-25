const { expect } = require('@playwright/test');

export class AddCustomerPage {
  constructor(page) {
    this.page = page; 
    this.firstNameField = page.getByPlaceholder('First Name');
    this.lastNameField = page.getByPlaceholder('Last Name');
    this.postCodeField = page.getByPlaceholder('Post Code');
    this.addCustomerButton = page.getByRole('form').getByRole('button', { name: 'Add Customer' })
    this.customersButton = page.getByRole('button', { name: 'Customers' })
  }

  async open() {
    await this.page.goto('/angularJs-protractor/BankingProject/#/manager/addCust');
  }

  async fillFirstName(firstName) {
    await this.firstNameField.fill(firstName);
  }

  async fillLastName(lastName) {
    await this.lastNameField.fill(lastName);
  }

  async fillPostCode(postCode){
    await this.postCodeField.fill(postCode);
  }

  async clickAddcustomerButton() {
    await this.addCustomerButton.click();
  }

  async reloadPage() {
    await this.page.reload();
  }

  async goToCustomersPage() {
    await this.customersButton.click();
  }
}