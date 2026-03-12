const id = document.getElementById("id");
const desc = document.getElementById("description");
const completed = document.getElementById("completed");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

submit.addEventListener("click", async () => {
    const response = await fetch(`/tasks/${id.value}`, {
        method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: id.value, description: desc.value, completed: completed.value })
    });
    const data = await response.json();

    const rows = [];
    rows.push({
        message: data.message
    });
    localStorage.setItem("updateTable", JSON.stringify(rows));


    window.location.reload();

});

function reloadTable() {
    const savedRows = localStorage.getItem("updateTable");

    if (savedRows) {
        result.hidden = false;
        const rows = JSON.parse(savedRows);
        result.innerText = rows[0].message;
    }
};

reloadTable();