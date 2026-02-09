import { motion } from 'framer-motion';
import type { Skill } from '../../types/skills';

export interface Props {
    skills: Skill[];
    position: 'left' | 'right';
}

export const HeroSkillsColumn = ({ skills, position }: Props) => {
    const isLeft = position === 'left';

    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className={`hidden lg:flex lg:col-span-3 ${isLeft ? '' : 'lg:col-start-10'}`}
        >
            <div className={`flex flex-col ${isLeft ? 'items-start' : 'items-end'} gap-[1.5vh] w-full`}>
                {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                        <motion.div
                            key={`${position}-${skill.id}`}
                            initial={{
                                opacity: 0,
                                y: -14,
                                rotate: isLeft ? -6 : 6
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                rotate: 0
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 150,
                                damping: 18,
                                mass: 0.8,
                                delay: 0.7 + index * 0.2
                            }}
                            style={{
                                transformOrigin: isLeft ? '0% 0%' : '100% 0%',
                                justifyContent: isLeft ? 'flex-start' : 'flex-end'
                            }}
                            className={`
                                flex items-center
                                px-[clamp(1rem,1.5vw,1.5rem)] py-[clamp(0.6rem,1vh,1rem)] 
                                bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 
                                w-full min-w-[clamp(160px,18vw,240px)]
                            `}
                        >
                            <div className={`flex cursor-default items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} w-full`}>
                                <Icon className={`
                                    ${skill.color} 
                                    w-[clamp(1.1rem,1.5vw,1.5rem)] h-[clamp(1.1rem,1.5vw,1.5rem)]
                                    ${isLeft ? 'mr-[1vw]' : 'ml-[1vw]'}
                                `} />
                                <span className="text-gray-200 font-semibold text-[clamp(0.8rem,1.1vw,1rem)] whitespace-nowrap">
                                    {skill.name}
                                </span>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
};
