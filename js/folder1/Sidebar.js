// js/components/Sidebar.js

export function renderSidebar() {
    const hashStr = window.location.hash.slice(1) || 'dashboard';
    const [currentHash] = hashStr.split('?');
    const isActive = (path) => currentHash === path ? 'active' : '';

    return `
        <div class="sidebar-header">
            <i class="ph-fill ph-heartbeat sidebar-logo-icon"></i>
            <span class="sidebar-brand">EvoDoc</span>
        </div>
        <nav class="sidebar-nav">
            <div class="mb-4">
                <div class="text-xs text-muted font-semibold mb-2 px-4 uppercase tracking-wider">Reception</div>
                <a href="#dashboard" class="nav-item ${isActive('dashboard')}">
                    <i class="ph ph-squares-four"></i>
                    <span>Dashboard</span>
                </a>
                <a href="#register-appointment" class="nav-item ${isActive('register-appointment')}">
                    <i class="ph ph-calendar-plus"></i>
                    <span>Register Appointment</span>
                </a>
                <a href="#appointments" class="nav-item ${isActive('appointments')}">
                    <i class="ph ph-calendar-blank"></i>
                    <span>Appointments</span>
                </a>
                <a href="#patients" class="nav-item ${isActive('patients')}">
                    <i class="ph ph-user-plus"></i>
                    <span>Patient Intake</span>
                </a>
            </div>

            <div class="mb-4">
                <div class="text-xs text-muted font-semibold mb-2 px-4 uppercase tracking-wider">Doctor Portal</div>
                <a href="#doctor-dashboard" class="nav-item ${isActive('doctor-dashboard')}">
                    <i class="ph ph-stethoscope"></i>
                    <span>Doctor Dashboard</span>
                </a>
                <a href="#doctor-appointments" class="nav-item ${isActive('doctor-appointments')}">
                    <i class="ph ph-list-dashes"></i>
                    <span>My Schedule</span>
                </a>
                <a href="#patient-details" class="nav-item ${isActive('patient-details')}">
                    <i class="ph ph-file-text"></i>
                    <span>Patient Records</span>
                </a>
            </div>
            
            <div class="mt-8 pt-4" style="border-top: 1px solid rgba(255,255,255,0.05);">
                <a href="#profile" class="nav-item ${isActive('profile')}">
                    <i class="ph ph-gear"></i>
                    <span>Settings & Profile</span>
                </a>
            </div>
        </nav>
    `;
}
