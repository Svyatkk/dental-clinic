import { services } from '../models/servicesModel.js';

export function initApp() {
    renderServices();
}

function renderServices() {
    const container = document.querySelector('#services');
    if (!container) return;
    container.innerHTML = services.map(s => `
        <li>${s.title} — ${s.price} грн</li>
    `).join('');
}
