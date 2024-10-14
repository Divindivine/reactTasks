import React from 'react'
import { useNavigate } from 'react-router-dom';
import { pages } from '../type/type';

function BackButton({page}:pages) {
    const navigate = useNavigate();
  return (
    <button
    className="w-[116px] h-[44px] rounded-[4px] bg-slate-300 mt-[20px] absolute z-1 left-[30px] text-black"
    onClick={() => navigate(page)}
  >
    Back
  </button>
  )
}

export default BackButton