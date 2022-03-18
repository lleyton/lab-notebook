import { withLoop } from "../utils/roller-coaster";

export const WithLoopTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Time (s)</th>
          <th>Distance (m)</th>
        </tr>
      </thead>
      <tbody>
        {withLoop.map((row) => (
          <tr>
            <td>{row.time.toFixed(2)}</td>
            <td>{row.distance.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

