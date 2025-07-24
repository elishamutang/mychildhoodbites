"use client";

interface Test {
  name: string;
  description: string;
  country: string;
  category: string;
}

export default function Card({ test }: { test: Test }) {
  return (
    <div className="font-inter col-span-2 row-span-2 grid gap-3 grid-rows-3 border border-zinc-500 rounded-lg">
      {/* Image */}
      <div className="row-span-2">
        <div className="border-b border-zinc-500 rounded-t-md w-full h-full"></div>
      </div>

      {/* Words */}
      <div className="p-2 flex flex-col gap-10 truncate justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between w-full">
            <h1 className="font-semibold">{test.name}</h1>
            <div>{test.country}</div>
          </div>
          <p className="text-zinc-400 h-full truncate pr-2">
            {test.description}
          </p>
        </div>

        <div className="flex justify-between">
          <div className="text-xs border rounded-md p-1">{test.category}</div>
          <div className="text-xs border rounded-md py-1 px-2">View</div>
        </div>
      </div>
    </div>
  );
}
