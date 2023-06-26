import React, { useState, useRef } from "react";
import axios from "axios";

import "./home.css";
//

//
const home = () => {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);
  const inputRef6 = useRef(null);

  const [formTitle, setFormTitle] = useState("Home Page");
  const [activeLink, setActiveLink] = useState("");
  const [formOne, setFormOne] = useState(false);
  const [formTow, setFormTow] = useState(false);
  const [formThree, setFormThree] = useState(false);
  const [formFour, setFormFour] = useState(false);

  const [drugObj, setDrugObj] = useState({});
  const [eventObj, setEventObj] = useState({});
  const [contactObj, setContactObj] = useState([]);
  const [confOrderObj, setConfOrderObj] = useState([]);

  const addDrugHandler = () => {
    const newTitle = "Add Drug Form";
    setFormTitle(newTitle);
    setActiveLink("addDrug");
    setFormOne(true);
    setFormTow(false);
    setFormThree(false);
    setFormFour(false);
  };

  const addEventHandler = () => {
    const newTitle = "Add Event Form";
    setFormTitle(newTitle);
    setActiveLink("addEvent");
    setFormOne(false);
    setFormTow(true);
    setFormThree(false);
    setFormFour(false);
  };

  const orderConfirmationHandler = () => {
    const newTitle = "Order Confirmations List";
    setFormTitle(newTitle);
    setActiveLink("orderConfirmation");
    setFormOne(false);
    setFormTow(false);
    setFormThree(true);
    setFormFour(false);

    ////////////////////////////////
    // get alll contacts
    axios
      .get("http://localhost:8000/getAllFalseConfirmations")
      .then((response) => {
        console.log(response.data);
        setConfOrderObj(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    ////////////////////////////////
  };

  const showContactsHandler = () => {
    const newTitle = "Show Contacts List";
    setFormTitle(newTitle);
    setActiveLink("showContacts");
    setFormOne(false);
    setFormTow(false);
    setFormThree(false);
    setFormFour(true);

    ////////////////////////////////
    // get alll contacts
    axios
      .get("http://localhost:8000/getAllContacts")
      .then((response) => {
        console.log(response.data);
        setContactObj(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    ////////////////////////////////
  };

  const getDrugDataHandler = () => {
    const newDrugObj = {
      drugName: inputRef1.current.value,
      drugDesc: inputRef2.current.value,
      drugUrl: inputRef3.current.value,
    };
    setDrugObj(newDrugObj);

    ///////
    axios
      .post("http://localhost:8000/adminDrug", newDrugObj)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
    ///////
  };

  const getEventDataHandler = () => {
    const newEventObj = {
      eventTitle: inputRef4.current.value,
      eventDesc: inputRef5.current.value,
       eventDate:inputRef6.current.value
    };
    setEventObj(newEventObj);
    console.log(newEventObj);

    ///////
    axios
      .post("http://localhost:8000/adminEvent", newEventObj)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
    ///////
  };

  const AcceptConfirmationOrderHandler = (index) => {
    const newConfOrderObj = [...confOrderObj];
    newConfOrderObj[index]["Acceptance"] = true;
    const confirmationId = newConfOrderObj[index]["_id"];
    axios
      .post("http://localhost:8000/changeToTrue", { id: confirmationId })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
    setConfOrderObj(newConfOrderObj);
    console.log(newConfOrderObj);
  };

  const RejectConfirmationOrderHandler = (index) => {
    console.log("TEST REJECT");
    const newConfOrderObj = [...confOrderObj];
    newConfOrderObj.splice(index, 1);
    setConfOrderObj(newConfOrderObj);
  };

  const DeleteConfirmationOrderHandler = (index) => {
    const confirmationId = confOrderObj[index]._id;
    axios
      .delete(`http://localhost:8000/deleteConfirmation/${confirmationId}`)
      .then((response) => {
        console.log(response);
        const newConfOrderObj = [...confOrderObj];
        newConfOrderObj.splice(index, 1);
        setConfOrderObj(newConfOrderObj);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <header>
        <nav id="sidebarMenu" className="collapse d-lg-block sidebar bg-white ">
          <div className="position-sticky">
            <div className="list-group list-group-flush mx-3 mt-4">
              <p
                href="#"
                className="list-group-item list-group-item-action py-2 ripple "
                aria-current="true"
              >
                <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                <span className="menu__title">Dashboard</span>
              </p>

              <a
                href="#"
                className={`list-group-item list-group-item-action py-2 ripple ${
                  activeLink === "addDrug" ? "active" : ""
                }`}
                aria-current="true"
                onClick={addDrugHandler}
              >
                <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                <span>Add Drug</span>
              </a>

              <a
                href="#"
                className={`list-group-item list-group-item-action py-2 ripple ${
                  activeLink === "addEvent" ? "active" : ""
                }`}
                onClick={addEventHandler}
              >
                <i className="fas fa-chart-area fa-fw me-3"></i>
                <span>Add Event</span>
              </a>

              <a
                href="#"
                className={`list-group-item list-group-item-action py-2 ripple ${
                  activeLink === "orderConfirmation" ? "active" : ""
                }`}
                onClick={orderConfirmationHandler}
              >
                <i className="fas fa-lock fa-fw me-3"></i>
                <span>Orders Confirmations</span>
              </a>

              <a
                href="#"
                className={`list-group-item list-group-item-action py-2 ripple ${
                  activeLink === "showContacts" ? "active" : ""
                }`}
                onClick={showContactsHandler}
              >
                <i className="fas fa-chart-line fa-fw me-3"></i>
                <span>Show Contacts</span>
              </a>
            </div>
          </div>
        </nav>

        <nav
          id="main-navbar"
          className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="https://www.amberit.com.bd/img/ivr/admin-dashboard.png"
                height="60"
                width="140"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            <div className="nav__header">
              <h3>
                <pre>Admin Dashboard</pre>
              </h3>
            </div>
          </div>
        </nav>
      </header>

      <main className="main">
        <div className="main__header_title">
          <h1>{formTitle}</h1>
        </div>
      </main>

      {/* FORM 1 */}
      {formOne === true ? (
        <div className="form__add__drug">
          <form>
            <div className="mb-3 ">
              <label for="exampleInputEmail1" className="form-label">
                Drug Name:
              </label>
              <input
                ref={inputRef1}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Drug Description:
              </label>
              <input
                ref={inputRef2}
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Drug Image:
              </label>
              <input
                ref={inputRef3}
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary formOneSubmit"
              onClick={getDrugDataHandler}
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        ""
      )}

      {/* FORM 2 */}
      {formTow === true ? (
        <div className="form__add__drug">
          <form>
            <div className="mb-3 ">
              <label for="exampleInputEmail1" className="form-label">
                Event Title:
              </label>
              <input
                ref={inputRef4}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Event Description:
              </label>
              <input
                ref={inputRef5}
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Event Date:
              </label>
              <input
                ref={inputRef6}
                type="datetime-local"
                className="form-control"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary formOneSubmit"
              onClick={getEventDataHandler}
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        ""
      )}

      {/* FORM 3 */}

      {formThree === true && confOrderObj
  ? confOrderObj.map((item, index) => {
      return (
        item.Acceptance === false && (
          <div
            className="card form__confirmation__order "
            styles="width: 20rem; margin-left:20px;"
          >
            <img
              className="card-img-top"
              src={item.foodUrl}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{item.foodName}</h5>
              <p className="card-text">{item.foodDesc}</p>
              <button
                className="btn btn-primary"
                onClick={() => AcceptConfirmationOrderHandler(index)}
              >
                Accept
              </button>{" "}
              <button
                className="btn btn-primary"
                onClick={() => RejectConfirmationOrderHandler(index)}
              >
                Reject
              </button>{" "}
              <button
                className="btn btn-danger"
                onClick={() => DeleteConfirmationOrderHandler(index)}
              >
                Delete
              </button>
            </div>
          </div>
        )
      );
    })
  : ""}
      {/* FORM 4 */}

      {formFour === true && contactObj
        ? contactObj.map((item) => {
            return (
              <div
                className="card form__contact__message"
                styles="width: 20rem; margin-left:20px;"
              >
                <div className="card-body">
                  <div className="message__title_email">
                    <h5 className="card-userName">
                      User Name: {item.patientName}
                    </h5>
                    <h5 className="card-email">E-mail: {item.patientGmail} </h5>
                  </div>
                  <h5 className="card-title">
                    Phone Number: {item.phoneNumber}{" "}
                  </h5>
                  <p className="card-text">Message: {item.patientMsg} </p>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default home;
