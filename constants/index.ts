
import {
    Palette, Zap, Heart, Target, Rocket, Award, Code, Layers, Pen, Camera, GraduationCap,
    Briefcase,
    Calendar,
    Instagram,
} from 'lucide-react';

export const skills = [
    {
        name: 'Adobe Photoshop',
        icon: Camera,
        color: 'from-electric-purple to-neon-pink',
        bgColor: 'from-purple-50 to-pink-50',
        description: 'Photo editing & digital art'
    },
    {
        name: 'Adobe Illustrator',
        icon: Pen,
        color: 'from-electric-purple to-neon-pink',
        bgColor: 'from-purple-50 to-pink-50',
        description: 'Vector graphics & logos'
    },
    {
        name: 'Figma',
        icon: Layers,
        color: 'from-electric-purple to-neon-pink',
        bgColor: 'from-purple-50 to-pink-50',
        description: 'UI/UX design & prototyping'
    },
    {
        name: 'Adobe InDesign',
        icon: Code,
        color: 'from-electric-purple to-neon-pink',
        bgColor: 'from-purple-50 to-pink-50',
        description: 'Layout & print design'
    },
    {
        name: 'Canva',
        icon: Palette,
        color: 'from-electric-purple to-neon-pink',
        bgColor: 'from-purple-50 to-pink-50',
        description: 'Quick design & templates'
    },
    {
        name: 'Brand Design',
        icon: Award,
        color: 'from-electric-purple to-neon-pink',
        bgColor: 'from-purple-50 to-pink-50',
        description: 'Identity & brand systems'
    },
];

export const stats = [
    { icon: Zap, number: '5+', label: 'Months Experience', gradient: 'from-electric-purple to-neon-pink', bg: 'from-purple-50 to-pink-50' },
    { icon: Heart, number: '50+', label: 'Projects Completed', gradient: 'from-electric-purple to-neon-pink', bg: 'from-purple-50 to-pink-50' },
    { icon: Target, number: '100%', label: 'Client Satisfaction', gradient: 'from-electric-purple to-neon-pink', bg: 'from-purple-50 to-pink-50' },
    { icon: Rocket, number: '3', label: 'Months Internship', gradient: 'from-electric-purple to-neon-pink', bg: 'from-purple-50 to-pink-50' },
];


export const experiences = [
    {
        type: 'internship',
        title: 'Graphic Design Intern',
        company: 'Vionsys IT',
        location: 'Remote/Office',
        duration: '3 Months',
        period: '2024',
        description:
            'Worked on various graphic design projects including brand identity, digital marketing materials, and user interface designs. Collaborated with the development team to create visually appealing and user-friendly designs.',
        skills: ['Adobe Creative Suite', 'Brand Design', 'Digital Marketing', 'UI/UX Design', 'Team Collaboration'],
        achievements: [
            'Designed 20+ marketing materials for client campaigns',
            'Collaborated with 5+ developers on UI/UX projects',
            'Improved design workflow efficiency by 30%',
            'Received excellent feedback from supervisors',
        ],
        icon: Briefcase,
        gradient: 'from-blue-500 to-cyan-500',
        bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
        type: 'education',
        title: 'Graphic Design Course',
        company: 'Design Institute',
        location: 'Local/Online',
        duration: 'Intensive Program',
        period: '2024',
        description:
            'Completed comprehensive graphic design training covering fundamentals of design, color theory, typography, and modern design tools. Built a strong foundation in visual communication and design principles.',
        skills: ['Design Fundamentals', 'Color Theory', 'Typography', 'Adobe Photoshop', 'Adobe Illustrator', 'Brand Identity'],
        achievements: [
            'Mastered Adobe Creative Suite tools',
            'Created 15+ portfolio projects',
            'Learned advanced typography techniques',
            'Completed with distinction',
        ],
        icon: GraduationCap,
        gradient: 'from-purple-500 to-pink-500',
        bgGradient: 'from-purple-50 to-pink-50',
    },
];

export const portfolioCategories = [
    {
        id: 'festival',
        name: 'Festival Graphics',
        icon: Calendar,
        gradient: 'from-orange-500 to-red-500',
        bgGradient: 'from-orange-50 to-red-50',
        projects: [
            {
                title: 'Diwali Celebration Design',
                description: 'Traditional festival poster with modern typography and vibrant colors',
                image: 'https://images.pexels.com/photos/1673583/pexels-photo-1673583.jpeg?auto=compress&cs=tinysrgb&w=500',
                tags: ['Traditional', 'Typography', 'Colorful', 'Festival'],
                category: 'Print Design'
            },
            {
                title: 'Holi Festival Banner',
                description: 'Vibrant colors and playful design elements celebrating the festival of colors',
                image: 'https://images.pexels.com/photos/3646217/pexels-photo-3646217.jpeg?auto=compress&cs=tinysrgb&w=500',
                tags: ['Vibrant', 'Festive', 'Banner', 'Celebration'],
                category: 'Digital Design'
            },
            {
                title: 'Christmas Card Design',
                description: 'Elegant holiday greeting card with winter theme and premium finish',
                image: 'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=500',
                tags: ['Holiday', 'Elegant', 'Winter', 'Greeting'],
                category: 'Print Design'
            }
        ]
    },
    {
        id: 'traditional',
        name: 'Traditional Graphics',
        icon: Palette,
        gradient: 'from-purple-500 to-pink-500',
        bgGradient: 'from-purple-50 to-pink-50',
        projects: [
            {
                title: 'Mandala Art Design',
                description: 'Intricate geometric patterns with cultural significance and spiritual meaning',
                image: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=500',
                tags: ['Mandala', 'Geometric', 'Cultural', 'Spiritual'],
                category: 'Art Design'
            },
            {
                title: 'Traditional Wedding Invitation',
                description: 'Classic design with ornate borders and gold accents for special occasions',
                image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=500',
                tags: ['Wedding', 'Ornate', 'Classic', 'Luxury'],
                category: 'Print Design'
            },
            {
                title: 'Heritage Logo Design',
                description: 'Brand identity inspired by traditional motifs and cultural elements',
                image: 'https://images.pexels.com/photos/1484759/pexels-photo-1484759.jpeg?auto=compress&cs=tinysrgb&w=500',
                tags: ['Logo', 'Heritage', 'Brand', 'Identity'],
                category: 'Brand Design'
            }
        ]
    },
    {
        id: 'education',
        name: 'Education Graphics',
        icon: GraduationCap,
        gradient: 'from-blue-500 to-cyan-500',
        bgGradient: 'from-blue-50 to-cyan-50',
        projects: [
            {
                title: 'Educational Infographic',
                description: 'Data visualization for learning materials with clear information hierarchy',
                image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=500',
                tags: ['Infographic', 'Education', 'Data', 'Learning'],
                category: 'Information Design'
            },
            {
                title: 'Course Completion Certificate',
                description: 'Professional certificate design with modern layout and premium aesthetics',
                image: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=500',
                tags: ['Certificate', 'Professional', 'Achievement', 'Modern'],
                category: 'Print Design'
            },
            {
                title: 'Student Handbook Cover',
                description: 'Engaging cover design for educational materials with student-friendly approach',
                image: 'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=500',
                tags: ['Handbook', 'Cover', 'Students', 'Educational'],
                category: 'Publication Design'
            }
        ]
    },
    {
        id: 'instagram',
        name: 'Instagram Posts',
        icon: Instagram,
        gradient: 'from-pink-500 to-rose-500',
        bgGradient: 'from-pink-50 to-rose-50',
        projects: [
            {
                title: 'Social Media Campaign',
                description: 'Cohesive Instagram post series for brand promotion and engagement',
                image: 'https://images.pexels.com/photos/1337544/pexels-photo-1337544.jpeg?auto=compress&cs=tinysrgb&w=500',
                tags: ['Social Media', 'Campaign', 'Brand', 'Engagement'],
                category: 'Digital Marketing'
            },
            {
                title: 'Motivational Quote Posts',
                description: 'Inspiring typography-based Instagram content with powerful messaging',
                image: 'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=500',
                tags: ['Typography', 'Motivational', 'Content', 'Inspiration'],
                category: 'Social Media'
            },
            {
                title: 'Product Showcase Posts',
                description: 'Eye-catching product presentation for e-commerce and brand visibility',
                image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=500',
                tags: ['Product', 'E-commerce', 'Showcase', 'Marketing'],
                category: 'Product Design'
            }
        ]
    },
    {
        id: 'ux',
        name: 'UX Graphics',
        icon: Heart,
        gradient: 'from-green-500 to-emerald-500',
        bgGradient: 'from-green-50 to-emerald-50',
        projects: [
            {
                title: 'Mobile App Interface',
                description: 'Clean and intuitive user interface design with modern aesthetics',
                image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500',
                tags: ['Mobile', 'UI', 'Interface', 'Modern'],
                category: 'UI/UX Design'
            },
            {
                title: 'Website Landing Page',
                description: 'Conversion-focused landing page design with strategic user experience',
                image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=500',
                tags: ['Website', 'Landing', 'Conversion', 'UX'],
                category: 'Web Design'
            },
            {
                title: 'Dashboard Design',
                description: 'Data-rich dashboard with clear information hierarchy and user-friendly navigation',
                image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=500',
                tags: ['Dashboard', 'Data', 'Analytics', 'Interface'],
                category: 'UI/UX Design'
            }
        ]
    }
];

export const testimonials = [
    {
        name: 'Priya Sharma',
        role: 'Marketing Manager',
        company: 'TechStart Solutions',
        content: 'Sachin delivered exceptional festival graphics for our Diwali campaign. His attention to detail and understanding of traditional aesthetics while maintaining modern appeal was remarkable.',
        rating: 5,
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
        name: 'Rajesh Kumar',
        role: 'Supervisor',
        company: 'Vionsys IT',
        content: 'During his internship, Sachin showed great dedication and creativity. He quickly adapted to our design requirements and consistently delivered high-quality work on time.',
        rating: 5,
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
        name: 'Anita Patel',
        role: 'Small Business Owner',
        company: 'Patel Enterprises',
        content: 'The educational materials Sachin designed for our training programs were clear, engaging, and perfectly aligned with our brand. Our employees found them very helpful.',
        rating: 5,
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
        name: 'Vikram Singh',
        role: 'Social Media Manager',
        company: 'Digital Wave Agency',
        content: 'Sachin created stunning Instagram posts for our clients. His understanding of social media design trends and ability to create engaging visuals is impressive.',
        rating: 5,
        avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
];