import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Category = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.category);
  return (
    <>
      <p>{status}</p>
      <button type="button" onClick={() => dispatch(checkStatus())}>
        Check Status
      </button>
    </>
  );
};

export default Category;
