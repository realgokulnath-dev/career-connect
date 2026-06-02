console.log("CareerConnect Loaded");
function searchJobs() {

    const searchValue =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();

    const jobs =
        document.querySelectorAll(".job-item");

    jobs.forEach((job) => {

        const text =
            job.innerText.toLowerCase();

        if (text.includes(searchValue)) {

            job.parentElement.style.display = "block";

        } else {

            job.parentElement.style.display = "none";

        }

    });

}
const form = document.getElementById("jobForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const phone =
            document.getElementById("phone").value;

        if (
            name === "" ||
            email === "" ||
            phone === ""
        ) {

            alert(
                "Please fill all fields"
            );

            return;
        }

        if (phone.length !== 10) {

            alert(
                "Phone number must be 10 digits"
            );

            return;
        }

        alert(
            "Application Submitted Successfully!"
        );

    });

}
function toggleDarkMode() {

    document.body.classList.toggle(
        "dark-mode"
    );

}
function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}