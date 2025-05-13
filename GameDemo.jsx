import { useState } from "react";

export default function GameDemo() {
  const [stage, setStage] = useState("intro");
  const [log, setLog] = useState([]);

  const advance = (text, next) => {
    setLog([...log, text]);
    setStage(next);
  };

  return (
    <div style={{ padding: 20, maxWidth: 700, margin: '0 auto', fontFamily: 'serif' }}>
      <h1 style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>《长安夜行录》试玩Demo</h1>

      {stage === "intro" && (
        <div>
          <p>大唐贞观年间，长安郊外频发命案，百姓惶恐。你是一个天生阴阳眼的咸鱼青年，此刻正靠在自家院外晒太阳……</p>
          <button onClick={() => advance("你打了个哈欠，眼角余光扫到不远处一名白衣女子正盯着你看……", "meet_lu")}>继续</button>
        </div>
      )}

      {stage === "meet_lu" && (
        <div>
          <p>那名女子缓缓走来，声音清冷：“你能看见那些东西，对吗？”</p>
          <button onClick={() => advance("你心头一震，这女子莫非……也是个行道之人？", "respond")}>你是谁？</button>
          <button onClick={() => advance("你翻了个白眼：\"看什么看，没见过帅哥晒太阳？\"", "respond")}>假装无所谓</button>
        </div>
      )}

      {stage === "respond" && (
        <div>
          <p>她自报家门：“我叫陆清漪，隶属天机司，正在调查连环命案。”</p>
          <p>“既然你有阴阳眼，不如一同查案？”</p>
          <button onClick={() => advance("你鬼使神差地点了点头……", "accept_quest")}>好吧，反正也没事干</button>
          <button onClick={() => advance("你摇头拒绝，却发现她的身影已然消失……", "decline")}>不去，我不是英雄</button>
        </div>
      )}

      {stage === "accept_quest" && (
        <div>
          <p>你们踏上了调查旅途，第一个目的地是“忘川渡口”，据说最近有商队全员离奇失踪。</p>
          <p>（试玩结束，完整版即将上线）</p>
        </div>
      )}

      {stage === "decline" && (
        <div>
          <p>你回头望去，只剩空荡院落与飘落的桂花。错过的机会，或许不会再来……</p>
          <p>（试玩结束）</p>
        </div>
      )}

      {log.length > 0 && (
        <div style={{ marginTop: 20, backgroundColor: '#f4f4f4', padding: 10, borderRadius: 6 }}>
          <h3>对话记录：</h3>
          <ul>
            {log.map((item, index) => (
              <li key={index}>· {item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
