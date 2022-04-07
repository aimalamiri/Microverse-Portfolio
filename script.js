const navMenu = document.querySelector('#nav-menu');
const menuBtn = document.querySelector('#menu-btn');
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelectorAll('.navbar-link a');
const seeProjectBtn = document.querySelectorAll('.see-project-btn');
const works = document.querySelector('#works');
const projectModal = document.querySelector('#project-modal');
const modalClose = document.querySelector('#modal-close');
const contactForm = document.querySelector('#contact-form');

const projects = [
  {
    id: 1,
    name: 'Ecommerce website',
    description:
      'A website for a fictional ecommerce company lorem A website for a fictional ecommerce company lorem A website for a fictional ecommerce company lorem A website for a fictional ecommerce company lorem',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'My SQL'],
    link: 'https://aimalamiri.github.io/Microverse-Portfolio/',
    source: 'https://github.com/aimalamiri/Microverse-Portfolio',
  },
  {
    id: 2,
    name: 'Finance App',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus aliquid suscipit odit, eveniet nisi impedit nam placeat labore excepturi nulla facere ratione cupiditate culpa iure vel aliquam eum dolore.',
    image:
      'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1102&q=80',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
    link: 'https://aimalamiri.github.io/Microverse-Portfolio/',
    source: 'https://github.com/aimalamiri/Microverse-Portfolio',
  },
  {
    id: 3,
    name: 'Marketing Analysis',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus aliquid suscipit odit, eveniet nisi impedit nam placeat labore excepturi nulla facere ratione cupiditate culpa iure vel aliquam eum dolore.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
    link: 'https://aimalamiri.github.io/Microverse-Portfolio/',
    source: 'https://github.com/aimalamiri/Microverse-Portfolio',
  },
  {
    id: 4,
    name: 'Portfolio Page',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus aliquid suscipit odit, eveniet nisi impedit nam placeat labore excepturi nulla facere ratione cupiditate culpa iure vel aliquam eum dolore.',
    image: 'https://i.pinimg.com/originals/6e/4b/2e/6e4b2e5e016ee15a405be4e09decfdc9.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://aimalamiri.github.io/Microverse-Portfolio/',
    source: 'https://github.com/aimalamiri/Microverse-Portfolio',
  },
  {
    id: 5,
    name: 'WebDesign Agency',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus aliquid suscipit odit, eveniet nisi impedit nam placeat labore excepturi nulla facere ratione cupiditate culpa iure vel aliquam eum dolore.',
    image:
      'https://mldpshakfq9r.i.optimole.com/Q925PfU-6c8Cn91e/w:1200/h:683/q:auto/https://www.core365.co.uk/wp-content/uploads/2021/07/JLN-Website-Screenshot.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://aimalamiri.github.io/Microverse-Portfolio/',
    source: 'https://github.com/aimalamiri/Microverse-Portfolio',
  },
  {
    id: 6,
    name: 'Bussiness booster',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus aliquid suscipit odit, eveniet nisi impedit nam placeat labore excepturi nulla facere ratione cupiditate culpa iure vel aliquam eum dolore.',
    image: 'https://i.pinimg.com/originals/ed/de/b9/eddeb936e3c74afa5b0182f847fb59fd.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
    link: 'https://aimalamiri.github.io/Microverse-Portfolio/',
    source: 'https://github.com/aimalamiri/Microverse-Portfolio',
  },
  {
    id: 7,
    name: 'Help Center',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus aliquid suscipit odit, eveniet nisi impedit nam placeat labore excepturi nulla facere ratione cupiditate culpa iure vel aliquam eum dolore.',
    image:
      'https://img.webdesign-inspiration.com/v7/webdesign-inspiration.com/uploads/design/2019-05/v2-zopim-com-52981.png?width=488',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
    link: 'https://aimalamiri.github.io/Microverse-Portfolio/',
    source: 'https://github.com/aimalamiri/Microverse-Portfolio',
  },
];

let fTags = '';
projects[0].technologies.forEach((tag) => {
  fTags += `<li class="tag">${tag}</li>`;
});

const featureProject = `
          <div class="featured-project">
          <img class="f-project-img" src="${projects[0].image}" alt="GymFit's homepage" />
          <div class="f-project-body">
            <h2 class="project-title text-black font-crete-round my-24">${projects[0].name}</h3>
            <p class="project-description font-inter text-black">
              ${projects[0].description} 
            </p>
            <ul class="tags">
              ${fTags} 
            </ul>
            <button class="btn see-project-btn mt-13" data-id="${projects[0].id}">See Project</button>
          </div>
        </div>
`;

works.innerHTML += featureProject;

for (let i = 1; i < projects.length; i += 1) {
  let tags = '';
  projects[i].technologies.forEach((tag) => {
    tags += `<li class="tag text-white dark-tag mb-6">${tag}</li>`;
  });

  const project = `
        <div class="project-card">
          <div class="project" style="background-image: url('${projects[i].image}');">
            <div>
              <h3 class="project-title text-white font-crete-round">${projects[i].name}</h3>
              <p class="project-description text-white mt-12">
                ${projects[i].description} 
              </p>
              <ul class="tags">
                ${tags}
              </ul>
            </div>
          </div>
          <button class="btn see-project-btn w-full" data-id="${projects[i].id}">See Project</button>
        </div>
  `;
  works.innerHTML += project;
}

function swapMenuIcon() {
  if (navMenu.classList.contains('d-block')) {
    menuIcon.src = './assets/png/close.png';
  } else {
    menuIcon.src = './assets/svg/menu.svg';
  }
}

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('d-block');
  swapMenuIcon();
});

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', () => {
    navMenu.classList.remove('d-block');
    swapMenuIcon();
  });
}

for (let i = 0; i < seeProjectBtn.length; i += 1) {
  seeProjectBtn[i].addEventListener('click', () => {
    document.querySelector('body').style.overflowY = 'hidden';
    projectModal.classList.toggle('d-hide');
    projectModal.style.top = `${window.pageYOffset}px`;
  });
}

modalClose.addEventListener('click', (event) => {
  projectModal.classList.add('d-hide');
  document.querySelector('body').style.overflowY = 'auto';
  event.preventDefault();
});

function findProject(id) {
  for (let i = 0; i < projects.length; i += 1) {
    if (projects[i].id === Number(id)) {
      return projects[i];
    }
  }
  return null;
}

function produceTags(project) {
  let tags = '';
  project.technologies.forEach((tag) => {
    tags += `<li class="tag">${tag}</li>`;
  });
  return tags;
}

function updateModal(project) {
  const title = document.querySelector('#modal-title');
  const img = document.querySelector('#modal-img');
  const tags = document.querySelector('#modal-tags');
  const text = document.querySelector('#modal-text');
  const live = document.querySelector('#modal-live');
  const source = document.querySelector('#modal-source');

  title.textContent = project.name;
  img.src = project.image;
  tags.innerHTML = produceTags(project);
  text.textContent = project.description;
  live.href = project.link;
  source.href = project.source;
}

window.addEventListener('load', () => {
  const projectBtns = document.querySelectorAll('[data-id]');
  for (let i = 0; i < projectBtns.length; i += 1) {
    projectBtns[i].addEventListener('click', (btn) => {
      const id = btn.target.getAttribute('data-id');
      updateModal(findProject(id));
      document.querySelector('body').style.overflowY = 'hidden';
      projectModal.classList.toggle('d-hide');
      projectModal.style.top = `${window.pageYOffset}px`;
    });
  }
});

contactForm.addEventListener('submit', (event) => {
  if (email.value.toLowerCase() !== email.value) {
    event.preventDefault();
    const emailError = document.querySelector('#email-error');
    emailError.textContent = 'The email must be in lowercase letters';
    emailError.classList.remove('d-hide');
  } else {
    emailError.classList.toggle('d-hide');
  }
});
