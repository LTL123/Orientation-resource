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
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHY6iSz9C1#/preview?fileId=i.1970326833001865.1688856590657934_f.755136553ALS7',
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
    }
];

// 周计划数据
const G1_9Schedule = [
    {
        day: 'Monday Aug 18',
        events: [
            { time: '8:30-8:45', activity: 'Arrival' },
            { time: '8:45-9:15', activity: 'Touchbase - Guess who Baby photo', presenter: 'Rose' },
            { time: '9:15-10:45', activity: 'Behaviour Policy & Faculty Handbook', presenters: ['Jie', 'Jie', 'Rose'], location: '3-503' },
            { time: '10:45-11:15', activity: 'Tea Break' },
            { time: '11:15-12:15', activity: 'Safeguard Training', presenter: 'Rose', location: '3-503' },
            { time: '12:15-13:15', activity: 'Lunch' },
            { time: '13:15-14:15', activity: 'Social Emotional Learning & Second Step', presenter: 'Rose', location: '3-503' },
            { time: '14:15-14:30', activity: 'Break' },
            { time: '14:30-16:00', activity: 'Lesson Planning', location: '3-503' },
            { time: '16:30-17:00', activity: 'Divisional Checkout' }
        ]
    },
    {
        day: 'Tuesday Aug 19',
        events: [
            { time: '8:30-8:45', activity: 'Arrival' },
            { time: '8:45-9:15', activity: 'Touchbase', presenter: 'Michelle Liang' },
            { time: '9:15-10:45', activity: 'Student Support (Learning, Language, Counselling MTSS)', presenter: 'Rose', location: '3-503' },
            { time: '10:45-11:15', activity: 'Tea Break' },
            { time: '11:15-12:15', activity: 'Sign up Tech Workshops', location: 'Rooms 2-201, 2-202, 2-203, 2-204' },
            { time: '12:15-13:15', activity: 'Lunch' },
            { time: '13:15-14:45', activity: 'Language Policy in practice', presenter: 'Michelle Ip', location: '3-503' },
            { time: '14:45-15:00', activity: 'Break' },
            { time: '15:00-16:30', activity: 'First Aid Training (External Provider)', presenters: ['external provider, Michelle Liang', 'Rachel'], location: 'TBD' },
            { time: '16:30-17:00', activity: 'Divisional Checkout' }
        ]
    },
    {
        day: 'Wednesday Aug 20',
        events: [
            { time: '8:30-8:45', activity: 'Arrival' },
            { time: '8:45-9:15', activity: 'Touchbase', presenter: 'Vera' },
            { time: '9:15-10:45', activity: 'One Planet Foundation(TBD)', presenters: ['Ted', 'Chundan'], location: '3-503' },
            { time: '10:45-11:15', activity: 'Tea Break' },
            { time: '10:30-11:30', activity: 'Mingwan Parents in Focus: Demands, Expectations, and Collaboration Pathways', presenter: 'Michelle Liang', location: '3-503' },
            { time: '11:30-12:15', activity: 'Sign up Tech Workshops', location: 'Rooms 2-201, 2-202, 2-203, 2-204' },
            { time: '12:15-13:15', activity: 'Lunch' },
            { time: '13:15-17:00', activity: 'Activity and Project Planning', presenters: ['Teachers'] }
        ]
    },
    {
        day: 'Thursday Aug 21',
        events: [
            { time: '8:30-8:45', activity: 'Arrival' },
            { time: '8:45-9:15', activity: 'Touchbase' },
            { time: '9:15-10:15', activity: 'Adaptive Schools' },
            { time: '10:15-10:30', activity: 'Tea Break' },
            { time: '10:30-12:15', activity: 'Adaptive Schools' },
            { time: '12:15-13:15', activity: 'Lunch' },
            { time: '13:15-17:00', activity: 'Adaptive Schools' }
        ]
    },
    {
        day: 'Friday Aug 22',
        events: [
            { time: '8:30-8:45', activity: 'Arrival' },
            { time: '8:45-9:15', activity: 'Touchbase' },
            { time: '9:15-10:15', activity: 'Adaptive Schools' },
            { time: '10:15-10:30', activity: 'Tea Break' },
            { time: '10:30-12:15', activity: 'Adaptive Schools' },
            { time: '12:15-13:15', activity: 'Lunch' },
            { time: '13:15-17:00', activity: 'Adaptive Schools' }
        ]
    }
];

const kindergartenSchedule = [
    {
        day: 'Monday Aug 18',
        events: [
            { time: '8:30-8:45', activity: 'Arrival' },
            { time: '8:45-9:15', activity: 'Guess who Baby photos', presenter: 'Rose' },
            { time: '9:15-10:45', activity: 'Behaviour Policy & Faculty Handbook', presenters: ['Jie', 'Jie', 'Rose'], location: '3-503' },
            { time: '10:45-11:15', activity: 'Tea Break' },
            { time: '11:15-12:15', activity: 'Safeguard Training', presenter: 'Rose', location: '3-503' },
            { time: '12:15-13:15', activity: 'Lunch' },
            { time: '13:15-14:15', activity: 'Social Emotional Learning & Second Step', presenter: 'Rose', location: '3-503' },
            { time: '14:15-14:30', activity: 'Break' },
            { time: '14:30-16:00', activity: 'Early English Literacy Program K-G3', location: '3-503' },
            { time: '16:30-17:00', activity: 'Divisional Checkout' }
        ]
    },
    {
        day: 'Tuesday Aug 19',
        events: [
            { time: '8:30-8:45', activity: 'Arrival' },
            { time: '8:45-9:15', activity: 'Touchbase', presenter: 'Michelle Liang' },
            { time: '9:15-10:45', activity: 'Student Support (Learning, Language, Counselling MTSS)', presenter: 'Rose', location: '3-503' },
            { time: '10:45-11:15', activity: 'Tea Break' },
            { time: '11:15-12:15', activity: 'Sign up Tech Workshops', location: 'Rooms 2-201, 2-202, 2-203, 2-204' },
            { time: '12:15-13:15', activity: 'Lunch' },
            { time: '13:15-14:45', activity: 'Language Policy in practice', presenter: 'Michelle Ip', location: '3-503' },
            { time: '14:45-15:00', activity: 'Break' },
            { time: '15:00-16:30', activity: 'First Aid Training (External Provider)', presenters: ['external provider, Michelle Liang', 'Rachel'], location: 'TBD' },
            { time: '16:30-17:00', activity: 'Divisional Checkout' }
        ]
    },
    {
        day: 'Wednesday Aug 20',
        events: [
            { time: '8:30-8:45', activity: 'Arrival' },
            { time: '8:45-9:15', activity: 'Touchbase', presenter: 'Vera' },
            { time: '9:15-10:45', activity: 'One Planet Foundation(TBD)', presenters: ['Ted', 'Chundan'], location: '3-503' },
            { time: '10:45-11:15', activity: 'Tea Break' },
            { time: '10:30-11:30', activity: 'Mingwan Parents in Focus: Demands, Expectations, and Collaboration Pathways', presenter: 'Michelle Liang', location: '3-503' },
            { time: '11:30-12:15', activity: 'Sign up Tech Workshops', location: 'Rooms 2-201, 2-202, 2-203, 2-204' },
            { time: '12:15-13:15', activity: 'Lunch' },
            { time: '13:15-14:15', activity: 'Additional Parent Communication Needs', presenters: ['Jie'], location: '3-501A' },
            { time: '14:15-15:30', activity: 'Disease, Safety, and Accident Report Procedure', presenters: ['Jie', 'Nurse'] },
            { time: '15:30-17:00', activity: 'Lesson Planning / Classroom Set-up', presenters: ['Teachers'] }
        ]
    },
    {
        day: 'Thursday Aug 21',
        events: [
            { time: '8:30-8:45', activity: 'Arrival' },
            { time: '8:45-9:15', activity: 'Touchbase' },
            { time: '9:15-10:15', activity: 'Adaptive Schools' },
            { time: '10:15-10:30', activity: 'Tea Break' },
            { time: '10:30-12:15', activity: 'Adaptive Schools' },
            { time: '12:15-13:15', activity: 'Lunch' },
            { time: '13:15-17:00', activity: 'Adaptive Schools' }
        ]
    },
    {
        day: 'Friday Aug 22',
        events: [
            { time: '8:30-8:45', activity: 'Arrival' },
            { time: '8:45-9:15', activity: 'Touchbase' },
            { time: '9:15-10:15', activity: 'Adaptive Schools' },
            { time: '10:15-10:30', activity: 'Tea Break' },
            { time: '10:30-12:15', activity: 'Adaptive Schools' },
            { time: '12:15-13:15', activity: 'Lunch' },
            { time: '13:15-17:00', activity: 'Adaptive Schools' }
        ]
    }
];

// 主要功能函数
function showTab(tabName) {
    // 隐藏所有标签内容
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // 移除所有导航标签的活动状态
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // 显示选中的标签
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

function showSchedule(scheduleType) {
    // 隐藏所有时间表内容
    document.querySelectorAll('.schedule-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // 移除所有时间表标签的活动状态
    document.querySelectorAll('.schedule-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // 显示选中的时间表
    if (scheduleType === 'G1-9 Schedule') {
        document.getElementById('G1_9Schedule').classList.add('active');
    } else {
        document.getElementById('kindergartenSchedule').classList.add('active');
    }
    event.target.classList.add('active');
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

// 填充时间表
function populateSchedules() {
    if (typeof G1_9Schedule !== 'undefined' && Array.isArray(G1_9Schedule)) {
        populateScheduleContent('G1_9', G1_9Schedule);
    }
    if (typeof kindergartenSchedule !== 'undefined' && Array.isArray(kindergartenSchedule)) {
        populateScheduleContent('kindergarten', kindergartenSchedule);
    }
}

function populateScheduleContent(scheduleType, scheduleData) {
    const containerId = scheduleType === 'G1_9' ? 'G1_9Schedule' : 'kindergartenSchedule';
    const container = document.getElementById(containerId);
    if (!container || !scheduleData || !Array.isArray(scheduleData)) {
        console.log(`Schedule data not available for ${containerId}`);
        return;
    }
    
    let html = '<div class="schedule-grid">';
    
    scheduleData.forEach(dayData => {
        html += `
            <div class="day-block">
                <div class="day-header">${dayData.day}</div>
                <div class="events-timeline">
        `;
        
        dayData.events.forEach(event => {
            const presenters = event.presenters ? event.presenters.join(', ') : (event.presenter || '');
            const location = event.location || '';
            
            // 确定特殊样式的块类型
            let blockClass = '';
            const activity = event.activity.toLowerCase();
            if (activity.includes('break') || activity.includes('lunch') || activity.includes('tea')) {
                blockClass = 'break';
            } else if (activity.includes('safeguard') || activity.includes('first aid') || activity.includes('adaptive schools')) {
                blockClass = 'important';
            }
            
            html += `
                <div class="time-block ${blockClass}">
                    <div class="time-slot">${event.time}</div>
                    <div class="activity-content">
                        <div class="activity-title">${event.activity}</div>
                        <div class="activity-details">
                            ${presenters ? `<span class="presenter"><i class="fas fa-user"></i>${presenters}</span>` : ''}
                            ${location ? `<span class="location"><i class="fas fa-map-marker-alt"></i>${location}</span>` : ''}
                        </div>
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
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
    populateSchedules();
    updateLastUpdated();
});

