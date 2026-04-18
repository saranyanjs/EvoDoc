// js/pages/register-appointment.js

export function renderRegisterAppointment() {
    return `
        <div class="page-container">
            <h2 class="mb-6 font-semibold" style="font-size: 24px;">Book an Appointment</h2>

            <form class="card" onsubmit="event.preventDefault(); window.location.hash='appointments';">
                <div class="grid grid-cols-2 mb-6 gap-6">
                    <div class="form-group mb-0">
                        <label class="form-label">Patient Selection</label>
                        <div class="search-bar w-full" style="width: 100%;">
                            <i class="ph ph-magnifying-glass"></i>
                            <input type="text" class="form-control w-full" placeholder="Search Patient by Name or ID" style="padding-left: 36px;" required>
                        </div>
                    </div>
                    <div class="form-group mb-0">
                        <label class="form-label">Select Department</label>
                        <select class="form-control" required>
                            <option>Cardiology</option>
                            <option>Orthopedics</option>
                            <option selected>General Medicine</option>
                            <option>Pediatrics</option>
                        </select>
                    </div>
                </div>

                <div class="form-group mb-6">
                    <label class="form-label">Consulting Doctor</label>
                    <div class="grid grid-cols-3">
                        <div class="card p-3" style="padding: 12px; cursor: pointer; border-color: var(--clr-primary); background-color: var(--clr-primary-light);">
                            <div class="flex items-center gap-3">
                                <span class="status-indicator status-available"></span>
                                <div>
                                    <div class="font-semibold text-sm">Dr. Amit Sharma</div>
                                    <div class="text-xs text-muted">General Med</div>
                                </div>
                            </div>
                        </div>
                        <div class="card p-3" style="padding: 12px; cursor: pointer; opacity: 0.7;">
                            <div class="flex items-center gap-3">
                                <span class="status-indicator status-busy"></span>
                                <div>
                                    <div class="font-semibold text-sm">Dr. Sneha Patel</div>
                                    <div class="text-xs text-muted">Cardiology</div>
                                </div>
                            </div>
                        </div>
                         <div class="card p-3" style="padding: 12px; cursor: pointer;">
                            <div class="flex items-center gap-3">
                                <span class="status-indicator status-available"></span>
                                <div>
                                    <div class="font-semibold text-sm">Dr. R. K. Iyer</div>
                                    <div class="text-xs text-muted">Orthopedics</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-6 mb-6">
                    <div class="form-group mb-0">
                        <label class="form-label">Appointment Date</label>
                        <input type="date" class="form-control" required>
                    </div>
                    <div class="form-group mb-0">
                        <label class="form-label">Time Slot</label>
                        <select class="form-control" required>
                            <option>09:00 AM - 09:30 AM</option>
                            <option>09:30 AM - 10:00 AM</option>
                            <option selected>10:00 AM - 10:30 AM</option>
                            <option>10:30 AM - 11:00 AM</option>
                            <option disabled>11:00 AM - 11:30 AM (Booked)</option>
                        </select>
                    </div>
                </div>

                <div class="form-group mb-8">
                    <label class="form-label">Reason for Visit / Notes</label>
                    <textarea class="form-control" placeholder="E.g., Follow up for high blood pressure..."></textarea>
                </div>

                <div class="flex justify-end gap-3">
                    <button type="button" class="btn btn-secondary">Clear</button>
                    <button type="submit" class="btn btn-primary">Confirm Booking</button>
                </div>
            </form>
        </div>
    `;
}
