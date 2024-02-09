interface Centro {
  centro?: string;
  labs?: Lab[];
}

interface Lab {
  nome?: string;
}

const centrosNames: Centro[] = [
  {
    centro: "CCBS",
    labs: [{ nome: "da" }, { nome: "ba" }],
  },
  {
    centro: "CCT",
    labs: [{ nome: "ba" }, { nome: "cs" }],
  },
  {
    centro: "CEEI",
    labs: [{ nome: "123" }, { nome: "sds" }],
  },
  {
    centro: "CH",
    labs: [{ nome: "fafa" }, { nome: "sdsd" }],
  },
  {
    centro: "CTRN",
    labs: [{ nome: "gga" }, { nome: "gss" }],
  },
  {
    centro: "CFP",
    labs: [{ nome: "qqq" }, { nome: "qqq" }],
  },
  {
    centro: "CES",
    labs: [{ nome: "rrty" }, { nome: "weqwsd" }],
  },
  {
    centro: "CSTR",
    labs: [{ nome: "asdasdasd" }, { nome: "asdasd" }],
  },
  {
    centro: "CCTA",
    labs: [{ nome: "vavav" }, { nome: "vavav" }],
  },
  {
    centro: "CCJS",
    labs: [{ nome: "wawwa" }, { nome: "wawaw" }],
  },
  {
    centro: "CDSA",
    labs: [{ nome: "tytyty" }, { nome: "tytyt" }],
  },
];

export function getCentrosInfo({
  role,
  centro,
  lab,
}: {
  role: string;
  centro?: string;
  lab?: string;
}): Centro[] {
  if (role === "UFCG") {
    return centrosNames;
  }

  if (role === "centro" && centro) {
    const centroInfo = centrosNames.find((c) => c.centro === centro);
    return centroInfo ? [centroInfo] : [];
  }

  return [
    {
      centro: centro,
      labs: [{ nome: lab }],
    },
  ];
}
