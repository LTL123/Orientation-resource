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

