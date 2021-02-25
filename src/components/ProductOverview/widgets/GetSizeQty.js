import React, { useContext, useState } from 'react';
import { ProductContext } from '../../../context/ProductContext';

export const GetSizeQty = () => {
  const { curStyle } = useContext(ProductContext);
  const [totalQty, setTotalQty] = useState([<option key="1">QTY</option>]);
  const [sizeSelected, setSizeSelected] = useState(false);
  const [dropdownMsg, setDropdownMsg] = useState('');

  const getSizeHandler = (e) => {
    let qtyLimit = e.target.value > 15 ? 15 : e.target.value;
    const newItems = [];
    for (let i = 0; i < qtyLimit; i++) {
      newItems.push(<option key={i}>{i + 1}</option>);
    }
    setSizeSelected(true);
    setTotalQty([newItems]);
  };

  $('#sizeSelect option').on({
    click: function () {
      $('#sizeSelect').attr('size', 1);
      setDropdownMsg('');
    },
  });

  const btnHandler = () => {
    if (sizeSelected) {
      alert('Product added');
    } else {
      setDropdownMsg('Please select size');
      var s = $('#sizeSelect').attr('size') == 1 ? 5 : 1;
      $('#sizeSelect').attr('size', s);
    }
  };

  return (
    <div className="dropdown">
      <div className="row g-7 ">
        <div className="col-8">
          <p className="text-danger">{dropdownMsg}</p>
          <select
            id="sizeSelect"
            aria-label="Select size"
            disabled={curStyle.skus.null ? true : false}
            onChange={getSizeHandler}
            className="form-select"
            size="1"
          >
            {sizeSelected === false && (
              <option>
                {curStyle.skus.null ? 'OUT OF STOCK' : 'Select Size'}
              </option>
            )}
            {Object.keys(curStyle.skus).map((key, i) => (
              <option key={i} value={curStyle.skus[key].quantity}>
                {curStyle.skus[key].size}
              </option>
            ))}
          </select>
        </div>
        <div className="col-4">
          <p></p>
          {!sizeSelected ? (
            <select
              className="form-select"
              aria-label="disabled quantity selection"
              disabled
            >
              <option value="empty">-</option>
            </select>
          ) : (
            <select className="form-select" aria-label="quantity selection">
              {totalQty}
            </select>
          )}
        </div>
      </div>
      <br />
      <div className="row g-7">
        <div className="col-10">
          {curStyle.skus.null ? (
            <></>
          ) : (
            <div
              onClick={() => btnHandler()}
              className="btn form-control btn-outline-secondary btn-lg"
            >
              ADD TO BAG
            </div>
          )}
        </div>
        <div className="col-2">
          <div className="btn form-control btn-outline-secondary btn-lg">
            <i className="bi bi-star"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
