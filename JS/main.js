// Scroll-to-Reveal Animation
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Vue.js for Gallery
new Vue({
    el: '#gallery-app',
    data: {
        items: [
            { id: 1, src: 'https://via.placeholder.com/300x200?text=Project+1', title: 'Project 1', description: 'Description of project 1.' },
            { id: 2, src: 'https://via.placeholder.com/300x200?text=Project+2', title: 'Project 2', description: 'Description of project 2.' },
            { id: 3, src: 'https://via.placeholder.com/300x200?text=Project+3', title: 'Project 3', description: 'Description of project 3.' }
        ]
    }
});

// Vue.js for Guestbook
new Vue({
    el: '#guestbook-app',
    data: {
        newMessage: { name: '', message: '', rating: '' },
        messages: [],
        showLog: false
    },
    methods: {
        addMessage() {
            const msg = {
                id: Date.now(),
                name: this.newMessage.name,
                message: this.newMessage.message,
                rating: this.newMessage.rating
            };
            this.messages.push(msg);
            // Log to console for admin viewing
            console.log('New Guestbook Entry:', msg);
            this.newMessage = { name: '', message: '', rating: '' };
        },
        generateStars(rating) {
            const fullStars = '★'.repeat(rating);
            const emptyStars = '☆'.repeat(5 - rating);
            return fullStars + emptyStars;
        }
    }
});
