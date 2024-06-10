import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";

interface Products {
  id: number;
  name: string;
  image: string;
  prices: number;
  quantity: number;
  created_at: string;
}

export default function TableProducts() {
  const [products, setProducts] = useState<Products[]>([]);

  //xác nhận xóa
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleConfirm = () => {
    alert("Mục đã được xóa!");
    setShow(false);
  };

  //Hàm load Data
  const loadData = () => {
    fetch("http://localhost:3000/product_table")
      .then((response: Response) => response.json())
      .then((data: Products[]) => setProducts(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tên sản phẩm</th>
            <th scope="col">hình ảnh</th>
            <th scope="col">Giá</th>
            <th scope="col">Số lượng</th>
            <th scope="col">Ngày thêm</th>
            <th scope="col">Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: Products, index: number) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{product.name}</td>
              <td>
                {" "}
                <img
                  style={{ width: "50px", height: "40px" }}
                  src={product.image}
                  alt=""
                />
              </td>
              <td>{product.prices}</td>
              <td>{product.quantity}</td>
              <td>{product.created_at}</td>
              <td
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <button type="button" className="btn btn-outline-warning">
                  Sửa
                </button>
                <button
                  onClick={handleShow}
                  type="button"
                  className="btn btn-outline-danger"
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Xác nhận xóa */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xóa</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có chắc chắn muốn xóa mục này không?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="danger" onClick={handleConfirm}>
            Xác nhận xóa
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
