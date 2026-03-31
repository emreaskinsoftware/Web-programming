interface SkillCategory {
    name: string;
    items: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
    {
        name: "Frontend",
        items: [
            { name: "React", level: 85 },
            { name: "TypeScript", level: 80 },
            { name: "Tailwind CSS", level: 90 },
            { name: "HTML/CSS", level: 95 },
        ],
    },
    {
        name: "Araçlar",
        items: [
            { name: "Git", level: 80 },
            { name: "Vite", level: 75 },
            { name: "VS Code", level: 90 },
            { name: "npm", level: 85 },
        ],
    },
    {
        name: "Diğer",
        items: [
            { name: "Python", level: 70 },
            { name: "SQL", level: 65 },
            { name: "Linux", level: 60 },
            { name: "REST API", level: 75 },
        ],
    },
];

export default function Skills() {
    return (
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
                    Yetenekler
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map(cat => (
                        <div key={cat.name}>
                            <h3 className="font-semibold text-lg mb-4 text-gray-800 dark:text-gray-200">
                                {cat.name}
                            </h3>
                            <ul className="space-y-3">
                                {cat.items.map(skill => (
                                    <li key={skill.name}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-gray-700 dark:text-gray-300">
                                                {skill.name}
                                            </span>
                                            <span className="text-gray-500 dark:text-gray-400">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all"
                                                style={{ width: `${skill.level}%` }}
                                                role="progressbar"
                                                aria-valuenow={skill.level}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                aria-label={`${skill.name}: ${skill.level}%`}
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
