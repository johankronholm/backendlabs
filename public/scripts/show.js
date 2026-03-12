const id = document.getElementById("id");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

submit.addEventListener("click", async () => {
    const response = await fetch(`/tasks/${id.value}`, { method: "get" });
    const data = await response.json();

    result.innerHTML = "";
    result.hidden = false;

    if (response.ok) {

        const rows = [];

        rows.push({ id: data.id, description: data.description, completed: data.completed });
        localStorage.setItem("showTable", JSON.stringify(rows));
    }

    else {
        const rows = [];
        rows.push({
            message: data.message
        });
        localStorage.setItem("showTable", JSON.stringify(rows));
    }

    window.location.reload();

});

function reloadTable() {
    const savedRows = localStorage.getItem("showTable");
    if (savedRows) {

        result.hidden = false;

        const rows = JSON.parse(savedRows);

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
        }

        else {
            result.innerText = rows[0].message;
        }
    }
};

reloadTable();
