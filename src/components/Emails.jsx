import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessagesAction } from "../store/actions/actions";
import EmailItem from "./EmailItem";

const Emails = () => {
  const dispatch = useDispatch();
  const subMenuId = useSelector((state) => state.id);
  const messages = useSelector((state) => state.messages);

  useEffect(() => {
    const fetch = async () => {
      if (subMenuId) {
        await dispatch(getMessagesAction(subMenuId));
      }
    };

    fetch();
  }, [subMenuId, dispatch]);

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
