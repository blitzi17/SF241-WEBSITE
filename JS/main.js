const { createApp } = Vue;
const app = createApp({});

app.component('portfolio-gallery', {
    data() {
        return {
            currentIndex: 0,
            showModal: false,
            selectedImage: null,
            images: [
                {
                    src: '../media/9428f962-9bb2-4913-be85-ec03ffb2a2fc.jpg',
                    title: 'AI Brand Identity',
                    shortDesc: 'Click to see technical details',
                    longDesc: 'Used Stable Diffusion and Photoshop to create a futuristic brand concept. Focused on neon aesthetics and high-contrast lighting.'
                },
                {
                    src: '../media/09c40290-36c3-4c1a-9b96-ee1d882f0995.jpg',
                    title: 'Cyber UI Design',
                    shortDesc: 'Interactive Prototype',
                    longDesc: 'A full-scale UI kit designed for a cyberpunk-themed dashboard. Includes custom icons and glassmorphism effects.'
                }
            ]
        };
    },
    methods: {
        openZoom(img) {
            this.selectedImage = img;
            this.showModal = true;
        }
    },
    template: `
        <section id="portfolio" class="section-container">
            <h2>Featured <span class="gradient-text">Portfolio</span></h2>
            
            <div class="carousel-container">
                <div class="carousel-slide" @click="openZoom(images[currentIndex])">
                    <img :src="images[currentIndex].src">
                    <div class="hover-overlay">
                        <h3>{{ images[currentIndex].title }}</h3>
                        <p>{{ images[currentIndex].shortDesc }}</p>
                        <span><i class="fas fa-search-plus"></i> Click to Zoom</span>
                    </div>
                </div>
            </div>

            <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
                <div class="modal-content">
                    <span class="close-btn" @click="showModal = false">&times;</span>
                    <img :src="selectedImage.src" class="modal-img">
                    <div class="modal-text">
                        <h2 class="gradient-text">{{ selectedImage.title }}</h2>
                        <hr>
                        <p>{{ selectedImage.longDesc }}</p>
                        <button class="btn btn-primary" @click="showModal = false">Close Details</button>
                    </div>
                </div>
            </div>
        </section>
    `
});

// --- Guestbook / Survey Component ---
app.component('guestbook-form', {
    data() {
        return {
            form: { name: '', email: '', rating: '⭐⭐⭐⭐⭐ Excellent', message: '' }
        };
    },
    methods: {
        submitForm() {
            alert(`Thank you, ${this.form.name}! Your message has been sent to the guestbook.`);
            this.form = { name: '', email: '', rating: '⭐⭐⭐⭐⭐ Excellent', message: '' };
        }
    },
    template: `
        <section class="section-container">
            <h2>Leave Your <span class="gradient-text">Mark</span></h2>
            <div class="form-card">
                <form @submit.prevent="submitForm">
                    <div style="display:flex; gap:20px; margin-bottom: 20px;">
                        <div style="flex:1; text-align:left;">
                            <label>Your Name</label>
                            <input v-model="form.name" class="form-input" placeholder="John Doe" required>
                        </div>
                        <div style="flex:1; text-align:left;">
                            <label>Email Address</label>
                            <input v-model="form.email" type="email" class="form-input" placeholder="john@example.com" required>
                        </div>
                    </div>
                    <div style="text-align:left; margin-bottom: 20px;">
                        <label>Rate Your Experience</label>
                        <select v-model="form.rating" class="form-input">
                            <option>⭐⭐⭐⭐⭐ Excellent</option>
                            <option>⭐⭐⭐⭐ Very Good</option>
                            <option>⭐⭐⭐ Good</option>
                            <option>⭐⭐ Fair</option>
                            <option>⭐ Poor</option>
                        </select>
                    </div>
                    <div style="text-align:left;">
                        <label>Your Message</label>
                        <textarea v-model="form.message" class="form-input" rows="4" required></textarea>
                    </div>
                    <button type="submit" class="btn-primary">Submit Message <i class="fas fa-paper-plane"></i></button>
                </form>
            </div>
        </section>
    `
});


app.mount('#app');
