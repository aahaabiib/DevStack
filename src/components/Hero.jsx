


function Hero(){
    return (
        <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
            {/* left side of hero section  */}
            <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Build Your Perfect{' '}

                    {/* Gradient text  */}
                    <span className="gradient-text"> 
                        Tech Stack</span>
                </h1>
                <p className="mt-5 text-gray-600 text-lg">
                    Explore modern technologies, compare tools, and build a personalized development stack tailored to your next project.
                </p>

                {/* 1st button gradient & second button make using outline */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <button className="px-6 py-4 rounded-full text-white font-medium gradient-button">
                        Explore Technologies
                    </button>
                    <button className="px-6 py-3 rounded-full  font-medium border-2 border-gray-500 hover:border-pink-500">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Right side of hero section  */}
            <div className="flex-1">
                <img src="/hero-stack.png" alt="Dev Stack Image" className="w-full max-w-md mx-auto" />
            </div>
        </section>
    )
}


export default Hero