document.addEventListener("DOMContentLoaded", function() {
    var acc = document.getElementsByClassName("accordion");
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");

            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
});

const currentDate = new Date();
const monkey = "Ram"
const year = currentDate.getFullYear();
const result = `${year} ${Ram}`
 document.getElementById("copyRightYearRam").outerHTML = result