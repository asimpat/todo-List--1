let input = document.querySelector("#input");
let addbtn = document.querySelector(".addbtn");
let taskCount = document.querySelector("#taskCount");
//Add to count

let tasks = document.querySelector(".tasks");

let count = 0;
let checkbtn = "gray";
//For Enter Key
input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        if (input.value === "") {
            alert("Please add ToDo");
        } else {
            addTask();
            count++;
            taskCount.textContent = count;
        }
    }
});
//For Add Todo button
addbtn.addEventListener("click", function() {
    if (input.value === "") {
        alert("Please add Todo");
    } else {
        addTask();
        count++;
        taskCount.textContent = count;
    }
});

function addTask() {
    var divParent = document.createElement("div");
    var divChild1 = document.createElement("div");
    var divChild2 = document.createElement("div");
    var checkIcon = document.createElement("i");
    var deleteIcon = document.createElement("i");
    var inputDiv = document.querySelector("#input").value;
    var txt = document.createTextNode(inputDiv);
    divParent.className = "task";
    // divParent.innerHTML = "<div>" + input.value + "</div>";
    divChild1.style.marginTop = "8px";

    divChild2.className = "action";

    //Check Task
    checkIcon.className = "fa fa-check-square";
    checkIcon.addEventListener("click", function() {
        // when clicked to check
        if (checkbtn == "gray") {
            checkIcon.style.color = "limegreen";
            divChild1.style.textDecoration = "line-through";
            checkbtn = "green";
        }
        // when clicked to uncheck
        else {
            checkIcon.style.color = "gray";
            divChild1.style.textDecoration = "none";
            checkbtn = "gray";
        }
    });
    divChild2.appendChild(checkIcon);

    //Delete Task
    deleteIcon.className = "fa fa-trash";
    deleteIcon.addEventListener("click", function() {
        alert("Are you sure you want to delete? Click OK to delete!!!");
        divParent.remove();
        count--;
        taskCount.textContent = count;
    });
    divChild2.appendChild(deleteIcon);

    divChild1.appendChild(txt);
    divParent.appendChild(divChild1);
    divParent.appendChild(divChild2);

    tasks.appendChild(divParent);

    input.value = "";
}

//media queries
// let addBtn = document.querySelector(".addBtn");

// let smallDevice = window.matchMedia("(max-width:430px)");

// smallDevice.addEventListener(deviceChange);

// function deviceChange(e) {
//     if (e.matches) {
//         addBtn.textContent = "Add";
//     } else {
//         addBtn.textContent = "Add ToDo";
//     }
// }

// // const outputElement = document.getElementById("info");

// // const smallDevice = window.matchMedia("(min-width: 576px)");

// // smallDevice.addListener(handleDeviceChange);

// // function handleDeviceChange(e) {
// //     if (e.matches) outputElement.textContent = "Bigger Than Mobile";
// //     else outputElement.textContent = "Mobile";
// // }

// // // Run it initially
// // handleDeviceChange(smallDevice);