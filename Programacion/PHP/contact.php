
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>CONTACT</title>
    <style>
      ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background-color: #333;
      }
      li {
          float: left;
      }
      li a {
          display: block;
          color: white;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
      }
      li a:hover:not(.active) {
          background-color: #111;
      }
      .active {
          background-color: #4CAF50;
      }
</style>
  </head>
  <body>
    <?php $pagina="contact";
    ?>
    <ul>
      <li><a class="<?php if ($pagina=="home") echo "active";?>" href="home.php">Home</a></li>
      <li><a class="<?php if ($pagina=="news") echo "active";?>" href="news.php">News</a></li>
      <li><a class="<?php if ($pagina=="contact") echo "active";?>" href="contact.php">Contact</a></li>
    </ul>
    <h1>CONTACT </h1>

  </body>
</html>
