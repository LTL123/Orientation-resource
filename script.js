// 文件数据
let files = [
    {
        id: 1,
        name: 'Introduction and Guide for Individual Income Tax Annual Settlement',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHY6iSz9C1#/preview?fileId=i.1970326833001865.1688856590657934_f.7549979218uaJ',
        category: 'tax',
        description: 'Comprehensive guide for annual tax settlement procedures and requirements.',
        icon: 'fas fa-calculator'
    },
    {
        id: 2,
        name: 'Understanding CBL and its place at Mingwan',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHY6iSz9C1#/preview?fileId=i.1970326833001865.1688856590657934_f.755043557amSD',
        category: 'curriculum',
        description: 'Presentation deck explaining Competency-Based Learning (CBL) implementation at Mingwan.',
        icon: 'fas fa-brain'
    },
    {
        id: 3,
        name: 'Competency Rubrics and Indicator',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHY6iSz9C1#/preview?fileId=i.1970326833001865.1688856590657934_f.754822676RCCk',
        category: 'curriculum',
        description: 'Assessment rubrics and competency indicators for educational evaluation.',
        icon: 'fas fa-clipboard-check'
    },
    {
        id: 4,
        name: '2025 HR Induction for New Staffs',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHY6iSz9C1#/preview?fileId=i.1970326833001865.1688856590657934_f.754822676RCCk',
        category: 'hr',
        description: 'Comprehensive induction program materials for new staff members joining in 2025.',
        icon: 'fas fa-user-plus'
    },
    {
        id: 5,
        name: 'Campus Service',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHY6iSz9C1#/preview?fileId=i.1970326833001865.1688856590657934_f.755049574hqmR',
        category: 'campus',
        description: 'Information about various campus services available to staff and students.',
        icon: 'fas fa-building'
    },
    {
        id: 6,
        name: 'CBL Content',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHY6iSz9C1#/?folderId=i.1970326833001865.1688856590657934_d.7550532856PNg',
        category: 'curriculum',
        description: 'Complete folder containing all Competency-Based Learning content and resources.',
        icon: 'fas fa-folder'
    },
    {
        id: 7,
        name: 'Non-Academic Staff Contact Information',
        url: 'https://doc.weixin.qq.com/doc/w3_AZEAQwZ-AKECNSFwEqJqWS26L4J6K?scode=AIkA9Qf4AHYUAGz6wMAZEAQwZ-AKE&folder_share_code=AIkA9Qf4AHY6iSz9C1',
        category: 'campus',
        description: 'Contact information and details for non-academic staff members across campus services.',
        icon: 'fas fa-address-book'
    },
    {
        id: 8,
        name: 'Unit Planner Cheatsheet',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHY6iSz9C1#/preview?fileId=i.1970326833001865.1688856590657934_f.755136553ALS7',
        category: 'curriculum',
        description: 'Quick reference guide for creating and organizing unit plans effectively.',
        icon: 'fas fa-list-check'
    },
    {
        id: 9,
        name: 'Physical Environment Guidelines',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHY6iSz9C1#/preview?fileId=i.1970326833001865.1688856590657934_f.755043564dG0E',
        category: 'campus',
        description: 'Guidelines for maintaining and organizing the physical learning environment.',
        icon: 'fas fa-map-marked-alt'
    },
    {
        id: 10,
        name: 'Professional Learning Policy',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHY6iSz9C1#/preview?fileId=i.1970326833001865.1688856590657934_f.755163566020X',
        category: 'hr',
        description: 'Comprehensive policy document outlining professional learning requirements and guidelines for staff development.',
        icon: 'fas fa-graduation-cap'
    },
    {
        id: 11,
        name: 'Science of Learning',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHYPxngRov',
        category: 'curriculum',
        description: 'Resources and materials related to the Science of Learning.',
        icon: 'fas fa-brain'
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
        id: 13,
        name: 'Medical Insurance Orientation',
        url: 'https://drive.weixin.qq.com/s?k=AIkA9Qf4AHYaFskDY9',
        category: 'hr',
        description: 'Information about the medical insurance plan.',
        icon: 'fas fa-medkit'
    }
];

// 周计划数据
const weeklySchedule = [
    {
        day: 'Monday Aug 18',
        events: [
            { time: '8:30-8:45', activity: 'Arrival' },
            { time: '8:45-9:15', activity: 'Touchbase', presenter: 'Ted' },
            { time: '9:15-10:45', activity: 'Social Emotional Learning & Second Step', presenters: ['Jie', 'Jie', 'Rose'], location: '3-503' },
            { time: '10:45-11:15', activity: 'Tea Break' },
            { time: '11:15-12:15', activity: 'Safeguard Training', presenter: 'Ted', location: '3-503' },
            { time: '12:15-13:15', activity: 'Lunch' },
            { time: '13:15-14:15', activity: 'Behaviour Policy & Faculty Handbook', presenter: 'Ted', location: '3-503' },
            { time: '14:15-14:30', activity: 'Break' },
            { time: '14:30-16:00', activity: 'Activity and Project Planning', location: '3-503' },
            { time: '16:30-17:00', activity: 'Divisional Checkout' }
        ]
    },
    {
        day: 'Tuesday Aug 19',
        events: [
            { time: '8:30-8:45', activity: 'Arrival' },
            { time: '8:45-9:15', activity: 'Touchbase', presenter: 'Michelle Liang' },
            { time: '9:15-10:45', activity: 'Safeguard Training', presenter: 'Ted', location: '3-503' },
            { time: '10:45-11:15', activity: 'Tea Break' },
            { time: '11:15-12:15', activity: 'Sign up Tech Workshops', location: 'Rooms 2-201, 2-202, 2-203, 2-204' },
            { time: '12:15-13:15', activity: 'Lunch' },
            { time: '13:15-14:45', activity: 'Student Support (Learning, Language, Counselling MTSS)', presenter: 'Michelle Ip', location: '3-503' },
            { time: '14:45-15:00', activity: 'Break' },
            { time: '15:00-16:30', activity: 'First Aid Training (External Provider)', presenters: ['Michelle Liang', 'Rachel'], location: '3-504' },
            { time: '16:30-17:00', activity: 'Divisional Checkout' }
        ]
    },
    {
        day: 'Wednesday Aug 20',
        events: [
            { time: '8:30-8:45', activity: 'Arrival' },
            { time: '8:45-9:15', activity: 'Touchbase', presenter: 'Vera' },
            { time: '9:15-10:45', activity: 'Student Support (Learning, Language, Counselling MTSS)', presenters: ['Tengfei', 'Chundan'], location: '3-503' },
            { time: '10:45-11:15', activity: 'Tea Break' },
            { time: '10:30-11:30', activity: 'Mingwan Parents in Focus: Demands, Expectations, and Collaboration Pathways', presenter: 'Michelle Liang', location: '3-503' },
            { time: '11:30-12:15', activity: 'Sign up Tech Workshops', location: 'Rooms 2-201, 2-202, 2-203, 2-204' },
            { time: '12:15-13:15', activity: 'Lunch' },
            { time: '13:15-17:00', activity: 'Early English Literacy Program K-G3', presenter: 'Jie', location: '3-501A' },
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

const kindergartenSchedule = [
    {
        day: 'Monday Aug 18',
        events: [
            { time: '8:30-8:45', activity: 'Arrival' },
            { time: '8:45-9:15', activity: 'Touchbase', presenter: 'Ted' },
            { time: '9:15-10:45', activity: 'Social Emotional Learning & Second Step', presenters: ['Jie', 'Jie', 'Ted'], location: '3-503' },
            { time: '10:45-11:15', activity: 'Tea Break' },
            { time: '11:15-12:15', activity: 'Language Policy in Practice', presenter: 'Rose', location: '3-503' },
            { time: '12:15-13:15', activity: 'Lunch' },
            { time: '13:15-14:15', activity: 'Behaviour Policy & Faculty Handbook', presenter: 'Rose', location: '3-503' },
            { time: '14:15-14:30', activity: 'Break' },
            { time: '14:30-16:00', activity: 'Student Support (Learning, Language, Counselling MTSS)', presenter: 'Michelle Ip', location: '3-501A' },
            { time: '16:30-17:00', activity: 'Divisional Checkout' }
        ]
    },
    {
        day: 'Tuesday Aug 19',
        events: [
            { time: '8:30-8:45', activity: 'Arrival' },
            { time: '8:45-9:15', activity: 'Touchbase', presenter: 'Michelle Liang' },
            { time: '9:15-10:45', activity: 'Safeguard Training', presenter: 'Ted', location: '3-503' },
            { time: '10:45-11:15', activity: 'Tea Break' },
            { time: '11:15-12:15', activity: 'Sign up Tech Workshops', location: 'Rooms 2-201, 2-202, 2-203, 2-204' },
            { time: '12:15-13:15', activity: 'Lunch' },
            { time: '13:15-14:45', activity: 'Student Support (Learning, Language, Counselling MTSS)', presenter: 'Michelle Ip', location: '3-503' },
            { time: '14:45-15:00', activity: 'Break' },
            { time: '15:00-16:30', activity: 'First Aid Training (External Provider)', presenters: ['Michelle Liang', 'Rachel'], location: 'TBD' },
            { time: '16:30-17:00', activity: 'Divisional Checkout' }
        ]
    },
    {
        day: 'Wednesday Aug 20',
        events: [
            { time: '8:30-8:45', activity: 'Arrival' },
            { time: '8:45-9:15', activity: 'Touchbase', presenter: 'Vera' },
            { time: '9:15-10:45', activity: 'Student Support (Learning, Language, Counselling MTSS)', presenters: ['Tengfei', 'Chundan'], location: '3-503' },
            { time: '10:45-11:15', activity: 'Tea Break' },
            { time: '10:30-11:30', activity: 'Mingwan Parents in Focus: Demands, Expectations, and Collaboration Pathways', presenter: 'Michelle Liang', location: '3-503' },
            { time: '11:30-12:15', activity: 'Sign up Tech Workshops', location: 'Rooms 2-201, 2-202, 2-203, 2-204' },
            { time: '12:15-13:15', activity: 'Lunch' },
            { time: '13:15-17:00', activity: 'Early English Literacy Program K-G3', presenter: 'Jie', location: '3-501A' },
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

// 分类配置
const categoryConfig = {
    'tax': { name: 'Tax & Finance', color: '#f6ad55' },
    'curriculum': { name: 'Curriculum', color: '#68d391' },
    'hr': { name: 'HR & Training', color: '#9f7aea' },
    'campus': { name: 'Campus Services', color: '#4fd1c7' }
};

// DOM 元素
const filesGrid = document.getElementById('filesGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');

let currentFilter = 'all';
let currentSearch = '';

// 初始化
function init() {
    renderFiles();
    renderSchedule('kindergarten');
    renderSchedule('g1-g9');
    setupEventListeners();
}

// 设置事件监听器
function setupEventListeners() {
    // 搜索功能
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase();
        renderFiles();
    });

    // 过滤按钮
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.category;
            renderFiles();
        });
    });

    // 标签页切换
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.addEventListener('click', () => {
            const scheduleType = button.dataset.schedule;
            switchScheduleTab(scheduleType);
        });
    });
}

// 获取过滤后的文件
function getFilteredFiles() {
    const filtered = files.filter(file => {
        const matchesFilter = currentFilter === 'all' || file.category === currentFilter;
        const matchesSearch = currentSearch === '' || 
            file.name.toLowerCase().includes(currentSearch) ||
            file.description.toLowerCase().includes(currentSearch) ||
            categoryConfig[file.category].name.toLowerCase().includes(currentSearch);
        
        return matchesFilter && matchesSearch;
    });

    // 排序：按分类名称，然后按文件名
    return filtered.sort((a, b) => {
        const categoryA = categoryConfig[a.category].name.toUpperCase();
        const categoryB = categoryConfig[b.category].name.toUpperCase();
        
        if (categoryA < categoryB) return -1;
        if (categoryA > categoryB) return 1;
        
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });
}

// 渲染文件列表
function renderFiles() {
    const filteredFiles = getFilteredFiles();
    
    if (filteredFiles.length === 0) {
        filesGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #718096;">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.5;"></i>
                <h3>No files found</h3>
                <p>Try adjusting your search terms or filters.</p>
            </div>
        `;
        return;
    }

    filesGrid.innerHTML = filteredFiles.map(file => `
        <div class="file-card" data-category="${file.category}">
            <div class="file-header">
                <div class="file-icon">
                    <i class="${file.icon}"></i>
                </div>
                <div class="file-info">
                    <h3>${file.name}</h3>
                    <span class="file-category">${categoryConfig[file.category].name}</span>
                </div>
            </div>
            <div class="file-description">
                ${file.description}
            </div>
            <div class="file-actions">
                <a href="${file.url}" target="_blank" class="btn btn-primary">
                    <i class="fas fa-external-link-alt"></i> Open File
                </a>
            </div>
        </div>
    `).join('');
}

// 渲染计划数据
function renderScheduleData(scheduleData) {
    return scheduleData.map(day => {
        const eventsHtml = day.events.map(event => {
            let presenterHtml = '';
            
            if (event.presenter) {
                presenterHtml += `<div class="event-presenter"><i class="fas fa-user"></i> ${event.presenter}</div>`;
            } else if (event.presenters) {
                const presenters = Array.isArray(event.presenters) ? event.presenters.join(', ') : event.presenters;
                presenterHtml += `<div class="event-presenter"><i class="fas fa-users"></i> ${presenters}</div>`;
            }
            
            if (event.location) {
                presenterHtml += `<div class="event-location"><i class="fas fa-map-marker-alt"></i> ${event.location}</div>`;
            }
            
            return `
                <div class="event-item">
                    <div class="event-time">${event.time}</div>
                    <div class="event-details">
                        <div class="event-activity">${event.activity}</div>
                        ${presenterHtml ? `<div class="event-meta">${presenterHtml}</div>` : ''}
                    </div>
                </div>
            `;
        }).join('');
        
        return `
            <div class="day-schedule">
                <div class="day-title">${day.day}</div>
                ${eventsHtml}
            </div>
        `;
    }).join('');
}

// 渲染计划
function renderSchedule(scheduleType) {
    const pane = document.getElementById(scheduleType + '-pane');
    if (!pane) return;
    
    const scheduleData = scheduleType === 'g1-g9' ? weeklySchedule : kindergartenSchedule;
    pane.innerHTML = renderScheduleData(scheduleData);
}

// 切换计划标签页
function switchScheduleTab(scheduleType) {
    // 更新按钮状态
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.classList.toggle('active', button.dataset.schedule === scheduleType);
    });
    
    // 更新内容面板
    document.querySelectorAll('.schedule-pane').forEach(pane => {
        pane.classList.toggle('active', pane.id === scheduleType + '-pane');
    });
}

// 显示通知
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#48bb78' : '#667eea'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1001;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// 添加样式
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);