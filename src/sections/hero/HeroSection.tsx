import { skillsData } from '../../data/skills.data';

import { Container } from '../../components/common/Container';
import { HeroSkillsColumn } from './HeroSkillsColumn';
import { HeroCenterContent } from './HeroCenterContent';


export const HeroSection = () => {
    const leftSkills = skillsData.leftColumn.slice(0, 5);
    const rightSkills = skillsData.rightColumn.slice(0, 5);

    return (
        <section
            id="home"
            className="
                min-h-screen 
                bg-linear-to-b
                from-gray-950
                via-gray-900
                to-gray-950
                text-gray-50
                flex                    
                items-center            
                justify-center          
            "
        >
            <Container>
                <div className="grid lg:grid-cols-12 items-center gap-8">
                    <div className="hidden lg:block lg:col-span-2">
                        <HeroSkillsColumn position="left" skills={leftSkills} />
                    </div>
                    <div className="lg:col-span-8">
                        <HeroCenterContent />
                    </div>
                    <div className="hidden lg:block lg:col-span-2">
                        <HeroSkillsColumn position="right" skills={rightSkills} />
                    </div>
                </div>
            </Container>
        </section>
    );
};
