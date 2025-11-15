import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ServiceCard from './components/ServiceCard'
import './App.css'

const SERVICES = [
  { name: 'Retail Assortment Agent', url: 'http://localhost:8001', domain: 'RETAIL', port: 8001 },
  { name: 'Retail Pricing Simulator', url: 'http://localhost:8002', domain: 'RETAIL', port: 8002 },
  { name: 'Retail Catalog Normalizer', url: 'http://localhost:8003', domain: 'RETAIL', port: 8003 },
  { name: 'Retail Replenishment Planner', url: 'http://localhost:8004', domain: 'RETAIL', port: 8004 },
  { name: 'Retail Product Matching', url: 'http://localhost:8005', domain: 'RETAIL', port: 8005 },
  { name: 'Retail Customer Inquiry', url: 'http://localhost:8006', domain: 'RETAIL', port: 8006 },
  { name: 'Retail A11y Review', url: 'http://localhost:8007', domain: 'RETAIL', port: 8007 },
  { name: 'Merch Vendor Scorecard', url: 'http://localhost:8008', domain: 'MERCH', port: 8008 },
  { name: 'Merch Planogram Helper', url: 'http://localhost:8009', domain: 'MERCH', port: 8009 },
  { name: 'Merch Promo Optimizer', url: 'http://localhost:8010', domain: 'MERCH', port: 8010 },
  { name: 'Merch Returns Analyzer', url: 'http://localhost:8011', domain: 'MERCH', port: 8011 },
  { name: 'Merch Forecast Comparator', url: 'http://localhost:8012', domain: 'MERCH', port: 8012 },
  { name: 'Merch Content Enrichment', url: 'http://localhost:8013', domain: 'MERCH', port: 8013 },
  { name: 'Merch Shelf Gap Detector', url: 'http://localhost:8014', domain: 'MERCH', port: 8014 },
  { name: 'PM OKR Advisor', url: 'http://localhost:8015', domain: 'PM', port: 8015 },
  { name: 'PM PRD Writer', url: 'http://localhost:8016', domain: 'PM', port: 8016 },
  { name: 'PM Experiment Copilot', url: 'http://localhost:8017', domain: 'PM', port: 8017 },
  { name: 'PM Backlog Prioritizer', url: 'http://localhost:8018', domain: 'PM', port: 8018 },
  { name: 'PM Stakeholder QA', url: 'http://localhost:8019', domain: 'PM', port: 8019 },
  { name: 'PM Risk Register', url: 'http://localhost:8020', domain: 'PM', port: 8020 }
]

function App() {
  const [serviceStatus, setServiceStatus] = useState({})
  const [loading, setLoading] = useState(true)
  const [selectedDomain, setSelectedDomain] = useState('ALL')

  useEffect(() => {
    checkAllServices()
    const interval = setInterval(checkAllServices, 10000) // Check every 10s
    return () => clearInterval(interval)
  }, [])

  const checkAllServices = async () => {
    const statuses = {}
    
    for (const service of SERVICES) {
      try {
        const response = await axios.get(`${service.url}/health`, { timeout: 3000 })
        statuses[service.port] = {
          status: 'online',
          data: response.data
        }
      } catch (error) {
        statuses[service.port] = {
          status: 'offline',
          error: error.message
        }
      }
    }
    
    setServiceStatus(statuses)
    setLoading(false)
  }

  const filteredServices = selectedDomain === 'ALL' 
    ? SERVICES 
    : SERVICES.filter(s => s.domain === selectedDomain)

  const onlineCount = Object.values(serviceStatus).filter(s => s.status === 'online').length
  const offlineCount = Object.values(serviceStatus).filter(s => s.status === 'offline').length

  return (
    <div className="app">
      <header className="header">
        <h1>🏪 Walmart AI Portfolio</h1>
        <p>20 Microservicios de IA para operaciones retail</p>
        <div className="stats">
          <span className="stat online">✓ Online: {onlineCount}</span>
          <span className="stat offline">✗ Offline: {offlineCount}</span>
          <span className="stat total">Total: {SERVICES.length}</span>
        </div>
      </header>

      <div className="filters">
        <button 
          className={selectedDomain === 'ALL' ? 'active' : ''} 
          onClick={() => setSelectedDomain('ALL')}
        >
          Todos ({SERVICES.length})
        </button>
        <button 
          className={selectedDomain === 'RETAIL' ? 'active' : ''} 
          onClick={() => setSelectedDomain('RETAIL')}
        >
          Retail ({SERVICES.filter(s => s.domain === 'RETAIL').length})
        </button>
        <button 
          className={selectedDomain === 'MERCH' ? 'active' : ''} 
          onClick={() => setSelectedDomain('MERCH')}
        >
          Merchandising ({SERVICES.filter(s => s.domain === 'MERCH').length})
        </button>
        <button 
          className={selectedDomain === 'PM' ? 'active' : ''} 
          onClick={() => setSelectedDomain('PM')}
        >
          Product Mgmt ({SERVICES.filter(s => s.domain === 'PM').length})
        </button>
      </div>

      {loading ? (
        <div className="loading">Cargando servicios...</div>
      ) : (
        <div className="services-grid">
          {filteredServices.map(service => (
            <ServiceCard 
              key={service.port}
              service={service}
              status={serviceStatus[service.port]}
            />
          ))}
        </div>
      )}

      <footer className="footer">
        <p>Monitoring: <a href="http://localhost:9090" target="_blank">Prometheus</a> | 
           <a href="http://localhost:3001" target="_blank">Grafana</a></p>
      </footer>
    </div>
  )
}

export default App
