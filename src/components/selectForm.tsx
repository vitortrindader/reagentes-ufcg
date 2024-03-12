"use client";
import { ChangeEvent, useEffect, useState } from "react";
import Select from "./select.tsx";

export default function SelectForm({
  filterLab,
  centros,
  labs,
  filterCentro,
  reagentes,
  filterReagente,
}) {
  const nomesReagentes = reagentes.map((r) => {
    return r.name;
  });
  return (
    <div className="mt-4 flex gap-4 flex-col lg:flex-row">
      <Select
        title="Centro Acadêmico"
        options={centros}
        setSelected={(s: ChangeEvent<HTMLInputElement>) =>
          filterCentro(s.target.value)
        }
      />
      <Select
        title="Laboratório"
        options={labs}
        setSelected={(s: ChangeEvent<HTMLInputElement>) =>
          filterLab(s.target.value)
        }
      />
      <Select
        title="Reagente"
        options={nomesReagentes}
        setSelected={(s: ChangeEvent<HTMLInputElement>) =>
          filterReagente(s.target.value)
        }
      />
    </div>
  );
}
