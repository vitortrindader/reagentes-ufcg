"use client";
import SelectForm from "@/components/selectForm";
import Table from "@/components/table";
import { useEffect, useState } from "react";
import { getHistory, getReagentes } from "../../supabase/supabase";

function Historico() {
  const [tableSource, setTableSource] = useState([]);
  const [filterByLab, setFilterByLab] = useState("");
  const [filterByReagente, setFilterByReagente] = useState("");
  const [filterByCentro, setFilterByCentro] = useState("");
  const [labs, setLabs] = useState([]);
  const [centros, setCentros] = useState([]);
  const [reagentes, setReagentes] = useState([]);

  useEffect(() => {
    getData();
    fetchReagentes();
  }, [filterByLab, filterByCentro, filterByReagente]);

  async function getData() {
    const data = await getHistory();

    const laboratoriosCentros = data.reduce(
      (accumulator, currentValue) => {
        const { lab, centro } = currentValue;
        if (!accumulator.laboratorios.includes(lab)) {
          accumulator.laboratorios.push(lab);
        }
        if (!accumulator.centros.includes(centro)) {
          accumulator.centros.push(centro);
        }
        return accumulator;
      },
      { laboratorios: [], centros: [] }
    );

    const laboratoriosUnicos = laboratoriosCentros.laboratorios;
    const centrosUnicos = laboratoriosCentros.centros;

    setLabs(laboratoriosUnicos);
    setCentros(centrosUnicos);

    let filteredData = data;

    if (filterByLab && filterByLab !== "Todos") {
      filteredData = filteredData.filter((d) => d.lab === filterByLab);
    }

    if (filterByCentro && filterByCentro !== "Todos") {
      filteredData = filteredData.filter((d) => d.centro === filterByCentro);
    }
    if (filterByReagente && filterByReagente !== "Todos") {
      filteredData = filteredData.filter(
        (d) => d.reagente.trim() === filterByReagente.trim()
      );
    }

    setTableSource(filteredData);
  }

  function filterLab(lab) {
    console.log(lab);
    setFilterByLab(lab);
  }

  function filterCentro(centro) {
    console.log(centro);
    setFilterByCentro(centro);
  }

  async function fetchReagentes() {
    const reagentes = await getReagentes();
    setReagentes(reagentes);
  }

  return (
    <>
      <h1 className="text-3xl font-bold">Histórico de Movimentações</h1>
      <SelectForm
        filterLab={(l) => filterLab(l)}
        filterCentro={(c) => filterCentro(c)}
        filterReagente={(c) => setFilterByReagente(c)}
        labs={labs}
        centros={centros}
        reagentes={reagentes}
      />
      <div style={{ marginBottom: "50px" }}></div> {/* Espaço de 20 pixels */}
      <Table source={tableSource} />
    </>
  );
}

export default Historico;
