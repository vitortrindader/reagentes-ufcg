"use client";
import { ChangeEvent, useEffect, useState } from "react";
import Select from "./select.tsx";
import { getCentrosInfo } from "@/utils/centrosList.ts";

export async function getServerSideProps() {
  return {
    props: {
      message: "Hello world!",
    },
  };
}

export default function SelectForm() {
  const [centros, setCentros] = useState<(string | undefined)[]>([]);
  const [labs, setLabs] = useState<(string | undefined)[]>([]);

  const [selectedCentro, setSelectedCentro] = useState<string>("");

  useEffect(() => {
    const role = "UFCG";
    const centro = "";
    const lab = "";
    if (centro) {
      setSelectedCentro(centro);
    }

    const res = getCentrosInfo({ role, centro, lab });

    const centroslist = res.map((c) => c.centro);
    setCentros(centroslist);

    const selected = res.find(
      (c) => c.centro === (selectedCentro || res[0].centro)
    );
    console.log(selected);
    const labsList = selected?.labs?.map((l) => l.nome) || [];
    setLabs(labsList);
  }, [selectedCentro]);

  const setCentro = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(e.target?.value);
    setSelectedCentro(e.target?.value);
  };

  return (
    <div className="mt-10 flex gap-10">
      <Select
        title="Centro Acadêmico"
        options={centros}
        setSelected={(s: ChangeEvent<HTMLInputElement>) => setCentro(s)}
      />
      <Select title="Laboratório" options={labs} />
    </div>
  );
}
