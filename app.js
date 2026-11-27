(function(){
var S=[].slice.call(document.querySelectorAll("main section")),cur=0;
function t(s){return s.querySelector("h1,h2").textContent.replace(/\s+/g," ").trim()}
function show(i,noHash){
  cur=Math.max(0,Math.min(S.length-1,i));
  S.forEach(function(s,k){s.classList.toggle("on",k===cur)});
  document.getElementById("pg").textContent=(cur+1)+" / "+S.length;
  document.getElementById("pv").disabled=cur===0;
  document.getElementById("nx").disabled=cur===S.length-1;
  if(!noHash){try{history.replaceState(null,"","#"+S[cur].id)}catch(e){}}
  window.scrollTo(0,0);
}
function go(id){var k=S.findIndex(function(s){return s.id===id});if(k>=0){show(k);close()}}
function close(){document.getElementById("idx").classList.remove("on");document.getElementById("res").classList.remove("on")}
var il=document.getElementById("il");
S.forEach(function(s,k){var a=document.createElement("a");a.href="#"+s.id;a.textContent=(k+1)+". "+t(s);a.onclick=function(e){e.preventDefault();go(s.id)};il.appendChild(a)});
document.getElementById("bi").onclick=function(){document.getElementById("idx").classList.add("on")};
document.getElementById("ci").onclick=close;document.getElementById("cr").onclick=close;
document.getElementById("pv").onclick=function(){show(cur-1)};
document.getElementById("nx").onclick=function(){show(cur+1)};
document.querySelectorAll(".grid a").forEach(function(a){a.onclick=function(e){e.preventDefault();go(a.getAttribute("href").slice(1))}});
document.addEventListener("keydown",function(e){if(e.target.id==="q")return;if(e.key==="ArrowLeft")show(cur-1);if(e.key==="ArrowRight")show(cur+1)});
var q=document.getElementById("q");
function search(){
  var v=q.value.trim().toLowerCase(),rl=document.getElementById("rl");if(!v){close();return}
  rl.innerHTML="";var n=0;
  S.forEach(function(s){
    var tx=s.textContent.replace(/\s+/g," "),p=tx.toLowerCase().indexOf(v);
    if(p<0)return;n++;
    var a=document.createElement("a");a.href="#"+s.id;
    var sn=tx.substr(Math.max(0,p-20),80);
    a.innerHTML="<b></b><small></small>";a.firstChild.textContent=t(s);a.lastChild.textContent="…"+sn+"…";
    a.onclick=function(e){e.preventDefault();go(s.id)};rl.appendChild(a);
  });
  if(!n)rl.textContent="該当するページがありません。";
  document.getElementById("idx").classList.remove("on");document.getElementById("res").classList.add("on");
}
q.addEventListener("input",search);
function fromHash(){var h=location.hash.slice(1);var k=S.findIndex(function(s){return s.id===h});show(k>=0?k:0,true)}
window.addEventListener("hashchange",fromHash);fromHash();
})();
