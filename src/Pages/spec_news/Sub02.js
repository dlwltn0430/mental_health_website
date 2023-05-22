import React from "react";
import SubTop from "../../components/sub_top/sub_top2";
import Category from "../../components/category/category2";

export default function Sub02() {
  return (
    <div>
      <SubTop />
      <div style={{ display: "flex" }}>
        <Category />
      </div>
      <h1>연간일정</h1>
    </div>
  );
}
