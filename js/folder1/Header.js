// js/components/Header.js

export function renderHeader() {
    return `
        <div class="header-left">
            <h1 class="page-title" id="page-title">Dashboard</h1>
        </div>
        <div class="header-right">
            <div class="search-bar">
                <i class="ph ph-magnifying-glass"></i>
                <input type="text" placeholder="Search patients, records...">
            </div>
            <button class="btn-icon">
                <i class="ph ph-bell" style="font-size: 20px;"></i>
            </button>
            <div class="user-profile">
                <div class="user-info text-right">
                    <span class="user-name">Anita Sharma</span>
                    <span class="user-role">Receptionist</span>
                </div>
                <div class="avatar">AS</div>
            </div>
        </div>
    `;
}
