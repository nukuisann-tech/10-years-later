/**
 * Curated stand-in photography (Unsplash) used across the concept site.
 * All ids were verified reachable before use. Replace with commissioned
 * photography before any real-world use.
 */
function unsplash(id: string, w: number) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;
}

export type Img = { id: string; alt: string; category: "architecture" | "lifestyle" | "material" | "people" };

const raw = {
  // House A — 庭と朝食を楽しむ家
  houseADuskTree: "1600585154340-be6161a56a0c",
  houseADuskEntry: "1600585153490-76fb20a32601",
  houseAEntrance: "1600585154526-990dced4db0d",
  houseADayGarden: "1600607688969-a5bfcd646154",
  houseAInterior: "1600607687939-ce8a6c25118c",

  // House B — 子どもの成長を見守る平屋
  houseBExterior: "1600047509807-ba8f99d2cdde",
  houseBKitchen: "1600585152220-90363fe7e115",
  houseBWindowSeat: "1509644851169-2acc08aa25b5",

  // House C — 雨の日が好きになる家
  houseCLiving: "1600210492493-0946911123ea",
  houseCStair: "1600566753086-00f18fb6b3ea",
  houseCArch: "1567016376408-0226e4d0c1ea",

  // House D — 本と静かに暮らす家
  houseDLiving: "1502672260266-1c1ef2d93688",
  houseDChair: "1517705008128-361805f42e86",
  houseDDoors: "1481277542470-605612bd2d61",

  // House E — 家族が自然と集まる台所
  houseELiving: "1600210491892-03d54c0aaf87",
  houseEGallery: "1600210492486-724fe5c67fb0",
  houseEShelf: "1594026112284-02bb6f3352fe",
  houseECoffee: "1517701550927-30cf4ba1dba5",
  houseEBath: "1595515106969-1ce29566ff1c",

  // Lifestyle / people
  familyCouch: "1476703993599-0035a21b17a9",
  teamWomanOutdoor: "1508214751196-bcfd4ca60f91",
  teamManGlasses: "1568602471122-7832951cc4c5",
  teamWomanCasual: "1580489944761-15a19d654956",
} as const;

export type ImageKey = keyof typeof raw;

export function image(key: ImageKey, w = 1600): string {
  return unsplash(raw[key], w);
}

export const heroImage = { key: "houseADuskTree" as ImageKey, alt: "木立に囲まれ、夕暮れに灯りがともる住宅の外観" };
