// js/pages/doctor-appointments.js

export function renderDoctorAppointments() {
    return `
        <div class="page-container">
            <h2 class="mb-6 font-semibold" style="font-size: 24px;">My Appointments (Today)</h2>

            <div class="grid gap-4">
                <!-- Appointment Card 1 -->
                <div class="card flex items-center justify-between" style="border-left: 4px solid var(--clr-success);">
                    <div class="flex items-center gap-6">
                        <div class="text-center" style="min-width: 80px; padding-right: 16px; border-right: 1px solid var(--clr-border);">
                            <div class="font-bold" style="font-size: 18px;">10:00 AM</div>
                            <div class="text-xs text-muted">Complete</div>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="avatar">RK</div>
                            <div>
                                <h3 class="font-semibold">Rahul Kumar</h3>
                                <p class="text-sm text-muted">Follow up • High Blood Pressure</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button class="btn btn-secondary" onclick="window.location.hash='patient-details?id=p-9824'">View Details</button>
                    </div>
                </div>

                <!-- Appointment Card 2 -->
                <div class="card flex items-center justify-between" style="border-left: 4px solid var(--clr-warning);">
                    <div class="flex items-center gap-6">
                        <div class="text-center" style="min-width: 80px; padding-right: 16px; border-right: 1px solid var(--clr-border);">
                            <div class="font-bold" style="font-size: 18px;">11:30 AM</div>
                            <div class="text-xs text-muted" style="color: var(--clr-warning);">Next</div>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="avatar" style="background: var(--clr-warning-bg); color: var(--clr-warning);">VJ</div>
                            <div>
                                <h3 class="font-semibold">Vikas Jain</h3>
                                <p class="text-sm text-muted">New Patient • General Consultation</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button class="btn btn-primary" onclick="window.location.hash='patient-details?id=p-9826'">Start Consultation</button>
                    </div>
                </div>

                 <!-- Appointment Card 3 -->
                 <div class="card flex items-center justify-between" style="border-left: 4px solid var(--clr-border); opacity: 0.8;">
                    <div class="flex items-center gap-6">
                        <div class="text-center" style="min-width: 80px; padding-right: 16px; border-right: 1px solid var(--clr-border);">
                            <div class="font-bold text-muted" style="font-size: 18px;">02:00 PM</div>
                            <div class="text-xs text-muted">Scheduled</div>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="avatar" style="background: var(--clr-bg-app);">AT</div>
                            <div>
                                <h3 class="font-semibold text-muted">Amit Trivedi</h3>
                                <p class="text-sm text-muted">Routine Checkup</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button class="btn btn-secondary" onclick="window.location.hash='patient-details?id=p-9828'">View Record</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}
