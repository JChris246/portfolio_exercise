const importAll = (r) => { 
	let images = {};
    r.keys().forEach(item => images[item.substr(2, item.lastIndexOf(".") - 2)] = r(item).default);
	return images
}

const images = importAll(require.context('../assets', false, /\.(png|jpe?g)$/));

const posts = [
    {
        img: images.learning_tool,
        title: "Sys-Arch-Learning-Tool",
        content: "Each project group is expected to develop a learning tool for their drawn topic. The purpose of this tool is to aid peers in understanding the material associated with the topic. ",
        date: "30th Oct 2019",
        github: "https://github.com/JChris246/Sys-Arch-Learning-Tool",
        link: "https://jchris246.github.io/Sys-Arch-Learning-Tool/"
    }, {
        img: images.pms,
        title: "Patient Management System",
        content: "This project was intially created as a school research project, to develop a proposed electronic management system for patients at health care instutitions, mainly the QEH",
        date: "8th Dec 2020",
        github: "https://github.com/JChris246/PatientManagementSystem",
    }, {
        img: images.ecommerce,
        title: "Technical_Exercise",
        content: "An ecommerce store. Must indicate the photos, prices and description for items. Must indicate the contents of the shopping cart",
        date: "20th Nov 2020",
        github: "https://github.com/JChris246/Technical_Exercise",
        link: "https://jchris246.github.io/Technical_Exercise/"
    }, {
        img: images.JsBot_logo,
        title: "JSDiscordBot",
        content: "Discord Bot built with JavaScript by the S-Race team!",
        date: "13th Dec 2019",
        github: "https://github.com/TheNotoriousMac/JSDiscordBot",
    }, {
        img: images.PyBot_logo,
        title: "PyBot",
        content: "Python discord bot built using discord.py rewrite. The team wanted to try writing some of the features of the js version in python",
        date: "14th Dec 2020",
        github: "https://github.com/TheNotoriousMac/PyBot",
    }, {
        img: images.dar_electronics,
        title: "DarElectronics",
        content: "Non-functional Ecommerce site build by the S-Race team as a school group project",
        date: "29th March 2021",
        github: "https://github.com/JChris246/DarElectronics",
        link: "https://jchris246.github.io/DarElectronics/"
    }, {
        img: images.boop_chat,
        title: "Boop Chat",
        content: "Whatsapp clone as hobby project",
        date: "17th August 2021",
        github: "https://github.com/BoopChat/boop",
    }, {
        img: images.snake,
        title: "Snake",
        content: "Snake game created with tailwindcss and p5 js a library for manipulation html canvas,",
        date: "8th December 2021",
        github: "https://github.com/JChris246/p5.js_snake",
        link: "https://jchris246.github.io/p5.js_snake/"
    }
]

const Home = () => {

    return (
        <div className="main-container">
            <div className="md:w-3/4 rounded shadow mt-5 md:mt-10 bg-white">
                <header className="header uppercase">
                    Some of my projects
                </header>
                {posts.map(post => (
                    <>
                        <div className="post-container">
                            <img src={post.img} alt={post.title} className="img" />
                            <div className="px-4 mt-8">
                                <a href={post.link || post.github}><h2 className="post-title">{post.title}</h2></a>
                                <span className="text-gray-600">{post.content}</span>
                                <p className="mb-4"></p>
                                <span>{post.date}</span>
                            </div>
                        </div>

                        <hr className="mx-4 my-12"/>
                    </>
                ))} 
            </div>
        </div>
    )
}

export default Home