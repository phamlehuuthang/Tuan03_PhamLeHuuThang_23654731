import { useState } from 'react'
import './App.css'
import Header from './components/Buoi2/Bai1/Header'
import StudentInfo from './components/Buoi2/Bai1/StudentInfo'
import Footer from './components/Buoi2/Bai1/Footer'
import ButtonCounter from './components/Buoi2/Bai2/ButtonCounter'
import LiveForm from './components/Buoi2/Bai3/LiveForm'
import StatusBadge from './components/Buoi2/Bai4/StatusBadge'
import TodoApp from './components/Buoi2/Bai5/TodoApp'

function App() {

  const student = {
    name: "Phạm Lê Hữu Thắng",
    mssv: "23654731",
    age: 21,
    chuyenNganh: "Công nghệ thông tin",
    lop: "DHKTPM19ATT"
  };

  const [page, setPage] = useState("studentInfo");

  const renderPage = () => {
    switch(page) {
      case "studentInfo":
        return <StudentInfo 
                  name={student.name}
                  mssv={student.mssv}
                  age={student.age}
                  chuyenNganh={student.chuyenNganh}
                  lop={student.lop}
               />;
      case "buttonCounter":
        return <ButtonCounter />;
      case "liveForm":
        return <LiveForm />;
      case "statusBadge":
         return <StatusBadge status = "online" />;
      case "todoApp":
          return <TodoApp/>;
      default:
        return <StudentInfo 
                  name={student.name}
                  mssv={student.mssv}
                  age={student.age}
                  chuyenNganh={student.chuyenNganh}
                  lop={student.lop}
               />;
    } 
  }

  return (
    <>
      {/* Bài 1 Buổi 2
      <Header />
        <StudentInfo 
          name={student.name}
          mssv={student.mssv}
          age={student.age}
          chuyenNganh={student.chuyenNganh}
          lop={student.lop}
        />
      <Footer /> */}
      <div className="top-container">
        <h1>Bài tập tuần 3</h1>

        <div className="button-row" style={{ marginBottom: "20px" }}>
          <button onClick={() => setPage("studentInfo")}>Bài 1</button>
          <button onClick={() => setPage("buttonCounter")}>Bài 2</button>
          <button onClick={() => setPage("liveForm")}>Bài 3</button>
          <button onClick={() => setPage("statusBadge")}>Bài 4</button>
          <button onClick={() => setPage("todoApp")}>Bài 5</button>
        </div>

      {renderPage()}
      </div>
    </>
  )
}

export default App;
