import {Star} from 'lucide-react'



function Card({tech}){
    return (
        <div className="border rounded-2xl p-5 shadow-sm hover:shadow-md transition flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
                <span className="text-xs px-3 py-1 rounded-full bg-pink-100 text-pink-600 font-medium">
                    {tech.badge}
                </span>
            </div>


            <div>
                <h3 className="text-2xl font-bold">{tech.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{tech.description}</p>
            </div>

            <div className="flex items-center gap-2 justify-between">
                <span className="text-xs px-3 py-1 rounded-full bg-violet-100 text-violet-600 font-medium">
                    {tech.category}
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-orange-100 text-orange-600 font-medium">
                    {tech.difficulty}
                </span>

                <div className="flex items-center gap-1 text-sm font-medium text-gray-700">
                 <Star size={16} className="text-yellow-500 fill-yellow-500"/>
                {tech.rating} 
                </div>

            </div>


            
            <button className='mt-2 w-full py-2 rounded-full text-white font-medium bg-gradient-to-r from-orange-500 to-violet-600'>
                Add to Stack
            </button>
        </div>
    )
}


export default Card