(()=>{"use strict";function e(){const e=document.createElement("div");e.classList.add("home","main");const t=document.createElement("h2"),n=document.createElement("p"),a=document.createElement("img"),o=document.createElement("p");return t.textContent="The finest, most delicious pasta you can find in the country!",n.textContent="Making the best pasta since 1973",a.src="images/pasta.jpeg",a.width=400,a.height=400,o.textContent="Come and visit us or order delivery from major food delivery sites!",e.appendChild(t),e.appendChild(n),e.appendChild(a),e.appendChild(o),e}const t=function(){const t=document.getElementById("content"),n=document.getElementsByClassName("footer")[0],a=document.getElementsByClassName("main")[0];a?t.replaceChild(e(),a):t.insertBefore(e(),n)};function n(){const e=document.createElement("div");return e.classList.add("menu","main"),e.appendChild(a("Pasta Alla Norma","A dish made with a short pasta, with a sauce prepared with tomatoes, fried eggplant, grated ricotta salata cheese, and basil")),e.appendChild(a("Bucatini all’Amatriciana","Traditional Amatrice dish, made with bucatini pasta, with tomatoes, guanciale, Pecorino Romano cheese and black pepper")),e.appendChild(a("Orecchiette ai Cime di Rapa","A dish made of orecchiette pasta with rapini, garlic, chilli and sometimes anchovies or pork")),e.appendChild(a("Pasta alla Carbonara","A Roman dish of spaghetti pasta, with raw eggs, Pecorino Romano cheese, bacon and black pepper")),e.appendChild(a("Cacio e pepe","A Roman dish, prepared with spaghetti pasta, Pecorino Romano cheese and black pepper")),e.appendChild(a("Spaghetti alle Vongole","Spaghetti with clams. Prepared in in bianco, with oil, garlic, parsley, and a splash of white wine")),e.appendChild(a("Lasagne alla Bolognese","Bolognese lasagne dish. In this dish, the layers of lasagne sheets are alternated with Bolognese sauce, béchamel sauce and Parmigiano-Reggiano cheese")),e.appendChild(a("Orecchiette con cime di rapa","A dish made of orecchiette pasta with rapini, garlic, chilli and pork")),e.appendChild(a("Tortellini in brodo","A Bolognese dish made with traditional tortellini dumplings, cooked in broth")),e.appendChild(a("Trenette al pesto","A Genoa pasta dish, made with trenette pasta (a dried pasta similar to flat spaghetti), with pesto sauce")),e}function a(e,t){const n=document.createElement("div"),a=document.createElement("img"),o=document.createElement("h2"),i=document.createElement("p");return a.src=`images/${e.replace(/\s+/g,"").toLowerCase()}.jpg`,a.alt=e,a.height=200,a.width=300,o.textContent=e,i.textContent=t,n.appendChild(a),n.appendChild(o),n.appendChild(i),n}function o(){const e=document.createElement("div");e.classList.add("contact","main");const t=document.createElement("h2"),n=document.createElement("p"),a=document.createElement("img"),o=document.createElement("p");return t.textContent="Contact",n.textContent="Phone: 1234 5678 | Email: test@odin.com | Address: 1 Old Town Road, Singapore 123456",a.src="images/man.png",a.width=400,a.height=400,o.textContent="This is our head chef!",e.appendChild(t),e.appendChild(n),e.appendChild(a),e.appendChild(o),e}!function(){const e=document.getElementById("content");e.appendChild(function(){const e=document.createElement("div");e.classList.add("header");const a=document.createElement("h1"),i=document.createElement("div"),d=document.createElement("input"),s=document.createElement("input"),c=document.createElement("input");return a.textContent="The Pasta Shop",d.setAttribute("type","button"),s.setAttribute("type","button"),c.setAttribute("type","button"),d.setAttribute("value","Home"),s.setAttribute("value","Menu"),c.setAttribute("value","Contact"),d.addEventListener("click",(()=>{t(),d.style.borderBottom="3px solid white",s.style.borderBottom="none",c.style.borderBottom="none"}),!1),s.addEventListener("click",(()=>{(function(){const e=document.getElementById("content"),t=document.getElementsByClassName("footer")[0],a=document.getElementsByClassName("main")[0];a?e.replaceChild(n(),a):e.insertBefore(n(),t)})(),d.style.borderBottom="none",s.style.borderBottom="3px solid white",c.style.borderBottom="none"}),!1),c.addEventListener("click",(()=>{(function(){const e=document.getElementById("content"),t=document.getElementsByClassName("footer")[0],n=document.getElementsByClassName("main")[0];n?e.replaceChild(o(),n):e.insertBefore(o(),t)})(),d.style.borderBottom="none",s.style.borderBottom="none",c.style.borderBottom="3px solid white"}),!1),i.appendChild(d),i.appendChild(s),i.appendChild(c),e.appendChild(a),e.appendChild(i),e}()),e.appendChild(function(){const e=document.createElement("div");return e.classList.add("footer"),e.textContent="Made by SquishyFishy69 © 2021",e}()),t()}()})();