function Projects() {
    const projectList = [
        {
          name: "Ella Kichin Caffe", img: "/ella_cafe_desktop.jpg", description: "This website is designed to simplify hotel operations and improve customer service by allowing guests to order their desired meals from anywhere, quickly and conveniently.",linkurl:"https://ella-cafe.vercel.app/"},
        { 
          name: "Hossana Bus", img: "/hossanaBus_desktop.jpg", description: "this website mainly designed to improve customer service my enabling customers to buy bus tiket from any where from thier desiered bus service provider and digtlizing tradtional bus tiket buying process ",linkurl:"https://hossana-bus.vercel.app/" },
        { 
          name: 'Albert Academy', img: "/albert_academy_desktop.jpg", description: "This website is designed to support school activities and monitor students by providing secure chat groups and clubs for study discussions, while allowing students to track their test results safely under school supervision.",linkurl: "https://albert-academy-school.vercel.app/"},
        { 
          name: "Derash", img: '/derash_desktop.jpg', description: "This website is designed to help organizations communicate with clients securely and efficiently, with features specifically focused on improving the organization–client relationship.",linkurl:"https://derash-chat.vercel.app/"}
    ]

    return (
        <div id="projects" className="scroll-offset gap-12 mt-24 text-white flex flex-col px-4">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">MY PROJECTS</h1>
           <p>Here are some of the projects I’m proud to showcase.</p>
            </div>
            <div className="gap-10 mt-12 grid grid-cols-1 md:grid-cols-2 px-4 justify-items-center justify-center items-center justify-items-center">
                {projectList.map((project, index) => {
                    return <a href={project.linkurl}><div key={index} className="hover:scale-105 cursor-pointer bg-gradient-to-br from-white/10 to-[#140f23] pb-12 w-full overflow-hidden rounded-lg border border-1 border-white/20  max-w-sm">
                        <img src={project.img} />
                        <h1 className="text-2xl m-3 font-bold underline underline-offset-4">{project.name}</h1>
                        <p className="p-3 text-sm">{project.description} </p>
                    </div></a>

                })}
            </div>
        </div>
    )
}

export default Projects;
