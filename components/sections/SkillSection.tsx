import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { skills } from '@/constants';
import { Zap } from 'lucide-react';

const SkillSection = () => {
    return (
        <div className="fade-in-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <div className="flex items-center justify-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                        <Zap size={24} className="text-white" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-playfair font-bold bg-gradient-to-r from-slate-800 to-orange-600 bg-clip-text text-transparent">
                        Skills & Expertise
                    </h3>
                </div>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                    Professional tools and technologies I use to create stunning visual designs.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                    >
                        <Card className={`h-full border-0 bg-gradient-to-br ${skill.bgColor} shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden`}>
                            <CardContent className="p-6 text-center relative z-10">
                                <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                                    <skill.icon size={32} className="text-white" />
                                </div>

                                <h4 className={`font-playfair font-bold text-xl mb-3 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                                    {skill.name}
                                </h4>

                                <p className="text-slate-600 text-sm font-inter leading-relaxed">
                                    {skill.description}
                                </p>
                            </CardContent>
                            <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default SkillSection