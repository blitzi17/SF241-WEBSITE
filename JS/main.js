const { createApp } = Vue;

const app = createApp({});

// --- Portfolio Gallery Component ---
// This handles the sliding project display you asked about
app.component('portfolio-gallery', {
    data() {
        return {
            currentImageIndex: 0,
            // IMPORTANT: We use ../media/ because your HTML is inside the 'introduction' folder
            images: [
                {
                    src: '../media/9428f962-9bb2-4913-be85-ec03ffb2a2fc.jpg',
                    title: 'AI-Powered Brand Identity',
                    tags: ['AI Design', 'Branding', 'Visual Identity']
                },
                {
                    src: '../media/09c40290-36c3-4c1a-9b96-ee1d882f0995.jpg',
                    title: 'Futuristic UI/UX Design',
                    tags: ['UI/UX', 'Web Design', 'Prototype']
                },
                {
                    src: '../media/hero-placeholder.jpg',
                    title: 'Digital Art & Illustration',
                    tags: ['Digital Art', 'Creative', 'Concept']
                }
            ]
        };
    },
    methods: {
        nextImage() {
            this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        },
        prevImage() {
            this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
        }
    },
    template: `
        <section class="section-container">
            <p class="accent-text">Explore my latest projects</p>
            <h2>Featured <span class="gradient-text">Portfolio</span></h2>
            <div class="carousel-container">
                <button class="carousel-btn" @click="prevImage">
                    <i class="fas fa-chevron-left"></i>
                </button>
                
                <div class="carousel-slide">
                    <img :src="images[currentImageIndex].src" :alt="images[currentImageIndex].title">
                    <div class="slide-content">
                        <div class="tags">
                            <span v-for="(tag, index) in images[currentImageIndex].tags" :key="index">{{ tag }}</span>
                        </div>
                        <h3>{{ images[currentImageIndex].title }}</h3>
                    </div>
                </div>
                
                <button class="carousel-btn" @click="nextImage">
                    <i class="fas fa-chevron-right"></i>
                </button>
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