//============== render-jobs ==============//
function renderJobs() {

    allContainer.innerHTML = "";
    interviewContainer.innerHTML = "";
    rejectedContainer.innerHTML = "";

    jobs.forEach(job => {

        const statusColor =
            job.status === "Interview"
                ? "bg-[#d1fae5] text-[#10B981]"
                : job.status === "Rejected"
                    ? "bg-[#fee2e2] text-[#EF4444]"
                    : "bg-[#eef4ff] text-[#002C5C]";

        const card = `
        <div class="relative border border-[#F1F2F4] p-6 rounded-[8px] bg-white mb-4">

            <h5 class="text-[#002C5C] font-semibold text-lg mb-1">
                ${job.companyName}
            </h5>

            <span class="text-[#64748B] font-normal text-base block mb-5">
                ${job.position}
            </span>

            <span class="text-[#64748B] font-normal text-sm block mb-5">
                ${job.location} • ${job.type} • ${job.salary}
            </span>

            <span class="font-medium text-sm uppercase rounded-[4px] inline-block leading-[36px] h-9 px-3 mb-2 ${statusColor}">
                ${job.status === "All" ? "Not Applied" : job.status}
            </span>

            <p class="text-[#323B49] font-normal text-sm mb-5">
                ${job.description}
            </p>

            <div class="flex items-center gap-2">
                <button onclick="updateStatus(${job.id}, 'Interview')"
                    class="text-[#10B981] font-semibold text-sm h-9 border border-[var(--green)] rounded-[4px] uppercase px-3 transition duration-300 hover:bg-[#10B981] hover:text-white">
                    Interview
                </button>

                <button onclick="updateStatus(${job.id}, 'Rejected')"
                    class="text-[#EF4444] font-semibold text-sm h-9 border border-[var(--red)] rounded-[4px] uppercase px-3 transition duration-300 hover:bg-[#EF4444] hover:text-white">
                    Rejected
                </button>
            </div>

            <a href="#"
                onclick="deleteJob(${job.id})"
                class="delate__icon flex absolute right-[25px] top-[25px] items-center justify-center w-8 h-8 border border-[#F1F2F4] rounded-full transition duration-300 hover:bg-[#EF4444]">
                <img class="ml-[1px] transition duration-300"
                    src="./assets/img/icon/delate-icon.png" alt="">
            </a>

        </div>
        `;

        if (job.status === "All") {
            allContainer.innerHTML += card;
        }

        if (job.status === "Interview") {
            interviewContainer.innerHTML += card;
        }

        if (job.status === "Rejected") {
            rejectedContainer.innerHTML += card;
        }

    });


    const emptyCard = `
        <div class="bg-white border border-[#F1F2F4] flex flex-col items-center justify-center h-[400px] p-4">
            <img class="mb-5 w-[100px] h-[100px]" src="./assets/img/icon/assignment-icon.png" alt="">
            <h4 class="text-2xl font-semibold text-[#002C5C] mb-1">No jobs available</h4>
            <p class="text-base font-normal text-[#64748B]">
                Check back soon for new job opportunities
            </p>
        </div>
    `;

    if (allContainer.innerHTML.trim() === "") {
        allContainer.innerHTML = emptyCard;
    }

    if (interviewContainer.innerHTML.trim() === "") {
        interviewContainer.innerHTML = emptyCard;
    }

    if (rejectedContainer.innerHTML.trim() === "") {
        rejectedContainer.innerHTML = emptyCard;
    }

    updateDashboard();
}