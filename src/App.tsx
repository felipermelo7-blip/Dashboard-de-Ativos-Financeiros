import { Heading } from "./component/heading"
import { CardAtivo } from "./component/CardAtivo"

function App() {
  return (
    <div className="container">

      <Heading>💰 Meu Portfólio 2026</Heading>

      <CardAtivo titulo="Bitcoin (BTC)">
        <p>Preço: R$ 350.000</p>
        <span style={{ color: "var(--alta)" }}>+5.2%</span>
      </CardAtivo>

      <CardAtivo titulo="VALE3">
        <p>Preço: R$ 65,20</p>
        <span style={{ color: "var(--baixa)" }}>-1.8%</span>
      </CardAtivo>

    </div>
  )
}

export default App