document.querySelectorAll(".cancel").forEach(function (cancelBtn) {
  cancelBtn.addEventListener("click", function () {
    document.querySelector(".overlay").style.display = "none";
  });
});

document.querySelectorAll(".post-tab").forEach((tab) => {
  tab.addEventListener("click", function () {
    document
      .querySelectorAll(".post-tab")
      .forEach((t) => t.classList.remove("active"));
    this.classList.add("active");
  });
});

document.querySelectorAll(".post-tab").forEach((tab) => {
  tab.addEventListener("click", function () {
    document
      .querySelectorAll(".post-tab")
      .forEach((t) => t.classList.remove("active"));
    this.classList.add("active");
  });
});
function toggleDropdown(element) {
    var dropdown = element.nextElementSibling;
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function selectOption(option) {
    alert(option + " selected");
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].style.display = "none";
    }
}

// Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//     if (!event.target.matches('.optionsIcon')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         for (var i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.style.display === "block") {
//                 openDropdown.style.display = "none";
//             }
//         }
//     }
// }




document.addEventListener('DOMContentLoaded', function() {
    const editIcon = document.getElementById('edit-icon');
    const mobileSignIn = document.querySelector('.mobilesignIn');
  
    // Add click event listener to the edit icon
    editIcon.addEventListener('click', function() {
      mobileSignIn.classList.toggle('show'); // Toggle the 'show' class on mobilesignIn
    });
  
    // Optionally, add functionality to close the mobile sign-in form
    const cancelIcon = document.querySelector('.mobilesignIn img.cancel');
  
    if (cancelIcon) {
      cancelIcon.addEventListener('click', function() {
        mobileSignIn.classList.remove('show'); // Remove the 'show' class to hide the form
      });
    }
  });
  

  
  