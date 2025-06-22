'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import Image from 'next/image';
import React from 'react';

type Project = {
    id: string;
    title: string;
    description: string;
    image: string;
};

interface ProjectDialogProps {
    open: boolean;
    onClose: () => void;
    project: Project | null;
}

export const ProjectDialog: React.FC<ProjectDialogProps> = ({
    open,
    onClose,
    project,
}) => {
    if (!project) return null;

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl p-3">
                <DialogHeader>
                    <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                    <DialogDescription className="text-slate-600">
                        {project.description}
                    </DialogDescription>
                </DialogHeader>

                {/* Show image in natural size or responsive full width */}
                <div className="w-full mt-4 overflow-hidden rounded-xl border border-slate-200">
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={1200} // you can adjust this or make dynamic
                        height={0}
                        className="w-full h-auto object-cover rounded-xl"
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};
