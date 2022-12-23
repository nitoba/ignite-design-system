import { colors } from '@ignite-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => (
    <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'monospace',
          fontWeight: 'bold',
          color: getContrast(color, 'white') < 3.5 ? 'black' : 'white',
        }}
      >
        <span>${key}</span>
        <span>{color}</span>
      </div>
    </div>
  ))
}
