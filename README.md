# Registry Direct frontend coding assignment

Welcome to the Registry Direct frontend coding assignment! Please read the following instructions carefully.

Your goal is to set up an application which enables the user to view and manage security movements.

# Instructions
1. Clone this repository
2. Complete the project as described below within your local repository
   1. You should aim to spend 1 hour 
   2. Don't worry if you haven't completed all the acceptance criteria, just do what you can to showcase your understanding of React and ES6 JavaScript
   3. Don't worry about styling
3. Commit your code
4. Either share your private repository or git bundle `git bundle create your_name.bundle --all` with your contact

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

The main goal is for the user to be able to create, view, edit and delete security movements.

A security movement is just a way of describing the buying or selling of shares in a company, for example, if John sells 200 shares in Company XYZ to Mary, they are participating in a "security movement" for 200 Company XYZ shares.

There are 3 different types of security movements:
- Allotment (eg,  Company XYZ sells John some shares)
- Redemption (John sells his shares back to Company XYZ)
- Transfer (eg, John sells his Company XYZ shares to Mary) 

A security movement always has a quantity (aka numer of units) and a price.

### Acceptance criteria

1. As the user I should be able to view all the security movements in a table list view
   1. The table should have a column for each field listed below and a column that contains the edit and delete buttons
      1. ID - `id`
      2. Security movement type - `security_movement_type`
      3. Buyer - `buyer`
      4. Seller - `seller`
      5. No. of units - `no_of_units`
      6. Price per unit - `price_per_unit`
      7. Actions - Buttons for editing and deleting
2. As the user I should be able to create a new security movement
   1. The create form should be shown by clicking a button labelled `Create` from the list view
   2. `security_movement_type`, `no_of_units` and `price_per_unit` are all mandatory fields
   3. `security_movement_type` can only be one of the following values
      1. `Transfer`
      2. `Redemption`
      3. `Allotment`
   4. If the `security_movement_type` is `Transfer` then both `buyer` and `seller` fields are mandatory
   5. If the `security_movement_type` is `Redemption` then the `seller` field is mandatory and the `buyer` field should be hidden and its value empty
   6. If the `security_movement_type` is `Allotment` then the `buyer` field is mandatory and the `seller` field should be hidden and its value empty
   7. `no_of_units` must be an integer greater than zero
   8. `price_per_unit` must be an integer greater than zero
3. As the user I should be able to edit a security movement
   1. The edit form should be shown by clicking an edit button from each row of the table in the list view
   2. The edit form validation logic is the same as the create form validation logic listed above
4. As the user I should be able to delete a security movement
   1. When the user clicks the delete button on a particular security movement they should be prompted if they are sure they want to delete the security movement and be able to confirm or cancel the action
 
# Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and makes use of
[json-server](https://github.com/typicode/json-server) for a mock REST API server.

In the project directory, you can run:

### `npm run server`

Runs the mock REST API server. This has been prepopulated with some dummy data which resides in the `db.json` file.

API Routes
- GET [http://localhost:3001/security_movements](http://localhost:3001/security_movements)
- GET [http://localhost:3001/security_movements/1](http://localhost:3001/security_movements/1)
- POST [http://localhost:3001/security_movements](http://localhost:3001/security_movements)
- PUT [http://localhost:3001/security_movements/1](http://localhost:3001/security_movements/1)
- PATCH [http://localhost:3001/security_movements/1](http://localhost:3001/security_movements/1)
- DELETE [http://localhost:3001/security_movements/1](http://localhost:3001/security_movements/1)


### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.
