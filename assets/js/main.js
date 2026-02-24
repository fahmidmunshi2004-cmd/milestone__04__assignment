//============= tab js ===================//
const tabButtons = document.querySelectorAll('.tab_btn');
const tabContents = {
    all: document.querySelector('.tab-all-content'),
    interview: document.querySelector('.tab-interview-content'),
    rejected: document.querySelector('.tab-rejected-content')
};

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {

        tabButtons.forEach(b => b.classList.remove('active', 'bg-[#EEF4FF]'));


        btn.classList.add('active', 'bg-[#EEF4FF]');


        Object.values(tabContents).forEach(c => c.classList.add('hidden'));


        if (btn.classList.contains('tab_all__btn')) {
            tabContents.all.classList.remove('hidden');
        } else if (btn.classList.contains('tab_Interview__btn')) {
            tabContents.interview.classList.remove('hidden');
        } else if (btn.classList.contains('tab_rejected__btn')) {
            tabContents.rejected.classList.remove('hidden');
        }
    });
});

//============================ updateStatus ==================//
const allContainer = document.querySelector(".tab-all-content");
const interviewContainer = document.querySelector(".tab-interview-content");
const rejectedContainer = document.querySelector(".tab-rejected-content");
function updateStatus(id, status) {
    const job = jobs.find(j => j.id === id);
    job.status = status;
    renderJobs();
}
renderJobs();