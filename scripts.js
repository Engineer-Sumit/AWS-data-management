var API_ENDPOINT = "https://fpyg9o5mqf.execute-api.eu-north-1.amazonaws.com/prod";

let allStudents = [];  
let editMode = false;
let editID = null;

// ---------------------- SAVE STUDENT ----------------------
$("#savestudent").click(function () {
    let data = {
        studentid: $("#studentid").val(),
        name: $("#name").val(),
        class: $("#class").val(),
        age: $("#age").val()
    };

    if (!data.studentid || !data.name || !data.class || !data.age) {
        showError("Please fill all fields.");
        return;
    }

    let method = editMode ? "PUT" : "POST";

    $.ajax({
        url: API_ENDPOINT,
        type: method,
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function (res) {
            showSuccess(editMode ? "Student updated!" : "Student added!");

            $("#studentid").val("");
            $("#name").val("");
            $("#class").val("");
            $("#age").val("");

            editMode = false;
            editID = null;

            loadStudents();
        },
        error: function () {
            showError("Error saving data");
        }
    });
});

// ---------------------- LOAD STUDENTS ----------------------
$("#getstudents").click(function () {
    loadStudents();
});

function loadStudents() {
    $("#loading").show();

    $.ajax({
        url: API_ENDPOINT,
        type: "GET",
        success: function (res) {
            $("#loading").hide();

            // Convert string → JSON
            if (typeof res === "string") {
                res = JSON.parse(res);
            }

            // Lambda returns array directly
            allStudents = res;

            renderTable(allStudents);
        },
        error: function () {
            $("#loading").hide();
            showError("Error loading students");
        }
    });
}

// ---------------------- RENDER TABLE ----------------------
function renderTable(data) {
    let tbody = $("#studentTable tbody");
    tbody.empty();

    data.forEach(student => {
        tbody.append(`
            <tr>
                <td>${student.studentid}</td>
                <td>${student.name}</td>
                <td>${student.class}</td>
                <td>${student.age}</td>
                <td>
                    <span class="action-btn action-edit" onclick="editStudent('${student.studentid}')">Edit</span>
                    <span class="action-btn action-delete" onclick="deleteStudent('${student.studentid}')">Delete</span>
                </td>
            </tr>
        `);
    });
}

// ---------------------- EDIT STUDENT ----------------------
function editStudent(id) {
    let s = allStudents.find(stu => stu.studentid === id);

    $("#studentid").val(s.studentid);
    $("#name").val(s.name);
    $("#class").val(s.class);
    $("#age").val(s.age);

    editMode = true;
    editID = id;

    showSuccess("Edit mode enabled – update details and click Save");
}

// ---------------------- DELETE STUDENT ----------------------
function deleteStudent(id) {
    if (!confirm("Delete this student?")) return;

    $.ajax({
        url: API_ENDPOINT,
        type: "DELETE",
        data: JSON.stringify({ studentid: id }),
        contentType: "application/json",
        success: function () {
            showSuccess("Student deleted!");
            loadStudents();
        },
        error: function () {
            showError("Error deleting student");
        }
    });
}

// ---------------------- SEARCH ----------------------
$("#searchBar").keyup(function () {
    let value = $(this).val().toLowerCase();

    let filtered = allStudents.filter(s =>
        s.name.toLowerCase().includes(value) ||
        s.studentid.toLowerCase().includes(value)
    );

    renderTable(filtered);
});

// ---------------------- SORTING ----------------------
$("th").click(function () {
    let col = $(this).data("col");
    if (!col) return;

    allStudents.sort((a, b) =>
        a[col].toString().localeCompare(b[col].toString())
    );

    renderTable(allStudents);
});

// ---------------------- ALERT BOXES ----------------------
function showSuccess(msg) {
    $("#studentSaved").html(`<div class="alert-success">${msg}</div>`);
}

function showError(msg) {
    $("#studentSaved").html(`<div class="alert-error">${msg}</div>`);
}
