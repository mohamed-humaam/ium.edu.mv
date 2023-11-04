new Vue({
    el: '#app',
    data: {
        staffInfo: null,
        showModal: false,
        modalTitle: '',
        modalContent: '',
    },
    methods: {
        findStaffByName(name) {
            this.staffInfo = staffData.find(staff => staff.name === name);
        },
        showStaffProfile() {
            this.modalTitle = 'Profile';
            this.modalContent = this.staffInfo.profile;
            this.showModal = true;
        },
        showAreasOfSpecialization() {
            this.modalTitle = 'Areas of Specialization';
            this.modalContent = this.staffInfo.specialization.join('\n');
            this.showModal = true;
        },
        showAwardsAndRecognition() {
            const awardsContent = this.staffInfo.awards.map(award => `${award.date}: ${award.award} (${award.organization})`).join('\n');
            this.modalTitle = 'Awards and Recognition';
            this.modalContent = awardsContent;
            this.showModal = true;
        },
        showResearchAndPublications() {
            const researchContent = [
                ...this.staffInfo.research.completed.map(item => `${item.year}: ${item.title}`),
                'Ongoing Research',
                ...this.staffInfo.research.ongoing.map(item => `${item.year}: ${item.title}`),
            ].join('\n');
            this.modalTitle = 'Research and Publications';
            this.modalContent = researchContent;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
    },
    mounted() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const staffName = urlParams.get('staff');

        if (staffName) {
            this.findStaffByName(staffName);
        }
    },
});