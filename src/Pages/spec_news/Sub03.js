import React from "react";
import SubTop from "../../components/sub_top/sub_top_news";
import Category from "../../components/category/category_news";

export default function Sub03() {
  return (
    <div>
      <SubTop />
      <div style={{ display: "flex" }}>
        <Category />
      </div>
      <h1>홍보게시판</h1>
    </div>
  );
}
