export default function formatter(value: number): string {
  let out = String(Number(value).toFixed(3));
  value = Number(value.toFixed(3));
  // if the value is over 1000 then we divide it by 1000 and add a K
  if (value >= 1000 && value < 1000000) {
    value = value / 1000;
    value = Number(value.toFixed(2));
    out = value + "K";
  }
  // if the value is over 1000000 then we divide it by 1000000 and add a M
  else if (value >= 1000000) {
    value = value / 1000000;
    value = Number(value.toFixed(2));
    out = value + "M";
  }

  return out;
}
