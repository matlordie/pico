export function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md w-screen border shadow-sm border-b border-neutral-200 px-5 py-2 fixed top-0">
      <div className="max-w-3xl lg:max-w-5xl mx-auto flex items-center justify-between gap-x-[1px] ">
        <div className="flex gap-x-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-square"
            className="text-neutral-700"
          >
            <rect width="20" height="20" x="3" y="3" rx="2" />
          </svg>
        </div>
        <button className="bg-neutral-100 px-3 py-1 rounded-lg text-xs text-neutral-800 font-semibold border border-neutral-300 active:bg-neutral-200/70 outline-none">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
}
