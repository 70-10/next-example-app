import React from "react";
import { NextComponentType } from "next";
import Counter from "../components/counter";

const Top: NextComponentType = () => (
  <>
    <section className="section">
      <h1 className="title">next-example-app</h1>
      <Counter />
    </section>
  </>
);

export default Top;
