# Registry Direct frontend coding assignment

Welcome to the Registry Direct frontend coding assignment! Please read the following instructions carefully.

Your goal is to set up an application which enables the user to view and manage transactions.

# Instructions
1. Clone this repository.
2. Complete the project as described below within your local repository.
   1. You should aim to spend 1 to 2 hours
   2. Don't worry if you haven't completed all the acceptance criteria, just do what you can
3. Commit your code.
4. Either share your private repository or git bundle `git bundle create your_name.bundle --all` with your contact.

**In order to be fair to all candidates, please refrain from sharing your solution on public repository hosting 
services such as GitHub and Bitbucket.**

# Evaluation criteria

## Technology requirements

**React** and **ES6 JavaScript** are mandatory requirements. Apart from this, you can use any libraries or components
you like.

Some relevant packages are below. (You don't have to use these):
- Table - [React Table](https://www.npmjs.com/package/react-table)
- Forms - [Formik](https://www.npmjs.com/package/formik)
- Form validation - [Yup](https://www.npmjs.com/package/yup)

## Business requirements

The main goal is for the user to be able to create, view, edit and delete transactions.

### Acceptance criteria

1. The user should be able to view all the transactions in a table list view
   1. The table should have a column for each field available from the API and a column for the edit and delete buttons
      1. ID - `id`
      2. Transaction type - `transaction_type`
      3. Buyer - `buyer`
      4. Seller - `seller`
      5. No. of units - `no_of_units`
      6. Price per unit - `price_per_unit`
      7. Actions - Buttons for editing and deleting
2. The user should be able to create a new transaction
   1. The create form should be shown by clicking a button from the list view
   2. `transaction_type`, `no_of_units` and `price_per_unit` are all mandatory fields
   3. `transaction_type` can only be one of the following values
      1. `Transfer`
      2. `Redemption`
      3. `Allotment`
   4. If the `transaction_type` is `Transfer` then both `buyer` and `seller` fields are mandatory
   5. If the `transaction_type` is `Redemption` then the `seller` field is mandatory and the `buyer` field should be hidden and its value empty
   6. If the `transaction_type` is `Allotment` then the `buyer` field is mandatory and the `seller` field should be hidden and its value empty
   7. `no_of_units` must be an integer greater than zero
   8. `price_per_unit` must be an integer greater than zero
3. The user should be able to edit a transaction
   1. The edit form should be shown by clicking an edit button from each row of the table in the list view
   2. The edit form validation logic is the same as the create form validation logic listed above
4. The user should be able to delete a transaction
   1. When the user clicks the delete button on a particular transaction they should be prompted if they are sure they want to delete the transaction and be able to confirm or cancel
 
# Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and makes use of
[json-server](https://github.com/typicode/json-server) for a mock REST API server.

In the project directory, you can run:

### `npm run server`

Runs the mock REST API server.

API Routes
- GET [http://localhost:3001/transactions](http://localhost:3001/transactions)
- GET [http://localhost:3001/transactions/1](http://localhost:3001/transactions/1)
- POST [http://localhost:3001/transactions](http://localhost:3001/transactions)
- PUT [http://localhost:3001/transactions/1](http://localhost:3001/transactions/1)
- PATCH [http://localhost:3001/transactions/1](http://localhost:3001/transactions/1)
- DELETE [http://localhost:3001/transactions/1](http://localhost:3001/transactions/1)


### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.
