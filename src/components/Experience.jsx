"use client";
import GlassCard from './GlassCard';
import { motion } from 'framer-motion';

const Experience = () => {
    return (

        <div className="space-y-6 pt-20">


            <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display text-2xl font-semibold text-on-surface border-l-4 border-primary pl-4 mt-24"
            >
                Experience
            </motion.h3>

            <GlassCard
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="rounded-2xl overflow-hidden"
            >
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead className="bg-on-surface/5 border-b border-on-surface/10">
                        <tr>
                            <th className="text-primary uppercase tracking-widest font-semibold">Role</th>
                            <th className="text-primary uppercase tracking-widest font-semibold">Company</th>
                            <th className="text-primary uppercase tracking-widest font-semibold text-right">Period</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-on-surface/5">
                        {[
                            {
                                role: 'Web Development Student',
                                company: 'Programming Hero',
                                period: '2024 — Present'
                            },
                            {
                                role: 'Full Stack Practice Developer',
                                company: 'Personal Learning Projects',
                                period: '2023 — 2025'
                            },
                            {
                                role: 'Beginner Web Learner',
                                company: 'Self Learning (Javascript & MongoDB)',
                                period: '2022 — 2023'
                            }
                        ].map((exp, idx) => (
                            <tr key={idx} className="hover:bg-on-surface/5 transition-colors border-none">
                                <td className="text-on-surface font-medium">{exp.role}</td>
                                <td className="text-on-surface-variant">{exp.company}</td>
                                <td className="text-outline text-right">{exp.period}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </GlassCard>
        </div>
    );
};

export default Experience;