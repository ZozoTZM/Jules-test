export function Header() {
  const handleLogin = () => console.log("Button login was pressed");
  const handleAvatarClick = () => console.log("Button avatar was pressed");

  return (
    <header>
      <div className="logo">
        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
        </svg>
        <h1>Esports Draft</h1>
      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Leagues</a>
      </nav>
      <div className="user-actions">
        <button onClick={handleLogin}>
          <span className="material-symbols-outlined">login</span>
        </button>
        <div
          className="avatar"
          style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuApxdALXa9l3BjP1lbdzZiCVt4F5t2xGr6CWXSI8cWX0kFY4aLszuXrhH6FnI4zY-W3Y7BAi5bDoPSysywuYaH9tOeULe6wunF1rs7MuWkhJYPOclRRxg1nk2h0X7uVc6E-ArKmBqWVAnuqkcrSQJ0jva7jQ9ALnWnZOb7pUXvD7Z1WPkRmkmBQofE0rin-lR38T1vm7v2hcU4k89Fd8WHM3mUlqY3T3A7ZiS12HBRACVu2SDerO9QmPi-E-glQOpe6dccKPT-rAEsr")` }}
          onClick={handleAvatarClick}
        ></div>
      </div>
    </header>
  );
}