<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <%- include('./partials/head.ejs') %>
    <title>Welcome</title>
  </head>
  <body>
    <div class="container">
      <h1>
      <% if (currentUser) { %>
          Welcome <%= currentUser.username %>!
          <h2>
            <a class="waves-effect waves-light btn" href="/app">Join the party!</a>
          </h2>
          <h2>
            <a class="waves-effect waves-light btn" href="/shop/products">See My Shop!</a>
          </h2>
      </h1>
      <form action="/sessions?_method=DELETE" method="post">
        <input type="submit" name="" value="Logout" class="waves-effect waves-light btn">
      </form>
      <% } else { %>
      <h2>Please</h2>
      <a href="/users/new" class="waves-effect waves-light btn">Sign Up</a>
      <h3>or</h3>
      <a href="/sessions/new" class="waves-effect waves-light btn">Log In</a>
      <% } %>
    </div>
  </body>
</html>
