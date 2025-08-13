import Link from "next/link";

export default function Avatar({ name }: { name: string }) {
  return (
    <Link
      href="/dashboard"
      className="font-inter font-bold hover:text-white hover:bg-red-600 transition duration-300 w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-600 text-lg border border-red-500"
    >
      {name.toUpperCase().split("")[0]}
    </Link>
  );
}
