import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center gap-4 bg-offwhite px-4 text-center text-olive">
      <h1 className="text-2xl font-bold uppercase">Page not found</h1>
      <p className="max-w-md text-sm text-olive/80">
        That link doesn&apos;t exist. Head back to Planet Cafe Bistro.
      </p>
      <Link
        href="/"
        className="rounded-full bg-olive px-6 py-3 text-xs font-bold uppercase tracking-wide text-white"
      >
        Home
      </Link>
    </div>
  );
}
