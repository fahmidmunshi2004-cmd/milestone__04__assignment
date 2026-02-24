//====================== delete job======================//
function deleteJob(id) {
    const index = jobs.findIndex(j => j.id === id);
    jobs.splice(index, 1);
    renderJobs();
}