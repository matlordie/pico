export function Banner() {
  return (
    <div className="pt-5  mt-11 bg-gradient-to-tr from-neutral-100 to-emerald-200">
      <div className="max-w-2xl mx-auto sm:rounded-md px-5 py-5">
        <img
          src="/okay-bears.jpeg"
          alt=""
          className="h-[220px] mx-auto lg:h-[170px] w-full object-cover sm:rounded-lg"
        />
        <div className="mt-5 space-y-2 mb-5">
          <div className="flex justify-between items-center text-neutral-500">
            <img
              src="/okaybears-logo.png"
              alt="okaybears"
              className="h-[40px]"
            />
            <div className="flex gap-x-1 items-center">
              <a
                href="https://www.okaybears.com/"
                target="_blank"
                className="h-5 w-5 rounded-full flex justify-center items-center hover:text-neutral-700 cursor-pointer transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-globe"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </a>
              <a
                href="https://discord.com/invite/okaybears"
                target="_blank"
                className="h-5 w-5 rounded-full flex justify-center items-center hover:text-neutral-700 cursor-pointer transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-discord"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                </svg>
              </a>
              <a
                href="https://twitter.com/okaybears"
                target="_blank"
                className="h-5 w-5 rounded-full flex justify-center items-center hover:text-neutral-700 cursor-pointer transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-twitter-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </a>
              <a
                href=""
                target="_blank"
                className="h-5 w-5 rounded-full flex justify-center items-center hover:text-neutral-700 cursor-pointer transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex gap-x-1 items-center">
            <p className="text-xl font-semibold text-neutral-800">Okay Bears</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="black"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-badge-check"
            >
              <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <div className="">
            <p className="font-semibold text-neutral-800 text-xs">
              Floor Price
            </p>
            <p className="font-semibold text-neutral-800">
              3.93{" "}
              <span className="text-green-700 font-normal text-xs">+3.94%</span>
            </p>
          </div>
          <div className="">
            <p className="font-semibold text-neutral-800 text-xs">Top Offer</p>
            <p className="font-semibold text-neutral-800">3.229</p>
          </div>
          <div className="">
            <p className="font-semibold text-neutral-800 text-xs">24h Vol</p>
            <p className="font-semibold text-neutral-800">153.1</p>
          </div>
          <div className="">
            <p className="font-semibold text-neutral-800 text-xs">24h Sales</p>
            <p className="font-semibold text-neutral-800">41</p>
          </div>
          <div className="">
            <p className="font-semibold text-neutral-800 text-xs">
              24h Attempts
            </p>
            <p className="font-semibold text-neutral-800">48</p>
          </div>
          <div className="">
            <p className="font-semibold text-neutral-800 text-xs">All Volume</p>
            <p className="font-semibold text-neutral-800">3.4M</p>
          </div>
          <div className="">
            <p className="font-semibold text-neutral-800 text-xs">
              Listed Supply
            </p>
            <p className="font-semibold text-neutral-800">
              1,139/9,858
              <span className="text-sm text-neutral-700 font-normal">
                {" "}
                11.6%
              </span>
            </p>
          </div>
          <div className="">
            <p className="font-semibold text-neutral-800 text-xs">Owners</p>
            <p className="font-semibold text-neutral-800">
              4.57K{" "}
              <span className="text-sm text-neutral-700 font-normal">
                46.3%
              </span>
            </p>
          </div>
          <div className="">
            <p className="font-semibold text-neutral-800 text-xs">Network</p>
            <p className="font-semibold text-neutral-800">SOL</p>
          </div>
        </div>
      </div>
    </div>
  );
}
