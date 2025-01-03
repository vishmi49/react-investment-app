import { useState } from "react";``

export default function InputPanel() {

const [initialInvestment, setInitialInvestment] = useState(0);

function handleChange(event) {
    setInitialInvestment(event.target.value);
}
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label id="user-input-label">Initial Investment</label>
            <input id="user-input-input" type="number" required value={initialInvestment} onChange={handleChange}/>
          </p>
          <p>
            <label id="user-input-label">Annual Investment</label>
            <input id="user-input-input" type="number" required />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label id="user-input-label">Expected Return</label>
            <input id="user-input-input" type="number" required />
          </p>
          <p>
            <label id="user-input-label">Duration</label>
            <input id="user-input-input" type="number" required />
          </p>
        </div>
      </section>
    </>
  );
}