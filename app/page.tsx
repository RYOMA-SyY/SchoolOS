"use client";
import { useState } from "react";
import { GlobalNav } from "@/components/GlobalNav";
import { SubNav } from "@/components/SubNav";
import { Hero } from "@/components/Hero";
import { Pains } from "@/components/Pains";
import { Solution } from "@/components/Solution";
import { OfferTile } from "@/components/OfferTile";
import { CompareTable } from "@/components/CompareTable";
import { Calculator } from "@/components/Calculator";
import { Audience } from "@/components/Audience";
import { Steps } from "@/components/Steps";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { DevisBar } from "@/components/DevisBar";
import { OFFERS, type OfferId } from "@/data/offers";

export default function Home() {
  const [offer, setOffer] = useState<OfferId>("O3");
  const [eleves, setEleves] = useState(200);
  return (
    <div id="top">
      <GlobalNav />
      <SubNav offer={offer} eleves={eleves} />
      <main>
        <Hero />
        <Pains />
        <Solution />
        <div id="offres">
          {OFFERS.map((o, i) => (
            <OfferTile key={o.id} offer={o} index={i} />
          ))}
        </div>
        <CompareTable />
        <Calculator offer={offer} setOffer={setOffer} eleves={eleves} setEleves={setEleves} />
        <Audience />
        <Steps />
        <ContactForm offer={offer} setOffer={setOffer} eleves={eleves} />
      </main>
      <Footer />
      <DevisBar offer={offer} eleves={eleves} />
    </div>
  );
}
