import { useEffect, useState } from 'react';
import { BowlingData } from '../types/BowlingData';

function BowlingList() {
  const [bowlingData, setbowlingData] = useState<BowlingData[]>([]);

  useEffect(() => {
    const fetchbowlingData = async () => {
      const rsp = await fetch(
        'https://localhost:7084/api/bowler/marlins-sharks',
      );
      const b = await rsp.json();
      setbowlingData(b);
    };
    fetchbowlingData();
  }, []);

  return (
    <>
      <div className="row">
        <h4 className="text-center">Best Bowlers</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Bowler Last Name</th>
            <th>Bowler First Name</th>
            <th>Bowler Middle Init</th>
            <th>Bowler Address</th>
            <th>Bowler City</th>
            <th>Bowler State</th>
            <th>Bowler Zip</th>
            <th>Bowler Phone Number</th>
            <th>TeamName</th>
          </tr>
        </thead>
        <tbody>
          {bowlingData.map((b) => (
            <tr key={b.bowlerId}>
              <td>{b.bowlerLastName}</td>
              <td>{b.bowlerFirstName}</td>
              <td>{b.bowlerMiddleInit}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
              <td>{b.team?.teamName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlingList;
