import eseries from "./eseries";

export default function divider(series: number, ratio: number) {
  // make sure ratio is between 0 and 1
  // if the ratio is greater than 1, then the ratio is inverted
  if (ratio > 1) {
    ratio = 1 / ratio;
  }

  ratio = Math.max(0, Math.min(1, ratio));
  let ratio_deg = Math.floor(-1 * Math.log10(ratio) + 1);
  let E = eseries(series);
  let Eb1 = E.map((e) => e * Math.pow(10, ratio_deg - 1));
  let Eb2 = E.map((e) => e * Math.pow(10, ratio_deg));

  // join the two arrays
  let Eb = Eb1.concat(Eb2);

  let div = E.map((e) => {
    return Eb.map((eb) => {
      return e / (e + eb);
    });
  });

  let err = div.map((d) => {
    return d.map((dd) => {
      return Math.abs(dd - ratio) / ratio;
    });
  });

  // find min_m and m
  let min_m = err.map((e) => Math.min(...e));
  let m = err.map((e) => e.indexOf(Math.min(...e)));

  // sort the min_m array and store the changed indexes
  let val = min_m.slice().sort((a, b) => a - b);
  let n = min_m.map((e) => val.indexOf(e));

  let a = 10;
  if (n.length < 10) {
    a = n.length;
  }

  let output = [];

  for (let i = 0; i < a; i++) {
    let A = E[n[i]] * 100;
    let B = Eb[m[n[i]]] * 100;
    let R = A / (A + B);
    let Rtot = A + B;

    let error = ((R - ratio) / ratio) * 100;

    output.push({
      A: A,
      B: B,
      Rtot: Rtot,
      R: R,

      Error: error,
    });
  }

  return output;
}
