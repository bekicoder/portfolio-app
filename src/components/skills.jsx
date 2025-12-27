export default function Skills() {
    const skills = [
        { name: "HTML5", icon: "html5-plain", color: "#E34F26" },
        { name: "CSS3", icon: "css3-plain", color: "#1572B6" },
        { name: "JavaScript", icon: "javascript-plain", color: "#F7DF1E" },
        { name: "TailwindCSS", icon: "tailwindcss-plain", color: "#38BDF8" },
        { name: "Bootstrap", icon: "bootstrap-plain", color: "#7952B3" },
        { name: "React", icon: "react-plain", color: "#61DAFB" },
        { name: "TypeScript", icon: "typescript-plain", color: "#3178C6" },
        { name: "Node.js", icon: "nodejs-plain", color: "#339933" },
        { name: "Express.js", icon: "express-original", color: "#000000" },
        { name: "MySQL", icon: "mysql-plain", color: "#4479A1" },
        { name: "PostgreSQL", icon: "postgresql-plain", color: "#336791" },
        { name: "Next.js", icon: "nextjs-plain", color: "#000000" }
    ];

    const tools = [
        { name: "Git", icon: "git-plain", color: "#000000", hasIcon: true },
        { name: "Freepic", icon: "si si-freepik", color: "#155dfc", hasIcon: true, },
        { name: "Neovim", icon: "neovim-plain", color: "#00a63e", hasIcon: true },
        { name: "VS Code", icon: "visualstudio-plain", color: "#2b7fff", hasIcon: true },
        { name: "Undraw", src: "./src/assets/undraw.png", alt: "undraw illustration", color: "#6c63ff", hasIcon: false },
        { name: "Acode", src: "./src/assets/acode.png", alt: "acode illustration", color: "#ffffff", textColor: "#000000", hasIcon: false },
        { name: "Termux", icon: "terminal text-white", color: "#000000", hasIcon: true }
    ]
    return (
        <div id="skills" className="scroll-offset px-4 w-full flex flex-col items-center mt-28">
            <h1 className="text-white text-3xl mb-5">MY SKILLS</h1>
            <ul className="p-2 items-start w-full bg-gradient-to-br from-white/10 to-[#140f23] font-bold rounded-lg border border-white/20 border-1 gap-3 flex-wrap  flex max-w-4xl py-7" style={{ backdropFilter: "brur(30px)" }}>
                {skills.map((skill, index) => <li key={index} style={{ backgroundColor: skill.color }} className="w-fit text-white rounded-full h-fit pb-2 pt-2.5 px-6 "><i className={'devicon-' + skill.icon}></i> {skill.name}</li>
                )}
            </ul>
            <h1 className="text-white text-3xl mt-20 mb-5" >TOOLS</h1 >
            <ul id="tools" className="p-2 items-start w-full  bg-gradient-to-br from-white/10 to-[#140f23] font-bold rounded-lg border border-white/30 border-1 gap-3 flex-wrap  flex max-w-4xl py-7">
                {tools.map((tool, index) => <li key={index} className="w-fit text-white rounded-full h-fit pb-2 pt-3 px-6 flex gap-3" style={{ backgroundColor: tool.color, ...(tool.textColor && { color: tool.textColor }) }} > {tool.hasIcon ? < i className={tool.icon.startsWith('si') ? tool.icon : tool.icon.startsWith("termin") ? 'fa fa-terminal' : "devicon-" + tool.icon}></i> : <img src={tool.src} alt={tool.alt} className="w-6 flex-none h-6" />}<span>{tool.name}</span></li>
                )}
            </ul>
        </div>
    )
} 
