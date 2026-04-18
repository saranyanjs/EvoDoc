// js/app.js - Main Application Logic & Router

import { renderSidebar } from './components/Sidebar.js';
import { renderHeader } from './components/Header.js';

// Pages
import { renderDashboard } from './pages/dashboard.js';
import { renderPatients } from './pages/patients.js';
import { renderRegisterAppointment } from './pages/register-appointment.js';
import { renderAppointments } from './pages/appointments.js';
import { renderDoctorDashboard } from './pages/doctor-dashboard.js';
import { renderDoctorAppointments } from './pages/doctor-appointments.js';
import { renderPatientDetails } from './pages/patient-details.js';

const app = {
    init() {
        this.cacheDOM();
        this.renderLayout();
        this.initRouter();
        this.handleRoute(); // initial load
    },

    cacheDOM() {
        this.sidebarEl = document.getElementById('sidebar');
        this.headerEl = document.getElementById('header');
        this.contentEl = document.getElementById('app-content');
    },

    renderLayout() {
        this.sidebarEl.innerHTML = renderSidebar();
        this.headerEl.innerHTML = renderHeader();
    },

    initRouter() {
        window.addEventListener('hashchange', () => this.handleRoute());
        
        // Listen to sidebar clicks
        this.sidebarEl.addEventListener('click', (e) => {
            const navItem = e.target.closest('.nav-item');
            if (navItem) {
                // Update active state
                document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
                navItem.classList.add('active');
            }
        });
    },

    handleRoute() {
        const hashStr = window.location.hash.slice(1) || 'dashboard'; // Default route
        const [hash, queryString] = hashStr.split('?');
        
        let queryParams = {};
        if (queryString) {
            const searchParams = new URLSearchParams(queryString);
            for (let [key, value] of searchParams.entries()) {
                queryParams[key] = value;
            }
        }

        let contentHtml = '';

        switch(hash) {
            case 'dashboard':
                contentHtml = renderDashboard();
                this.updateHeaderTitle('Dashboard');
                break;
            case 'patients':
                contentHtml = renderPatients();
                this.updateHeaderTitle('Patient Intake');
                break;
            case 'appointments':
                contentHtml = renderAppointments();
                this.updateHeaderTitle('Appointments');
                break;
            case 'register-appointment':
                contentHtml = renderRegisterAppointment();
                this.updateHeaderTitle('Register Appointment');
                break;
            case 'profile':
                contentHtml = `<div class="page-container"><h2>User Profile</h2><p class="text-muted mt-2">Configuration coming soon.</p></div>`;
                this.updateHeaderTitle('Profile');
                break;
            case 'doctor-dashboard':
                contentHtml = renderDoctorDashboard();
                this.updateHeaderTitle('Doctor Dashboard');
                break;
            case 'doctor-appointments':
                contentHtml = renderDoctorAppointments();
                this.updateHeaderTitle('My Appointments');
                break;
            case 'patient-details':
                contentHtml = renderPatientDetails(queryParams);
                this.updateHeaderTitle('Patient Details');
                break;
            default:
                contentHtml = '<div class="page-container"><h2>404 - Page Not Found</h2></div>';
                this.updateHeaderTitle('Error');
        }

        this.contentEl.innerHTML = contentHtml;
        window.scrollTo(0, 0);
    },

    updateHeaderTitle(title) {
        const titleEl = document.getElementById('page-title');
        if (titleEl) {
            titleEl.textContent = title;
        }
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());
