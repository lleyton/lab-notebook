import { data } from "../utils/vectorResultant";

const ProjectileMotionTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>ΔX (m)</th>
          <th>ΔY (m)</th>
          <th>Magnitude (m)</th>
          <th>Angle (rad)</th>
          <th>Angle (deg)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            <td>{row.deltaX.toFixed(2)}</td>
            <td>{row.deltaY.toFixed(2)}</td>
            <td>{row.magnitude.toFixed(2)}</td>
            <td>{row.radians.toFixed(2)}</td>
            <td>{row.degrees.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectileMotionTable;
