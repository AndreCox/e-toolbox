import { Card, Select, Option, Input } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import closestSeries from "../../utils/closestSeries";
export function EStandard() {
  const [Eseries, setEseries] = useState(3);
  const [ArbitraryValue, setArbitraryValue] = useState(0);
  const [StandardValue, setStandardValue] = useState(0);
  const [Error, setError] = useState(0);

  useEffect(() => {
    let [out, out_err] = closestSeries(Eseries, ArbitraryValue);
    setStandardValue(out);
    setError(out_err);
  }, [Eseries, ArbitraryValue]);

  return (
    <Card className="p-2">
      <h2 className="text-center text-2xl p-2 mb-4">E Series Standard Value</h2>
      <div className="p-2 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <Select
          label="E Series Value"
          onChange={(e) => {
            setEseries(Number(e));
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
        <Input
          label="Arbitrary Value"
          type="number"
          onChange={(e) => {
            setArbitraryValue(Number(e.target.value));
          }}
        />
      </div>
      <div className="p-4 flex sm:flex-row flex-col text-center justify-around">
        <div>
          <h3>Standard Value</h3>
          <h3 className="text-blue-500 font-bold text-center text-lg">
            {isNaN(StandardValue) ? "0" : StandardValue}
          </h3>
        </div>
        <div>
          <h3>Standard Error</h3>
          <h3 className="text-blue-500 font-bold text-center text-lg">
            {isNaN(Error) ? "0" : (Error * 100).toFixed(4)}%
          </h3>
        </div>
      </div>
    </Card>
  );
}
