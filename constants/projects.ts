import {
    Palette, Heart, Award, Camera,
    Calendar,
    Megaphone,
    Package,
    Users,
} from 'lucide-react';


export const portfolioCategories = [
    {
        id: 'motivational',
        name: 'Motivational',
        icon: Heart,
        gradient: 'from-rose-500 to-pink-600',
        bgGradient: 'from-rose-50 to-pink-50',
        projects: [
            {
                id: '1',
                title: 'Success Mindset',
                description: 'Inspiring poster design promoting positive thinking and growth mindset.',
                image: 'https://images.pexels.com/photos/1509582/pexels-photo-1509582.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Poster',
            },
            {
                id: '2',
                title: 'Dream Big',
                description: 'Vibrant motivational design encouraging people to pursue their dreams.',
                image: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Digital Art',
            },
            {
                id: '3',
                title: 'Never Give Up',
                description: 'Powerful message design with strong visual impact.',
                image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Quote Design',
            }
        ]
    },
    {
        id: 'festival',
        name: 'Festival',
        icon: Calendar,
        gradient: 'from-purple-500 to-indigo-600',
        bgGradient: 'from-purple-50 to-indigo-50',
        projects: [
            {
                id: '4',
                title: 'Music Festival 2024',
                description: 'Vibrant festival poster with dynamic typography and colorful elements.',
                image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Event Poster',
            },
            {
                id: '5',
                title: 'Food & Culture Fest',
                description: 'Cultural festival design celebrating diversity and community.',
                image: 'https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Cultural Event',
            },
            {
                id: '6',
                title: 'Art & Craft Fair',
                description: 'Creative poster design for local artisan showcase event.',
                image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Art Event',
            }
        ]
    },
    {
        id: 'ads',
        name: 'Advertising',
        icon: Megaphone,
        gradient: 'from-orange-500 to-red-600',
        bgGradient: 'from-orange-50 to-red-50',
        projects: [
            {
                id: '7',
                title: 'Summer Sale Campaign',
                description: 'Eye-catching advertisement design for seasonal retail promotion.',
                image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Retail Ad',
            },
            {
                id: '8',
                title: 'Tech Product Launch',
                description: 'Modern advertisement for innovative technology product.',
                image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Product Ad',
            },
            {
                id: '9',
                title: 'Restaurant Promotion',
                description: 'Appetizing food advertisement with mouth-watering visuals.',
                image: 'https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Food Ad',
            }
        ]
    },
    {
        id: 'brand',
        name: 'Brand',
        icon: Award,
        gradient: 'from-emerald-500 to-teal-600',
        bgGradient: 'from-emerald-50 to-teal-50',
        projects: [
            {
                id: '10',
                title: 'Corporate Identity',
                description: 'Professional brand poster showcasing company values and mission.',
                image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Corporate',
            },
            {
                id: '11',
                title: 'Startup Brand Launch',
                description: 'Fresh and innovative brand poster for new company launch.',
                image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Startup',
            },
            {
                id: '12',
                title: 'Luxury Brand Campaign',
                description: 'Elegant and sophisticated brand poster for premium products.',
                image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Luxury',
            }
        ]
    },
    {
        id: 'packaging',
        name: 'Packaging',
        icon: Package,
        gradient: 'from-blue-500 to-cyan-600',
        bgGradient: 'from-blue-50 to-cyan-50',
        projects: [
            {
                id: '13',
                title: 'Organic Food Package',
                description: 'Eco-friendly packaging design for organic food products.',
                image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Food Package',
            },
            {
                id: '14',
                title: 'Cosmetic Product Line',
                description: 'Elegant packaging design for premium beauty products.',
                image: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Beauty Package',
            },
            {
                id: '15',
                title: 'Tech Accessory Box',
                description: 'Modern packaging design for electronic accessories.',
                image: 'https://images.pexels.com/photos/1640767/pexels-photo-1640767.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Tech Package',
            }
        ]
    },
    {
        id: 'hiring',
        name: 'Hiring',
        icon: Users,
        gradient: 'from-violet-500 to-purple-600',
        bgGradient: 'from-violet-50 to-purple-50',
        projects: [
            {
                id: '16',
                title: 'Join Our Team',
                description: 'Attractive recruitment poster highlighting company culture.',
                image: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Recruitment',
            },
            {
                id: '17',
                title: 'Developer Position',
                description: 'Tech-focused hiring poster for software development roles.',
                image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Tech Hiring',
            },
            {
                id: '18',
                title: 'Creative Roles',
                description: 'Inspiring recruitment design for creative and design positions.',
                image: 'https://images.pexels.com/photos/1181407/pexels-photo-1181407.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Creative Hiring',
            }
        ]
    },
    {
        id: 'photography',
        name: 'Photography',
        icon: Camera,
        gradient: 'from-amber-500 to-orange-600',
        bgGradient: 'from-amber-50 to-orange-50',
        projects: [
            {
                id: '19',
                title: 'Portrait Sessions',
                description: 'Professional photography service promotion poster.',
                image: 'https://images.pexels.com/photos/1181525/pexels-photo-1181525.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Portrait',
            },
            {
                id: '20',
                title: 'Wedding Photography',
                description: 'Romantic and elegant wedding photography service design.',
                image: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Wedding',
            },
            {
                id: '21',
                title: 'Event Coverage',
                description: 'Dynamic poster for event photography services.',
                image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Event',
            }
        ]
    },
    {
        id: 'creative',
        name: 'Creative',
        icon: Palette,
        gradient: 'from-pink-500 to-rose-600',
        bgGradient: 'from-pink-50 to-rose-50',
        projects: [
            {
                id: '22',
                title: 'Abstract Art Series',
                description: 'Contemporary abstract art poster with bold colors and shapes.',
                image: 'https://images.pexels.com/photos/1181739/pexels-photo-1181739.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Abstract',
            },
            {
                id: '23',
                title: 'Digital Illustration',
                description: 'Creative digital artwork showcasing artistic skills.',
                image: 'https://images.pexels.com/photos/1181738/pexels-photo-1181738.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Digital Art',
            },
            {
                id: '24',
                title: 'Mixed Media Collage',
                description: 'Experimental mixed media design combining various elements.',
                image: 'https://images.pexels.com/photos/1181701/pexels-photo-1181701.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Mixed Media',
            }
        ]
    }
];