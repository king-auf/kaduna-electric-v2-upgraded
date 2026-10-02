import CreditBanner from "../components/CreditBanner";

export default function DashboardPage() {
  return (
    <div className="dashboard-shell">
      <aside className="sidebar">
        <div className="logo">Kaduna Electric</div>
        <nav>
          <a href="#">Overview</a>
          <a href="#">Meters</a>
          <a href="#">Transactions</a>
          <a href="#">Credit</a>
        </nav>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>Customer dashboard</h1>
        </header>

        <section className="summary-grid">
          <div className="summary-card">
            <span>Total spent</span>
            <strong>₦120,000</strong>
          </div>
          <div className="summary-card">
            <span>Outstanding credit</span>
            <strong>₦0</strong>
          </div>
          <div className="summary-card">
            <span>Active meters</span>
            <strong>3</strong>
          </div>
        </section>

        <section className="dashboard-panel">
          <h2>Recent transactions</h2>
          <table>
            <thead>
              <tr>
                <th>Meter</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>789874</td>
                <td>₦5,000</td>
                <td>Success</td>
              </tr>
              <tr>
                <td>804733</td>
                <td>₦2,500</td>
                <td>Success</td>
              </tr>
            </tbody>
          </table>
        </section>

        <CreditBanner />
      </main>
    </div>
  );
}
