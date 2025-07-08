import React from 'react';
import './DiscountTable.css';

export default function DiscountTable() {
  return (
    <section className="discount-table-section">
      <h2 className="table-title">🎓 Compare Your Course Discounts</h2>
      <p className="table-subtitle">📉 Save more with every card level</p>

      <div className="table-container">
        <table className="discount-table">
          <thead>
            <tr>
              <th>Program</th>
              <th>EduPass 💡</th>
              <th>ScholarPass 🎓</th>
              <th>InfinityPass 🚀</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Master a Language (ML)</td>
              <td>10%</td>
              <td>10%</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>International Diploma (ID)</td>
              <td>10%</td>
              <td>12%</td>
              <td>12%</td>
            </tr>
            <tr>
              <td>ID Fast Track</td>
              <td>10%</td>
              <td>10%</td>
              <td>12%</td>
            </tr>
            <tr>
              <td>Immersion Programs 🌍</td>
              <td>❌</td>
              <td>12%</td>
              <td>15%</td>
            </tr>
            <tr>
              <td>LMS Courses 💻</td>
              <td>❌</td>
              <td>5%</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>Referral Bonus 🎁</td>
              <td>❌</td>
              <td>5%</td>
              <td>5%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
