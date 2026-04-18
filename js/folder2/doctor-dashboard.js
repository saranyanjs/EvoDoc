// js/pages/doctor-dashboard.js

export function renderDoctorDashboard() {
    return `
        <div class="page-container">
            <div class="flex justify-between items-center mb-6">
                <div>
                    <h2 class="font-semibold" style="font-size: 24px;">Good Morning, Dr. Sharma</h2>
                    <p class="text-muted text-sm mt-1">Here's your schedule for today.</p>
                </div>
                <button class="btn btn-primary" onclick="window.location.hash='doctor-appointments'">
                    <i class="ph ph-calendar"></i> View Full Schedule
                </button>
            </div>

            <div class="grid grid-cols-3 mb-8">
                <div class="card stat-card" style="background: var(--clr-primary); color: white;">
                    <div class="stat-icon" style="background: rgba(255,255,255,0.2); color: white;"><i class="ph ph-calendar-check"></i></div>
                    <div>
                        <div class="stat-value">12</div>
                        <div class="stat-label" style="color: rgba(255,255,255,0.8);">Appointments Today</div>
                    </div>
                </div>
                <div class="card stat-card">
                    <div class="stat-icon" style="color: var(--clr-warning); background-color: var(--clr-warning-bg);"><i class="ph ph-clock"></i></div>
                    <div>
                        <div class="stat-value">3</div>
                        <div class="stat-label">Remaining Today</div>
                    </div>
                </div>
                <div class="card stat-card">
                    <div class="stat-icon" style="color: var(--clr-success); background-color: var(--clr-success-bg);"><i class="ph ph-check-circle"></i></div>
                    <div>
                        <div class="stat-value">45</div>
                        <div class="stat-label">Patients This Week</div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-6">
                <div class="card">
                    <div class="card-header">
                        <span class="card-title">Next Patient</span>
                        <span class="badge badge-warning">In 15 Mins</span>
                    </div>
                    <div class="flex items-center gap-4 mt-4 mb-6">
                        <div class="avatar" style="width: 56px; height: 56px; font-size: 20px;">VJ</div>
                        <div>
                            <h3 class="font-semibold text-lg">Vikas Jain</h3>
                            <p class="text-muted text-sm">32 yrs • Male • General Checkup</p>
                        </div>
                    </div>
                    <button class="btn btn-primary w-full" onclick="window.location.hash='patient-details?id=p-9826'">
                        Open Patient File
                    </button>
                </div>

                <div class="card">
                    <div class="card-header">
                        <span class="card-title">Tasks & Reminders</span>
                    </div>
                    <ul class="mt-4 flex-col gap-3">
                        <li class="flex items-start gap-3">
                            <input type="checkbox" style="margin-top: 4px;">
                            <div>
                                <div class="font-medium text-sm">Review lab results for Sneha M.</div>
                                <div class="text-xs text-muted">Due today</div>
                            </div>
                        </li>
                        <li class="flex items-start gap-3">
                            <input type="checkbox" style="margin-top: 4px;">
                            <div>
                                <div class="font-medium text-sm">Sign discharge papers for Ward 3</div>
                                <div class="text-xs text-muted">High priority</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}
