import postImg1 from '../assets/ecommerce.png'
import postImg2 from '../assets/learning_tool.png'
import postImg3 from '../assets/JsBot_logo.jpeg'
import postImg4 from '../assets/PyBot_logo.jpeg'
import postImg5 from  '../assets/pms.png'


const posts = [
    {
        img: postImg2,
        title: "Sys-Arch-Learning-Tool",
        content: "Each project group is expected to develop a learning tool for their drawn topic. The purpose of this tool is to aid peers in understanding the material associated with the topic. ",
        date: "30th Oct 2019",
        link: "https://github.com/JChris246/Sys-Arch-Learning-Tool",
    }, {
        img: postImg5,
        title: "Patient Management System",
        content: "This project was intially created as a school research project, to develop a proposed electronic management system for patients at health care instutitions, mainly the QEH",
        date: "8th Dec 2020",
        link: "https://github.com/JChris246/PatientManagementSystem",
    }, {
        img: postImg1,
        title: "Technical_Exercise",
        content: "An ecommerce store. Must indicate the photos, prices and description for items. Must indicate the contents of the shopping cart",
        date: "20th Nov 2020",
        link: "https://github.com/JChris246/Technical_Exercise",
    }, {
        img: postImg3,
        title: "JSDiscordBot",
        content: "Discord Bot built with JavaScript by the S-Race team!",
        date: "13th Dec 2019",
        link: "https://github.com/TheNotoriousMac/JSDiscordBot",
    }, {
        img: postImg4,
        title: "PyBot",
        content: "Python discord bot built using discord.py rewrite. The team wanted to try writing some of the features of the js version in python",
        date: "14th Dec 2020",
        link: "https://github.com/TheNotoriousMac/PyBot",
    },
]

const Home = () => {

    return (
        <div className="main-container">
            <div className="md:w-3/4 rounded shadow mt-5 md:mt-10 bg-white">
                <header className="header">
                    SOME OF MY PROJECTS
                </header>
                {posts.map(post => (
                    <>
                        <div className="post-container">
                            <img src={post.img} alt={post.title} className="img"></img>
                            <div className="px-4 mt-8">
                                {post.link ? (<a href={post.link}><h2 className="post-title">{post.title}</h2></a>) 
                                : (<h2 className="post-title">{post.title}</h2>)}
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