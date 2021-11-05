import { data } from "../utils/projectileMotion";

const ProjectileMotionTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>ΔX (m)</th>
          <th>Time (s)</th>
          <th>Angle (rad)</th>
          <th>Angle (deg)</th>
          <th>Initial Velocity (m/s)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            <td>{row.deltaX.toFixed(2)}</td>
            <td>{row.time.toFixed(2)}</td>
            <td>{row.radians.toFixed(2)}</td>
            <td>{row.degrees.toFixed(2)}</td>
            <td>{row.initialVelocity.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectileMotionTable;
