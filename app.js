const subjectData = [
  { name: 'Math', value: 82 },
  { name: 'Science', value: 88 },
  { name: 'English', value: 75 },
  { name: 'ICT', value: 91 },
  { name: 'History', value: 70 },
  { name: 'Art', value: 85 }
];

const subjectBars = document.getElementById('subjectBars');

subjectData.forEach((subject) => {
  const group = document.createElement('div');
  group.className = 'bar-group';

  const wrapper = document.createElement('div');
  wrapper.className = 'bar-wrapper';

  const bar = document.createElement('div');
  bar.className = 'bar';
  bar.style.height = `${subject.value}%`;

  wrapper.appendChild(bar);
  group.appendChild(wrapper);
  group.appendChild(document.createTextNode(subject.name));

  subjectBars.appendChild(group);
});

const today = new Date();
const label = today.toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
});

const header = document.querySelector('.topbar h1');
header.insertAdjacentHTML('afterend', `<p class="eyebrow">Updated: ${label}</p>`);
