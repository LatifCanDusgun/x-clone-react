import { Popover, Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function More() {
  return (
    <Popover className="relative">
      <Popover.Button className="py-0.5 block group outline-none">
        <div className="p-3 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-[#eff3f41a]">
          <div className="w-[26.25px] h-[26.25px] relative">
            <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
              <path
                fill="#e7e9ea"
                d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
              />
            </svg>
          </div>
          <div className="pr-4 text-xl">Daha Fazla</div>
        </div>
      </Popover.Button>

      <Popover.Panel className="w-[318px] absolute bottom-0 left-0 bg-black rounded-xl shadow-box overflow-hidden">
      <button className="p-3 h-14 w-full transition-colors inline-flex items-center gap-5 group-hover:bg-[#eff3f41a]">
          <div className="w-[26.25px] h-[26.25px] relative">
            <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
              <path
                fill="#e7e9ea"
                d="M 23 3 v 14 h -2 V 5 H 5 V 3 h 18 Z M 10 17 c 1.1 0 2 -1.34 2 -3 s -0.9 -3 -2 -3 s -2 1.34 -2 3 s 0.9 3 2 3 Z M 1 7 h 18 v 14 H 1 V 7 Z m 16 10 c -1.1 0 -2 0.9 -2 2 h 2 v -2 Z m -2 -8 c 0 1.1 0.9 2 2 2 V 9 h -2 Z M 3 11 c 1.1 0 2 -0.9 2 -2 H 3 v 2 Z m 0 4 c 2.21 0 4 1.79 4 4 h 6 c 0 -2.21 1.79 -4 4 -4 v -2 c -2.21 0 -4 -1.79 -4 -4 H 7 c 0 2.21 -1.79 4 -4 4 v 2 Z m 0 4 h 2 c 0 -1.1 -0.9 -2 -2 -2 v 2 Z"
              />
            </svg>
          </div>
          <div className="pr-4 text-xl font-bold">Para kazanma</div>
        </button>

        <Disclosure>
      <Disclosure.Button className="h-[52px] flex items-center  justify-between w-full px-4 font-bold hover:bg-[#eff3f41a] transition-colors">
        İçerik Üreticisi Stüdyosu
        <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
          <path
          fill="currentColor"
          d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z" />
        </svg>
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500">
        <Link to="/" className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors text-white">
        <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
          <path
          fill="currentColor"
          d="M 8.75 21 V 3 h 2 v 18 h -2 Z M 18 21 V 8.5 h 2 V 21 h -2 Z M 4 21 l 0.004 -10 h 2 L 6 21 H 4 Z m 9.248 0 v -7 h 2 v 7 h -2 Z" />
        </svg>
        İstatistikler
        </Link>
      </Disclosure.Panel>
    </Disclosure>
    <Disclosure>
      <Disclosure.Button className="h-[52px] flex items-center transition-colors justify-between w-full px-4 font-bold hover:bg-[#eff3f41a]">
        Profesyonel Araçlar
        <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
          <path
          fill="currentColor"
          d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z" />
        </svg>
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500">
      <Link to="/" className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors text-white">
        <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
          <path
          fill="currentColor"
          d="M 1.996 5.5 c 0 -1.38 1.119 -2.5 2.5 -2.5 h 15 c 1.38 0 2.5 1.12 2.5 2.5 v 13 c 0 1.38 -1.12 2.5 -2.5 2.5 h -15 c -1.381 0 -2.5 -1.12 -2.5 -2.5 v -13 Z m 2.5 -0.5 c -0.277 0 -0.5 0.22 -0.5 0.5 v 13 c 0 0.28 0.223 0.5 0.5 0.5 h 15 c 0.276 0 0.5 -0.22 0.5 -0.5 v -13 c 0 -0.28 -0.224 -0.5 -0.5 -0.5 h -15 Z m 8.085 5 H 8.996 V 8 h 7 v 7 h -2 v -3.59 l -5.293 5.3 l -1.415 -1.42 L 12.581 10 Z" />
        </svg>
        Reklamlar
        </Link>
      </Disclosure.Panel>
    </Disclosure>
    <Disclosure>
      <Disclosure.Button className="h-[52px] flex items-center transition-colors justify-between w-full px-4 font-bold hover:bg-[#eff3f41a]">
       Ayarlar ve Destek
        <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
          <path
          fill="currentColor"
          d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z" />
        </svg>
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500">
      <Link to="/" className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors text-white">
        <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
          <path
          fill="currentColor"
          d="M 10.54 1.75 h 2.92 l 1.57 2.36 c 0.11 0.17 0.32 0.25 0.53 0.21 l 2.53 -0.59 l 2.17 2.17 l -0.58 2.54 c -0.05 0.2 0.04 0.41 0.21 0.53 l 2.36 1.57 v 2.92 l -2.36 1.57 c -0.17 0.12 -0.26 0.33 -0.21 0.53 l 0.58 2.54 l -2.17 2.17 l -2.53 -0.59 c -0.21 -0.04 -0.42 0.04 -0.53 0.21 l -1.57 2.36 h -2.92 l -1.58 -2.36 c -0.11 -0.17 -0.32 -0.25 -0.52 -0.21 l -2.54 0.59 l -2.17 -2.17 l 0.58 -2.54 c 0.05 -0.2 -0.03 -0.41 -0.21 -0.53 l -2.35 -1.57 v -2.92 L 4.1 8.97 c 0.18 -0.12 0.26 -0.33 0.21 -0.53 L 3.73 5.9 L 5.9 3.73 l 2.54 0.59 c 0.2 0.04 0.41 -0.04 0.52 -0.21 l 1.58 -2.36 Z m 1.07 2 l -0.98 1.47 C 10.05 6.08 9 6.5 7.99 6.27 l -1.46 -0.34 l -0.6 0.6 l 0.33 1.46 c 0.24 1.01 -0.18 2.07 -1.05 2.64 l -1.46 0.98 v 0.78 l 1.46 0.98 c 0.87 0.57 1.29 1.63 1.05 2.64 l -0.33 1.46 l 0.6 0.6 l 1.46 -0.34 c 1.01 -0.23 2.06 0.19 2.64 1.05 l 0.98 1.47 h 0.78 l 0.97 -1.47 c 0.58 -0.86 1.63 -1.28 2.65 -1.05 l 1.45 0.34 l 0.61 -0.6 l -0.34 -1.46 c -0.23 -1.01 0.18 -2.07 1.05 -2.64 l 1.47 -0.98 v -0.78 l -1.47 -0.98 c -0.87 -0.57 -1.28 -1.63 -1.05 -2.64 l 0.34 -1.46 l -0.61 -0.6 l -1.45 0.34 c -1.02 0.23 -2.07 -0.19 -2.65 -1.05 l -0.97 -1.47 h -0.78 Z M 12 10.5 c -0.83 0 -1.5 0.67 -1.5 1.5 s 0.67 1.5 1.5 1.5 c 0.82 0 1.5 -0.67 1.5 -1.5 s -0.68 -1.5 -1.5 -1.5 Z M 8.5 12 c 0 -1.93 1.56 -3.5 3.5 -3.5 c 1.93 0 3.5 1.57 3.5 3.5 s -1.57 3.5 -3.5 3.5 c -1.94 0 -3.5 -1.57 -3.5 -3.5 Z" />
        </svg>
          Ayarlar ve gizlilik
        </Link>
      </Disclosure.Panel>
      <Disclosure.Panel className="text-gray-500">
      <Link to="/" className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors text-white">
        <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
          <path
          fill="currentColor"
          d="M 11.57 11.96 l 0.99 -0.79 c 0.33 -0.26 0.56 -0.53 0.7 -0.8 c 0.15 -0.27 0.22 -0.57 0.22 -0.91 c 0 -0.41 -0.12 -0.74 -0.38 -0.97 s -0.62 -0.35 -1.09 -0.35 s -0.85 0.12 -1.13 0.37 c -0.26 0.25 -0.4 0.59 -0.4 1.03 c 0 0.2 0.03 0.42 0.08 0.65 l -2.07 -0.15 c -0.06 -0.29 -0.09 -0.55 -0.09 -0.79 c 0 -0.84 0.33 -1.51 0.98 -2.01 c 0.67 -0.49 1.55 -0.74 2.66 -0.74 c 1.17 0 2.07 0.24 2.71 0.73 c 0.63 0.48 0.95 1.16 0.95 2.04 c 0 0.98 -0.47 1.86 -1.4 2.65 l -0.87 0.73 c -0.17 0.15 -0.29 0.28 -0.36 0.4 c -0.06 0.11 -0.09 0.26 -0.09 0.45 v 0.46 h -2.1 v -0.67 c 0 -0.3 0.06 -0.55 0.17 -0.75 c 0.12 -0.2 0.29 -0.39 0.52 -0.58 Z m -0.52 5.17 c 0.24 0.25 0.56 0.37 0.93 0.37 c 0.39 0 0.7 -0.12 0.94 -0.37 c 0.25 -0.25 0.37 -0.56 0.37 -0.94 c 0 -0.39 -0.12 -0.7 -0.37 -0.95 c -0.24 -0.25 -0.55 -0.37 -0.94 -0.37 c -0.37 0 -0.69 0.12 -0.93 0.37 s -0.36 0.56 -0.36 0.95 c 0 0.38 0.12 0.69 0.36 0.94 Z M 22.25 12 c 0 5.66 -4.59 10.25 -10.25 10.25 S 1.75 17.66 1.75 12 S 6.34 1.75 12 1.75 S 22.25 6.34 22.25 12 Z M 12 20.25 c 4.56 0 8.25 -3.69 8.25 -8.25 S 16.56 3.75 12 3.75 S 3.75 7.44 3.75 12 s 3.69 8.25 8.25 8.25 Z" />
        </svg>
        Yardım Merkezi
        </Link>
      </Disclosure.Panel>
      <Disclosure.Panel className="text-gray-500">
      <Link to="/" className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors text-white">
        <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
          <path
          fill="currentColor"
          d="M20 12h2v6.5c0 1.38-1.12 2.5-2.5 2.5h-15C3.12 21 2 19.88 2 18.5v-13C2 4.12 3.12 3 4.5 3H11v2H4.5c-.28 0-.5.22-.5.5v13c0 .28.22.5.5.5h15c.27 0 .5-.22.5-.5V12zm2.31-6.78l-6.33 7.18c-.2 2.02-1.91 3.6-3.98 3.6H8v-4c0-2.07 1.58-3.78 3.6-3.98l7.18-6.33c.99-.88 2.49-.83 3.43.1.93.94.98 2.44.1 3.43zm-1.52-2.01c-.19-.19-.49-.2-.69-.02l-6.08 5.36c.59.35 1.08.84 1.43 1.43l5.36-6.08c.18-.2.17-.5-.02-.69z" />
        </svg>
        Görünüm
        </Link>
      </Disclosure.Panel>
      <Disclosure.Panel className="text-gray-500">
      <Link to="/" className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors text-white">
        <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
          <path
          fill="currentColor"
          d="M 1.996 5.5 c 0 -1.38 1.119 -2.5 2.5 -2.5 h 15 c 1.38 0 2.5 1.12 2.5 2.5 v 13 c 0 1.38 -1.12 2.5 -2.5 2.5 h -15 c -1.381 0 -2.5 -1.12 -2.5 -2.5 v -13 Z m 2.5 -0.5 c -0.277 0 -0.5 0.22 -0.5 0.5 v 13 c 0 0.28 0.223 0.5 0.5 0.5 h 15 c 0.276 0 0.5 -0.22 0.5 -0.5 v -13 c 0 -0.28 -0.224 -0.5 -0.5 -0.5 h -15 Z m 8.085 5 H 8.996 V 8 h 7 v 7 h -2 v -3.59 l -5.293 5.3 l -1.415 -1.42 L 12.581 10 Z" />
        </svg>
        Klavye kısayolları
        </Link>
      </Disclosure.Panel>
    </Disclosure>

      </Popover.Panel>
     
   
  
    </Popover>
  );
}
