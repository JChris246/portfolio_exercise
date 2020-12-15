import postImg1 from '../assets/wxxrdrijjjdfrmlk6ywy.png'
import postImg2 from '../assets/alexa.png'
import postImg3 from '../assets/nextjs.png'
import postImg4 from '../assets/compute-module-4-feature-image-500x357.jpg'
import postImg5 from  '../assets/web.png'
import postImg6 from  '../assets/csharp-featured.png'
import postImg7 from  '../assets/pms.png'


const posts = [
    {
        img: postImg1,
        title: "The Giant $400 Google Home Max Smart Speaker Has Been Discontinued",
        content: "Debuting back in 2017, the Google Home Max was a hi-fi alternative to the original Google Home smart speaker, promising better sound but still providing access to Google Assistant. It was big, kind of pricey at $400, and from our testing, not as loud or booming as you’d expect, so Google has done what Google does best…",
        date: "15th Dec 2020",
    }, {
        img: postImg2,
        title: "Amazon launches a Live Translation feature for Echo devices",
        content: "Amazon today announced a new Alexa feature, Live Translation, that will translate conversations between people who speak two different languages. The feature uses Amazon’s speech recognition technology and neural machine translation technology to work, and supports translating between English and French, Spanish, Hindi, Portuguese (Brazilian), German or Italian.",
        date: "14th Dec 2020",
    }, {
        img: postImg3,
        title: "Next.js vs. React: The developer experience",
        content: "When choosing any software library or framework, one normally considers the developer experience. When I say “developer experience” here, I mean to say what it’s like for developers to actually do the task. Developers generally favor libraries or frameworks that are fun and easy to use. This is a major reason why we have the leading libraries and frameworks today.",
        date: "5th Nov 2020",
    }, {
        img: postImg4,
        title: "Raspberry Pi Compute Module 4 on sale now from $25",
        content: "It’s become a tradition that we follow each Raspberry Pi model with a system-on-module variant based on the same core silicon. Raspberry Pi 1 gave rise to the original Compute Module in 2014; Raspberry Pi 3 and 3+ were followed by Compute Module 3 and 3+ in 2017 and 2019 respectively. Only Raspberry Pi 2, our shortest-lived flagship product at just thirteen months, escaped the Compute Module treatment.",
        date: "19th Oct 2020",
    }, {
        img: postImg7,
        title: "Patient Management System",
        content: "This project was intially created as a school research project, to develop a proposed electronic management system for patients at health care instutitions, mainly the QEH",
        date: "8th Dec 2020",
    }
]

const popular_posts = [
    {
        img: postImg5,
        title: "Web Developer Roadmap",
        date: "14th Dec 2020"
    }, {
        img: postImg6,
        title: "Become an expert at C#",
        date: "5th Dec 2020"
    }, 
]

const Home = () => {

    return (
        <div className="main-container">
            <div className="md:w-3/4 rounded shadow mt-5 md:mt-10 bg-white">
                <header className="header">
                    THE LATEST POSTS
                </header>
                {posts.map(post => (
                    <>
                        <div className="post-container">
                            <img src={post.img} alt={post.title} className="img"></img>
                            <div className="px-4 mt-4">
                                <h2 className="post-title">{post.title}</h2>
                                <span className="text-gray-600">{post.content}</span>
                                <p className="mb-4"></p>
                                <span>{post.date}</span>
                            </div>
                        </div>

                        <hr className="mx-4 my-12"/>
                    </>
                ))} 
            </div>

            <div className="md:w-3/12 rounded shadow mt-10 bg-white">
                <h2 className="m-4 text-3xl font-bold px-4 mb-8 text-center">Popular posts</h2>
                {popular_posts.map(post => (
                    <>
                        <div className="flex md:flex-row">
                            <img src={post.img} alt={post.title} className=""></img>
                            <div className="px-2 mt-4">
                                <h2 className="side-post-title">{post.title}</h2>
                                <span className="text-gray-600">{post.content}</span>
                                <p className="mb-4"></p>
                                <span>{post.date}</span>
                            </div>
                        </div>

                        <hr className="mx-4 my-6"/>
                    </>
                ))}
            </div>
        </div>
    )
}

export default Home