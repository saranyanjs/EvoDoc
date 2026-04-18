// js/pages/patients.js

export function renderPatients() {
    return `
        <div class="page-container">
            <div class="flex justify-between items-center mb-6">
                <div>
                    <h2 class="font-semibold" style="font-size: 24px;">New Patient Intake</h2>
                    <p class="text-muted text-sm mt-2">Enter the details to register a new patient in the system.</p>
                </div>
                <button class="btn btn-secondary">
                    <i class="ph ph-magnifying-glass"></i> Find Existing Patient
                </button>
            </div>

            <form onsubmit="event.preventDefault(); alert('Saved Patient Data!');">
                <div class="card mb-6">
                    <div class="card-header">
                        <span class="card-title">Personal Information</span>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="form-group">
                            <label class="form-label">Full Name</label>
                            <input type="text" class="form-control" placeholder="e.g. Priya Sharma" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Date of Birth</label>
                            <input type="date" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Gender</label>
                            <select class="form-control" required>
                                <option value="" disabled selected>Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Phone Number</label>
                            <input type="tel" class="form-control" placeholder="+91 99999 99999" required>
                        </div>
                    </div>
                </div>

                <div class="card mb-6">
                    <div class="card-header">
                        <span class="card-title">Medical Information</span>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="form-group">
                            <label class="form-label">Blood Group</label>
                            <select class="form-control">
                                <option>A+</option><option>A-</option>
                                <option>B+</option><option>B-</option>
                                <option>O+</option><option>O-</option>
                                <option>AB+</option><option>AB-</option>
                                <option selected>Unknown</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Known Allergies</label>
                            <input type="text" class="form-control" placeholder="e.g. Penicillin, Peanuts">
                        </div>
                        <div class="form-group" style="grid-column: span 2;">
                            <label class="form-label">Pre-existing Conditions & Notes</label>
                            <textarea class="form-control" placeholder="Any chronic illnesses, regular medications, etc."></textarea>
                        </div>
                    </div>
                </div>
                
                <div class="card mb-6">
                    <div class="card-header">
                        <span class="card-title">Emergency Contact</span>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="form-group">
                            <label class="form-label">Contact Name</label>
                            <input type="text" class="form-control" placeholder="Name">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Contact Phone</label>
                            <input type="tel" class="form-control" placeholder="Phone Number">
                        </div>
                    </div>
                </div>

                <div class="flex justify-end gap-3 mb-8">
                    <button type="button" class="btn btn-secondary">Cancel</button>
                    <button type="submit" class="btn btn-primary">Save Patient Details</button>
                </div>
            </form>
        </div>
    `;
}
