import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Buoi2/Bai1/Header'
import StudentInfo from './components/Buoi2/Bai1/StudentInfo'
import Footer from './components/Buoi2/Bai1/Footer'
import ButtonCounter from './components/Buoi2/Bai2/ButtonCounter'

function App() {
  const [count, setCount] = useState(0)

  const student = {
    name: "Phạm Lê Hữu Thắng",
    mssv: "23654731",
    age: 21,
    chuyenNganh: "Công nghệ thông tin",
    lop: "DHKTPM19ATT"
  };

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
      <ButtonCounter />
    </>
  )
}

export default App;
