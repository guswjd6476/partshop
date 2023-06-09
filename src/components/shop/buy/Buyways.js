import { Select } from "antd";
import { useState } from "react";
import { cardOption } from "../../../service/options";

function Cardway() {
  return (
      <div className="waysbox">
        <Select
         style={{width : '120px'}}
        options={cardOption()[0]}
        ></Select>
        <p></p>
      </div>
  );
}

function Bankway() {
  return (
      <div className="waysbox">
        <Select
        options={cardOption()[0]}
        ></Select>
      </div>
  );
}


function Accountway() {
  return (
      <div className="waysbox">
        <Select
        options={cardOption()[0]}
        ></Select>
      </div>
  );
}

function Kakaoway() {
  return (
      <div className="waysbox">
        <Select
        options={cardOption()[0]}
        ></Select>
      </div>
  );
}
function Phoneway() {
  return (
      <div className="waysbox">
        <Select
        options={cardOption()[0]}
        ></Select>
      </div>
  );
}
function PSYSway() {
  return (
      <div className="waysbox">
        <Select
        options={cardOption()[0]}
        ></Select>
      </div>
  );
}
export  {Cardway,Bankway,Accountway,Kakaoway,Phoneway,PSYSway}