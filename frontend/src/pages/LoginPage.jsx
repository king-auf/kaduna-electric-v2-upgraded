export default function LoginPage() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Login</h1>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
}
