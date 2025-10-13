// import React, { useState, useRef } from 'react';
// import './OpenDyslexic.css'; 
  
// const TextSimplifier = () => {
//   const [inputText, setInputText] = useState('');
//   const [simplifiedText, setSimplifiedText] = useState('');
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [fontSize, setFontSize] = useState(18);
//   const [lineSpacing, setLineSpacing] = useState(1.5);
//   const [useDysFont, setUseDysFont] = useState(true);
//   const utteranceRef = useRef(null);

//   // Mock AI simplification (replace later with backend call)
//   const simplifyText = async () => {
//   try {
//     const res = await fetch('http://localhost:5000/api/simplify-text', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ text: inputText })
//     });

//     const data = await res.json();
//     setSimplifiedText(data.simplified);
//   } catch (error) {
//     console.error('Error simplifying text:', error);
//     alert("Simplification failed.");
//   }
// };

//   const speakText = () => {
//     if (isSpeaking) {
//       window.speechSynthesis.cancel();
//       setIsSpeaking(false);
//       return;
//     }

//     const words = simplifiedText.split(' ');
//     let index = 0;

//     utteranceRef.current = new SpeechSynthesisUtterance();
//     utteranceRef.current.text = simplifiedText;
//     utteranceRef.current.lang = 'en-US';
//     utteranceRef.current.rate = 0.9;

//     utteranceRef.current.onstart = () => setIsSpeaking(true);
//     utteranceRef.current.onend = () => setIsSpeaking(false);

//     window.speechSynthesis.speak(utteranceRef.current);
//   };

//   return (
//     <div className="p-6 bg-white shadow-xl rounded-2xl max-w-4xl mx-auto mt-10">
//       <h2 className="text-2xl font-bold text-blue-800 mb-4">🧠 Text Simplifier</h2>

//       <textarea
//         className="w-full p-3 border border-gray-300 rounded mb-4"
//         rows={6}
//         value={inputText}
//         onChange={(e) => setInputText(e.target.value)}
//         placeholder="Paste or type text here..."
//       />

//       <div className="flex gap-3 mb-4">
//         <button onClick={simplifyText} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Simplify</button>
//         <button onClick={speakText} className={`px-4 py-2 rounded ${isSpeaking ? 'bg-red-600' : 'bg-green-600'} text-white`}>
//           {isSpeaking ? 'Stop' : 'Speak'}
//         </button>
//       </div>

//       <div className="mb-4">
//         <label className="mr-4">
//           <input type="checkbox" checked={useDysFont} onChange={() => setUseDysFont(!useDysFont)} />
//           Use Dyslexia-Friendly Font
//         </label>
//       </div>

//       <div className="mb-4 flex gap-4">
//         <label>
//           Font Size:
//           <input
//             type="range"
//             min={14}
//             max={30}
//             value={fontSize}
//             onChange={(e) => setFontSize(parseInt(e.target.value))}
//             className="ml-2"
//           />
//         </label>

//         <label>
//           Line Spacing:
//           <input
//             type="range"
//             min={1}
//             max={3}
//             step={0.1}
//             value={lineSpacing}
//             onChange={(e) => setLineSpacing(parseFloat(e.target.value))}
//             className="ml-2"
//           />
//         </label>
//       </div>

//       {simplifiedText && (
//         <div
//           className={`p-4 rounded bg-gray-100 border border-gray-300 mt-4 transition-all`}
//           style={{
//             fontFamily: useDysFont ? 'OpenDyslexic' : 'sans-serif',
//             fontSize: `${fontSize}px`,
//             lineHeight: lineSpacing,
//           }}
//         >
//           {simplifiedText}
//         </div>
//       )}
//     </div>
//   );
// };

// export default TextSimplifier;

import React, { useState } from 'react';

const TextSimplifier = () => {
  const [inputText, setInputText] = useState('');
  const [simplifiedText, setSimplifiedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSimplify = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    setError('');
    setSimplifiedText('');

    try {
      const response = await fetch('http://localhost:5000/api/simplify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      });

      const data = await response.json();

      if (response.ok) {
        setSimplifiedText(data.simplifiedText);
      } else {
        setError(data.error || 'Failed to simplify text');
      }
    } catch (err) {
      setError('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 shadow-lg rounded-xl bg-white space-y-4">
      <h2 className="text-2xl font-bold">Dyslexia-Friendly Text Simplifier</h2>
      
      <textarea
        rows="6"
        className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-blue-400"
        placeholder="Enter difficult or complex text here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <button
        onClick={handleSimplify}
        disabled={loading}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? 'Simplifying...' : 'Simplify Text'}
      </button>

      {error && (
        <div className="text-red-500 font-medium">{error}</div>
      )}

      {simplifiedText && (
        <div className="p-4 bg-green-100 border-l-4 border-green-500 rounded-lg mt-4">
          <h3 className="font-semibold">Simplified Text:</h3>
          <p className="mt-2 text-lg">{simplifiedText}</p>
        </div>
      )}
    </div>
  );
};

export default TextSimplifier;
