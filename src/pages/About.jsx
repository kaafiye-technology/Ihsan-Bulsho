// src/pages/About.js
import React from "react";

const About = () => {
  return (
    <div className="w-full px-4 py-10 font-sans text-gray-800">
      {" "}
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-4">IHSAAN BULSHO</h1>
      {/* Subtitle */}
      <h2 className="text-2xl text-center font-semibold mb-8">
        Warbixin Kooban – Ramadaan Cunto iyo Biyo Qaybin
      </h2>
      {/* Hordhac */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Hordhac</h3>
        <p>
          Ihsan Bulsho waa hay’ad samafal oo u taagan taageerada iyo garab
          istaagga bulshada nugul. Iyadoo lagu guda jiro Bisha Barakeysan ee
          Ramadaan, hay’addu waxay diiradda saareysaa caawinta dadka ay abaaruhu
          saameeyeen, gaar ahaan qoysaska danyarta ah ee wajahaya cunto yari iyo
          biyo la’aan.
        </p>
      </section>
      {/* Ujeeddada Mashruuca */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Ujeeddada Mashruuca</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            In la gaarsiiyo cunto ku filan qoysaska ay abaaruhu saameeyeen.
          </li>
          <li>
            In la bixiyo biyo nadiif ah oo la gaarsiiyo deegaanada abaartu
            saameysay.
          </li>
          <li>
            In la yareeyo macaluusha iyo biyo la’aanta inta lagu jiro Bisha
            Ramadaan.
          </li>
          <li>In la kobciyo isku duubnida iyo iskaashiga bulshada.</li>
        </ul>
      </section>
      {/* Hawlaha La Qorsheeyay */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Hawlaha La Qorsheeyay</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <span className="font-semibold">Cunto Qaybin:</span> Qaybinta
            raashin qalalan sida bariis, bur, sonkor, saliid iyo digir, si loo
            taageero qoysaska danyarta ah inta lagu jiro Ramadaan.
          </li>
          <li>
            <span className="font-semibold">Biyo Qaybin:</span> Gaarsiinta biyo
            nadiif ah iyadoo la adeegsanayo booyado iyo haamo keyd ah, si loo
            daboolo baahida degdegga ah ee ka jirta deegaanada abaartu
            saameysay.
          </li>
        </ol>
      </section>
      {/* Gunaanad */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Gunaanad</h3>
        <p>
          Ihsan Bulsho waxay aaminsan tahay in wanaag wadajir lagu gaari karo.
          Mashruucan Ramadaan wuxuu yahay mid lagu badbaadinayo qoysas badan oo
          la tacaalaya duruufaha adag ee abaaraha. Waxaan ku martiqaadeynaa
          bulshada iyo deeq-bixiyeyaasha inay ka qayb qaataan dadaalkan samafal.
        </p>
      </section>
    </div>
  );
};

export default About;
