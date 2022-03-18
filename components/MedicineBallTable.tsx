import { runs } from '../utils/medicine-ball'

export const RunsTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Time (s)</th>
          <th>Distance (m)</th>
        </tr>
      </thead>
      <tbody>
        {runs.map((row) => (
          <tr>
            <td>{row.time.toFixed(2)}</td>
            <td>{row.distance.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

}