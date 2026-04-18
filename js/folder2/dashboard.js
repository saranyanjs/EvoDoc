// js/pages/dashboard.js

export function renderDashboard() {
    return `
        <div class="page-container">
            <h2 class="mb-6 font-semibold" style="font-size: 24px;">Welcome back, Reception</h2>
            
            <div class="grid grid-cols-4 mb-8">
                <div class="card stat-card">
                    <div class="stat-icon"><i class="ph ph-users"></i></div>
                    <div>
                        <div class="stat-value">142</div>
                        <div class="stat-label">Total Patients Today</div>
                    </div>
                </div>
                <div class="card stat-card">
                    <div class="stat-icon" style="color: var(--clr-success); background-color: var(--clr-success-bg);"><i class="ph ph-calendar-check"></i></div>
                    <div>
                        <div class="stat-value">28</div>
                        <div class="stat-label">Completed Appts</div>
                    </div>
                </div>
                <div class="card stat-card">
                    <div class="stat-icon" style="color: var(--clr-warning); background-color: var(--clr-warning-bg);"><i class="ph ph-clock"></i></div>
                    <div>
                        <div class="stat-value">16</div>
                        <div class="stat-label">Pending Appts</div>
                    </div>
                </div>
                <div class="card stat-card">
                    <div class="stat-icon" style="color: var(--clr-danger); background-color: var(--clr-danger-bg);"><i class="ph ph-user-minus"></i></div>
                    <div>
                        <div class="stat-value">2</div>
                        <div class="stat-label">Cancellations</div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-2">
                <div class="card">
                    <div class="card-header">
                        <span class="card-title">Quick Actions</span>
                    </div>
                    <div class="grid grid-cols-2 mt-4">
                        <button class="btn btn-secondary flex-col items-center gap-4" style="padding: 24px;" onclick="window.location.hash='register-appointment'">
                            <i class="ph ph-calendar-plus" style="font-size: 32px; color: var(--clr-primary);"></i>
                            <span>New Appointment</span>
                        </button>
                        <button class="btn btn-secondary flex-col items-center gap-4" style="padding: 24px;" onclick="window.location.hash='patients'">
                            <i class="ph ph-user-plus" style="font-size: 32px; color: var(--clr-primary);"></i>
                            <span>Register Patient</span>
                        </button>
                    </div>
                </div>
                
                <div class="card">
                    <div class="card-header">
                        <span class="card-title">Recent Activity</span>
                    </div>
                    <ul class="mt-4 flex-col gap-4">
                        <li class="flex items-center gap-4 border-b border-light pb-4" style="border-bottom: 1px solid var(--clr-border-light);">
                            <div class="avatar" style="width: 32px; height: 32px; font-size: 12px; background: var(--clr-success-bg); color: var(--clr-success);">RK</div>
                            <div>
                                <div class="text-sm font-semibold">Rahul Kumar checked in</div>
                                <div class="text-xs text-muted">2 mins ago</div>
                            </div>
                        </li>
                        <li class="flex items-center gap-4 border-b border-light pb-4" style="border-bottom: 1px solid var(--clr-border-light); margin-top: 12px;">
                            <div class="avatar" style="width: 32px; height: 32px; font-size: 12px; background: var(--clr-warning-bg); color: var(--clr-warning);">SM</div>
                            <div>
                                <div class="text-sm font-semibold">Appointment modified for Sneha M.</div>
                                <div class="text-xs text-muted">15 mins ago</div>
                            </div>
                        </li>
                         <li class="flex items-center gap-4 mt-3">
                            <div class="avatar" style="width: 32px; height: 32px; font-size: 12px; background: var(--clr-primary-light); color: var(--clr-primary);">DT</div>
                            <div>
                                <div class="text-sm font-semibold">New booking created by Dr. Mehta</div>
                                <div class="text-xs text-muted">1 hour ago</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}
