import Footer from "components/footer"
import NavBar from "components/NavBar"
import DataTable from "components/DataTable"

function App() {
  return (
    <>
    <NavBar />
    <div className="container">
      <h2 className="text-primary">hello word</h2>
      <DataTable />
    </div>
    <Footer />
    </>
  );
}

export default App;
