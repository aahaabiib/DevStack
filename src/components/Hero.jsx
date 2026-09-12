


function Hero(){
    return (
        <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">

            <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Build Your Perfect{' '}
                    <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent "> 
                        Tech Stack</span>
                </h1>
                <p className="mt-5 text-gray-600 text-lg">
                    Explore modern techmologies, compare tools, and build a personalized development stack tailored to your nedt project.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <button className="px-6 py-4 rounded-full text-white font-medium bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600">
                        Explore Technologies
                    </button>
                    <button className="px-6 py-3 rounded-full  font-medium border-2 border-gray-500 hover:border-pink-500">
                        Learn More
                    </button>
                </div>
            </div>

            <div className="flex-1">
                <img src="/src/assets/hero-stack.png" alt="Dev Stack Image" className="w-full max-w-md mx-auto" />
            </div>
        </section>
    )
}


export default Hero