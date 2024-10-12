import React from 'react';

const AboutMe = () => {
    return (
        <div className='mx-10 font-serif'>
            <div className='flex items-center gap-5 '>
                <div className='text-4xl font-bold'>About</div>
                <div className='h-1 mt-2 rounded-full bg-violet-700 w-full'></div>
            </div>

            <div className='ml-32 space-y-5 mr-5 mt-5 leading-8 text-xl'>
                <p>
                    I am <span className='font-bold text-violet-700'>Md. Parvaj Mosharof</span>, a passionate and motivated 
                    <span className='font-bold text-violet-700'> Junior Frontend Web Developer</span> with hands-on experience in creating engaging and responsive web applications. My expertise spans a range of technologies:
                </p>

                <ul>
                    <li>
                        🖥️ <span className='font-bold'>Frontend:</span> HTML5, CSS3, JavaScript, <span className='font-bold text-violet-700'>React.js</span>, Tailwind CSS
                    </li>
                    <li>
                        🛠️ <span className='font-bold'>Backend:</span> Node.js, Express.js
                    </li>
                    <li>
                    🗃️ <span className='font-bold'>Database:</span> MongoDB 
                    </li>
                    <li>
                    ⚙️ <span className='font-bold'>Tools:</span> Git & GitHub, Visual Studio Code, Postman, Figma
                    </li>
                </ul>

                <p>
                    
                </p>

                <p>
                    Currently, I am pursuing a <span className='font-bold text-violet-700'>B.Sc. in Computer Science</span> and Engineering at Uttara University. 🎓 In addition to my web development skills, I am actively involved in <span className='font-bold'>competitive programming</span>, which enhances my problem-solving abilities and helps me tackle complex challenges effectively. 🧩
                </p>

                <p>
                    I am excited to apply my skills in real-world projects and am seeking opportunities to grow professionally through internships or junior development roles. 🚀
                </p>

                <p>
                    Let’s connect and explore potential collaborations! 🤝
                </p>
            </div>
        </div>
    );
}

export default AboutMe;