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
            <DialogContent className="project-dialog-content max-w-5xl p-0">
                <DialogHeader className="project-dialog-header">
                    <DialogTitle className="project-dialog-title">{project.title}</DialogTitle>
                    <DialogDescription className="project-dialog-description">
                        {project.description}
                    </DialogDescription>
                </DialogHeader>

                <div className="project-dialog-preview">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 94vw, 1000px"
                        className="project-dialog-image"
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};
