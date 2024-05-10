export function Collections() {
  return (
    <div className="mt-1 max-w-full lg:max-w-5xl mx-auto px-1 w-screen ">
      <div className="flex items-center justify-between border-b border-neutral-200 py-3 px-3">
        <div className="flex gap-x-4 items-center text-sm">
          <p className="bg-neutral-100 px-3 py-1 rounded-lg text-neutral-900 tracking-wide cursor-pointer">
            Items
          </p>
          <p className="cursor-pointer text-neutral-500 hover:text-neutral-900 transition">
            Analytics
          </p>
          <p className="cursor-pointer text-neutral-500 hover:text-neutral-900 transition">
            Activity
          </p>
        </div>
        <div className="flex gap-x-2 items-center">
          <div className="h-7 w-7 rounded-lg bg-neutral-50 border border-neutral-200 flex justify-center items-center text-neutral-500 hover:text-neutral-900 cursor-pointer transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-filter"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
          </div>
          <div className="h-7 w-7 rounded-lg bg-neutral-50 border border-neutral-200 flex justify-center items-center text-neutral-500 hover:text-neutral-900 cursor-pointer transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-up-a-z"
            >
              <path d="m3 8 4-4 4 4" />
              <path d="M7 4v16" />
              <path d="M20 8h-5" />
              <path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" />
              <path d="M15 14h5l-5 6h5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-5 px-1 max-w-full mx-auto mb-10">
        <Items />
      </div>
      <div className="flex justify-center mb-5">
        <a
          href="https://magiceden.io/marketplace/okay_bears"
          target="_blank"
          className="mb-5 bg-neutral-900 text-neutral-200 hover:opacity-90 transition border-neutral-500 py-2 px-3 rounded"
        >
          Explore Okay Bears
        </a>
      </div>
    </div>
  );
}

import { database } from "../src/database";

function Items() {
  return (
    <div className="mt-3 space-y-4">
      <div className="flex justify-between item-center px-4">
        <p className="font-semibold text-neutral-700">30 results</p>
        <div className="flex gap-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-circle"
            className="text-green-500 bg-green-600 rounded-full"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
          <p className="font-semibold text-neutral-500">Live</p>
        </div>
      </div>
      <div className="items-center  justify-center flex flex-wrap sm:items-center gap-x-3 sm:gap-x-1 gap-y-3 sm:max-w-5xl mx-auto">
        {database.map((bear) => (
          <div className="border bg-neutral-100 border-neutral-200  transition w-fit rounded-lg">
            <img
              src={bear.image}
              alt={bear.code}
              className="sm:h-[180px] h-[160px] w-full rounded-t-lg"
            />
            <div className="text-[0.90rem] sm:text-[15px] mt-3 px-2 pb-2 tracking-wide">
              <p className="font-semibold cursor-pointer hover:text-neutral-500">
                {bear.code}
              </p>
              <p className="sm:text-[18px] text-[16px]">{bear.price}</p>
              <p className="">
                Last{" "}
                <span className="text-neutral-500 font-semibold">
                  {bear.lastPrice}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
