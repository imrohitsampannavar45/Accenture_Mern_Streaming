function UserLoggin() {
  let msg = alert("hi");
  return (
    <>
      <h1 className="heading-1">Welcome Back {msg}</h1>
    </>
  )
}

function GuestLogin() {
  return <h1 className="heading-2">Conditional Render Demo Please Sign Up !</h1>;
}

function ConditionalRender(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserLoggin />;
  }
  return <GuestLogin />;
}

export default ConditionalRender;
