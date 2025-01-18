import React, { useState } from "react";
import { Button } from "../ui/button";
import { Gemini } from "./Gemini";
import { ToastContainer, toast } from 'react-toastify';
import { FaCopy } from "react-icons/fa";
import { RiAiGenerate2 } from "react-icons/ri";
import { AiOutlineLoading } from "react-icons/ai";


const Home = () => {
    const [userInput, setUserInput] = useState(""); // State for user input
    const [aiResponse, setAiResponse] = useState(""); 
    const [loading,setLoading]=useState(0);
const [gotres,setGotres]=useState(0);
    // Simulate AI generation (replace with actual API call)
    const generateResponsePrompt = async () => {
      if (!userInput.trim()) {
          toast("Please enter a prompt to generate text.");
          return;
      } else {
          toast("Please wait a while Enhancing Prompt");
  
          // Set loading to true when the request starts
          setLoading(true);
  
          const enhancedPrompt = `Enhance the following prompt for better clarity and depth: "${userInput}" and give 1 enhanced prompt.`;
  
          try {
              // Assuming Gemini is a function that returns a promise
              let answer = await Gemini(enhancedPrompt);
              console.log(answer);
  
              // Set the AI response
              setAiResponse(answer);
          } catch (error) {
              console.error("Error generating response:", error);
              toast.error("Failed to generate response.");
          } finally {
              // Set loading to false when the request finishes, whether successful or not
              setLoading(false);
              setGotres(1);
          }
      }
  };
  
    const handleCopy = () => {
      const textToCopy = document.getElementById('textToCopy');
      const tempTextArea = document.createElement('textarea');
      tempTextArea.value = textToCopy.innerText; // Get text content of the pre element
      document.body.appendChild(tempTextArea);

      tempTextArea.select();
      tempTextArea.setSelectionRange(0, 99999); // For mobile devices

      document.execCommand('copy');
      document.body.removeChild(tempTextArea);

      toast.success("Text copied to clipboard!"); // Show success toast
  };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-24  p-4">
            <h1 className="text-2xl font-bold mb-6">AI ✨ Prompt Enhancer</h1>

            {/* Input and Output Container */}
            <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6 space-y-6">
                {/* User Input */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        Enter your text: 🖹
                    </label>
                    <textarea
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="4"
                        placeholder="Type your prompt here..."
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                    ></textarea>
                </div>
                 {/* Generate Button */}
                 <div className="flex justify-end">
                    <Button
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                        onClick={generateResponsePrompt}
                    >
                       <span className="flex gap-2 justify-center items-center"> {loading ? (
                    <AiOutlineLoading className="text-3xl animate-spin" />
                ) : (
                    <>
                        Generate <RiAiGenerate2 className="ml-2 text-xl" />
                    </>
                )} </span>
                    </Button>
                </div>

                {/* AI Response */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        AI Response: 🚀
                    </label>
                    <div className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50">
                       
                    <pre id="textToCopy" class="whitespace-pre-wrap break-words max-w-full overflow-hidden">{aiResponse || "AI-generated text will appear here."}</pre>

                    </div>
                </div>
                 {/* Generate Button */}
                 <div className="flex justify-end">
                    <Button  id="copyButton"  onClick={handleCopy} disabled={!gotres}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                       
                    >
                        Copy <FaCopy />
                    </Button>
                </div>

               
            </div>
            <ToastContainer />
        </div>
        
       
    );
};

export default Home;
