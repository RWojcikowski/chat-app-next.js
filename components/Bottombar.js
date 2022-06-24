import { useState } from "react";
import { FormControl, Input, Button } from "@chakra-ui/react";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseconfig";

export default function Bottombar({id, user}) {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, `chats/${id}/messages`), {
      text: input,
      sender: user.email,
      timestamp: serverTimestamp()
    })
    setInput("");
  }

  return (
    
    <FormControl p={5}
   onSubmit={sendMessage}
   as="form"
    >
      <Input color="white" placeholder="Napisz cos!" autoComplete="off" onChange={e => setInput(e.target.value)} value={input} />
      <Button type="submit" hidden  >
        Wyślij
      </Button>
    </FormControl>
  );
};