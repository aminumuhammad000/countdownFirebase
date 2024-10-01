// import React from 'react'

import { ReactNode } from "react";
import "./Box.css";
interface Prop {
  children: ReactNode;
  title: string;
}
const Box = ({ children, title }: Prop) => {
  return (
    <div className="Box">
      <div className="children">{children}</div>
      <div className="title">{title}</div>
    </div>
  );
};

export default Box;
