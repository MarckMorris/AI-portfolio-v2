import React, { useState } from 'react'
import axios from 'axios'

function ServiceCard({ service, status }) {
  const [testResult, setTestResult] = useState(null)
  const [testing, setTesting] = useState(false)

  const testService = async () => {
    setTesting(true)
    try {
      const response = await axios.post(`${service.url}/predict`, {
        test: 'data',
        timestamp: new Date().toISOString()
      }, { timeout: 5000 })
      setTestResult({ success: true, data: response.data })
    } catch (error) {
      setTestResult({ success: false, error: error.message })
    }
    setTesting(false)
  }

  const openService = () => {
    window.open(service.url, '_blank')
  }

  return (
    <div className={`service-card ${status?.status || 'unknown'}`}>
      <div className="card-header">
        <h3>{service.name}</h3>
        <span className={`badge ${service.domain.toLowerCase()}`}>
          {service.domain}
        </span>
      </div>
      
      <div className="card-body">
        <div className="service-info">
          <p><strong>Puerto:</strong> {service.port}</p>
          <p><strong>Estado:</strong> 
            <span className={`status ${status?.status}`}>
              {status?.status === 'online' ? '🟢 Online' : '🔴 Offline'}
            </span>
          </p>
        </div>

        {status?.status === 'online' && (
          <div className="card-actions">
            <button onClick={openService} className="btn-primary">
              Abrir Servicio
            </button>
            <button 
              onClick={testService} 
              className="btn-secondary"
              disabled={testing}
            >
              {testing ? 'Probando...' : 'Probar API'}
            </button>
          </div>
        )}

        {testResult && (
          <div className={`test-result ${testResult.success ? 'success' : 'error'}`}>
            {testResult.success ? (
              <div>
                <strong>✓ Test exitoso</strong>
                <pre>{JSON.stringify(testResult.data, null, 2)}</pre>
              </div>
            ) : (
              <div>
                <strong>✗ Test fallido</strong>
                <p>{testResult.error}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ServiceCard
