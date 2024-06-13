export const LIST_OF_PROMPTS = [
  {
    id: 'pr_intro',
    title: 'Watch introduction video',
    animationURI: require('../assets/video_training.json'),
  },
  {
    id: 'pr_team',
    title: 'Know your team',
    animationURI: require('../assets/office_team.json'),
  },
  {
    id: 'pr_training',
    title: 'Check training schedule',
    animationURI: require('../assets/training_schedule.json'),
  },
];

export const EMPLOYEE_LIST = [
  {
    id: 'EMP#AC145',
    designation: 'Executive Chef',
    profileImageLink: 'https://randomuser.me/api/portraits/men/51.jpg',
    employeeName: 'Robert Kalf',
  },
  {
    id: 'EMP#AC146',
    designation: 'Bar Tender',
    profileImageLink: 'https://randomuser.me/api/portraits/women/29.jpg',
    employeeName: 'Janet',
  },
  {
    id: 'EMP#AC147',
    designation: 'Waiter',
    profileImageLink: 'https://randomuser.me/api/portraits/men/79.jpg',
    employeeName: 'Michael Jacov',
  },
  {
    id: 'EMP#AC148',
    designation: 'Sous Chef',
    profileImageLink: 'https://randomuser.me/api/portraits/men/10.jpg',
    employeeName: 'James Smith',
  },
  {
    id: 'EMP#AC149',
    designation: 'Pastry Chef',
    profileImageLink: 'https://randomuser.me/api/portraits/women/45.jpg',
    employeeName: 'Emily Davis',
  },
  {
    id: 'EMP#AC150',
    designation: 'Restaurant Manager',
    profileImageLink: 'https://randomuser.me/api/portraits/men/31.jpg',
    employeeName: 'David Johnson',
  },
  {
    id: 'EMP#AC151',
    designation: 'Host',
    profileImageLink: 'https://randomuser.me/api/portraits/women/23.jpg',
    employeeName: 'Sarah Brown',
  },
  {
    id: 'EMP#AC152',
    designation: 'Dishwasher',
    profileImageLink: 'https://randomuser.me/api/portraits/men/58.jpg',
    employeeName: 'Chris Wilson',
  },
  {
    id: 'EMP#AC153',
    designation: 'Waitress',
    profileImageLink: 'https://randomuser.me/api/portraits/women/68.jpg',
    employeeName: 'Jessica Taylor',
  },
  {
    id: 'EMP#AC154',
    designation: 'Busboy',
    profileImageLink: 'https://randomuser.me/api/portraits/men/24.jpg',
    employeeName: 'Daniel Harris',
  },
];

export const TRAINING_VIDEO_URL =
  'https://www.youtube.com/embed/y3gVno6UX4Q?si=SfsTzgw4kdf1dkQO';

export const TRAINING_SCHEDULE = {
  '2024-06-18': {selected: true, marked: true, selectedColor: '#7B1FA2'},
  '2024-06-19': {selected: true, marked: true, selectedColor: '#689F38'},
  '2024-06-20': {selected: true, marked: true, selectedColor: '#7B1FA2'},
  '2024-06-21': {marked: true, selectedColor: '#E64A19', selected: true},
  '2024-06-24': {marked: true, selectedColor: '#689F38', selected: true},
  '2024-06-25': {marked: true, selectedColor: '#E64A19', selected: true},
  '2024-06-26': {marked: true, selectedColor: '#689F38', selected: true},
  '2024-06-28': {selected: true, marked: true, selectedColor: '#7B1FA2'},
};

export const TRAINING_TOPICS = {
  '18': {
    title: 'Introduction to Customer Service',
    description:
      'Session on importance of customer service in the hospitality industry.',
  },
  '19': {
    title: 'Greeting and Seating Guests',
    description: 'Session on proper ways to greet guests upon arrival.',
  },
  '20': {
    title: 'Menu Knowledge',
    description:
      'Session about familiarizing with the menu items, ingredients, and preparation methods.',
  },
  '21': {
    title: 'Taking Orders',
    description:
      'Session about techniques for accurately taking and repeating orders.',
  },
  '24': {
    title: 'Serving Food and Beverages',
    description: 'Session on proper techniques for serving food and drinks',
  },
  '25': {
    title: 'Handling Customer Complaints',
    description:
      'Session on strategies for addressing and resolving customer complaints',
  },
  '26': {
    title: 'Billing and Payment',
    description:
      'Session about procedures for presenting the bill and handling payments.',
  },
  '28': {
    title: 'Upselling Techniques',
    description:
      'Session about methods for suggesting additional items to enhance the dining experience.',
  },
};
