import React, { useState } from "react";
import Cards from "react-credit-cards";
import "../../styles/payment.css"
import card_photo from "../../images/6.jpeg"



const Payment = () => {

    const [number, SetNumber] = useState("");
    const [name, SetName] = useState("");
    const [date, SetDate] = useState("");
    const [cvc, SetCvc] = useState("");
    const [focus, SetFocus] = useState("");


    return (
        <>
        {/* <div className="rccs__card backcolor"> */}

        <div className="rccs__card">
          <div className="rccs__card-content">
            <div className="card-back">

            <Cards
              number={number}
              name={name}
              expiry={date}
              cvc={cvc}
              focused={focus}
            />
          </div>
            </div>

        </div>
  
        <br />
        <div className="credit-card">
          <div className="credit-card-content">
            <div className="row">
              <div className="col-sm-11">
                <label for="name">Card Number</label>
                <input
                type="text"
                className="form-control1"
                value={number}
                name="number"
                onChange={(e) => {
                  if (e.target.value.length <= 16) {
                    SetNumber(e.target.value);
                  }
                }}
                onFocus={(e) => SetFocus(e.target.name)}
                maxLength="16"
              />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-sm-11">
                <label for="name">Card Name</label>
                <input
                  type="text"
                  className="form-control2"
                  value={name}
                  name="name"
                  onChange={(e) => {
                    SetName(e.target.value);
                  }}
                  onFocus={(e) => SetFocus(e.target.name)}
                ></input>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-sm-6">
                <label for="name">Expiration Date</label>
                <input
                  type="text"
                  name="expiry"
                  className="form-control"
                  value={date}
                  onChange={(e) => {
                    if (e.target.value.length <= 4) {
                      SetDate(e.target.value);
                    }
                  }}
                  onFocus={(e) => SetFocus(e.target.name)}
                  maxLength="4"
                />
              </div>
              <div className="col-sm-5">
                <label for="name">CVV</label>
                <input
                  type="tel"
                  name="cvc"
                  className="card"
                  value={cvc}
                  onChange={(e) => {
                    if (e.target.value.length <= 3) {
                      SetCvc(e.target.value);
                    }
                  }}
                  onFocus={(e) => SetFocus(e.target.name)}
                  maxLength="3"
                />
              </div>
            </div>
            <div className="paybutton">
                <button class="purchase--btn">Checkout</button>
            </div>
          </div>
        </div>
      </>
    );
  };

export default Payment;