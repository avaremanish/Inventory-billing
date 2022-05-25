import React from 'react'
import './WidgetLg.css'
import ME from '../me.png'

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={ME}
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Manish Kumar</span>
          </td>
          <td className="widgetLgDate">28 Jan 2022</td>
          <td className="widgetLgAmount">₹ 20,000.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={ME}
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Manish Kumar</span>
          </td>
          <td className="widgetLgDate">2 April 2022</td>
          <td className="widgetLgAmount">₹ 20,000.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={ME}
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Manish Kumar</span>
          </td>
          <td className="widgetLgDate">10 May 2022</td>
          <td className="widgetLgAmount"> ₹ 20,000.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
             src={ME}
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Manish Kumar</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">₹ 20,000.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}