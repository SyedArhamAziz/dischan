import "./App.css";

function Message({ id, datetime, messagetext }) {
  return (
    <div className="message">
      <p>{id}</p>
      <p>{datetime}</p>
      <div className="message_content">
        <p>{messagetext}</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div>

      <Message id={"g4Jx8N"} datetime={"2023-04-15 23:34:55"} messagetext={"h"} />
      <Message id={"g4Jx8N"} datetime={"2023-04-15 23:34:55"} messagetext={"h"} />
      <Message id={"g4Jx8N"} datetime={"2023-04-15 23:34:55"} messagetext={"h"} />
      <Message id={"g4Jx8N"} datetime={"2023-04-15 23:34:55"} messagetext={"h"} />
    </div>
  );
}