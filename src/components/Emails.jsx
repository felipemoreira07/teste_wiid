import EmailItem from "./EmailItem";

const Emails = ({ messages }) => {
  return (
    messages &&
    messages.subMenuItems.map((message) => {
      return (
        <EmailItem
          key={message.id}
          owner={message.owner}
          name={message.name}
          subject={message.subject}
          date=""
        />
      );
    })
  );
};

export default Emails;
