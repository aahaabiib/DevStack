import { X } from "lucide-react";

function YourStack({ Stack, Remove, RemoveAll }) {
  return (
    <aside className="max-w-7xl mx-auto px-6 pb-10">
      <div className="border rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">
            Your Stack{" "}
            <span className="text-sm font-normal text-gray-500">
              ({Stack.length} Technology Selected)
            </span>
          </h2>
          {Stack.length > 0 && (
            <button
              onClick={RemoveAll}
              className="text-sm text-red-500 hover:underline"
            >
              Remove All
            </button>
          )}
        </div>

        {Stack.length === 0 && (
          <p className="text-gray-500 text-sm">
            No technologies added yet. Start building your stack!
          </p>
        )}

        <div className="flex flex-col gap-3">
          {Stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center justify-between border rounded-xl p-3"
            >
              <div className="flex   items-center gap-3">
                <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                <div>
                  <p className="font-medium">{tech.name}</p>
                  <p className="text-xs text-gray-500">{tech.category}</p>
                </div>
              </div>

              <button onClick={() => Remove(tech.id)}>
                <X size={18} className="text-gray-500 hover:text-red-500" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </aside>
  );
}

export default YourStack;
