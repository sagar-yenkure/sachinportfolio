
import {
    Palette, Zap, Heart, Target, Rocket, Award, Code, Layers, Pen, Camera, GraduationCap,
    Briefcase
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
        company: 'Vionsys IT Solutions PVT LTD.',
        location: 'Office',
        duration: '3 Months',
        period: '2024',
        description:
            'Worked on various graphic design projects including brand identity, digital marketing materials, and user interface designs. Collaborated with the development team to create visually appealing and user-friendly designs.',
        skills: ['Adobe Creative Suite', 'Brand Design', 'Digital Marketing', 'UI/UX Design', 'Team Collaboration'],

        icon: Briefcase,
        gradient: 'from-blue-500 to-cyan-500',
        bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
        type: 'education',
        title: 'Graphic Design Course',
        company: 'Design Institute',
        location: 'Offline',
        duration: 'Intensive Program',
        period: '2024',
        description:
            'Completed comprehensive graphic design training covering fundamentals of design, color theory, typography, and modern design tools. Built a strong foundation in visual communication and design principles.',
        skills: ['Design Fundamentals', 'Color Theory', 'Typography', 'Adobe Photoshop', 'Adobe Illustrator', 'Brand Identity'],

        icon: GraduationCap,
        gradient: 'from-blue-500 to-cyan-500',
        bgGradient: 'from-blue-50 to-cyan-50',
    },
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
