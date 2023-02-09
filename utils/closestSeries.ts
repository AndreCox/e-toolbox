import eseries from "./eseries";

export default function closestSeries(series: number, value: number) {
  let E = eseries(series);
  E.push(E[0] * 10);

  let expon = Math.floor(Math.log10(value));
  let Ei = value / Math.pow(10, expon);

  let err = E.map((e) => Math.abs(e - Ei) / e);
  let min_m = Math.min(...err);
  let m = err.indexOf(min_m);

  let out = E[m] * Math.pow(10, expon);
  let out_err = (out - value) / value;

  return [out, out_err];
}
