import EmailItem from "./EmailItem";
import { useSelector } from "react-redux/es/exports";

const Emails = () => {
  const { messages } = useSelector((state) => state.data);

  const fetch = async () => {
    const { data } = await getSubMenus(id);
    messages = data;
  };

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
