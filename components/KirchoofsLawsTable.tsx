import { data } from "../utils/kirchoofs-laws";

export const KirchoofsLawsTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Current/Voltage</th>
          <th>V [Volts]</th>
          <th>I [mA]</th>
          <th>R [KΩ]</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            <td>{row.label}</td>
            <td>{row.milliAmp.toFixed(2)}</td>
            <td>{row.resistance.toFixed(2)}</td>
            <td>{row.volts.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
