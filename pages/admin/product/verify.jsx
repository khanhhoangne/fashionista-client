import React, { useState, useEffect } from "react";
import styles from "scss/Admin/Product/UnVerify.module.scss";
import * as apis from "apis";
import { useSelector } from "react-redux";

import RowVerify from "components/Table/Row/RowVerify";

const Verify = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await apis.getProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);
  return (
    <div>
      <div className={styles.manager__right}>
        <div className={styles.manager__right_header}>
          <h3>Sản phẩm đã duyệt ( {products.length})</h3>
        </div>
        <div className={styles.manager__right_content}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.table__header}>
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Giá cả</th>
                <th>Đã bán</th>
                <th>Xóa</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <RowVerify
                  product={product}
                  key={product._id}
                  index={index}
                  actions={(id) => setProducts(products.filter((product) => product._id !== id))}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Verify;
