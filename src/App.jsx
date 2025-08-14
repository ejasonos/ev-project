import React from 'react'
import './App.css'

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', padding: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#1E5631', marginBottom: '20px' }}>
          Battery Electric Vehicles (BEV)
        </h1>
        <h2 style={{ fontSize: '24px', color: '#666', marginBottom: '20px' }}>
          Technology, Global Impact, and African Context
        </h2>
        <p style={{ fontSize: '18px', color: '#333' }}>
          Exploring BEV technology, societal impact, and technical experimentation with VCU and CANbus
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <section style={{ marginBottom: '60px', padding: '40px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '32px', color: '#1E5631', marginBottom: '20px' }}>BEV Technology Overview</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px' }}>
            A Battery Electric Vehicle (BEV) is powered solely by electricity stored in rechargeable battery packs, 
            with no internal combustion engine components.
          </p>
          <h3 style={{ fontSize: '24px', color: '#1A759F', marginBottom: '15px' }}>Key Advantages</h3>
          <ul style={{ fontSize: '16px', lineHeight: '1.6' }}>
            <li>Zero tailpipe emissions</li>
            <li>Higher energy efficiency (60-80% vs. 17-21% for ICE)</li>
            <li>Lower maintenance requirements</li>
            <li>Reduced noise pollution</li>
          </ul>
        </section>

        <section style={{ marginBottom: '60px', padding: '40px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '32px', color: '#1E5631', marginBottom: '20px' }}>Key Components of BEVs</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div>
              <h3 style={{ fontSize: '20px', color: '#1A759F', marginBottom: '10px' }}>Battery System</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                Lithium-ion battery packs (40-100+ kWh) provide energy storage. Modern batteries offer 300-400+ miles of range.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '20px', color: '#1A759F', marginBottom: '10px' }}>Electric Motor</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                Permanent magnet or induction motors convert electrical energy to mechanical energy with 90%+ efficiency.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '20px', color: '#1A759F', marginBottom: '10px' }}>Power Electronics</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                Inverters convert DC battery power to AC for motors. DC-DC converters supply 12V systems.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '20px', color: '#1A759F', marginBottom: '10px' }}>Control Systems</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                Battery Management System (BMS) monitors battery health. Vehicle Control Unit (VCU) coordinates all systems.
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '60px', padding: '40px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '32px', color: '#1E5631', marginBottom: '20px' }}>Global Impact of BEVs</h2>
          <h3 style={{ fontSize: '24px', color: '#1A759F', marginBottom: '15px' }}>Market Growth</h3>
          <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px' }}>
            BEV adoption is accelerating globally, with major markets in China, Europe, and North America leading the transition. 
            In 2024, BEVs represent over 15% of new vehicle sales worldwide.
          </p>
          <div style={{ backgroundColor: '#e8f5e8', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1E5631' }}>$300+ Billion</div>
            <div style={{ fontSize: '16px', color: '#666' }}>Global BEV market size in 2025</div>
          </div>
          <h3 style={{ fontSize: '24px', color: '#1A759F', marginBottom: '15px' }}>Environmental Benefits</h3>
          <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
            BEVs significantly reduce greenhouse gas emissions compared to internal combustion vehicles, 
            especially when powered by renewable energy sources.
          </p>
        </section>

        <section style={{ marginBottom: '60px', padding: '40px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '32px', color: '#1E5631', marginBottom: '20px' }}>BEVs in the African Context</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div>
              <h3 style={{ fontSize: '24px', color: '#1A759F', marginBottom: '15px' }}>Challenges</h3>
              <ul style={{ fontSize: '16px', lineHeight: '1.6' }}>
                <li>Limited electricity access and grid reliability in many regions</li>
                <li>Sparse charging infrastructure, concentrated in urban centers</li>
                <li>Higher upfront costs relative to average income levels</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '24px', color: '#1A759F', marginBottom: '15px' }}>Opportunities</h3>
              <ul style={{ fontSize: '16px', lineHeight: '1.6' }}>
                <li>Abundant renewable energy potential (solar, wind, hydro)</li>
                <li>Potential to leapfrog traditional infrastructure models</li>
                <li>Electric public transport and commercial fleets as entry points</li>
              </ul>
            </div>
          </div>
          <div style={{ backgroundColor: '#e8f5e8', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
            <strong>Leading Markets:</strong> South Africa, Morocco, Kenya, and Rwanda are pioneering BEV adoption 
            with supportive policies and infrastructure development.
          </div>
        </section>

        <section style={{ marginBottom: '60px', padding: '40px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '32px', color: '#1E5631', marginBottom: '20px' }}>Vehicle Control Unit (VCU)</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px' }}>
            The Vehicle Control Unit (VCU) is the central "brain" of a battery electric vehicle, coordinating all major 
            systems to ensure optimal performance, efficiency, and safety.
          </p>
          <h3 style={{ fontSize: '24px', color: '#1A759F', marginBottom: '15px' }}>Key Functions</h3>
          <ul style={{ fontSize: '16px', lineHeight: '1.6' }}>
            <li><strong>Power Management:</strong> Controls power distribution between battery, motor, and auxiliary systems</li>
            <li><strong>Drive Mode Control:</strong> Manages different driving modes (eco, sport, etc.) and regenerative braking</li>
            <li><strong>Safety Monitoring:</strong> Ensures safe operation by monitoring system parameters and fault detection</li>
            <li><strong>System Integration:</strong> Coordinates communication between subsystems via CANbus and other protocols</li>
          </ul>
        </section>

        <section style={{ marginBottom: '60px', padding: '40px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '32px', color: '#1E5631', marginBottom: '20px' }}>CANbus Communication System</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px' }}>
            Controller Area Network (CAN) bus is a robust vehicle communication protocol that enables multiple 
            Electronic Control Units (ECUs) to communicate with each other without a host computer.
          </p>
          <div style={{ backgroundColor: '#e8f5e8', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
            <strong>Technical Specs:</strong> Standard CAN operates at speeds up to 1 Mbps with high noise immunity 
            and error detection capabilities.
          </div>
          <h3 style={{ fontSize: '24px', color: '#1A759F', marginBottom: '15px' }}>Key Advantages</h3>
          <ul style={{ fontSize: '16px', lineHeight: '1.6' }}>
            <li><strong>Simplified Wiring:</strong> Reduces complex point-to-point connections</li>
            <li><strong>Reliability:</strong> Built-in error checking and fault tolerance</li>
            <li><strong>Real-time Control:</strong> Prioritized messaging for critical functions</li>
            <li><strong>Modularity:</strong> Enables easy integration of new components</li>
          </ul>
        </section>

        <section style={{ marginBottom: '60px', padding: '40px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '32px', color: '#1E5631', marginBottom: '20px' }}>Experimenting with VCU and CANbus</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px' }}>
            Developing and testing VCU and CANbus systems requires a systematic approach using various methodologies and tools.
          </p>
          <h3 style={{ fontSize: '24px', color: '#1A759F', marginBottom: '15px' }}>Testing Approaches</h3>
          <ul style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
            <li><strong>Software-in-the-Loop (SIL):</strong> Virtual testing of control algorithms in simulated environments</li>
            <li><strong>Hardware-in-the-Loop (HIL):</strong> Testing real controllers with simulated vehicle components</li>
            <li><strong>Bench Testing:</strong> Physical testing of components before vehicle integration</li>
            <li><strong>Vehicle Testing:</strong> Final validation in actual vehicle conditions</li>
          </ul>
          <h3 style={{ fontSize: '24px', color: '#1A759F', marginBottom: '15px' }}>Development Tools</h3>
          <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
            CANalyzer, Vector CANoe, MATLAB/Simulink, Arduino, dSPACE, CAN USB Adapters, Oscilloscopes
          </p>
        </section>

        <section style={{ marginBottom: '60px', padding: '40px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '32px', color: '#1E5631', marginBottom: '20px' }}>Conclusion and Future Outlook</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px' }}>
            Battery Electric Vehicles represent a transformative technology with significant implications for global 
            transportation, environmental sustainability, and economic development.
          </p>
          <h3 style={{ fontSize: '24px', color: '#1A759F', marginBottom: '15px' }}>Key Takeaways</h3>
          <ul style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
            <li>BEVs are rapidly evolving with improvements in battery technology, range, and affordability</li>
            <li>Africa presents unique challenges but also opportunities for customized BEV solutions</li>
            <li>VCU and CANbus systems are critical for BEV performance, efficiency, and future innovation</li>
          </ul>
          <h3 style={{ fontSize: '24px', color: '#1A759F', marginBottom: '15px' }}>Future Directions</h3>
          <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
            Continued research and development in BEV technology, infrastructure expansion, and policy support will be 
            essential for widespread adoption, particularly in emerging markets like Africa.
          </p>
        </section>
      </div>

      <footer style={{ backgroundColor: '#1E5631', color: 'white', padding: '40px', textAlign: 'center', marginTop: '60px' }}>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Battery Electric Vehicles</h3>
        <p style={{ fontSize: '18px', marginBottom: '10px' }}>Technology, Global Impact, and African Context</p>
        <p style={{ fontSize: '14px', opacity: '0.75' }}>August 2025</p>
      </footer>
    </div>
  )
}

export default App

