import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function BeforeFooter() {
  return (
    <div className="mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg lg:px-10 bg-orange flex py-6 items-center justify-between">
      <div className=" space-y-5 pl-10">
        <h3 className=" font-PBold text-white text-4xl">
          Club Kluba, la solution la <br /> plus performante <br /> pour
          investir en startups.
        </h3>
        <Link
          href="#"
          className="text-orange px-6 py-3 bg-white uppercase font-PMedium tracking-wider text-sm rounded-2xl flex justify-center w-max"
        >
          DEVENIR MEMBRE
        </Link>
      </div>
      <div>
        <Image
          src="/img/home/footer.png"
          alt="Footer Image"
          width={250}
          height={250}
          className=" rounded-lg"
        />
      </div>
    </div>
  );
}
