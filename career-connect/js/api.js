const API_URL = "";

console.log("API File Ready");
async function loadJobs() {

    const container =
        document.getElementById(
            "jobsContainer"
        );

    const loader =
        document.getElementById(
            "loader"
        );

    loader.style.display = "block";

    container.innerHTML = "";

    const response =
        await fetch(
            "https://dummyjson.com/users"
        );

    const data =
        await response.json();

    loader.style.display = "none";

    data.users.slice(0, 8)
        .forEach(user => {

            container.innerHTML += `

            <div class="col-md-6">

                <div class="card shadow-sm">

                    <div class="card-body">

                        <h5>
                            Frontend Developer
                        </h5>

                        <p>
                            Company:
                            ${user.company.name}
                        </p>

                        <p>
                            Location:
                            ${user.address.city}
                        </p>

                        <a
                            href="apply.html"
                            class="btn btn-primary">

                            Apply

                        </a>

                    </div>

                </div>

            </div>

            `;

        });

}