import { X } from "lucide-react";

function YourStack({ Stack, Remove, RemoveAll }) {
  return (
    <aside className="w-full lg:w-80 shrink-0">
      <div className="border rounded-2xl p-5 shadow-sm mt-14 lg:sticky lg:top-20">

        
          <h2 className="text-xl font-bold">Your Stack </h2>
           <p className="text-sm text-gray-400 mb-4">
            {Stack.length > 0 
            ? `${Stack.length} Technology Selected` : 'No technologies selected yel.'}
           </p>
         

        {Stack.length === 0 && (
          <div className="border border-dashed rounded-xl p-8 text-center text-gray-500 text-sm">
            Your stack is empty.
          </div>
        )}


          {Stack.length > 0 && 
        <div className="flex flex-col gap-3">
          {Stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center justify-between border rounded-xl p-3"
            >
              <div className="flex items-center gap-3">
                <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                <div>
                  <p className="font-medium">{tech.name}</p>
                  <p className="text-xs text-gray-500">{tech.category}</p>
                </div>
              </div>

              <button onClick={() => Remove(tech.id)}>
                <X size={18} className="text-gray-400 hover:text-red-500" />
              </button>
            </div>
          ))}
        </div>
        
          }


        {Stack.length > 0 && (

          <button onClick={RemoveAll}
          className="mt-4 w-full py-2 rounded-full border border-red-300 text-red-500 font-medium hover:bg-red-50"
          >
            Remove All
          </button>
        )}
      </div>
    </aside>
  );
}

export default YourStack;
