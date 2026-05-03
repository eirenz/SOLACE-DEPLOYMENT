import { 
  Home, Book, Shield, BarChart2, Calendar, 
  MessageCircle, Headphones, User, 
  Users, Flag, UserCheck 
} from 'lucide-react';

export const navigationConfig = {
  user: [
    { id: 'home', path: '/user/dashboard', icon: Home, label: 'Home' },
    { id: 'journal', path: '/user/journal', icon: Book, label: 'Journal' },
    { id: 'community', path: '/user/community', icon: Shield, label: 'Safe Space' },
    { id: 'mood-tracker', path: '/user/mood-tracker', icon: BarChart2, label: 'Mood Tracker' },
    { id: 'appointments', path: '/user/appointments', icon: Calendar, label: 'Appointments' }
  ],
  counselor: [
    { id: 'dashboard', path: '/counselor/dashboard', icon: Home, label: 'Dashboard' },
    { id: 'appointments', path: '/counselor/appointments', icon: Calendar, label: 'Appointments' },
    { id: 'chat', path: '/counselor/chat', icon: MessageCircle, label: 'Live Chat' },
    { id: 'listen-only', path: '/counselor/listen-only', icon: Headphones, label: 'Listen Only' },
    { id: 'profile', path: '/counselor/profile', icon: User, label: 'Profile' }
  ],
  admin: [
    { id: 'dashboard', path: '/admin/dashboard', icon: Home, label: 'Dashboard' },
    { id: 'user-management', path: '/admin/user-management', icon: Users, label: 'User Management' },
    { id: 'flag-content', path: '/admin/flag-content', icon: Flag, label: 'Flagged Content' },
    { id: 'counselors-list', path: '/admin/counselors-list', icon: UserCheck, label: 'Counselors List' },
    { id: 'appointment', path: '/admin/appointment', icon: Calendar, label: 'Appointments' },
    { id: 'analysis-reports', path: '/admin/analysis-reports', icon: BarChart2, label: 'Analysis Reports' }
  ]
};
