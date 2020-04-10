


// If you write the following code to google chrome console, you will see that change the google logo
  function changeLogo(){
    const logo = document.getElementById("logo-doodle-image");
    logo.src = "https://www.hackyourfuture.dk/static/logo-dark.svg";
    logo.srcset =
      "https://www.hackyourfuture.dk/static/logo-dark.svg 1x, https://www.hackyourfuture.dk/static/logo-dark.svg 2x, https://www.hackyourfuture.dk/static/logo-dark.svg 3x";
  }
  changeLogo();