import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-blue-900 text-white px-5">
      <div className="container  mx-auto flex justify-between items-center py-3">
        <h3 className="uppercase font-bold text-2xl">List Tasks</h3>
        <ul className="flex gap-x-10 text-lg font-bold ">
          <li>
            {" "}
            <Link href="/" className="text-slate-300  hover:text-slate-200">
              {" "}
              Tasks
            </Link>
          </li>
          <li>
            <Link href="/form" className="text-slate-300  hover:text-slate-200">
              {" "}
              Form
            </Link>
          </li>
        </ul>{" "}
      </div>
    </nav>
  );
}
