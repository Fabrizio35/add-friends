import { usePathname } from "next/navigation";
import Link from "next/link";

const Header: React.FC = () => {
  const path = usePathname();

  return (
    <div className="container mx-auto fixed flex justify-center z-10">
      <header className="bg-headerColor mt-10 rounded-full p-3 sm:p-5 flex justify-between backdrop-blur-md w-11/12">
        <Link
          href="/"
          className="flex gap-2 text-fourth items-center ml-5 select-none"
        >
          <h2 className="font-sans text-2xl sm:text-4xl">Add Friends</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-friends w-7 h-7 sm:w-9 sm:h-9"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M5 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5"></path>
            <path d="M17 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M15 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4"></path>
          </svg>
        </Link>

        <nav className="flex items-center sm:mr-5">
          {path === "/" ? (
            <Link
              href="/friends"
              className="flex text-fourth items-center cursor-pointer py-2 px-2.5 rounded-full gap-2 select-none hover:bg-second"
            >
              <span className="text-2xl hidden sm:inline">My friends</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-user-heart w-7 h-7"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h.5"></path>
                <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z"></path>
              </svg>
            </Link>
          ) : (
            <Link
              href="/"
              className="flex text-fourth items-center cursor-pointer py-2 px-2.5 rounded-full gap-2 select-none hover:bg-second"
            >
              <span className="text-2xl hidden sm:inline">Back</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-back-up w-7 h-7"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 14l-4 -4l4 -4"></path>
                <path d="M5 10h11a4 4 0 1 1 0 8h-1"></path>
              </svg>
            </Link>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;
