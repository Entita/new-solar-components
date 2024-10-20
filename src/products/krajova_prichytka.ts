export default {
  id: 'krajova_prichytka',
  model: 'krajova_prichytka',
  description: 'Krajová příchytka pro snadnou a pevnou montáž fotovoltaických panelů na hliníkové profily.',
  full_description: 'Krajová příchytka je klíčovým prvkem pro instalaci fotovoltaických panelů, používaná k upevnění panelu k hliníkovému konstrukčnímu profilu. Tato příchytka je vyrobena z kvalitního hliníku, což zaručuje vysokou pevnost a odolnost vůči povětrnostním vlivům.',
  attributes: [
    { key: 'Index', value: '1-124' },
    { key: 'Materiál', value: 'Hliník 6060' },
    { key: 'Rozměry', value: 'výška rámu 35 mm, otvor 8,5mm' },
    { key: 'Tloušťka materiálu', value: '2,8 mm' },
    { key: 'Aplikace', value: 'Používá se pro montáž na ploché a šikmé střechy, ideální pro ráfkové panely umístěné v řadě' },
    { key: 'Váha', value: '0,034 kg' },
  ],
  variants: [
    { name : 'Krajová příchytka (přírodní) 30mm', price: 0, attributes: [{ key: 'Rozměry', value: 'výška rámu 30 mm, otvor 8,5mm' }, { key: 'Váha', value: '0,034 kg' }] },
    { name : 'Krajová příchytka (přírodní) 35mm', price: 0, attributes: [{ key: 'Rozměry', value: 'výška rámu 35 mm, otvor 8,5mm' }, { key: 'Váha', value: '0,036 kg' }] },
    { name : 'Krajová příchytka (černá) 30mm', price: 0, attributes: [{ key: 'Rozměry', value: 'výška rámu 30 mm, otvor 8,5mm' }, { key: 'Váha', value: '0,034 kg' }] },
    { name : 'Krajová příchytka (černá) 35mm', price: 0, attributes: [{ key: 'Rozměry', value: 'výška rámu 35 mm, otvor 8,5mm' }, { key: 'Váha', value: '0,036 kg' }] },
  ]
}