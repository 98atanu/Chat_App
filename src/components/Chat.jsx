import React, { useState, useCallback, useEffect, useRef } from "react";
import { OpenRouter_ai } from "../network/OpenRouter_ai";
import ChatCard from "./ChatCard";
import { IoToggle } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa6";
import { SyncLoader } from "react-spinners";

const Chat = () => {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const scrollElement = useRef(null);

  useEffect(() => {
    const storedMessages = localStorage.getItem("messageHistory");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  const updateMessage = ({ sender, message }) => {
    setMessages((prev) => [...prev, { sender, message }]);
    const storedMessages = localStorage.getItem("messageHistory") || "[]";
    localStorage.setItem(
      "messageHistory",
      JSON.stringify([...JSON.parse(storedMessages), { sender, message }])
    );
  };

  const handleSubmit = useCallback(
    async (value) => {
      if (!value) return;
      updateMessage({ sender: "user", message: value });
      scrollElement.current.scrollIntoView();
      setLoading(true);
      setValue(" ");
      
      try {
        const res = await OpenRouter_ai(value);
        console.log("res", res);
        const message = res?.data?.choices?.[0]?.message?.content;
        updateMessage({ sender: "bot", message });
      } catch (error) {
        console.error("An error occurred", error);
      }
      setLoading(false);
    },
    [setMessages]
  );

  useEffect(() => {
    if(scrollElement.current) {
      scrollElement.current.scrollIntoView({behaviour: "smooth"})
    }
  }, [messages])
  

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(value);
    }
  };

  return (
    <div className="md:ml-[40vw] lg:ml-[30vw] h-full fixed inset-0">
      <div className="relative w-full h-screen scroll-smooth scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin  scrollbar-thumb-[#d62b5e] scrollbar-track-[#fab7cb] overflow-y-scroll mt-10">
        {messages.map((data, index) => (
          <ChatCard key={index} data={data.message} sender={data.sender} />
        ))}
        {loading && (
          <div className="absolute left-8  mt-1 ">
            <SyncLoader color="#d62b5e" size={6} />
          </div>
        )}
        <div className="h-32"></div>
        <div ref={scrollElement}></div>
      </div>
      <div className="absolute lg:pl-32 md:pl-6 px-3  bottom-0 left-0 right-0 flex gap-3 items-center bg-[#121212]">
        <div className="flex flex-col items-end">
          <button className="flex gap-1 items-center text-[#d62b5e] text-sm">
            text <IoToggle className="text-[#d62b5e] " />
          </button>
          <input
            className=" border-[2px] border-[#b00909] px-2 py-1 rounded-md bg-[#121212]  outline-none  w-[85vw] md:w-[50vw] lg:w-[40vw]"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type a message here..."
          />
        </div>
        <div>
          <button
            className="text-3xl translate-y-4 text-[#d62b5e]"
            onClick={() => handleSubmit(value)}
          >
            <FaTelegram />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
