const id = document.getElementById("id");
const submit = document.getElementById("submit");
const result = document.getElementById(("result"));

submit.addEventListener("click", async () => {
    
    const response = await fetch (`/tasks/${id.value}`, { method: "delete"});  
    const data = await response.json();
    const rows = [];
    rows.push({
        message: data.message
    });
    localStorage.setItem("removeTable", JSON.stringify(rows));


    window.location.reload();

});

function reloadTable() {
    const savedRows = localStorage.getItem("removeTable");

    if (savedRows) {
        result.hidden = false;
        const rows = JSON.parse(savedRows);
        result.innerText = rows[0].message;
    }
};

reloadTable();