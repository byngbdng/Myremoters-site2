const serviceData = {
  trust: {
    kicker: "Trust & Safety",
    title: "Protect platforms with structured safety operations.",
    desc: "Build reliable support for moderation, policy enforcement, escalation handling, quality review, and operational governance.",
    items: ["Content moderation workflows", "Policy enforcement support", "Escalation management", "Quality programs and governance"]
  },
  adops: {
    kicker: "Ad Operations",
    title: "Support revenue growth with stronger ad operations.",
    desc: "Help publishers and ad-driven businesses manage traffic quality, monetization workflows, IVT monitoring, and reporting operations.",
    items: ["Revenue optimization support", "Traffic quality management", "IVT monitoring", "Publisher operations support"]
  },
  teams: {
    kicker: "Remote Teams",
    title: "Build dedicated teams around your business objectives.",
    desc: "Scale support capacity with trained remote teams, structured delivery, and clear performance management.",
    items: ["Dedicated operational teams", "Customer operations", "Back office support", "Team lead and QA structure"]
  },
  excellence: {
    kicker: "Operations Excellence",
    title: "Improve workflows, performance, and scalability.",
    desc: "Optimize processes through automation, workforce strategy, governance, and operational transformation.",
    items: ["Process improvement", "Automation strategy", "Workforce optimization", "Operational transformation"]
  }
};

const tabs = document.querySelectorAll('.service-tab');
const kicker = document.getElementById('serviceKicker');
const title = document.getElementById('serviceTitle');
const desc = document.getElementById('serviceDesc');
const list = document.getElementById('serviceList');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const data = serviceData[tab.dataset.service];
    kicker.textContent = data.kicker;
    title.textContent = data.title;
    desc.textContent = data.desc;
    list.innerHTML = data.items.map(item => `<li>${item}</li>`).join('');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
