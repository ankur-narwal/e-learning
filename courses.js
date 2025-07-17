const courses = [
  {
    title: "Python for Beginners",
    duration: "3 hrs",
    rating: "4.6",
    learners: "2L+ learners",
    image: "assets/course1.webp"
  },
  {
    title: "JavaScript Masterclass",
    duration: "4.5 hrs",
    rating: "4.7",
    learners: "3L+ learners",
    image: "assets/course2.jpeg"
  },
  {
    title: "C Programming Fundamentals",
    duration: "2 hrs",
    rating: "4.5",
    learners: "1.8L+ learners",
    image: "assets/course3.jpeg"
  },
  {
    title: "Intro to Prompt Engineering",
    duration: "2.5 hrs",
    rating: "4.8",
    learners: "1.2L+ learners",
    image: "assets/course4.webp"
  },
  {
    title: "AI for Everyone",
    duration: "3 hrs",
    rating: "4.9",
    learners: "2.5L+ learners",
    image: "assets/course5.jpeg"
  },
  {
    title: "Machine Learning Crash Course",
    duration: "5 hrs",
    rating: "4.7",
    learners: "2.3L+ learners",
    image: "assets/course6.png"
  },
  {
    title: "Web Development Bootcamp",
    duration: "6 hrs",
    rating: "4.6",
    learners: "3L+ learners",
    image: "assets/course7.jpg"
  },
  {
    title: "Data Structures & Algorithms",
    duration: "4 hrs",
    rating: "4.8",
    learners: "2.1L+ learners",
    image: "assets/course8.png"
  },
  {
    title: "Responsive Web Design",
    duration: "3.5 hrs",
    rating: "4.6",
    learners: "2L+ learners",
    image: "assets/course9.jpg"
  },
  {
    title: "Intro to Generative AI",
    duration: "3 hrs",
    rating: "4.9",
    learners: "3.2L+ learners",
    image: "assets/course10.jpeg"
  }
];

const grid = document.querySelector('.course-grid');

courses.forEach((course, index) => {
  grid.innerHTML += `
    <div class="course-card" id="course${index + 1}">
      <div class="course-image">
        <img src="${course.image}" alt="${course.title}">
        <span class="free-badge">FREE</span>
      </div>
      <div class="course-info">
        <p class="rating">⭐ ${course.rating} • ${course.learners}</p>
        <h3>${course.title}</h3>
        <p class="duration">${course.duration}</p>
        <a href="#" class="view-link">View Course</a>
      </div>
    </div>
  `;
});

