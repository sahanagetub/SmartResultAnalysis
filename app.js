const dashboardData = {
  "2025": {
    "Term 1": {
      "all": {
        totalStudents: 1286,
        averageScore: 81.6,
        passRate: 89.2,
        atRisk: 124,
        confidence: 92.4,
        subjects: [82, 88, 75, 91, 70, 85],
        distribution: [32, 41, 18, 9],
        forecast: [76, 18, 6],
        riskFactors: [
          'Low attendance in Mathematics',
          'Reduced assignment completion',
          'Improved participation in Science',
          'Strong reading comprehension trend'
        ],
        table: [
          { className: 'Grade 10-A', average: '88%', passRate: '94%', riskCount: 8, status: 'good', statusText: 'Excellent' },
          { className: 'Grade 10-B', average: '82%', passRate: '90%', riskCount: 12, status: 'good', statusText: 'Healthy' },
          { className: 'Grade 11-A', average: '76%', passRate: '81%', riskCount: 27, status: 'watch', statusText: 'Monitor' },
          { className: 'Grade 11-B', average: '70%', passRate: '73%', riskCount: 35, status: 'alert', statusText: 'Support' }
        ]
      },
      "Grade 10-A": {
        totalStudents: 320,
        averageScore: 88.4,
        passRate: 94.5,
        atRisk: 8,
        confidence: 96.2,
        subjects: [90, 92, 85, 96, 82, 88],
        distribution: [46, 37, 12, 5],
        forecast: [87, 10, 3],
        riskFactors: [
          'Attendance improved strongly',
          'Assignments are on time',
          'Strong teacher support',
          'Targeted revision needed in History'
        ],
        table: [
          { className: 'Grade 10-A', average: '88%', passRate: '94%', riskCount: 8, status: 'good', statusText: 'Excellent' }
        ]
      },
      "Grade 10-B": {
        totalStudents: 318,
        averageScore: 82.2,
        passRate: 90.4,
        atRisk: 12,
        confidence: 93.1,
        subjects: [84, 86, 80, 88, 76, 84],
        distribution: [35, 44, 15, 6],
        forecast: [79, 16, 5],
        riskFactors: [
          'Slightly low writing confidence',
          'Math scores need support',
          'Good consistency in Science',
          'Project participation is rising'
        ],
        table: [
          { className: 'Grade 10-B', average: '82%', passRate: '90%', riskCount: 12, status: 'good', statusText: 'Healthy' }
        ]
      },
      "Grade 11-A": {
        totalStudents: 332,
        averageScore: 76.4,
        passRate: 81.2,
        atRisk: 27,
        confidence: 88.7,
        subjects: [78, 82, 74, 88, 68, 79],
        distribution: [24, 43, 23, 10],
        forecast: [71, 22, 7],
        riskFactors: [
          'Attendance dips on Friday',
          'Lower confidence in English essays',
          'ICT support shows positive change',
          'Science practicals are strong'
        ],
        table: [
          { className: 'Grade 11-A', average: '76%', passRate: '81%', riskCount: 27, status: 'watch', statusText: 'Monitor' }
        ]
      },
      "Grade 11-B": {
        totalStudents: 316,
        averageScore: 70.5,
        passRate: 73.4,
        atRisk: 35,
        confidence: 82.6,
        subjects: [72, 75, 69, 80, 62, 73],
        distribution: [18, 32, 31, 19],
        forecast: [62, 28, 10],
        riskFactors: [
          'Low persistence in exams',
          'History marks are declining',
          'Reading support is effective',
          'Needs extra mentoring sessions'
        ],
        table: [
          { className: 'Grade 11-B', average: '70%', passRate: '73%', riskCount: 35, status: 'alert', statusText: 'Support' }
        ]
      }
    },
    "Term 2": {
      "all": {
        totalStudents: 1286,
        averageScore: 83.4,
        passRate: 90.8,
        atRisk: 118,
        confidence: 93.1,
        subjects: [84, 90, 78, 92, 72, 87],
        distribution: [35, 42, 17, 6],
        forecast: [78, 16, 6],
        riskFactors: [
          'Math attendance improved',
          'English writing still needs attention',
          'Science participation is strong',
          'ICT performance continues to lead'
        ],
        table: [
          { className: 'Grade 10-A', average: '90%', passRate: '96%', riskCount: 6, status: 'good', statusText: 'Excellent' },
          { className: 'Grade 10-B', average: '84%', passRate: '91%', riskCount: 11, status: 'good', statusText: 'Healthy' },
          { className: 'Grade 11-A', average: '79%', passRate: '84%', riskCount: 24, status: 'watch', statusText: 'Monitor' },
          { className: 'Grade 11-B', average: '72%', passRate: '75%', riskCount: 31, status: 'alert', statusText: 'Support' }
        ]
      },
      "Grade 10-A": {
        totalStudents: 320,
        averageScore: 90.1,
        passRate: 96.2,
        atRisk: 6,
        confidence: 97.1,
        subjects: [92, 94, 88, 97, 84, 90],
        distribution: [49, 38, 10, 3],
        forecast: [89, 9, 2],
        riskFactors: [
          'Strong leadership in class',
          'Assignments submitted consistently',
          'Needs challenge-based tasks',
          'Art shows excellent creativity'
        ],
        table: [
          { className: 'Grade 10-A', average: '90%', passRate: '96%', riskCount: 6, status: 'good', statusText: 'Excellent' }
        ]
      },
      "Grade 10-B": {
        totalStudents: 318,
        averageScore: 84.3,
        passRate: 91.1,
        atRisk: 11,
        confidence: 94.0,
        subjects: [86, 88, 82, 90, 78, 86],
        distribution: [38, 41, 15, 6],
        forecast: [81, 15, 4],
        riskFactors: [
          'Group activities are improving',
          'More writing practice needed',
          'Science labs are consistent',
          'Private study hours increased'
        ],
        table: [
          { className: 'Grade 10-B', average: '84%', passRate: '91%', riskCount: 11, status: 'good', statusText: 'Healthy' }
        ]
      },
      "Grade 11-A": {
        totalStudents: 332,
        averageScore: 79.2,
        passRate: 84.1,
        atRisk: 24,
        confidence: 89.9,
        subjects: [80, 85, 76, 90, 70, 82],
        distribution: [28, 42, 20, 10],
        forecast: [74, 19, 7],
        riskFactors: [
          'Math support sessions are working',
          'Monitoring reading comprehension',
          'Science practical engagement is high',
          'English writing performance needs focus'
        ],
        table: [
          { className: 'Grade 11-A', average: '79%', passRate: '84%', riskCount: 24, status: 'watch', statusText: 'Monitor' }
        ]
      },
      "Grade 11-B": {
        totalStudents: 316,
        averageScore: 72.4,
        passRate: 75.5,
        atRisk: 31,
        confidence: 83.8,
        subjects: [74, 77, 72, 82, 64, 76],
        distribution: [20, 35, 28, 17],
        forecast: [65, 25, 10],
        riskFactors: [
          'Revision support is necessary',
          'History remains critical area',
          'Targeted mentoring will help',
          'Strengthening exam strategy is required'
        ],
        table: [
          { className: 'Grade 11-B', average: '72%', passRate: '75%', riskCount: 31, status: 'alert', statusText: 'Support' }
        ]
      }
    },
    "Term 3": {
      "all": {
        totalStudents: 1286,
        averageScore: 84.9,
        passRate: 92.4,
        atRisk: 109,
        confidence: 94.2,
        subjects: [86, 91, 80, 94, 74, 89],
        distribution: [38, 43, 14, 5],
        forecast: [80, 14, 6],
        riskFactors: [
          'Strong performance in ICT',
          'Math interventions show improvement',
          'History support still needed',
          'Class participation is stable'
        ],
        table: [
          { className: 'Grade 10-A', average: '92%', passRate: '97%', riskCount: 5, status: 'good', statusText: 'Excellent' },
          { className: 'Grade 10-B', average: '85%', passRate: '92%', riskCount: 9, status: 'good', statusText: 'Healthy' },
          { className: 'Grade 11-A', average: '81%', passRate: '87%', riskCount: 19, status: 'watch', statusText: 'Monitor' },
          { className: 'Grade 11-B', average: '74%', passRate: '78%', riskCount: 27, status: 'alert', statusText: 'Support' }
        ]
      },
      "Grade 10-A": {
        totalStudents: 320,
        averageScore: 92.1,
        passRate: 97.2,
        atRisk: 5,
        confidence: 97.8,
        subjects: [94, 96, 90, 98, 86, 92],
        distribution: [52, 36, 9, 3],
        forecast: [90, 8, 2],
        riskFactors: [
          'Very low risk profile',
          'High consistency across subjects',
          'Strong leadership and teamwork',
          'Advanced revision plans in place'
        ],
        table: [
          { className: 'Grade 10-A', average: '92%', passRate: '97%', riskCount: 5, status: 'good', statusText: 'Excellent' }
        ]
      },
      "Grade 10-B": {
        totalStudents: 318,
        averageScore: 85.2,
        passRate: 92.1,
        atRisk: 9,
        confidence: 95.2,
        subjects: [88, 90, 84, 92, 80, 88],
        distribution: [40, 39, 14, 7],
        forecast: [83, 13, 4],
        riskFactors: [
          'Steady improvement in Math',
          'Continued writing support needed',
          'Project-based learning is working',
          'Science remains favorable'
        ],
        table: [
          { className: 'Grade 10-B', average: '85%', passRate: '92%', riskCount: 9, status: 'good', statusText: 'Healthy' }
        ]
      },
      "Grade 11-A": {
        totalStudents: 332,
        averageScore: 81.4,
        passRate: 87.2,
        atRisk: 19,
        confidence: 91.1,
        subjects: [82, 87, 79, 92, 72, 84],
        distribution: [30, 44, 18, 8],
        forecast: [77, 17, 6],
        riskFactors: [
          'Math scores are trending upward',
          'History results need weekly review',
          'English writing is improving',
          'Attendance has become more consistent'
        ],
        table: [
          { className: 'Grade 11-A', average: '81%', passRate: '87%', riskCount: 19, status: 'watch', statusText: 'Monitor' }
        ]
      },
      "Grade 11-B": {
        totalStudents: 316,
        averageScore: 74.3,
        passRate: 78.5,
        atRisk: 27,
        confidence: 85.6,
        subjects: [76, 79, 73, 84, 66, 78],
        distribution: [22, 36, 25, 17],
        forecast: [68, 23, 9],
        riskFactors: [
          'Reading intervention is helping',
          'History remains the highest-risk subject',
          'Exam preparation requires structure',
          'Need more early intervention support'
        ],
        table: [
          { className: 'Grade 11-B', average: '74%', passRate: '78%', riskCount: 27, status: 'alert', statusText: 'Support' }
        ]
      }
    }
  }
};

const subjectLabels = ['Math', 'Science', 'English', 'ICT', 'History', 'Art'];
const distributionLabels = ['Distinction', 'Merit', 'Pass', 'Risk'];

const statsGrid = document.getElementById('statsGrid');
const distributionList = document.getElementById('distributionList');
const performanceTable = document.getElementById('performanceTable');
const riskList = document.getElementById('riskList');
const updatedLabel = document.getElementById('updatedLabel');
const confidenceValue = document.getElementById('confidenceValue');

const yearFilter = document.getElementById('yearFilter');
const termFilter = document.getElementById('termFilter');
const classFilter = document.getElementById('classFilter');

let subjectChart;
let forecastChart;

function updateDateLabel() {
  const now = new Date();
  updatedLabel.textContent = `Updated: ${now.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })}`;
}

function getCurrentSelection() {
  const year = yearFilter.value;
  const term = termFilter.value;
  const className = classFilter.value;
  const selectedData = dashboardData[year][term][className] || dashboardData[year][term].all;
  return { year, term, className, selectedData };
}

function renderStats(data) {
  const cards = [
    {
      title: 'Total Students',
      value: data.totalStudents.toLocaleString(),
      prefix: 'Across all classes',
      trend: '+12%',
      tone: 'up',
      style: 'gradient-blue'
    },
    {
      title: 'Average Score',
      value: `${data.averageScore}%`,
      prefix: 'Up from last term',
      trend: '+5.4%',
      tone: 'up',
      style: 'gradient-green'
    },
    {
      title: 'Pass Rate',
      value: `${data.passRate}%`,
      prefix: 'Target achieved',
      trend: '+8.1%',
      tone: 'up',
      style: 'gradient-purple'
    },
    {
      title: 'At Risk',
      value: data.atRisk,
      prefix: 'Needs intervention',
      trend: '-3.2%',
      tone: 'down',
      style: 'gradient-orange'
    }
  ];

  statsGrid.innerHTML = cards.map((card) => `
    <article class="stat-card ${card.style}">
      <div class="stat-header">
        <span>${card.title}</span>
        <span class="trend ${card.tone}">${card.trend}</span>
      </div>
      <h3>${card.value}</h3>
      <small>${card.prefix}</small>
    </article>
  `).join('');
}

function renderDistribution(data) {
  distributionList.innerHTML = data.distribution.map((value, index) => `
    <div class="distribution-item ${index === 3 ? 'warning' : ''}">
      <div class="label-row">
        <span>${distributionLabels[index]}</span>
        <strong>${value}%</strong>
      </div>
      <div class="progress"><span style="width: ${value}%"></span></div>
    </div>
  `).join('');
}

function renderRiskFactors(data) {
  riskList.innerHTML = data.riskFactors.map((item, index) => {
    const dotClass = ['blue', 'orange', 'green', 'purple'][index % 4];
    return `<li><span class="dot ${dotClass}"></span>${item}</li>`;
  }).join('');
}

function renderTable(data) {
  performanceTable.innerHTML = data.table.map(item => `
    <tr>
      <td>${item.className}</td>
      <td>${item.average}</td>
      <td>${item.passRate}</td>
      <td>${item.riskCount}</td>
      <td><span class="status ${item.status}">${item.statusText}</span></td>
    </tr>
  `).join('');
}

function renderCharts(data) {
  const ctxSubject = document.getElementById('subjectChart');
  const ctxForecast = document.getElementById('forecastChart');

  if (subjectChart) subjectChart.destroy();
  if (forecastChart) forecastChart.destroy();

  subjectChart = new Chart(ctxSubject, {
    type: 'bar',
    data: {
      labels: subjectLabels,
      datasets: [{
        label: 'Average %',
        data: data.subjects,
        borderRadius: 12,
        backgroundColor: ['#60a5fa', '#3b82f6', '#8b5cf6', '#22c55e', '#f59e0b', '#a78bfa'],
        borderSkipped: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: {
          beginAtZero: false,
          min: 50,
          max: 100,
          grid: { color: 'rgba(148,163,184,0.15)' },
          ticks: { color: '#64748b' }
        },
        x: {
          grid: { display: false },
          ticks: { color: '#64748b' }
        }
      }
    }
  });

  forecastChart = new Chart(ctxForecast, {
    type: 'doughnut',
    data: {
      labels: ['Likely to pass', 'Needs support', 'High risk'],
      datasets: [{
        data: data.forecast,
        backgroundColor: ['#22c55e', '#f59e0b', '#ef4444'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '68%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: '#475569', usePointStyle: true, pointStyle: 'circle' }
        }
      }
    }
  });
}

function setupFilters() {
  const selectedYearData = dashboardData[yearFilter.value];
  const termValue = termFilter.value;
  const options = Object.keys(selectedYearData[termValue]).filter((key) => key !== 'all');
  const existing = classFilter.value;

  classFilter.innerHTML = ['<option value="all">All Classes</option>']
    .concat(options.map((option) => `<option value="${option}">${option}</option>`))
    .join('');

  if (options.includes(existing)) {
    classFilter.value = existing;
  } else {
    classFilter.value = 'all';
  }

  yearFilter.addEventListener('change', () => {
    const yearData = dashboardData[yearFilter.value];
    termFilter.value = Object.keys(yearData)[0];
    setupFilters();
    renderDashboard();
  });

  termFilter.addEventListener('change', () => {
    setupFilters();
    renderDashboard();
  });

  classFilter.addEventListener('change', renderDashboard);
}

function renderDashboard() {
  const { selectedData } = getCurrentSelection();
  confidenceValue.textContent = `${selectedData.confidence}%`;
  renderStats(selectedData);
  renderDistribution(selectedData);
  renderRiskFactors(selectedData);
  renderTable(selectedData);
  renderCharts(selectedData);
}

function initDashboard() {
  updateDateLabel();
  setupFilters();
  renderDashboard();
}

initDashboard();
