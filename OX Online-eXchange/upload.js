
  function upload() {
      var title = document.getElementById("title").value;
      var category = document.getElementById("Category").value;
      var description = document.getElementById("Description").value;
      var price = document.getElementById("price").value;
      var photo = document.getElementById("photo").value;
      var location = document.getElementById("location").value;
      var contact = document.getElementById("contact").value;

      if (title.length > 3) {
          if (category.length > 0) { // Check if a category is selected
              if (description.length > 3) {
                  if (price.length > 3) {
                      if (photo.length > 0) {
                          if (location.length > 3) {
                              if (contact.length > 3) {
                                  alert("Product uploaded");
                              } else {
                                  alert("Contact field is empty");
                              }
                          } else {
                              alert("Location field is empty");
                          }
                      } else {
                          alert("Please select a photo");
                      }
                  } else {
                      alert("Price is not mentioned");
                  }
              } else {
                  alert("Description field is empty");
              }
          } else {
              alert("Category is not selected");
          }
      } else {
          alert("This website just for frontend so its not be run");
      }
  }


