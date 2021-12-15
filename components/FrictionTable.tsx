import { bananaPeelData, doorstopData, sockData } from "../utils/friction";

export const FrictionBananaPeelTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Mass (g)</th>
          <th>Weight (N)</th>
          <th>Force to pull (N)</th>
        </tr>
      </thead>
      <tbody>
        {bananaPeelData.map((row) => (
          <tr>
            <td>{row.mass.toFixed(2)}</td>
            <td>{row.weight.toFixed(2)}</td>
            <td>{row.force.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const FrictionDoorstopTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Mass (g)</th>
          <th>Weight (N)</th>
          <th>Force to pull (N)</th>
        </tr>
      </thead>
      <tbody>
        {doorstopData.map((row) => (
          <tr>
            <td>{row.mass.toFixed(2)}</td>
            <td>{row.weight.toFixed(2)}</td>
            <td>{row.force.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const FrictionSockTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Mass (g)</th>
          <th>Weight (N)</th>
          <th>Force to pull (N)</th>
        </tr>
      </thead>
      <tbody>
        {sockData.map((row) => (
          <tr>
            <td>{row.mass.toFixed(2)}</td>
            <td>{row.weight.toFixed(2)}</td>
            <td>{row.force.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
