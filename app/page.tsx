import { UserButton } from "@clerk/nextjs";

export default async function Home() {
  return (
    <section className="px-14 py-7">
      <p className="font-sans">Woi</p>
      <UserButton />
    </section>
  );
}
