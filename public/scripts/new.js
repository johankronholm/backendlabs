
const desc = document.getElementById("desc");
const completed = document.getElementById("completed");
const submit = document.getElementById("submit");
const result = document.getElementById("result")

submit.addEventListener("click", async () => {
    const response = await fetch("/tasks/", {
        method: "post", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ description: desc.value, completed: completed.value })
    });
    const data = await response.json();

    const rows = [];
    rows.push({
        message: data.message
    });
    localStorage.setItem("createTable", JSON.stringify(rows));


    window.location.reload();

});

function reloadTable() {
    const savedRows = localStorage.getItem("createTable");

    if (savedRows) {
        result.hidden = false;
        const rows = JSON.parse(savedRows);
        result.innerText = rows[0].message;
    }
};

reloadTable();