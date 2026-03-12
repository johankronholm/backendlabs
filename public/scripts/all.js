const result = document.getElementById("result");
const submit = document.getElementById("submit");
const main = document.querySelector("main");


submit.addEventListener("click", async () => {
    const response = await fetch("/tasks/", { method: "GET" });
    const data = await response.json();

    result.hidden = false;
    result.innerHTML = ""

    if (response.ok) {

        const rows = [];
        data.forEach(element => {
            rows.push({
                id: element.id,
                description: element.description,
                completed: element.completed
            });
        });

        localStorage.setItem("allTable", JSON.stringify(rows));
        const date = new Date().toLocaleString();
        localStorage.setItem("lastUpdated", date)
    }

    else {
        const rows = [];
        rows.push({
            message: data.message
        });
        localStorage.setItem("allTable", JSON.stringify(rows));
    }

    window.location.reload();

});

function reloadTable() {
    const savedRows = localStorage.getItem("allTable");
    const date = localStorage.getItem("lastUpdated");

    if (savedRows && date) {
        result.hidden = false;
        const rows = JSON.parse(savedRows);
        const lastUpdated = date; 

        if (!rows[0].message) {
            const idH = document.createElement("th");
            idH.innerHTML = "<b>Id</b>";
            const dH = document.createElement("th");
            dH.innerHTML = "<b>Description</b>";
            const cH = document.createElement("th");
            cH.innerHTML = "<b>Completed</b>";

            result.appendChild(idH);
            result.appendChild(dH);
            result.appendChild(cH);

            rows.forEach(element => {
                const row = document.createElement("tr");
                const id = document.createElement("td");
                id.innerText = element.id;
                const desc = document.createElement("td");
                desc.innerText = element.description;
                const completed = document.createElement("td");
                completed.innerText = element.completed == 1 ? "true" : "false";
                row.appendChild(id);
                row.appendChild(desc);
                row.appendChild(completed);
                result.appendChild(row);
            });

            const dateE = document.createElement("span");
            dateE.innerText = "Last updated: " + lastUpdated;
            main.appendChild(dateE);
        } else {
            result.innerText = rows[0].message;
        }
    }
};

reloadTable();
