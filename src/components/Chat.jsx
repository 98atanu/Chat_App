import React, { useState, useCallback } from "react";
import { OpenRouter_ai } from "../network/OpenRouter_ai";
import ChatCard from "./ChatCard";
import { IoToggle } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa6";
import { SyncLoader } from "react-spinners";


const Chat = () => {
    const [value, setValue] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false)
  

    const handleSubmit = useCallback(
        async (value) => {
            if (!value) return;
            setMessages((prev) => [...prev, { sender: "user", message: value }]);
            setLoading(true)
            setValue(" ")

            try {
                const res = await OpenRouter_ai(value);
                console.log("res", res);
                const message = res?.data?.choices?.[0]?.message?.content;
                setMessages((prev) => [...prev, { sender: "bot", message }]);
            } catch (error) {
                console.error("An error occurred", error);
            }
            setLoading(false)
           
        },
        [setMessages]
    );

    const handleKeyPress = (event) => {
        if(event.key === "Enter"){
            handleSubmit(value)
           
        }
    }

    return (
        <div className="relative w-full h-screen">
             
            {messages.map((data, index) => (
                <ChatCard key={index} data={data.message} sender={data.sender} />
            ))}
            {loading && (
            <div  className="absolute left-8  mt-3 "><SyncLoader color="#d62b5e" size={10} /></div>
        )}
            <div className="absolute bottom-10 left-40 flex gap-3 items-center ">
                <div className="flex flex-col items-end">
                    <button className="flex gap-1 items-center text-[#d62b5e] text-sm">
                        text <IoToggle className="text-[#d62b5e] "/>
                    </button>
                    <input
                        className=" border-[2px] border-[#b00909] px-2 py-1 rounded-md bg-[#121212] w-[40vw] outline-none"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onKeyDown={handleKeyPress}

                        placeholder="Type a message here..."
                    />
                </div>
               
                <div>
                    <button className="text-3xl translate-y-4 text-[#d62b5e]" onClick={() => handleSubmit(value)}>
                        <FaTelegram />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Chat;
