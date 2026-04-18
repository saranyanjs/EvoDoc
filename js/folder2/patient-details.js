// js/pages/patient-details.js

const mockPatients = {
    'p-9824': {
        id: 'P-9824', name: 'Rahul Kumar', age: 45, gender: 'Male', phone: '+91 99887 76655', status: 'Completed', statusClass: 'badge-success',
        diagnoses: 'Hypertension', complaint: 'Routine follow up for high blood pressure.', notes: 'BP slightly elevated today. Increase dosage of Amlodipine.', drugs: [{name: 'Amlodipine', dosage: '5mg', freq: '1-0-0', dur: '30 Days'}],
        vitals: { temp: 98.6, bp: '140/90', pulse: 72, spo2: 99 }, allergies: ['None']
    },
    'p-9825': {
        id: 'P-9825', name: 'Sneha M.', age: 28, gender: 'Female', phone: '+91 91234 56789', status: 'Scheduled', statusClass: 'badge-warning',
        diagnoses: 'Viral Infection', complaint: 'Mild fever and body ache.', notes: 'Advised rest and hydration.', drugs: [{name: 'Paracetamol', dosage: '500mg', freq: '1-0-1', dur: '3 Days'}],
        vitals: { temp: 100.2, bp: '120/80', pulse: 90, spo2: 98 }, allergies: ['Penicillin Allergy']
    },
    'p-9826': {
        id: 'P-9826', name: 'Vikas Jain', age: 32, gender: 'Male', phone: '+91 98765 43210', status: 'Active Patient', statusClass: 'badge-success',
        diagnoses: 'General Checkup', complaint: 'Annual physical exam.', notes: 'All vitals normal. Continue healthy lifestyle.', drugs: [{name: 'Multivitamins', dosage: '1 tab', freq: '1-0-0', dur: '30 Days'}],
        vitals: { temp: 98.4, bp: '118/78', pulse: 75, spo2: 99 }, allergies: ['Dust']
    },
    'p-9827': {
        id: 'P-9827', name: 'Arjun Kapoor', age: 50, gender: 'Male', phone: '+91 99112 23344', status: 'Cancelled', statusClass: 'badge-danger',
        diagnoses: 'Diabetes', complaint: 'Sugar levels check.', notes: 'Patient did not show up.', drugs: [],
        vitals: { temp: '--', bp: '--/--', pulse: '--', spo2: '--' }, allergies: ['Sulfa Drugs']
    },
    'p-9828': {
        id: 'P-9828', name: 'Amit Trivedi', age: 39, gender: 'Male', phone: '+91 98888 77777', status: 'Scheduled', statusClass: 'badge-warning',
        diagnoses: 'Routine Checkup', complaint: 'Back pain.', notes: 'Advise physiotherapy.', drugs: [{name: 'Ibuprofen', dosage: '400mg', freq: '0-1-0', dur: '5 Days'}],
        vitals: { temp: 98.5, bp: '125/82', pulse: 80, spo2: 98 }, allergies: ['None']
    }
};

export function renderPatientDetails(queryParams = {}) {
    const id = queryParams.id ? queryParams.id.toLowerCase() : 'p-9826';
    const patient = mockPatients[id] || mockPatients['p-9826'];

    return `
        <div class="page-container">
            <div class="flex justify-between items-center mb-6">
                <div class="flex items-center gap-4">
                    <button class="btn-icon" onclick="window.history.back()">
                        <i class="ph ph-arrow-left" style="font-size: 24px;"></i>
                    </button>
                    <div>
                        <h2 class="font-semibold flex items-center gap-2" style="font-size: 24px;">
                            ${patient.name}
                            <span class="badge ${patient.statusClass}">${patient.status}</span>
                        </h2>
                        <p class="text-muted text-sm mt-1">ID: ${patient.id} • ${patient.age} yrs • ${patient.gender} • ${patient.phone}</p>
                    </div>
                </div>
                <button class="btn btn-primary">
                    <i class="ph ph-floppy-disk"></i> Save Updates
                </button>
            </div>

            <div class="tabs">
                <div class="tab-btn active cursor-pointer">Medical Summary</div>
                <div class="tab-btn cursor-pointer">Consultation Notes</div>
                <div class="tab-btn cursor-pointer">Past Visits</div>
                <div class="tab-btn cursor-pointer">Lab Results</div>
            </div>

            <div class="grid grid-cols-3 gap-6">
                <!-- Left Column -->
                <div class="flex-col gap-6" style="grid-column: span 2;">
                    <div class="card">
                        <div class="card-header">
                            <span class="card-title">Current Consultation</span>
                            <span class="text-sm text-muted">Today Options</span>
                        </div>
                        <div class="form-group mb-4">
                            <label class="form-label">Symptoms & Chief Complaint</label>
                            <textarea class="form-control" style="min-height: 80px;">${patient.complaint}</textarea>
                        </div>
                        <div class="form-group mb-4">
                            <label class="form-label">Diagnosis</label>
                            <input type="text" class="form-control" value="${patient.diagnoses}">
                        </div>
                        <div class="form-group mb-0">
                            <label class="form-label">Clinical Notes & Treatment Plan</label>
                            <textarea class="form-control">${patient.notes}</textarea>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <span class="card-title">Prescribe Medication</span>
                            <button class="btn btn-secondary text-sm" style="padding: 6px 12px;"><i class="ph ph-plus"></i> Add</button>
                        </div>
                        <div class="table-container">
                            <table class="table relative" style="font-size: 13px;">
                                <thead>
                                    <tr>
                                        <th>Drug Name</th>
                                        <th>Dosage</th>
                                        <th>Frequency</th>
                                        <th>Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${patient.drugs.map(drug => `
                                    <tr>
                                        <td><input type="text" class="form-control" value="${drug.name}" style="padding: 4px 8px;"></td>
                                        <td><input type="text" class="form-control" value="${drug.dosage}" style="padding: 4px 8px;"></td>
                                        <td><select class="form-control" style="padding: 4px 8px;"><option selected>${drug.freq}</option><option>1-1-1</option></select></td>
                                        <td><input type="text" class="form-control" value="${drug.dur}" style="padding: 4px 8px;"></td>
                                    </tr>
                                    `).join('')}
                                    <tr>
                                        <td><input type="text" placeholder="Search drug..." class="form-control" style="padding: 4px 8px;"></td>
                                        <td><input type="text" class="form-control" style="padding: 4px 8px;"></td>
                                        <td><select class="form-control" style="padding: 4px 8px;"><option>Options</option></select></td>
                                        <td><input type="text" class="form-control" style="padding: 4px 8px;"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- Right Column (Sidebar) -->
                <div class="flex-col gap-6">
                    <div class="card" style="background-color: var(--clr-bg-app); border: none;">
                        <h3 class="font-semibold mb-4 text-sm uppercase tracking-wider text-muted">Vitals Overview</h3>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="bg-white p-4 rounded-md border border-border" style="background: white; padding: 16px; border-radius: var(--radius-sm); border: 1px solid var(--clr-border);">
                                <div class="text-xs text-muted mb-1 flex items-center gap-1"><i class="ph ph-thermometer text-danger" style="color: var(--clr-danger);"></i> Temp</div>
                                <div class="font-bold text-lg">${patient.vitals.temp} <span class="text-xs font-normal text-muted">°F</span></div>
                            </div>
                            <div class="bg-white p-4 rounded-md border border-border" style="background: white; padding: 16px; border-radius: var(--radius-sm); border: 1px solid var(--clr-border);">
                                <div class="text-xs text-muted mb-1 flex items-center gap-1"><i class="ph ph-heartbeat text-danger" style="color: var(--clr-danger);"></i> BP</div>
                                <div class="font-bold text-lg">${patient.vitals.bp} <span class="text-xs font-normal text-muted">mmHg</span></div>
                            </div>
                            <div class="bg-white p-4 rounded-md border border-border" style="background: white; padding: 16px; border-radius: var(--radius-sm); border: 1px solid var(--clr-border);">
                                <div class="text-xs text-muted mb-1 flex items-center gap-1"><i class="ph ph-activity text-primary" style="color: var(--clr-primary);"></i> Pulse</div>
                                <div class="font-bold text-lg">${patient.vitals.pulse} <span class="text-xs font-normal text-muted">bpm</span></div>
                            </div>
                            <div class="bg-white p-4 rounded-md border border-border" style="background: white; padding: 16px; border-radius: var(--radius-sm); border: 1px solid var(--clr-border);">
                                <div class="text-xs text-muted mb-1 flex items-center gap-1"><i class="ph ph-drop text-primary" style="color: var(--clr-primary);"></i> SpO2</div>
                                <div class="font-bold text-lg">${patient.vitals.spo2} <span class="text-xs font-normal text-muted">%</span></div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header pb-2" style="border: none; padding-bottom: 8px;">
                            <span class="card-title text-sm uppercase text-muted">Allergies & Alerts</span>
                        </div>
                        <div class="flex flex-wrap gap-2">
                            ${patient.allergies.map(alg => `
                                <span class="badge ${alg !== 'None' ? 'badge-danger' : 'badge-success'}">${alg}</span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
