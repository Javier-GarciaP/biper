import { Layout } from "./components/Layout"
import { Hero } from "./components/Hero"
import { Installation } from "./components/Installation"
import { Usage } from "./components/Usage"
import { API } from "./components/API"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className=" bg-gray-50 flex items-center flex-col">
      <Layout>
        <Hero />
        <div className="flex flex-col gap-10">
          <Installation />
          <Usage />
          <API />
          <Footer />
        </div>
      </Layout>
    </div>
  )
}

export default App
