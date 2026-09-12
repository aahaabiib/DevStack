import Card from './Card'



function Grid({technologies}){
    return (
    
        <section className='max-w-7xl mx-auto px-6 py-10'>
            <h2 className='text-2xl font-bold mb-6'>All Technologies</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {technologies.map((tech) => (
                    <Card key={tech.id} tech={tech}/>
                ))}
            </div>
        </section>
    )
}


export default Grid 