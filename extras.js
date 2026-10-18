/* DEZZ1RE STUDIO — interactive artist storefront */
(function(){
'use strict';
const en={
catalogToolsNote:"Find your next sound or let the catalog surprise you.",randomBeat:"RANDOM BEAT ↗",
beatWeekTitle:"BEAT OF THE WEEK",beatWeekLabel:"WEEKLY SPOTLIGHT<br>ONE SOUND / ONE WEEK",beatBack:"← BACK TO CATALOG",
licenseTitle:"Licenses.",licenseLabel:"COMPARE FORMATS<br>CONFIRM RIGHTS BEFORE PAYMENT",licenseMp3:"MP3 license",
licenseMp3Copy:"Request an MP3 delivery license. Confirm the exact files, permitted uses, platforms and monetization before payment.",
licenseMp3Note:"Rights and delivery terms are confirmed directly.",licenseWav:"WAV license",
licenseWavCopy:"WAV is a listed request format; do not assume a master file is ready. Confirm availability, delivered format and rights before payment.",
licenseWavNote:"File availability must be confirmed first.",licenseExclusive:"Exclusive rights",licenseExclusivePrice:"QUOTE",
licenseExclusiveCopy:"Ask whether exclusivity is available for the selected beat. Price, rights scope, prior licenses and delivery files need individual written confirmation.",
licenseExclusiveNote:"Not an automatic purchase or instant transfer.",licenseAsk:"ASK ABOUT LICENSE ↗",
licenseFoot:"No payment is processed on this website. The format choice is an enquiry, not a grant of rights. Confirm license wording, monetization, platform limits, files and any exclusivity in writing before paying.",
briefTitle:"Artist brief.",briefLabel:"CUSTOM PRODUCTION<br>YOUR SOUND / YOUR REFERENCES",
briefIntro:"Share a few references, mood, target tempo and budget. This form prepares a message for DEZZ1RE; it does not submit data to a server or book a service automatically.",
briefRefsLabel:"Reference links / artists",briefRefsPlaceholder:"Paste links or artist names",briefMoodLabel:"Mood / atmosphere",
briefMoodPlaceholder:"Dark, melodic, aggressive…",briefBpmLabel:"Target BPM",briefBpmAny:"Flexible",briefBpmSlow:"Under 140",briefBpmMid:"140–159",briefBpmFast:"160+",
briefBudgetLabel:"Budget",briefBudgetFlexible:"Let’s discuss",briefBudgetLow:"Under 5,000 ₽",briefBudgetMid:"5,000–10,000 ₽",briefBudgetCustom:"Other / custom",
briefMessageLabel:"READY-TO-SEND BRIEF",briefMessagePlaceholder:"Generate a brief to create your message.",briefGenerate:"GENERATE BRIEF ↗",briefCopy:"COPY BRIEF",
briefInstagram:"OPEN INSTAGRAM DM ↗",briefTelegram:"OPEN TELEGRAM ↗",briefNote:"Your details stay in this page until you copy the message; no server submission is made.",
feedbackTitle:"Artist feedback.",feedbackLabel:"REAL RELEASES<br>REAL WORDS ONLY",feedbackHeading:"No invented testimonials.",
feedbackCopy:"Artist quotes, track placements and release links will be published here only when real materials are available and permission has been given. There are no verified testimonials published on this page yet.",
feedbackNote:"Want to share a release made with a DEZZ1RE beat? Send the track link and the name you want credited by DM.",
feedbackInstagram:"SEND A RELEASE ↗",feedbackTelegram:"SEND A RELEASE ↗"
};
const ru={
catalogToolsNote:"Найди свой следующий звук или доверься случайному выбору каталога.",randomBeat:"СЛУЧАЙНЫЙ БИТ ↗",
beatWeekTitle:"БИТ НЕДЕЛИ",beatWeekLabel:"ЕЖЕНЕДЕЛЬНЫЙ ВЫБОР<br>ОДИН БИТ / ОДНА НЕДЕЛЯ",beatBack:"← НАЗАД В КАТАЛОГ",
licenseTitle:"Лицензии.",licenseLabel:"СРАВНИ ФОРМАТЫ<br>УТОЧНИ ПРАВА ДО ОПЛАТЫ",licenseMp3:"Лицензия MP3",
licenseMp3Copy:"Запроси лицензию с передачей MP3. До оплаты уточни точные файлы, разрешённое использование, платформы и монетизацию.",
licenseMp3Note:"Права и передача файлов согласуются напрямую.",licenseWav:"Лицензия WAV",
licenseWavCopy:"WAV можно запросить, но наличие мастер-файла не гарантируется. До оплаты подтверди доступность, формат передачи и права.",
licenseWavNote:"Наличие файла нужно подтвердить заранее.",licenseExclusive:"Эксклюзивные права",licenseExclusivePrice:"ПО ЗАПРОСУ",
licenseExclusiveCopy:"Уточни, доступен ли эксклюзив для выбранного бита. Цена, объём прав, ранее выданные лицензии и файлы согласуются индивидуально письменно.",
licenseExclusiveNote:"Не автоматическая покупка и не мгновенная передача прав.",licenseAsk:"ЗАПРОСИТЬ ЛИЦЕНЗИЮ ↗",
licenseFoot:"Оплата на сайте не принимается. Выбор формата — это запрос, а не предоставление прав. До оплаты письменно согласуй лицензию, монетизацию, ограничения платформ, файлы и эксклюзивность.",
briefTitle:"Бриф артиста.",briefLabel:"БИТ НА ЗАКАЗ<br>ТВОЙ ЗВУК / ТВОИ РЕФЕРЕНСЫ",
briefIntro:"Укажи референсы, настроение, темп и бюджет. Форма подготовит сообщение для DEZZ1RE, но не отправляет данные на сервер и не оформляет заказ автоматически.",
briefRefsLabel:"Ссылки на референсы / артисты",briefRefsPlaceholder:"Вставь ссылки или имена артистов",briefMoodLabel:"Настроение / атмосфера",
briefMoodPlaceholder:"Мрачный, мелодичный, агрессивный…",briefBpmLabel:"Целевой BPM",briefBpmAny:"Гибкий",briefBpmSlow:"Меньше 140",briefBpmMid:"140–159",briefBpmFast:"160+",
briefBudgetLabel:"Бюджет",briefBudgetFlexible:"Обсудить",briefBudgetLow:"До 5 000 ₽",briefBudgetMid:"5 000–10 000 ₽",briefBudgetCustom:"Другой / индивидуальный",
briefMessageLabel:"ГОТОВОЕ СООБЩЕНИЕ",briefMessagePlaceholder:"Сгенерируй бриф, чтобы подготовить сообщение.",briefGenerate:"СОЗДАТЬ БРИФ ↗",briefCopy:"СКОПИРОВАТЬ БРИФ",
briefInstagram:"ОТКРЫТЬ INSTAGRAM DM ↗",briefTelegram:"ОТКРЫТЬ TELEGRAM ↗",briefNote:"Данные остаются на этой странице, пока ты не скопируешь сообщение; отправки на сервер нет.",
feedbackTitle:"Отзывы артистов.",feedbackLabel:"РЕАЛЬНЫЕ РЕЛИЗЫ<br>ТОЛЬКО РЕАЛЬНЫЕ СЛОВА",feedbackHeading:"Без выдуманных отзывов.",
feedbackCopy:"Отзывы, размещённые треки и ссылки на релизы появятся здесь только при наличии реальных материалов и разрешения автора. На этой странице пока нет опубликованных подтверждённых отзывов.",
feedbackNote:"Есть релиз на бите DEZZ1RE? Отправь ссылку на трек и имя для подписи в личные сообщения.",
feedbackInstagram:"ОТПРАВИТЬ РЕЛИЗ ↗",feedbackTelegram:"ОТПРАВИТЬ РЕЛИЗ ↗"
};
Object.assign(translations.en,en);Object.assign(translations.ru,ru);
function getBeat(title){return beats.find(b=>b.title.toLowerCase()===String(title||"").toLowerCase())}
Object.assign(getBeat("DREAMZ"),{key:"B major",credits:"@enosonek"});Object.assign(getBeat("GETUP"),{key:"E minor"});
Object.assign(getBeat("KULAK"),{key:"C minor",credits:"enosonek"});Object.assign(getBeat("OVERTIME"),{key:"D# minor"});Object.assign(getBeat("PACIFIC"),{key:"C# minor"});
const viewToggle=document.getElementById('catalogViewToggle'),viewHint=document.getElementById('catalogViewHint');
let catalogExpanded=false;
function syncCatalogView(){
 const ru=currentLang==='ru';
 if(viewToggle){viewToggle.textContent=catalogExpanded?(ru?'СКРЫТЬ ↖':'SHOW LESS ↖'):(ru?'ПОКАЗАТЬ ВСЕ ↗':'SHOW ALL ↗');viewToggle.setAttribute('aria-expanded',String(catalogExpanded));}
 if(viewHint)viewHint.textContent=catalogExpanded?(ru?'ВСЕ БИТЫ / СЕТКА':'ALL BEATS / GRID'):(ru?'ЛИСТАЙ, ЧТОБЫ СМОТРЕТЬ':'SWIPE TO EXPLORE');
 catalog.classList.toggle('catalog-expanded',catalogExpanded);
}
if(viewToggle)viewToggle.addEventListener('click',()=>{catalogExpanded=!catalogExpanded;syncCatalogView();if(catalogExpanded)document.getElementById('beats')?.scrollIntoView({behavior:'smooth',block:'start'});});
const baseRender=render;
render=function(){
 baseRender();
 syncCatalogView();
 document.querySelectorAll("#catalog .beat").forEach(card=>{
  const cover=card.querySelector(".cover"),foot=card.querySelector(".beat-foot"),title=cover?.dataset.title||card.querySelector(".inquiry")?.dataset.title||card.querySelector("h3")?.textContent.trim();
  if(!title||!foot)return;
  if(cover&&!cover.dataset.detailBound){
   cover.dataset.title=title;cover.dataset.beatOpen="true";cover.setAttribute("role","button");cover.setAttribute("tabindex","0");
   cover.setAttribute("aria-label",(currentLang==="ru"?"Открыть страницу бита ":"Open beat page ")+title);
   cover.addEventListener("click",()=>openBeatPage(title));
   cover.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openBeatPage(title)}});
   cover.dataset.detailBound="true";
  }
  if(!foot.querySelector(".beat-details")){
   const d=document.createElement("button");d.type="button";d.className="listen beat-details";d.dataset.title=title;d.textContent=currentLang==="ru"?"ПОДРОБНЕЕ ↗":"DETAILS ↗";d.addEventListener("click",()=>openBeatPage(title));foot.appendChild(d);
   const s=document.createElement("button");s.type="button";s.className="listen beat-share";s.dataset.title=title;s.textContent=currentLang==="ru"?"ПОДЕЛИТЬСЯ ↗":"SHARE ↗";s.addEventListener("click",()=>shareBeat(title));foot.appendChild(s);
  }
 });
};
let activeBeatPage="",pendingLicense="mp3";
function urlForBeat(title){const u=new URL(window.location.href);u.searchParams.set("beat",title);return u}
async function copyText(text,success){
 try{
  if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(text);
  else{const t=document.createElement("textarea");t.value=text;t.style.position="fixed";t.style.opacity="0";document.body.appendChild(t);t.select();const ok=document.execCommand("copy");t.remove();if(!ok)throw new Error("copy failed")}
  showToast(success||(currentLang==="ru"?"СКОПИРОВАНО":"COPIED"));
 }catch(e){showToast(currentLang==="ru"?"Не удалось скопировать — скопируй вручную":"Copy failed — copy the text manually")}
}
function shareBeat(title){const b=getBeat(title);if(b)copyText(urlForBeat(b.title).href,currentLang==="ru"?"ССЫЛКА НА "+b.title+" СКОПИРОВАНА":"LINK TO "+b.title+" COPIED")}
function openBeatPage(title,updateUrl=true,doScroll=true){
 const b=getBeat(title);if(!b){showToast(currentLang==="ru"?"БИТ НЕ НАЙДЕН":"BEAT NOT FOUND");return}
 activeBeatPage=b.title;
 const r=currentLang==="ru",key=b.key||(r?"Уточнить у продюсера":"Confirm with producer");
 const related=beats.filter(x=>x.title!==b.title).sort((a,c)=>Math.abs(a.bpm-b.bpm)-Math.abs(c.bpm-b.bpm)).slice(0,3);
 const content=document.getElementById("beatDetailContent");
 content.innerHTML='<div class="beat-detail-layout"><div class="beat-detail-art artwork accent-'+b.index+'"><span class="serial">'+b.index+' / DEZZ1RE</span><span class="glyph">'+b.symbol+'</span><span class="genre">'+b.bpm+' BPM</span></div><div class="beat-detail-copy"><p class="eyebrow">'+(r?"БИТ · АВТОРСКИЙ ЗВУК":"BEAT · ORIGINAL SOUND")+' / '+b.index+'</p><h1>'+b.title+'</h1><p class="beat-detail-summary">'+(r?"Оригинальный бит DEZZ1RE. Прослушай превью и перед оплатой уточни доступный формат, права использования и условия лицензии.":"Original DEZZ1RE production. Preview the track and confirm file availability, usage rights and license terms before payment.")+'</p>'+(b.credits?'<p class="beat-detail-credit">'+(r?"СОВМЕСТНЫЙ ПРОДАКШН · DEZZ1RE + ":"COLLAB PRODUCTION · DEZZ1RE + ")+b.credits+'</p>':'')+'<div class="beat-detail-metrics"><div><small>'+(r?"ТЕМП":"TEMPO")+'</small><strong>'+b.bpm+' BPM</strong></div><div><small>'+(r?"ТОНАЛЬНОСТЬ":"KEY")+'</small><strong>'+key+'</strong></div><div><small>'+(r?"НАСТРОЕНИЕ":"MOOD")+'</small><strong>'+(r?"Уточнить у продюсера":"Ask the producer")+'</strong></div></div><div class="beat-detail-actions"><button class="pill detail-preview" type="button" data-title="'+b.title+'" data-audio="'+encodeURIComponent(b.audio)+'">'+(r?"▶ СЛУШАТЬ ПРЕВЬЮ":"▶ PLAY PREVIEW")+'</button><button class="pill detail-buy" type="button">'+(r?"ЗАПРОСИТЬ ЛИЦЕНЗИЮ ↗":"ASK ABOUT LICENSE ↗")+'</button><button class="catalog-action detail-share" type="button">'+(r?"ПОДЕЛИТЬСЯ БИТОМ ↗":"SHARE THIS BEAT ↗")+'</button></div></div></div><div class="beat-detail-similar"><h2>'+(r?"Похожие по темпу":"Similar tempo")+'</h2><div class="similar-beats">'+related.map(x=>'<button class="similar-beat" type="button" data-title="'+x.title+'"><strong>'+x.title+'</strong><span>'+x.bpm+' BPM →</span></button>').join("")+'</div></div>';
 const detailPreview=content.querySelector(".detail-preview");detailPreview.classList.add("preview");
 detailPreview.addEventListener("click",e=>playPreview(e.currentTarget));
 content.querySelector(".detail-buy").addEventListener("click",()=>openInquiry(b.title));
 content.querySelector(".detail-share").addEventListener("click",()=>shareBeat(b.title));
 content.querySelectorAll(".similar-beat").forEach(button=>button.addEventListener("click",()=>openBeatPage(button.dataset.title)));
 document.getElementById("beatDetailPage").hidden=false;document.body.classList.add("beat-page-mode");
 if(updateUrl){const u=urlForBeat(b.title);history.pushState({beat:b.title},"",u.pathname+u.search+u.hash)}
 document.title=b.title+" — DEZZ1RE STUDIO";
 if(doScroll)window.scrollTo({top:0,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});
}
function closeBeatPage(updateUrl=true){
 if(!activeBeatPage&&!document.body.classList.contains("beat-page-mode"))return;
 activeBeatPage="";document.body.classList.remove("beat-page-mode");document.getElementById("beatDetailPage").hidden=true;document.title="DEZZ1RE STUDIO — Independent Sound";
 if(updateUrl){const u=new URL(window.location.href);u.searchParams.delete("beat");history.replaceState({},"",u.pathname+u.search+u.hash)}
}
document.getElementById("beatDetailBack").addEventListener("click",()=>closeBeatPage(true));
window.addEventListener("popstate",()=>{const name=new URLSearchParams(location.search).get("beat");if(name)openBeatPage(name,false);else closeBeatPage(false)});
function renderBeatWeek(){
 const holder=document.getElementById("beatWeekContent");if(!holder)return;
 const now=new Date(),start=new Date(Date.UTC(now.getUTCFullYear(),0,1)),week=Math.ceil((((now-start)/86400000)+start.getUTCDay()+1)/7),b=beats[(week-1)%beats.length],r=currentLang==="ru";
 holder.innerHTML='<div class="beat-week-inner"><div class="beat-week-art artwork accent-'+b.index+'"><div class="beat-week-art-meta"><span>DEZZ1RE / '+String(week).padStart(2,"0")+'</span><span>WEEKLY PICK</span></div><div class="beat-week-art-glyph">'+b.symbol+'</div></div><div class="beat-week-copy"><span class="beat-week-eyebrow">'+(r?"ВЫБОР НЕДЕЛИ":"WEEKLY SELECTION")+' / '+b.bpm+' BPM</span><h3>'+b.title+'</h3><div class="beat-week-stats">'+b.bpm+' BPM · '+(b.key||(r?"ТОНАЛЬНОСТЬ УТОЧНЯЕТСЯ":"KEY TO BE CONFIRMED"))+'</div><p>'+(r?"Выбран для недельного фокуса по темпу и звучанию. Послушай фрагмент и напиши, если хочешь обсудить лицензию, нужный формат файлов или пакет из нескольких битов.":"This week’s spotlight is selected by catalog rotation. Preview it and message DEZZ1RE to discuss the license, requested delivery format or a multi-beat bundle.")+'</p><p class="beat-week-story">'+(b.credits?(r?"Заметка о создании: соавтор указан в исходном файле — DEZZ1RE + "+b.credits+". Подробности аранжировки и сессии уточни у продюсера.":"Production note: the source filename credits DEZZ1RE + "+b.credits+". Ask the producer for arrangement and session details."):(r?"Заметки о референсах и аранжировке можно запросить у продюсера; непроверенные детали создания не публикуются.":"Ask the producer for references and arrangement notes; unverified creation details are not published."))+'</p><div class="beat-week-actions"><button class="pill week-play" type="button">'+(r?"▶ СЛУШАТЬ ПРЕВЬЮ":"▶ PLAY PREVIEW")+'</button><button class="pill week-details" type="button">'+(r?"СТРАНИЦА БИТА ↗":"VIEW BEAT PAGE ↗")+'</button><button class="pill week-buy" type="button">'+(r?"СПРОСИТЬ ОБ УСЛОВИЯХ ↗":"ASK ABOUT THIS BEAT ↗")+'</button></div><p class="beat-week-note">'+(r?"ПРЕДЛОЖЕНИЕ НЕДЕЛИ: спроси в DM о доступных пакетах. Скидка не применяется автоматически; цены, права и наличие файлов нужно подтвердить до оплаты.":"WEEKLY OFFER: request a quote for this beat or a multi-beat bundle. No automatic discount; final price, rights and file availability are confirmed before payment.")+'</p></div></div>';
 holder.querySelector(".week-play").addEventListener("click",()=>playPreview({dataset:{audio:encodeURIComponent(b.audio),title:b.title}}));
 holder.querySelector(".week-details").addEventListener("click",()=>openBeatPage(b.title));
 holder.querySelector(".week-buy").addEventListener("click",()=>openInquiry(b.title));
}
function pickRandomBeat(){
 const visible=[...document.querySelectorAll("#catalog .preview")];if(!visible.length){showToast(currentLang==="ru"?"НЕТ БИТОВ ПО ЭТИМ ФИЛЬТРАМ":"NO BEATS MATCH THESE FILTERS");return}
 let choices=visible.filter(button=>!activeAudio||button.dataset.audio!==activeAudio.dezzirePath);if(!choices.length)choices=visible;
 const chosen=choices[Math.floor(Math.random()*choices.length)];chosen.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"center"});playPreview(chosen);
}
document.getElementById("randomBeat").addEventListener("click",pickRandomBeat);
document.querySelectorAll(".license-ask").forEach(button=>button.addEventListener("click",()=>{pendingLicense=button.dataset.license;document.getElementById("beats").scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});showToast(currentLang==="ru"?"Теперь выбери бит в каталоге":"Now choose the beat in the catalog")}));
function createArtistBrief(){
 const r=currentLang==="ru",refs=document.getElementById("briefRefs").value.trim()||(r?"не указаны":"not supplied"),mood=document.getElementById("briefMood").value.trim()||(r?"обсудить с продюсером":"to be discussed");
 const bpmMap=r?{flex:"гибкий",under140:"до 140","140-159":"140–159","160+":"160+"}:{flex:"flexible",under140:"under 140","140-159":"140–159","160+":"160+"};
 const budgetMap=r?{flex:"обсудить",under5000:"до 5 000 ₽","5000-10000":"5 000–10 000 ₽",custom:"индивидуально"}:{flex:"to discuss",under5000:"under 5,000 ₽","5000-10000":"5,000–10,000 ₽",custom:"custom"};
 document.getElementById("artistBriefMessage").value=r?"Привет, DEZZ1RE! Хочу обсудить бит на заказ.\nРеференсы / артисты: "+refs+"\nНастроение: "+mood+"\nТемп (BPM): "+bpmMap[document.getElementById("briefBpm").value]+"\nБюджет: "+budgetMap[document.getElementById("briefBudget").value]+"\nНапиши, пожалуйста, о доступности, сроках, стоимости и условиях передачи файлов и прав.":"Hey DEZZ1RE! I’d like to discuss a custom beat.\nReferences / artists: "+refs+"\nMood: "+mood+"\nTarget BPM: "+bpmMap[document.getElementById("briefBpm").value]+"\nBudget: "+budgetMap[document.getElementById("briefBudget").value]+"\nPlease let me know availability, timeline, price, delivery files and usage terms.";
}
document.getElementById("artistBriefForm").addEventListener("submit",e=>{e.preventDefault();createArtistBrief();document.getElementById("artistBriefMessage").focus();showToast(currentLang==="ru"?"БРИФ ГОТОВ — СКОПИРУЙ И ОТПРАВЬ":"BRIEF READY — COPY AND SEND")});
document.getElementById("copyArtistBrief").addEventListener("click",()=>{if(!document.getElementById("artistBriefMessage").value)createArtistBrief();copyText(document.getElementById("artistBriefMessage").value,currentLang==="ru"?"БРИФ СКОПИРОВАН":"BRIEF COPIED")});
let vizContext=null,vizAnalyser=null,vizFrame=0,vizData=null,vizSource=null,vizAudio=null;
function prepareVisualizer(audio){
 try{
  const Ctx=window.AudioContext||window.webkitAudioContext;if(!Ctx)return;
  if(vizAudio===audio){if(vizContext.state==="suspended")vizContext.resume();startVisualizer();return}
  if(!vizContext){vizContext=new Ctx();vizAnalyser=vizContext.createAnalyser();vizAnalyser.fftSize=128;vizAnalyser.smoothingTimeConstant=.78;vizData=new Uint8Array(vizAnalyser.frequencyBinCount);vizAnalyser.connect(vizContext.destination)}
  if(vizSource){vizSource.disconnect();vizSource=null}
  vizSource=vizContext.createMediaElementSource(audio);vizSource.connect(vizAnalyser);vizAudio=audio;
  if(vizContext.state==="suspended")vizContext.resume();
  audio.addEventListener("playing",startVisualizer);audio.addEventListener("pause",startVisualizer);audio.addEventListener("ended",startVisualizer);
 }catch(e){/* Playback remains available if live analysis is unsupported. */}
 startVisualizer();
}
function startVisualizer(){if(!vizFrame)vizFrame=requestAnimationFrame(drawVisualizer)}
function drawVisualizer(){
 const canvas=document.getElementById("audioVisualizer");if(!canvas){vizFrame=0;return}
 const ctx=canvas.getContext("2d"),w=canvas.width,h=canvas.height;ctx.clearRect(0,0,w,h);
 const live=!!(activeAudio&&!activeAudio.paused&&!activeAudio.ended&&!activeAudio.error);if(live&&vizAnalyser&&vizData)vizAnalyser.getByteFrequencyData(vizData);
 const bars=32,gap=3,bw=(w-gap*(bars-1))/bars;ctx.fillStyle=document.documentElement.dataset.theme==="dark"?"#f1f1f1":"#111111";
 for(let i=0;i<bars;i++){let value=live&&vizData?vizData[Math.min(vizData.length-1,Math.floor(i*vizData.length/bars))]/255:(i%5===0?.18:.08);if(live&&!vizData)value=.15+Math.abs(Math.sin(Date.now()/90+i*.7))*.55;const bh=Math.max(2,Math.round((.12+value*.88)*h));ctx.fillRect(i*(bw+gap),Math.round((h-bh)/2),bw,bh)}
 if(live)vizFrame=requestAnimationFrame(drawVisualizer);else vizFrame=0;
}
const basePlayPreview=playPreview;
playPreview=function(button){
 basePlayPreview(button);
 if(activeAudio&&button.dataset&&button.dataset.audio===activeAudio.dezzirePath){
  const b=getBeat(button.dataset.title),bpm=document.getElementById("globalBpm");
  bpm.textContent=b?b.bpm+" BPM":"— BPM";bpm.classList.remove("bpm-pulse");void bpm.offsetWidth;bpm.classList.add("bpm-pulse");
  document.getElementById("globalBuy").disabled=false;
  prepareVisualizer(activeAudio);
 }
};
document.getElementById("globalBuy").addEventListener("click",()=>{if(activeAudio&&activeAudio.dezzireTitle)openInquiry(activeAudio.dezzireTitle)});
document.getElementById("globalClose").addEventListener("click",()=>{if(vizSource){try{vizSource.disconnect()}catch(e){}vizSource=null;vizAudio=null}document.getElementById("globalBuy").disabled=true;document.getElementById("globalBpm").textContent="— BPM";startVisualizer()});
const baseOpenInquiry=openInquiry;
openInquiry=function(title){
 baseOpenInquiry(title);
 const select=document.getElementById("licenseSelect"),list=document.getElementById("priceList");
 const exclusive=currentLang==="ru"?'<option value="exclusive">ЭКСКЛЮЗИВ · УСЛОВИЯ ПО ЗАПРОСУ</option>':'<option value="exclusive">EXCLUSIVE · TERMS ON REQUEST</option>';
 if(!select.querySelector('option[value="exclusive"]'))select.insertAdjacentHTML("beforeend",exclusive);
 list.innerHTML=currentLang==="ru"?'<div><span>ЛИЦЕНЗИЯ MP3</span><b>1 200 ₽ / $15</b></div><div><span>ЛИЦЕНЗИЯ WAV</span><b>2 000 ₽ / $25 · НАЛИЧИЕ УТОЧНИТЬ</b></div><div><span>ЭКСКЛЮЗИВ</span><b>ПО ЗАПРОСУ · УСЛОВИЯ УТОЧНИТЬ</b></div>':'<div><span>MP3 LICENSE</span><b>1 200 ₽ / $15</b></div><div><span>WAV LICENSE</span><b>2 000 ₽ / $25 · CONFIRM AVAILABILITY</b></div><div><span>EXCLUSIVE</span><b>QUOTE · TERMS TO CONFIRM</b></div>';
 select.value=pendingLicense;pendingLicense="mp3";updatePurchaseMessage();
};
const baseSetLanguage=setLanguage;
setLanguage=function(lang){
 baseSetLanguage(lang);
 document.getElementById("briefRefs").placeholder=translations[lang].briefRefsPlaceholder;
 document.getElementById("briefMood").placeholder=translations[lang].briefMoodPlaceholder;
 document.getElementById("artistBriefMessage").placeholder=translations[lang].briefMessagePlaceholder;
 renderBeatWeek();
 if(activeBeatPage)openBeatPage(activeBeatPage,false,false);
};
setLanguage(currentLang);
const deepLink=new URLSearchParams(window.location.search).get("beat");if(deepLink)openBeatPage(deepLink,false,false);
})();
