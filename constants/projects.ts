import {
    Megaphone,
    Package,
    Users,
    Sparkles,
    Camera,
    PenTool,
    Lightbulb,
    Flower,
} from "lucide-react";

export const portfolioCategories = [

    // Category for festival-related projects
    {
        id: "festival",
        name: "Festival",
        icon: Sparkles,
        projects: [
            {
                id: "16",
                title: "Lakshmi Pujan Poster",
                description: "A beautifully crafted Lakshmi Pujan poster featuring divine symbols, festive lamps, and elegant typography — perfect for Diwali celebrations and puja promotions.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1761395551/sachin/travalishq_lakshami_pujan_post_02c_an88wv.jpg",
            },
            {
                id: "17",
                title: "Diwali Festival Poster",
                description: "A vibrant Diwali poster capturing the glow of lights, joy, and celebration. Ideal for festive greetings, event promotions, or brand posts.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1761395536/sachin/travalishq_dwali_post_01c_gz7p5m.jpg",
            },
            {
                id: "18",
                title: "Bhai Dooj Celebration Poster",
                description: "A heartwarming Bhai Dooj poster symbolizing the bond between brother and sister. Features traditional motifs and festive hues — perfect for social media campaigns.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1761395486/sachin/travlishq_bhai_dooj_post_02cc_ohp3e0.jpg",
            },
            {
                id: "19",
                title: "Bhai Dooj Festival Poster",
                description: "An elegant Bhai Dooj poster with a festive theme, showcasing sibling love and joyful colors — great for festive promotions and greetings.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1761395563/sachin/travlishq_bhai_dooj_post_01c_ekh4tj.jpg",
            },
            {
                id: "1",
                title: "Shravan Festival Poster",
                description: "A colorful, detailed poster capturing the spirit of Shravan. Blends traditional patterns with modern elements. Perfect for celebrations and events.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1754826251/sachin/02_c79ghz.jpg",
            },
            {
                id: "2",
                title: "Rath Yatra Festival Poster",
                description: "A bright poster reflecting the grandeur of Rath Yatra. Inspired by traditional art forms and colors. Ideal for inviting people to celebrate.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918303/sachin/festival_01c_bosgio.jpg",
            },
            {
                id: "3",
                title: "Krishna Janmashtami Art",
                description: "A devotional artwork celebrating the birth of Lord Krishna. Rich in tradition and motifs. Perfect for temples, events, and greetings.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918246/sachin/krishna01c_mgl59v.jpg",
            },
            {
                id: "4",
                title: "Traditional Celebration Poster",
                description: "A lively poster for cultural gatherings. Features intricate patterns and festival palettes. Best suited for event promotions.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918356/sachin/15c_jqe33t.jpg",
            },
            {
                id: "5",
                title: "Raksha Bandhan Tribute",
                description: "A heartwarming design honoring the sibling bond. Combines traditional motifs with storytelling. Perfect for greeting cards and posters.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918352/sachin/raksha_bandhan_01c_bgaihw.jpg",
            },
            {
                id: "6",
                title: "Ram Navami Celebration",
                description: "A divine poster celebrating the birth of Lord Ram. Features serene colors and symbols. Ideal for religious events and invitations.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918338/sachin/Ram_navmi01c_gtx8oc.jpg",
            },
            {
                id: "7",
                title: "Mahadev Blessing Poster",
                description: "A powerful design dedicated to Lord Shiva’s blessings. Depicts sacred symbols and energy. Perfect for Mahashivratri and gatherings.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918334/sachin/mnahadev_01c_ewefre.jpg",
            },
            {
                id: "8",
                title: "Nag Panchami Poster",
                description: "A traditional design for Nag Panchami festivities. Features serpent motifs and patterns. Ideal for local events and rituals.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918308/sachin/nag_panchami_c01_m7vq0l.jpg",
            },
            {
                id: "9",
                title: "Asadi Festival Poster",
                description: "A bright poster celebrating the Asadi festival. Infused with regional art styles. Perfect for fairs, markets, and gatherings.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918255/sachin/asadi_01c_pkwam2.jpg",
            },
            {
                id: "10",
                title: "Moharram Tribute Poster",
                description: "A solemn poster honoring the essence of Moharram. Uses respectful tones and visuals. Suitable for processions and remembrance events.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918255/sachin/mohram_01c_rmbn96.jpg",
            },
            {
                id: "11",
                title: "Guru Purnima Tribute",
                description: "A graceful tribute to teachers and mentors. Features designs inspired by wisdom. Perfect for cultural programs and banners.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918244/sachin/gurupornima_c01_bvdftd.jpg",
            },
            {
                id: "12",
                title: "Ganesh Chaturthi Poster",
                description: "A festive poster celebrating Lord Ganesha’s arrival. Decorated with motifs and bright hues. Ideal for processions, events, and gatherings.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918236/sachin/ganesh_01c_gmw4oq.jpg",
            },
            {
                id: "13",
                title: "Guru Jayanti Poster",
                description: "A spiritual poster honoring noble teachers. Blends patterns with elegant typography. Great for schools, organizations, and groups.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918208/sachin/guru_02_qtgohq.jpg",
            },
            {
                id: "14",
                title: "Devi Festival Design",
                description: "A divine poster honoring Goddess Devi’s power. Features vibrant colors and symbols. Perfect for Navratri and celebrations.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918173/sachin/devi_01c_cqqif9.jpg",
            },
            {
                id: "15",
                title: "Swami Vivekanand Poster",
                description: "An inspirational poster celebrating Swami Vivekanand’s legacy. Includes quotes and visuals. Perfect for events, seminars, and programs.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918351/sachin/swami_vivekanand_01c_ycjrmo.jpg",
            },
        ]
    },

    // Category for hiring-related projects
    {
        id: 'hiring',
        name: 'Hiring',
        icon: Users,
        projects: [
            {
                id: "1",
                title: "We’re Hiring – Announcement",
                description: "A professional announcement graphic showcasing job openings. Designed with clean visuals for better reach.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1753528617/hairing_01_-_Copy_r1mmwk.jpg",
            },
            {
                id: "2",
                title: "Now Hiring – Graphic Ad",
                description: "A bold and creative recruitment poster for attracting top talent. Features striking colors and modern typography.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1753528630/h02c_-_Copy_d1wt4a.jpg",
            },
            {
                id: "3",
                title: "Stylized Hiring Poster",
                description: "A modern and engaging hiring design with eye-catching visuals. Crafted for maximum visibility on social media.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918051/sachin/.07_lwrrzi.jpg",
            },
            {
                id: "4",
                title: "Job Recruitment Design",
                description: "A creative recruitment design tailored for company hiring drives. Combines professionalism with appealing graphics.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918067/sachin/01_shzls2.jpg",
            },
        ]
    },

    // Category for Instagram-related projects
    {
        id: 'instagram',
        name: 'Instagram',
        icon: Camera,
        projects: [
            {
                id: "1",
                title: "Mother’s Day Post",
                description: "A heartfelt Mother’s Day post with elegant visuals and warm tones. Crafted to celebrate and share love on social platforms.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918534/sachin/mothar_day_01_-_Copy_qeyq7i.jpg",
            },
            {
                id: "2",
                title: "Instagram Story Design",
                description: "A creative Instagram story design made to highlight promotions. Combines bold visuals with an engaging mobile-first approach.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752917964/sachin/06_ikk6rp.jpg",
            },
            {
                id: "3",
                title: "Insta Banner Graphic",
                description: "A striking Instagram banner design built for strong profile impact. Uses sharp imagery and bold text for maximum attention.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752917964/sachin/Untitled-1_zo62gj.jpg",
            },
            {
                id: "4",
                title: "Clean Feed Post",
                description: "A minimal and visually clean Instagram feed design. Created to maintain brand elegance while delivering engaging updates.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918069/sachin/05_ebfl8h.jpg",
            },
            {
                id: "5",
                title: "Styled Insta Graphic",
                description: "A trendy Instagram graphic with stylish layouts and vibrant colors. Perfect for modern social media branding campaigns.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918057/sachin/03_jg0w2n.jpg",
            },
            {
                id: "6",
                title: "Insta Post Design",
                description: "A modern Instagram post layout with bold colors and clean typography. Designed to engage audiences and boost social media presence.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918534/sachin/01_-_Copy_2_h3wwkj.jpg",
            },
        ]
    },

    // Category for brand advertising projects
    {
        id: 'brand',
        name: 'Advertising',
        icon: Megaphone,
        projects: [
            {
                id: "1",
                title: "Cake Shop Promotional Poster",
                description: "An eye-catching bakery poster featuring rich cake visuals. Designed to attract customers with a fresh and appetizing style.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1754826208/sachin/cake_add01c_vpb7xx.jpg",
            },
            {
                id: "2",
                title: "Sidra Jewellery Promotional Poster",
                description: "A luxurious jewellery advertisement with refined details and stunning visuals. Crafted for timeless style and premium branding.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1754826198/sachin/ad_j_01_dbyfx0.jpg",
            },
            {
                id: "3",
                title: "Creative Ad Layout",
                description: "A modern and minimal advertising concept with clean lines and bold imagery. Perfect for campaigns seeking strong visual appeal.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752917855/sachin/ad02c_hwnbnm.jpg",
            },
            {
                id: "4",
                title: "Educational Class Poster",
                description: "A well-structured and visually appealing class poster design. Tailored for academic institutions and promotional educational campaigns.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752917903/sachin/class_01_prvafz.jpg",
            },
            {
                id: "5",
                title: "Social Media Banner",
                description: "A bold and impactful banner design made for social media promotions. Perfect for brand announcements, events, and online campaigns.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752917904/sachin/01c_lseyys.jpg",
            },
            {
                id: "6",
                title: "Minimal Ad Creative",
                description: "A sleek and simple advertisement layout using clean typography and balanced composition. Ideal for modern branding efforts.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752917900/sachin/01_jfgrml.jpg",
            },
            {
                id: "7",
                title: "Poster Style Ad",
                description: "A bold poster concept designed to increase brand awareness. Uses high-contrast visuals and impactful messaging for online reach.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752917905/sachin/05cc_kgn35i.jpg",
            },
            {
                id: "8",
                title: "Corporate Promo Design",
                description: "A professional and polished corporate promotional design. Created to support brand image and deliver strong visual communication.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918460/sachin/11_-_Copy_ubv1s8.png",
            },
            {
                id: "9",
                title: "Brand Ad Design",
                description: "A creative brand advertisement crafted for maximum marketing impact. Modern style and bold composition for visual engagement.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918564/sachin/add01_png_-_Copy_is8xpd.jpg",
            },
            {
                id: "10",
                title: "Product Showcase Poster",
                description: "A dynamic and eye-catching product showcase poster. Built to highlight key features and create excitement on digital platforms.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918043/sachin/p01_etjxnf.jpg",
            },
            {
                id: "11",
                title: "Ad Concept Poster",
                description: "A vibrant marketing poster designed for social media campaigns. Blends creative visuals with a strong call-to-action for audience engagement.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752917865/sachin/02_c_s2oaoy.jpg",
            },
        ]
    },

    // Category for packaging projects
    {
        id: 'packaging',
        name: 'Packaging',
        icon: Package,
        projects: [
            {
                id: "1",
                title: "Modern Packaging Mockup",
                description: "A contemporary packaging mockup crafted to highlight product appeal with clean linesand professional presentation for brand impact.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918898/Untitled-2_copy_vuccay.jpg",
            },
            {
                id: "2",
                title: "Bodybuilder Supplement Pack",
                description: "A powerful and energetic supplement packaging design built for athletes. Features bold typography and striking graphics to emphasize strength and performance.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918590/sachin/body_bildr_packjing_disin_-_Copy_tyrh1h.jpg",
            },
            {
                id: "3",
                title: "Creative Chips Bag Design",
                description: "A playful and colorful snack packaging concept made to instantly grab consumer attention. Combines fun visuals with an appetizing and modern look.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918589/sachin/Bag_of_chips_v01_copy_-_Copy_z7yguu.jpg",
            },
            {
                id: "4",
                title: "Minimal Product Labeling",
                description: "A sleek, modern, and minimalist label design crafted for premium branding. Perfect for products that value elegance and simplicity in presentation.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918526/sachin/Artboard_1_-_Copy_u0uvic.png",
            },
            {
                id: "5",
                title: "Coco Chocolate Bar Pack",
                description: "An elegant and premium chocolate packaging concept created for the Coco brand. Uses rich tones, refined typography, and a luxurious presentation.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1753528660/coco01_-_Copy_go592a.jpg",
            },
        ]
    },


    // Category for logo designs
    {
        id: 'logos',
        name: 'Logos',
        icon: PenTool,
        projects: [
            {
                id: '1',
                title: 'Sidra Jewellery Shop Logo',
                description: 'A refined and elegant logo design for Sidra Jewellery, blending timeless style with luxurious appeal through sophisticated design.',
                image: 'https://res.cloudinary.com/dja2zi1g7/image/upload/v1754826202/sachin/jewelry_02_lgpqdp.jpg',
            },
            {
                id: '2',
                title: 'Secret 31 Cake Shop Logo',
                description: 'A charming and memorable logo for Secret 31 Cake Shop, combining playful elegance with a modern twist to reflect a premium bakery brand.',
                image: 'https://res.cloudinary.com/dja2zi1g7/image/upload/v1754826199/sachin/cake_a01_f5rqpl.jpg',
            },
            {
                id: '3',
                title: 'Classic Logo',
                description: 'A logo with timeless, classic appeal and serif-based typography for a distinguished brand identity.',
                image: 'https://res.cloudinary.com/dja2zi1g7/image/upload/v1752917980/sachin/04c_qar9tk.jpg',
            },
            {
                id: '4',
                title: 'Modern Minimal Logo',
                description: 'A sleek, clean, and simple logo design crafted for modern and stylish branding projects.',
                image: 'https://res.cloudinary.com/dja2zi1g7/image/upload/v1752917980/sachin/01c_d39lyf.jpg',
            },
            {
                id: '5',
                title: 'Tailor Logo V1',
                description: 'An elegant logo crafted for a fashion or tailoring brand, emphasizing style and professionalism.',
                image: 'https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918568/sachin/sagar_tailort_-_Copy_lkycvx.jpg',
            },
            {
                id: '6',
                title: 'Tailor Logo V2',
                description: 'A refined alternate version of the tailor brand logo, offering a fresh but consistent visual identity.',
                image: 'https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918551/sachin/new_Sagar_tailor_-_Copy_cedqag.jpg',
            }
        ]
    },

    // Category for motivational projects
    {
        id: "motivational",
        name: "Motivational",
        icon: Lightbulb,
        projects: [
            {
                id: "1",
                title: "Quote Poster",
                description: "Typography-based motivational poster thoughtfully designed to inspire daily positivity, focus, and steady personal growth.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918008/sachin/00_qclfit.jpg",
            },
            {
                id: "2",
                title: "Determination",
                description: "A bold design themed around self-belief, resilience, and the inner strength to persevere through life’s toughest challenges.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918006/sachin/11_c_scapyf.jpg",
            },
            {
                id: "3",
                title: "A.P.J. Abdul Kalam Quote Poster",
                description: "An inspirational poster with a powerful quote by Dr. A.P.J. Abdul Kalam that sparks ambition, hope, and creative vision.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1753528630/imfo03_-_Copy_z0ynab.jpg",
            },
            {
                id: "4",
                title: "Steve Jobs Quote Poster",
                description: "Minimal and bold design highlighting an iconic quote by Steve Jobs on creativity, vision, innovation, and leadership.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1753528775/moti_02_m7lwcm.jpg",
            },
            {
                id: "5",
                title: "Success Motivation Poster",
                description: "An energetic, uplifting design with a motivational quote inspiring vision, focus, persistence, and relentless determination to succeed.",
                image: "https://res.cloudinary.com/dja2zi1g7/image/upload/v1753528780/moti01_xq0zl2.jpg",
            }
        ]
    },

    // Category for wedding invitations
    {
        id: 'wedding',
        name: 'Wedding',
        icon: Flower,
        projects: [
            {
                id: '1',
                title: 'Marriage Invite',
                description: 'Elegant and stylish wedding invitation design concept for modern couples seeking a unique and memorable celebration.',
                image: 'https://res.cloudinary.com/dja2zi1g7/image/upload/v1752918584/sachin/marrrej_02_-_Copy_kdqsk8.jpg',
            },
            {
                id: '2',
                title: 'Elegant Wedding Invitation',
                description: 'A graceful wedding invite design featuring soft tones, refined layout, and classic typography for a formal and timeless celebration.',
                image: 'https://res.cloudinary.com/dja2zi1g7/image/upload/v1753528726/marrig_02_-_Copy_dbsahb.png',
            },
            {
                id: '3',
                title: 'Traditional Wedding Invite',
                description: 'A culturally inspired wedding invitation design with rich patterns, ornate motifs, and a festive, joyful touch to honor traditions.',
                image: 'https://res.cloudinary.com/dja2zi1g7/image/upload/v1753528762/marrig_01_-_Copy_p1tflo.png',
            }
        ]
    }

];
