import { Navbar, Services, Footer, Transactions, Welcome } from "./components"

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar></Navbar>
        <Welcome></Welcome>
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
