import "./StudentInfo.css";

const StudentInfo = ({ name, mssv, age, chuyenNganh, lop }) => {

    return(
        <div className="card">
            <h2>Thông tin sinh viên</h2>
            <p><strong>Họ tên: </strong>{name}</p>
            <p><strong>MSSV: </strong>{mssv}</p>
            <p><strong>Tuổi: </strong>{age}</p>
            <p><strong>Chuyên ngành: </strong>{chuyenNganh}</p>
            <p><strong>Lớp: </strong>{lop}</p>
        </div>
    );
}

export default StudentInfo;