### Zebra In The Shade Application
We created an e-commerce application that sells luxury products that can be bought using credit cards. This an exclusive application for exclusive individuals that have exceedingly high credit scores. Only credit cards without credit limits may be used. Please visit this website if the above description sounds like you.

### Technologies Used
*   javaScript
*   HTML
*   CSS
*   bootstrap
*   flexbox
*   JQuery
*   JSON
*   ajax
*   Bash
*   Express API
*   Mongoose
*   MongoDB
*   handlebars
*   Stripe
*   React

### Development Process
[Link to Backend Server](https://protected-gorge-91362.herokuapp.com/)
[Link to Frontend Repo](https://github.com/Team-404-Not-Found/ZEBRAINTHESHADE)

We started by mapping out the ERD for the back end application and created user stories for our client application to better understand the work flow and how we could efficiently schedule our goals for each day in our project week. In our team of four, we would break into teams of 2 to either work on the front end or the back end of our project.

We first created a schema for products and subsequently created a route for products to set up the relationship between the two. We did the same for Cart. In this process however, we had to pass data from the product to the cart. So we made the product schema a subdocument of the cart schema.

We wanted users to be able to view their order history. So we created an order schema and set up a route with it. However, to view the order history, we had to confirm that a payment was made. This is where we incorporated Stripe to our application to complete our user checkout experience.

### Future Iterations
We would like to add more styling on the front end to make the web page more user-friendly.

### Entity Relationship Diagram
[Link to ERD](https://drive.google.com/file/d/1weiEl3-hrU5sNgg8z7U5xgMxnjcVziTv/view?usp=sharing)

### Routes
Cart Routes
  Index (GET) get all carts, Show (GET) gets one cart, Create (POST) creates a cart (this is attached to a user, so that when a user is created, a cart is created that is connected to the user), Update (PATCH), No delete routes - carts are never deleted.

History Routes
  Create (POST).  This route is a POST route that saves a users order history

Product Routes
  Index (GET) get all products, Show (GET) gets one product, Create (POST) creates a product, Update (PATCH) a product, Delete route for deleting a product.

Stage Routes - product / cart relationship Routes
  Create/POST - finds a cart by it's id, then pushes a product (found by it's id) into the carts array
  PATCH - finds a cart's id, then saves the updated product
  DELETE - using the carts id and the product id, an item is deleted from the cart if found

Stripe Route - A POST route that takes in a user email, and the amount of the purchase and sends it to the Stripe API.

User Routes - routes for user create (sign up), User sign in, Patch (change password), and Delete (sign out), 
