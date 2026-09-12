import Card from './Card'



function Grid({technologies, Stack, clickToAdd}){
    return (
    
        <section className='flex-1'>
            <h2 className='text-2xl font-bold mb-6'>All Technologies</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {technologies.map((tech) =>{
                    const isAdded = Stack.some((item) => item.id === tech.id)
                return (
                    <Card key={tech.id} tech={tech} clickToAdd= {clickToAdd} isAdded={isAdded}/>
                )})}
            </div>
        </section>
    )
}


export default Grid 