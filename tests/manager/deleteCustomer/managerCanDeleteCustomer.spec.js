import { test } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { AddCustomerPage } from "../../../src/pages/manager/AddCustomerPage";
import { CustomersListPage } from "../../../src/pages/manager/CustomersListPage";

let firstName, lastName, postCode;

test.beforeEach(async ({ page }) => {
  /* 
  Pre-conditons:
  1. Open Add Customer page
  2. Fill the First Name.  
  3. Fill the Last Name.
  4. Fill the Postal Code.
  5. Click [Add Customer].
  */

  const addCustomerPage = new AddCustomerPage(page);

  firstName = faker.person.firstName();
  lastName = faker.person.lastName();
  postCode = faker.location.zipCode();

  await addCustomerPage.open();
  await addCustomerPage.fillFirstName(firstName);
  await addCustomerPage.fillLastName(lastName);
  await addCustomerPage.fillPostCode(postCode);
  await addCustomerPage.clickAddcustomerButton();
  await addCustomerPage.reloadPage();
});

test("Assert manager can delete customer", async ({ page }) => {
  /* 
Test:
1. Open Customers page
2. Click [Delete] for the row with customer name.
3. Assert customer row is not present in the table. 
4. Reload the page.
5. Assert customer row is not present in the table. 
*/

  const customerListPage = new CustomersListPage(page);

  await customerListPage.open();
  await customerListPage.reloadPage();
  await customerListPage.searchCustomer(lastName);
  await customerListPage.deleteFirstRowCustomer();
  await customerListPage.assertCustomerNotVisible(lastName);
  await customerListPage.reloadPage();
  await customerListPage.assertCustomerNotVisible(lastName);
});
