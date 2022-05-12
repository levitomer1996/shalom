import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <table className="table_pc">
        <tr>
          <th></th>

          <th>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-telephone"
              viewBox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg>
          </th>
          <th>
            <svg
              className="contact_svg"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
          </th>
        </tr>
        <tr>
          <th>שלום </th>
          <th>
            {" "}
            <a class="a_contact" href="tel:0535364978">
              053-536-4978
            </a>{" "}
          </th>
          <th>
            <a class="a_contact" href="mailto:shalom3362@walla.com">
              shalom3362@walla.com
            </a>
          </th>
        </tr>
        <tr>
          <th>ליאור</th>
          <th>
            {" "}
            <a class="a_contact" href="tel:0506899616">
              050-689-9616
            </a>{" "}
          </th>
          <th>
            <a class="a_contact" href="mailto:shalom3362@walla.com">
              shalom3362@walla.com
            </a>
          </th>
        </tr>
      </table>

      <div className="mobile_contact">
        <div>
          <p className="contact_p_name">שלום</p>
          <p className="contact_p_det">053-536-4978</p>
          <p className="contact_p_det">shalom3362@walla.com</p>
          <div style={{ paddingBottom: "10px" }}>
            <div style={{ paddingBottom: "10px" }}>
              <a
                class="btn btn-primary"
                href="tel:0535364978"
                style={{ backgroundColor: "green" }}
              >
                התתקשר עכשיו!
              </a>
            </div>
            <div style={{ paddingBottom: "10px" }}>
              <a
                style={{ backgroundColor: "red" }}
                class="btn btn-primary"
                href="mailto:shalom3362@walla.com"
              >
                שלח מייל
              </a>
            </div>
          </div>
        </div>
        <div>
          <p className="contact_p_name">ליאור</p>
          <p className="contact_p_det">050-689-9616</p>
          <p className="contact_p_det">shalom3362@walla.com</p>
          <div className="contact_btn_container">
            <div style={{ paddingBottom: "10px" }}>
              <a
                class="btn btn-primary"
                href="tel:0506899616"
                style={{ backgroundColor: "green" }}
              >
                התתקשר עכשיו!
              </a>
            </div>
            <div style={{ paddingBottom: "10px" }}>
              <a
                style={{ backgroundColor: "red" }}
                class="btn btn-primary"
                href="mailto:shalom3362@walla.com"
              >
                שלח מייל
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
