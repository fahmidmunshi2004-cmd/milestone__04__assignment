//====================== updateDashboard ======================//
function updateDashboard() {
    document.getElementById("totalCount").innerText = jobs.length;

    document.getElementById("interviewCount").innerText =
        jobs.filter(j => j.status === "Interview").length;

    document.getElementById("rejectedCount").innerText =
        jobs.filter(j => j.status === "Rejected").length;

    document.getElementById("availableCount").innerText =
        jobs.length + " Jobs";
}