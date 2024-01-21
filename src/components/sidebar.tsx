"use client";
import { usePathname } from "next/navigation";
import Icon, { AvailableIcons } from "./icon.tsx";
import { useState } from "react";

interface ButtonProps {
  href: string;
  pathname: string;
  title: string;
  icon: AvailableIcons;
}

interface MenuContentProps {
  pathname: string;
}

function MenuContent({ pathname }: MenuContentProps) {
  return (
    <>
      <span className="pl-3 text-xs text-azulClaroDemais">MENU</span>
      <SideBarButton
        icon="estoque"
        href="/estoque"
        title="Estoque"
        pathname={pathname}
      />
      <SideBarButton
        icon="historico"
        href="/historico"
        title="Histórico"
        pathname={pathname}
      />
      <SideBarButton
        icon="relatorio"
        href="/relatorio"
        title="Relatório"
        pathname={pathname}
      />
      <SideBarButton
        icon="usuarios"
        href="/usuarios"
        title="Usuários"
        pathname={pathname}
      />
      <SideBarButton
        icon="configuracoes"
        href="/configuracoes"
        title="Configurações"
        pathname={pathname}
      />
    </>
  );
}

function SideBarButton({ href, pathname, title, icon }: ButtonProps) {
  const isSelected = pathname === href;
  const iconType = isSelected ? `${icon}-selected` : `${icon}-default`;
  return (
    <a href={href}>
      <div
        className={`pl-2 h-10 flex justify-between items-center ${
          isSelected ? "bg-azulClaro" : ""
        }`}
      >
        <div className="flex items-center gap-3 ">
          <Icon id={iconType} />

          <span className={isSelected ? "text-verde-piscina" : "text-white"}>
            {title}
          </span>
        </div>

        {isSelected && <div className="h-10 w-1 bg-verde-piscina"></div>}
      </div>
    </a>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="fixed md:hidden h-10 w-full flex items-center justify-end px-4 bg-azulEscuro z-40">
        <div className="" onClick={() => setOpen(!open)}>
          {open ? <Icon id={"x"} /> : <Icon id={"hamburguer"} />}
        </div>
      </div>

      <div className="md:hidden flex flex-col items-center justify-center h-screen py-2 fixed">
        <div
          className={`top-0 right-0 w-full bg-azulEscuro pl-4  pt-10 text-white fixed h-full z-10 ease-in-out duration-300  ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <MenuContent pathname={pathname} />
        </div>
      </div>

      <div className=" bg-azulEscuro min-w-[200px] min-h-screen fixed hidden md:block pt-10">
        <MenuContent pathname={pathname} />
      </div>
    </>
  );
}
