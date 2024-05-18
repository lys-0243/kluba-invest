"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonies() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrow: false,
  };
  return (
    <section className=" bg-bleu py-16 space-y-8 flex flex-col justify-center">
      <div className=" space-y-4">
        <div className="flex justify-center items-center gap-4 uppercase font-PBold tracking-wider text-lg text-white">
          <div className=" bg-orange h-[3px] w-[5%]"></div>
          <p>Les avis de nos clients</p>
          <div className=" bg-orange h-[3px] w-[5%]"></div>
        </div>
        <h2 className=" text-5xl font-PBold text-white text-center">
          Temoignages
        </h2>
      </div>

      <div className="flex flex-col justify-center items-center mx-auto 2xl:max-w-screen-xl xl:max-w-screen-xl">

        <div className="grid grid-cols-3 justify-center items-center gap-7 px-12">
          <div className=" bg-white group hover:bg-orange flex flex-col w-full shadow-xl rounded-xl p-8 gap-4">
            <p className="group-hover:text-white text-bleu font-PMedium italic">
              « Notre club réunit des dirigeants passionnés qui souhaitent
              échanger autour des thématiques du numérique (mais pas que) et
              générer des leads qualifiés. Depuis notre création, nous
              travaillons aussi sur la cohésion du groupe en partageant sur les
              expériences de chacun et en organisant des activités hors du
              groupe (rendez-vous croisés, visites d’entreprise, ateliers…) »"
            </p>
            <div className="flex items-center gap-4">
              <div className=" w-12 h-12 bg-[url('/img/kt.jpg')] rounded-full bg-cover"></div>

              <div>
                <h4 className="group-hover:text-white font-PBold text-sm text-bleu">
                  Kristen Tshika
                </h4>
                <p className=" group-hover:text-white uppercase text-xs font-PMedium text-bleu">
                  CEO KTC
                </p>
              </div>
            </div>
          </div>

          <div className=" bg-white group hover:bg-orange flex flex-col w-full shadow-xl rounded-xl p-8 gap-4">
            <p className="group-hover:text-white text-bleu font-PMedium italic">
              « Notre club réunit des dirigeants passionnés qui souhaitent
              échanger autour des thématiques du numérique (mais pas que) et
              générer des leads qualifiés. Depuis notre création, nous
              travaillons aussi sur la cohésion du groupe en partageant sur les
              expériences de chacun et en organisant des activités hors du
              groupe (rendez-vous croisés, visites d’entreprise, ateliers…) »"
            </p>
            <div className="flex items-center gap-4">
              <div className=" w-12 h-12 bg-[url('/img/kristen.jpg')] rounded-full bg-cover"></div>

              <div>
                <h4 className="group-hover:text-white font-PBold text-sm text-bleu">
                  Sylvain Lys
                </h4>
                <p className=" group-hover:text-white uppercase text-xs font-PMedium text-bleu">
                  Dev LycGroup
                </p>
              </div>
            </div>
          </div>

          <div className=" bg-white group hover:bg-orange flex flex-col w-full shadow-xl rounded-xl p-8 gap-4">
            <p className="group-hover:text-white text-bleu font-PMedium italic">
              « Notre club réunit des dirigeants passionnés qui souhaitent
              échanger autour des thématiques du numérique (mais pas que) et
              générer des leads qualifiés. Depuis notre création, nous
              travaillons aussi sur la cohésion du groupe en partageant sur les
              expériences de chacun et en organisant des activités hors du
              groupe (rendez-vous croisés, visites d’entreprise, ateliers…) »"
            </p>
            <div className="flex items-center gap-4">
              <div className=" w-12 h-12 bg-[url('/img/blog.png')] rounded-full bg-cover"></div>
              <div>
                <h4 className="group-hover:text-white font-PBold text-sm text-bleu">
                  Beaudrick K.
                </h4>
                <p className=" group-hover:text-white uppercase text-xs font-PMedium text-bleu">
                  CEO Djodici
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
