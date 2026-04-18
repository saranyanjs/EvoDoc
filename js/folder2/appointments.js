// js/pages/appointments.js

export function renderAppointments() {
    return `
        <div class="page-container">
            <div class="flex justify-between items-center mb-6">
                <h2 class="font-semibold" style="font-size: 24px;">Appointments</h2>
                <div class="flex gap-3">
                    <div class="search-bar">
                        <i class="ph ph-magnifying-glass"></i>
                        <input type="text" placeholder="Search patient name..." style="width: 200px;">
                    </div>
                    <select class="form-control" style="width: 150px; padding: 8px 12px;">
                        <option>All Doctors</option>
                        <option>Dr. Sharma</option>
                        <option>Dr. Patel</option>
                    </select>
                    <input type="date" class="form-control" style="width: 150px; padding: 8px 12px;" value="2026-04-18">
                </div>
            </div>

            <div class="card p-0" style="padding: 0; overflow: hidden;">
                <div class="table-container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Patient Name</th>
                                <th>Doctor</th>
                                <th>Date & Time</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="patient-cell">
                                        <div class="patient-avatar" style="background: var(--clr-primary-light);">RK</div>
                                        <div>
                                            <div class="font-semibold">Rahul Kumar</div>
                                            <div class="text-xs text-muted">ID: P-9824</div>
                                        </div>
                                    </div>
                                </td>
                                <td>Dr. Amit Sharma</td>
                                <td>
                                    <div>Today</div>
                                    <div class="text-xs text-muted">10:00 AM</div>
                                </td>
                                <td><span class="badge badge-success">Completed</span></td>
                                <td>
                                    <div class="flex gap-2">
                                        <button class="btn-icon" title="View" onclick="window.location.hash='patient-details?id=p-9824'"><i class="ph ph-eye"></i></button>
                                        <button class="btn-icon" title="Edit"><i class="ph ph-pencil-simple"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="patient-cell">
                                        <div class="patient-avatar" style="background: var(--clr-warning-bg); color: var(--clr-warning);">SM</div>
                                        <div>
                                            <div class="font-semibold">Sneha M.</div>
                                            <div class="text-xs text-muted">ID: P-9825</div>
                                        </div>
                                    </div>
                                </td>
                                <td>Dr. Sneha Patel</td>
                                <td>
                                    <div>Today</div>
                                    <div class="text-xs text-muted">11:30 AM</div>
                                </td>
                                <td><span class="badge badge-warning">Scheduled</span></td>
                                <td>
                                    <div class="flex gap-2">
                                        <button class="btn-icon" title="View" onclick="window.location.hash='patient-details?id=p-9825'"><i class="ph ph-eye"></i></button>
                                        <button class="btn-icon" title="Edit"><i class="ph ph-pencil-simple"></i></button>
                                        <button class="btn-icon" style="color: var(--clr-danger);" title="Cancel"><i class="ph ph-x-circle"></i></button>
                                    </div>
                                </td>
                            </tr>
                             <tr>
                                <td>
                                    <div class="patient-cell">
                                        <div class="patient-avatar" style="background: var(--clr-success-bg); color: var(--clr-success);">VJ</div>
                                        <div>
                                            <div class="font-semibold">Vikas Jain</div>
                                            <div class="text-xs text-muted">ID: P-9826</div>
                                        </div>
                                    </div>
                                </td>
                                <td>Dr. Amit Sharma</td>
                                <td>
                                    <div>Today</div>
                                    <div class="text-xs text-muted">02:00 PM</div>
                                </td>
                                <td><span class="badge badge-warning">Scheduled</span></td>
                                <td>
                                    <div class="flex gap-2">
                                        <button class="btn-icon" title="View" onclick="window.location.hash='patient-details?id=p-9826'"><i class="ph ph-eye"></i></button>
                                        <button class="btn-icon" title="Edit"><i class="ph ph-pencil-simple"></i></button>
                                        <button class="btn-icon" style="color: var(--clr-danger);" title="Cancel"><i class="ph ph-x-circle"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="patient-cell">
                                        <div class="patient-avatar" style="background: var(--clr-danger-bg); color: var(--clr-danger);">AK</div>
                                        <div>
                                            <div class="font-semibold">Arjun Kapoor</div>
                                            <div class="text-xs text-muted">ID: P-9827</div>
                                        </div>
                                    </div>
                                </td>
                                <td>Dr. R. K. Iyer</td>
                                <td>
                                    <div>Today</div>
                                    <div class="text-xs text-muted">04:30 PM</div>
                                </td>
                                <td><span class="badge badge-danger">Cancelled</span></td>
                                <td>
                                    <div class="flex gap-2">
                                        <button class="btn-icon" title="View" onclick="window.location.hash='patient-details?id=p-9827'"><i class="ph ph-eye"></i></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}
