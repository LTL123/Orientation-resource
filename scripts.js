// 文件数据
let files = [
    {
        id: 4,
        name: '2025 HR Induction for New Staffs',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHY6iSz9C1#/preview?fileId=i.1970326833001865.1688856590657934_f.755136576LqNS',
        category: 'hr_admin',
        description: 'Comprehensive induction program materials for new staff members joining in 2025.',
        icon: 'fas fa-user-plus'
    },
    {
        id: 5,
        name: 'Campus Service',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHY6iSz9C1#/preview?fileId=i.1970326833001865.1688856590657934_f.755136553ALS7',
        category: 'campus',
        description: 'Information about various campus services available to staff and students.',
        icon: 'fas fa-building'
    },
    {
        id: 6,
        name: 'CBL Content',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHY6iSz9C1#/?folderId=i.1970326833001865.1688856590657934_d.7550532856PNg',
        category: 'teaching',
        description: 'Complete folder containing all Competency-Based Learning content and resources.',
        icon: 'fas fa-folder'
    },
    {
        id: 3,
        name: 'Competency Rubrics and Indicator',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHY6iSz9C1#/preview?fileId=i.1970326833001865.1688856590657934_f.755053728fgnx',
        category: 'teaching',
        description: 'Assessment rubrics and competency indicators for educational evaluation.',
        icon: 'fas fa-clipboard-check'
    },
    {
        id: 16,
        name: 'English literacy training',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHY6iSz9C1#/?folderId=i.1970326833001865.1688856590657934_d.755498261fPBq',
        category: 'teaching',
        description: 'English literacy training materials.',
        icon: 'fas fa-book-reader'
    },
    {
        id: 1,
        name: 'Introduction and Guide for Individual Income Tax Annual Settlement',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHY6iSz9C1#/preview?fileId=i.1970326833001865.1688856590657934_f.755137500pBzn',
        category: 'hr_admin',
        description: 'Comprehensive guide for annual tax settlement procedures and requirements.',
        icon: 'fas fa-calculator'
    },
    {
        id: 14,
        name: 'Mingwan Behavior Policy',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHY6iSz9C1#/preview?fileId=i.1970326833001865.1688856590657934_f.755477699kCh4',
        category: 'policies',
        description: 'Official behavior policy and guidelines for maintaining positive learning environment at Mingwan.',
        icon: 'fas fa-handshake'
    },
    {
        id: 13,
        name: 'Mingwan Safeguarding',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHY6iSz9C1#/preview?fileId=i.1970326833001865.1688856590657934_f.755480092HQcy',
        category: 'policies',
        description: 'Comprehensive safeguarding policies and procedures to ensure student and staff safety at Mingwan.',
        icon: 'fas fa-shield-alt'
    },
    {
        id: 7,
        name: 'Non-Academic Staff Contact Information',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHY6iSz9C1#/preview?fileId=i.1970326833001865.1688856590657934_f.7549979218uaJ',
        category: 'campus',
        description: 'Contact information and details for non-academic staff members across campus services.',
        icon: 'fas fa-address-book'
    },
    {
        id: 9,
        name: 'Physical Environment Guidelines',
        url: 'https://doc.weixin.qq.com/doc/w3_AZEAQwZ-AKECNSFwEqJqWS26L4J6K?scode=AIkA9Qf4AHYUAGz6wMAZEAQwZ-AKE&folder_share_code=AIkA9Qf4AHY6iSz9C1',
        category: 'campus',
        description: 'Guidelines for maintaining and organizing the physical learning environment.',
        icon: 'fas fa-map-marked-alt'
    },
    {
        id: 18,
        name: 'Policy - Language Model',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHY6iSz9C1#/?folderId=i.1970326833001865.1688856590657934_d.7555723163aR1',
        category: 'policies',
        description: 'Policy on the use of language models.',
        icon: 'fas fa-robot'
    },
    {
        id: 10,
        name: 'Professional Learning Policy',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHY6iSz9C1#/preview?fileId=i.1970326833001865.1688856590657934_f.755163566020X',
        category: 'policies',
        description: 'Comprehensive policy document outlining professional learning requirements and guidelines for staff development.',
        icon: 'fas fa-graduation-cap'
    },
    {
        id: 11,
        name: 'Science of Learning',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHYPxngRov',
        category: 'teaching',
        description: 'Resources and materials related to the Science of Learning.',
        icon: 'fas fa-brain'
    },
    {
        id: 15,
        name: 'Second Step',
        url: 'https://www.secondstep.org/',
        category: 'teaching',
        description: 'Digital curriculum for social-emotional learning, helping students develop human skills for academic achievement and personal growth.',
        icon: 'fas fa-heart'
    },
    {
        id: 17,
        name: 'student support team',
        url: 'https://doc.weixin.qq.com/slide/p3_AY4AqQYpAJESG1AAdIeArRIOSkvY0?scode=AIkA9Qf4AHYHX2zyiQAY4AqQYpAJE&folder_share_code=AIkA9Qf4AHY6iSz9C1',
        category: 'campus',
        description: 'Information about the student support team.',
        icon: 'fas fa-users'
    },
    {
        id: 12,
        name: 'The First Week of School',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHY6iSz9C1#/?folderId=i.1970326833001865.1688856590657934_d.755219635qEib',
        category: 'campus',
        description: 'Resources for the first week of school.',
        icon: 'fas fa-school'
    },
    {
        id: 2,
        name: 'Understanding CBL and its place at Mingwan',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHY6iSz9C1#/preview?fileId=i.1970326833001865.1688856590657934_f.755043557amSD',
        category: 'teaching',
        description: 'Presentation deck explaining Competency-Based Learning (CBL) implementation at Mingwan.',
        icon: 'fas fa-brain'
    },
    {
        id: 8,
        name: 'Unit Planner Cheatsheet',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHY6iSz9C1#/preview?fileId=i.1970326833001865.1688856590657934_f.755043564dG0E',
        category: 'teaching',
        description: 'Quick reference guide for creating and organizing unit plans effectively.',
        icon: 'fas fa-list-check'
    },
    {
        id: 19,
        name: 'THE ADAPTIVE SCHOOL Strategies & Moves for Facilitating Groups',
        url: 'https://www.thinkingcollaborative.com/_files/ugd/6a5cc9_ed28b325ab6a4362b834f4bbf295d408.pdf',
        category: 'teaching',
        description: 'Strategies and moves for facilitating groups.',
        icon: 'fas fa-users-gear'
    },
    {
        id: 20,
        name: 'Reimbursement Guideline',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHYVhkDx0G',
        category: 'hr_admin',
        description: 'Guideline for reimbursement',
        icon: 'fas fa-file-invoice-dollar'
    },
    {
        id: 21,
        name: '中方教职工补充医疗保险介绍',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHY6iSz9C1#/preview?fileId=i.1970326833001865.1688856590657934_f.756105706Nisj',
        category: 'hr_admin',
        description: '中方教职工补充医疗保险介绍',
        icon: 'fas fa-file-medical'
    },
     {
        id: 22,
        name: 'Parents Handbook',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHYUyFGk06',
        category: 'policies',
        description: 'Parents Handbook',
        icon: 'fas fa-file-medical'
    },
    {
        id: 23,
        name: 'School Calendar',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHY453VqPK',
        category: 'campus',
        description: 'Official school calendar with important dates and events',
        icon: 'fas fa-calendar-alt'
    },
    {
        id: 24,
        name: 'Responsibilities and Reporting Procedures',
        url: 'https://doc.weixin.qq.com/pdf/d3_AUQAswbBAH8CNPzLmAgkDSVG2nB8y?scode=AIkA9Qf4AHY02OAoj0ARcANgbLAGc',
        category: 'policies',
        description: 'Guidelines on staff responsibilities and reporting procedures',
        icon: 'fas fa-clipboard-list'
    },
    {
        id: 25,
        name: 'Student List',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHYCLEOAx4',
        category: 'campus',
        description: 'Complete list of students enrolled in the school',
        icon: 'fas fa-users'
    },
    {
        id: 26,
        name: 'Timetable and Duties',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHYWihYSJB',
        category: 'campus',
        description: 'Class schedules and duty assignments for staff',
        icon: 'fas fa-calendar-alt'
    },
    {
        id: 27,
        name: 'Teacher Supervision Roster (Duties)',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHYWihYSJB#/preview?fileId=s.1970326833001865.756464971aYr_f.7568100401ldr',
        category: 'campus',
        description: 'Teacher supervision schedule and duty roster assignments',
        icon: 'fas fa-clipboard-check'
    }
];

// 周计划数据




// 主要功能函数
function showTab(tabName) {
    // Since we only have resources tab now, ensure it stays active
    const resourcesTab = document.getElementById('resources');
    if (resourcesTab) {
        resourcesTab.classList.add('active');
    }
    
    // Ensure the resources tab button stays active
    const navTab = document.querySelector('.nav-tab');
    if (navTab) {
        navTab.classList.add('active');
    }
}



// 资源过滤和搜索
let currentSearchTerm = '';
let currentCategory = 'all';

function searchResources(searchTerm) {
    currentSearchTerm = searchTerm.toLowerCase();
    applyFilters();
}

function filterResources(category) {
    // 移除所有过滤按钮的活动状态
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // 为点击的按钮添加活动状态
    event.target.classList.add('active');
    
    currentCategory = category;
    applyFilters();
}

function applyFilters() {
    const grid = document.getElementById('resourcesGrid');
    
    // 根据类别和搜索词过滤文件
    let filteredFiles = currentCategory === 'all' ? files : files.filter(file => file.category === currentCategory);
    
    if (currentSearchTerm) {
        filteredFiles = filteredFiles.filter(file => 
            file.name.toLowerCase().includes(currentSearchTerm) || 
            file.description.toLowerCase().includes(currentSearchTerm)
        );
    }
    
    if (filteredFiles.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No resources found</h3>
                <p>Try adjusting your search terms or category filter.</p>
            </div>
        `;
        return;
    }
    
    // 清空并重新填充网格
    grid.innerHTML = '';
    filteredFiles.forEach(file => {
        const card = document.createElement('div');
        card.className = 'resource-card';
        card.dataset.category = file.category;
        
        card.innerHTML = `
            <div class="resource-header">
                <i class="${file.icon} resource-icon"></i>
                <div class="resource-title">${file.name}</div>
                <span class="resource-category">${file.category}</span>
            </div>
            <div class="resource-description">${file.description}</div>
            <a href="${file.url}" target="_blank" class="resource-link">
                <i class="fas fa-external-link-alt"></i> Open Resource
            </a>
        `;
        
        grid.appendChild(card);
    });
}

// 填充资源
function populateResources() {
    const grid = document.getElementById('resourcesGrid');
    
    if (!files || !Array.isArray(files)) {
        grid.innerHTML = '<div class="no-results"><i class="fas fa-exclamation-circle"></i><h3>No resources available</h3><p>Resources will be loaded shortly.</p></div>';
        return;
    }
    
    grid.innerHTML = '';
    
    files.forEach(file => {
        const card = document.createElement('div');
        card.className = 'resource-card';
        card.dataset.category = file.category;
        
        card.innerHTML = `
            <div class="resource-header">
                <i class="${file.icon} resource-icon"></i>
                <div class="resource-title">${file.name}</div>
                <span class="resource-category">${file.category}</span>
            </div>
            <div class="resource-description">${file.description}</div>
            <a href="${file.url}" target="_blank" class="resource-link">
                <i class="fas fa-external-link-alt"></i> Open Resource
            </a>
        `;
        
        grid.appendChild(card);
    });
}





// 更新最后更新日期
function updateLastUpdated() {
    const lastUpdateElement = document.getElementById('lastUpdateDate');
    if (lastUpdateElement) {
        lastUpdateElement.textContent = 'August 15, 2024';
    }
}

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    // 使用数据初始化
    populateResources();
    updateLastUpdated();
});

