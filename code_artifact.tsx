import React, { useState } from 'react';

// 定義故事節點的資料結構
const storyNodes = {
  1: {
    emoji: "🏫",
    title: "早晨上學",
    text: "早安！小宇來到學校了。離上課還有一點時間，小宇現在該做什麼呢？",
    type: "normal",
    choices: [
      { text: "去「安靜角落」深呼吸，讓自己平靜下來。", next: 2 },
      { text: "直接進教室坐在位子上等，但心裡有點緊張。", next: 3 }
    ]
  },
  2: {
    emoji: "🧘‍♂️",
    title: "平靜的開始",
    text: "小宇在安靜角落深呼吸了三次（吸氣～吐氣～）。老師也來跟小宇說早安，並給小宇看了今天的「視覺化課表」。小宇覺得很安心。",
    type: "normal",
    choices: [
      { text: "開始上課！", next: 4 }
    ]
  },
  3: {
    emoji: "😰",
    title: "緊張的開始",
    text: "小宇坐在位子上，不知道第一節要做什麼，覺得有點焦慮和不確定。",
    type: "normal",
    choices: [
      { text: "開始上課！", next: 4 }
    ]
  },
  4: {
    emoji: "📝",
    title: "發考卷與訂正",
    text: "數學課時，老師發下考卷。小宇發現自己算錯了三題，老師說要「訂正作業」。小宇覺得成績不如意，腦袋裡開始覺得很煩躁，不想寫字，快要生氣了！",
    type: "normal",
    choices: [
      { text: "舉手跟老師說：「老師，我現在不想寫，我可以先休息3分鐘嗎？」", next: 5 },
      { text: "生氣地把考卷揉成一團，想要丟掉！", next: 6 }
    ]
  },
  5: {
    emoji: "🌟",
    title: "情緒小達人！",
    text: "老師笑著說：「小宇很棒，能勇敢說出你的感覺！你可以去休息區休息3分鐘。」小宇休息後，心情平復了，順利把考卷訂正完。",
    type: "ending",
    endingMessage: "你學會了用說話代替生氣，完美解決了困難！",
    choices: [
      { text: "再玩一次", next: 1 }
    ]
  },
  6: {
    emoji: "😤",
    title: "快要失控了",
    text: "老師看到小宇生氣了，老師保持冷靜，沒有大聲說話。老師溫和且具體地說：「小宇，我看到你現在很生氣，我們先去冷靜角落。」",
    type: "normal",
    choices: [
      { text: "跟著老師去冷靜角落，使用「冷靜表單」和捏捏球轉移注意力。", next: 7 },
      { text: "大聲拒絕，並且不小心撞到了旁邊的同學！", next: 8 }
    ]
  },
  7: {
    emoji: "🌱",
    title: "冷靜小勇士！",
    text: "小宇在冷靜角落看著情緒卡片，把生氣的情緒慢慢吐出去。事後，老師跟小宇一起討論，練習下次生氣時可以怎麼做。",
    type: "ending",
    endingMessage: "雖然一開始很生氣，但你學會了讓自己冷靜下來，這也是很棒的進步喔！",
    choices: [
      { text: "再玩一次", next: 1 }
    ]
  },
  8: {
    emoji: "🤝",
    title: "勇敢道歉的好孩子！",
    text: "同學被撞到覺得很痛。老師沒有馬上責罵小宇，而是等小宇完全冷靜下來後，帶小宇去跟同學說話。老師教導小宇說：「對不起，我剛剛太生氣了，不是故意撞你的。」同學也原諒了小宇。",
    type: "ending",
    endingMessage: "每個人都會犯錯，但最重要的是學會道歉和修復關係，你做到了！",
    choices: [
      { text: "再玩一次", next: 1 }
    ]
  }
};

export default function App() {
  const [currentNode, setCurrentNode] = useState(1);

  const handleChoice = (nextNode) => {
    setCurrentNode(nextNode);
  };

  const currentData = storyNodes[currentNode];

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4 font-sans">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl border-4 border-blue-100 overflow-hidden">
        
        {/* 頂部標題區塊 */}
        <div className="bg-blue-100 p-6 text-center">
          <h1 className="text-3xl font-bold text-blue-800">小宇的校園挑戰</h1>
          <p className="text-blue-600 text-lg mt-2">學習面對情緒與作業</p>
        </div>

        {/* 內容區塊 */}
        <div className="p-8 md:p-12 flex flex-col items-center text-center">
          
          {/* Emoji 顯示 */}
          <div className="text-8xl mb-6 select-none transition-transform duration-500 ease-in-out">
            {currentData.emoji}
          </div>

          {/* 標題與內文 */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {currentData.title}
          </h2>
          <p className="text-2xl leading-relaxed text-gray-700 mb-10 max-w-2xl">
            {currentData.text}
          </p>

          {/* 結局特別訊息 */}
          {currentData.type === "ending" && (
            <div className="bg-yellow-50 border-2 border-yellow-200 text-yellow-800 p-4 rounded-2xl mb-8 w-full">
              <p className="text-2xl font-bold">✨ {currentData.endingMessage} ✨</p>
            </div>
          )}

          {/* 選項按鈕區塊 */}
          <div className="w-full flex flex-col gap-4">
            {currentData.choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => handleChoice(choice.next)}
                className={`w-full text-left md:text-center text-xl md:text-2xl font-bold p-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-sm
                  ${currentData.type === 'ending' 
                    ? 'bg-green-100 hover:bg-green-200 text-green-900 border-2 border-green-200' 
                    : 'bg-blue-50 hover:bg-blue-100 text-blue-900 border-2 border-blue-200'
                  }`}
              >
                {choice.text}
              </button>
            ))}
          </div>

        </div>

        {/* 底部裝飾 */}
        <div className="h-4 bg-green-200 w-full"></div>
      </div>
    </div>
  );
}