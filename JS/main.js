const app = Vue.createApp({
  data() {
    return {
      current: 0,
      slides: [
        {
          img: '../media/slide1.jpg',
          title: 'Creative Design',
          desc: 'Modern UI inspired by gradients and motion.'
        },
        {
          img: '../media/slide2.jpg',
          title: 'Vue Projects',
          desc: 'Interactive Vue.js applications.'
        },
        {
          img: '../media/slide3.jpg',
          title: 'User Experience',
          desc: 'Clean layouts with smooth animations.'
        }
      ],
      name: '',
      message: '',
      messages: []
    };
  },
  methods: {
    nextSlide() {
      this.current = (this.current + 1) % this.slides.length;
    },
    addMessage() {
      this.messages.push({
        name: this.name,
        text: this.message
      });
      this.name = '';
      this.message = '';
    }
  },
  mounted() {
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
      revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
  }
});

app.mount('#app');
