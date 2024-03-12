import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ufryefrykjuafatcsfmr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmcnllZnJ5a2p1YWZhdGNzZm1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzNzkwNzQsImV4cCI6MjAyMzk1NTA3NH0.BxRt0RgwwSI8-wJA9WVa3dsGUCUQZHaXavw4vDgEFSQ";

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function getReagentes() {
  try {
    const { data, error } = await supabase.from("reagentes").select();
    return data;
  } catch (error) {
    console.error("Erro ao obter histórico:", error.message);
    return [];
  }
}

export async function getHistory() {
  try {
    const id_usuario = 1;
    const { data: user, error: userError } = await supabase
      .from("usuarios")
      .select()
      .eq("id", id_usuario);
    if (userError) {
      throw userError;
    }

    let ufcg = user[0].ufcg_id;
    let centro = user[0].centro_id;
    let lab = user[0].lab_id;

    let data;

    if (ufcg === 1) {
      const { data: ufcgData, error: UfcgError } = await supabase
        .from("historico")
        .select();
      if (UfcgError) {
        throw UfcgError;
      } else {
        data = ufcgData;
      }
    }
    if (centro !== 0) {
      const { data: centroData, error: centroError } = await supabase
        .from("historico")
        .select()
        .eq("centro_id", centro);
      if (centroError) {
        throw centroError;
      } else {
        data = centroData;
      }
    }
    if (lab !== 0) {
      const { data: labData, error: labError } = await supabase
        .from("historico")
        .select()
        .eq("lab_id", lab);
      if (labError) {
        throw labError;
      } else {
        data = labData;
      }
    }

    // --------------------
    const testePromises = data.map(async (historicoItem) => {
      const { data: laboratorioData, error: laboratorioError } = await supabase
        .from("laboratorios")
        .select("name")
        .eq("id", historicoItem.user_id)
        .single();
      if (laboratorioError) {
        throw laboratorioError;
      }

      const { data: reagenteData, error: reagenteError } = await supabase
        .from("reagentes")
        .select("name")
        .eq("id", historicoItem.reagente_id)
        .single();
      if (reagenteError) {
        throw reagenteError;
      }

      const { data: userData, error: userError } = await supabase
        .from("usuarios")
        .select("name")
        .eq("id", historicoItem.user_id)
        .single();
      if (userError) {
        throw userError;
      }

      const { data: centroData, error: centroError } = await supabase
        .from("centros")
        .select("name")
        .eq("id", historicoItem.centro_id)
        .single();
      if (centroError) {
        throw centroError;
      }

      return {
        data: historicoItem.created_at,
        centro: centroData.name,
        lab: laboratorioData.name,
        quantidade: historicoItem.quantidade,
        reagente: reagenteData.name,
        usuario: userData.name,
      };
    });

    const teste = await Promise.all(testePromises);
    return teste;
  } catch (error) {
    console.error("Erro ao obter histórico:", error.message);
    return [];
  }
}
