import profile_pic from "../assets/IMG-20190902-WA0003.jpg"

const About = () => {

    return (
        <div className="w-5/6 mx-auto">
            <div className="mt-14 mx-4 flex flex-row">
                <img src={profile_pic} className="rounded-full" alt="pic of me" height="12"></img>
                <div className="ml-8 mt-8">
                    <span className="text-2xl">Hey,</span>
                    <p></p>
                    <br/><span className="text-lg md:text-3xl md:ml-14">My name is Christopher King</span>
                    <p class="mt-6"></p><a className="md:hidden text-blue-500" href="https://github.com/JChris246">My githhub</a>
                </div>
            </div>
            <span className="mt-12 md:w-5/6 inline-block">I am a third-year student at The University of the West Indies, Cave Hill, Studying Computer Science. My objective is to have a career in computer programming. I am very passionate about working with computers and I am adaptable and open to new ideas and concepts.</span>
        </div>
    )
}

export default About