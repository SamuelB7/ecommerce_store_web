import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchBar() {
    return (
        <div className="flex w-72">
            <input
                type="search"
                className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-slate-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none"
                placeholder="Search"
                aria-label="Search"
            />
            <button
                className="relative z-[2] flex items-center rounded-r px-6 py-2.5 text-xs font-medium uppercase leading-tight border border-solid border-slate-200 bg-slate-200"
                type="button"
            >
                <AiOutlineSearch />
            </button>
        </div>
    )
}