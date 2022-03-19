import "./App.css";
import FilesTable from "./components/FilesTable";
import UploadDialog from "./components/UploadDialog";

function App() {
  return (
    <>
      <UploadDialog />
      <FilesTable />
    </>
  );
}

export default App;
