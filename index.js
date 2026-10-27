const express=require("express"); //include gibi npm express yaptıgım kutuphaneyı cagırıyorum
const app=express();//cagırınca bır sunucu nesnesı olusuyor buna app dıyoruz



app.get("/", (req, res) => {
  res.send("merhaba, bu benim ilk api denemem");
});

app.get("/todos", (req, res) => {
  res.json([
    { id: 1, title: "Express öğren", done: false },
    { id: 2, title: "API yaz", done: true },
  ]);
});
//biri ana adrese get("/") isteği atarsa bu fonskıyon
//calısır. req gelen istek bilgileri,res ise cevap gondermek 
//ıstenılen nesne

app.listen(3000,()=>{
    console.log("sunucu sorunsuz calısyor: http://localhost:3000");

});
//sunucuyu 3000 numaralı portta baslatıyor program bu satırda
//kapanmıyor istek beklemeye devam edıyor 
