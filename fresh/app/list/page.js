"use client"; // 없으면 state 등 사용 불가
import React from "react";
import { useState } from "react";

const List = () => {
  let products = ["Tomato", "Pasta", "Coconut"];

  const [count, setCount] = useState([0, 0, 0]);

  /* map() 사용법
  array.map(() => {
    ...array 값 만큼 반복
    })
  */

  return (
    <div className="flex flex-col justify-center items-center bg-zinc-800 text-white font-pretendard">
      <h4 className="font-bold text-[24px] my-8">상품 목록</h4>
      <div className="flex flex-col my-12 gap-y-4">
        {products.map((product, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-baseline w-[200px] p-12 gap-y-4 rounded-md bg-white text-black "
            >
              <h4 className="text-center text-[20px] font-semibold ">
                {product}
              </h4>

              <div className="flex items-center  w-full gap-x-2">
                <button
                  onClick={() => {
                    let pre = [...count];
                    pre[i]--;
                    setCount(pre);
                  }}
                  className="text-center font-bold text-white w-[30px] h-[30px] rounded-md bg-slate-400"
                >
                  -
                </button>
                <p>{count[i]}</p>
                <button
                  onClick={() => {
                    let pre = [...count];
                    pre[i]++;
                    setCount(pre);
                  }}
                  className="text-center font-bold text-white w-[30px] h-[30px] rounded-md bg-slate-400"
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
