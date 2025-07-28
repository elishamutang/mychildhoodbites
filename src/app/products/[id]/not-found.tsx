import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <div>404 - Page Not Found</div>
      <Link href="/">Go back to home</Link>
    </section>
  );
}
