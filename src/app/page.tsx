import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-orange ">
      <section className="bg-[url('/img/home/bg-home.png')] bg-cover min-h-screen">
        <nav className="mx-auto 2xl:max-w-screen-xl xl:max-w-screen-xl flex justify-between items-center">
          <div>
            <Link href="/">
              <Image
                src="/img/logos/kaapital-logo-blanc.png"
                alt="Logo Kluba"
                width={110}
                height={100}
              />
            </Link>
          </div>

          <div className=" text-text font-U-medium  space-x-8">
            <Link href="#" key="#" className="">
              accueil
            </Link>
            <Link href="#" key="#" className="">
              investir/épargner
            </Link>
            <Link href="#" key="#" className="">
              blog
            </Link>
          </div>

          <div>
            <Link href="#">S&apos;inscrire</Link>
          </div>
        </nav>
      </section>

      <section>
        autre section <br />
        autre section <br />
        autre section <br />
        autre section <br />
      </section>
    </main>
  );
}

// mx-auto 2xl:max-w-screen-xl xl:max-w-screen-xl
