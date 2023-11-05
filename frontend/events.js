new Vue({
    el: '#events',
    data: {
        events: [
            {
                id: 1,
                date: '15',
                month: 'July',
                title: 'Conference on Technology Innovations',
                description: 'Join us for a conference showcasing the latest technology innovations. Don\'t miss this opportunity to learn from industry experts.',
                link: '#'
            },
            {
                id: 2,
                date: '20',
                month: 'August',
                title: 'Career Fair',
                description: 'Discover job opportunities and network with leading companies at our annual Career Fair. Prepare your resume and dress professionally.',
                link: '#'
            },
            {
                id: 3,
                date: '5',
                month: 'September',
                title: 'Open House',
                description: 'Visit our campus during the Open House event and get a glimpse of our facilities. Meet faculty members and current students.',
                link: '#'
            }
        ]
    }
});