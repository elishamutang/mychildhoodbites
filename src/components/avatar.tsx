import Link from "next/link";

export default function Avatar({ name }: { name: string }) {
  return (
    <Link
      href="/dashboard"
      className="font-inter font-bold hover:bg-green-600 transition duration-300 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg"
    >
      {name.toUpperCase().split("")[0]}
    </Link>
  );
}
