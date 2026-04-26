let credits = 0;

function enterApp() {
    document.getElementById("welcomeScreen").classList.remove("active");

    document.getElementById("dashboard").classList.add("active");
}

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") return;

    let li = document.createElement("li");

    li.innerHTML = `
        ${task}
        <button onclick="completeTask(this)">Done</button>`;

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function completeTask(btn) {
    let li = btn.parentElement;
    li.remove();

    credits += 10;
    document.getElementById("credits").innerText = credits;

    updateRank();
}

function updateRank() {
    let rank = "Bronze";

    if (credits >= 10000) {
        rank = "🏆 Gold";
    }
    else if (credits >= 5000) {
        rank = "🥈 Silver";
    }
    else if (credits >= 1000) {
        rank = "🥉 Bronze+";
    }

    document.getElementById("rank").innerText = rank;
}
