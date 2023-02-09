import { Card, Select, Option, Input } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import divider from "../../utils/divider";

export function Divider() {
  const [eSeries, setESeries] = useState(3);
  const [ratio, setRatio] = useState(0);
  const [output, setOutput] = useState([
    {
      A: NaN,
      B: NaN,
      R: NaN,
      Rtot: NaN,
      Error: NaN,
    },
  ]);

  useEffect(() => {
    setOutput(divider(eSeries, ratio));
  }, [eSeries, ratio]);

  return (
    <Card className="p-2">
      <h2 className="text-center text-2xl p-2 mb-4">
        Standard Resistor Divider
      </h2>
      <div className="p-2 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <Select
          label="E Series Value"
          onChange={(e) => {
            setESeries(Number(e));
          }}
        >
          <Option value="3">3</Option>
          <Option value="6">6</Option>
          <Option value="12">12</Option>
          <Option value="24">24</Option>
          <Option value="48">48</Option>
          <Option value="96">96</Option>
          <Option value="192">192</Option>
        </Select>
        <div className="flex flex-col w-full">
          <Input
            label="Ratio (R1/R2)"
            type="number"
            onChange={(e) => {
              setRatio(Number(e.target.value));
            }}
          />
          <label className="px-4">
            Computed Ratio:{" "}
            {isNaN(ratio)
              ? "N/A"
              : ratio > 1
              ? (1 / ratio).toFixed(3)
              : ratio.toFixed(3)}
          </label>
        </div>
      </div>
      <div className="p-4 flex max-w-lg sm:max-w-full sm:overflow-clip overflow-x-scroll sm:flex-row flex-col text-center justify-around">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">R1</th>
              <th className="px-4 py-2">R2</th>
              <th className="px-4 py-2">R Total</th>
              <th className="px-4 py-2">Ratio</th>
              <th className="px-4 py-2">Error</th>
            </tr>
          </thead>
          <tbody>
            {output.map((row, i) => {
              return (
                <tr key={i} className="">
                  {Array.from(Object.values(row)).map((value, j) => {
                    return (
                      <td key={j} className="border px-4 py-2">
                        {isNaN(value) ? "N/A" : value.toFixed(3)}
                        {j === 4 && !isNaN(value) ? "%" : ""}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
