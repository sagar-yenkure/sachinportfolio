'use client';

import { Eye } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { ProjectDialog } from './ProjectDialog';

interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
}

export function PortfolioGrid({ projects }: { projects: Project[] }) {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className="group relative overflow-hidden rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
                        onMouseEnter={() => setHoveredProject(project.id)}
                        onMouseLeave={() => setHoveredProject(null)}
                        style={{
                            animationDelay: `${index * 100}ms`,
                            animation: 'fadeInUp 0.6s ease-out forwards',
                        }}
                    >
                        <div className="relative aspect-square overflow-hidden">
                            <Image
                                width={100}
                                height={100}
                                quality={100}
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="flex items-center space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <Button
                                        onClick={() => setSelectedProject(project)}
                                        className="bg-white/40 backdrop-blur-lg rounded-full p-2.5 text-white hover:bg-white/30 transition-all duration-200 border border-white/30 hover:scale-110"
                                    >
                                        <Eye size={20} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold text-black text-xl">{project.title}</h3>
                            <p className="text-slate-600 text-sm my-1">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <ProjectDialog
                open={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
            />
        </>
    );
}
