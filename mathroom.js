const simpBtn = document.getElementById('btn-texts');



const factorizBtn = document.getElementById('btn-textf');


const derivatBtn = document.getElementById('btn-textd');


const integBtn = document.getElementById("btn-texti");


const factorValueBtn = document.getElementById("btn-textfa");


const tangetBtn = document.getElementById("btn-texta");

const areaCurveBtn = document.getElementById('btn-textac');



simpBtn.addEventListener('click',e=>{
      e.preventDefault();
      const answer = document.getElementsByClassName('simp-result')[0];
      const simpInput = document.getElementById('input-texts').value;
      fetch(`https://newton.now.sh/simplify/${simpInput}`)
     .then(res=>res.json())
     .then(data=>answer.innerHTML =Object.entries(data)[2].join('='))
     .catch(error=>answer.innerHTML='there was an error :', error)
     console.log(simpInput)


})


factorizBtn.addEventListener('click',e=>{
      e.preventDefault();
      const answer = document.getElementsByClassName('fact-result')[0];
      const factorizInput = document.getElementById('input-textf').value;
      fetch(`https://newton.now.sh/factor/${factorizInput}`)
      .then(res=>res.json())
      .then(data=>answer.innerHTML = Object.entries(data)[2].join('='))
            .catch(error => answer.innerHTML = 'there was an error :', error)
      console.log(factorizInput)



})


derivatBtn.addEventListener('click',e=>{
      e.preventDefault();
      const answer = document.getElementsByClassName('deriv-result ')[0];
      const derivatInput = document.getElementById('input-textd').value;
      fetch(`https://newton.now.sh/derive/${derivatInput}`)
      .then(res => res.json())
      .then(data => answer.innerHTML = Object.entries(data)[2].join('='))
      .catch(error => answer.innerHTML = 'there was an error :', error)
      console.log(derivatInput)




})

integBtn.addEventListener('click',e=>{
      e.preventDefault();
      const answer = document.getElementsByClassName('integ-result ')[0];
      const integInput = document.getElementById("input-texti").value;
      fetch(`https://newton.now.sh/integrate/${integInput}`)
            .then(res => res.json())
            .then(data => answer.innerHTML = Object.entries(data)[2].join('='))
            .catch(error => answer.innerHTML = 'there was an error :', error)
      console.log(integInput)



})

factorValueBtn.addEventListener('click',e=>{
      e.preventDefault();
      const answer = document.getElementsByClassName('fact-result')[1];
      const factorValueInput = document.getElementById("input-textfa").value;
      fetch(`https://newton.now.sh/zeros/${factorValueInput}`)
            .then(res => res.json())
            .then(data => answer.innerHTML = Object.entries(data)[2].join('='))
            .catch(error => answer.innerHTML = 'there was an error :', error)
      console.log(factorValueInput)


})


tangetBtn.addEventListener('click',e=>{
      e.preventDefault();
      const answer = document.getElementsByClassName('tang-result')[0];
      const tangentInput = document.getElementById("input-textta").value;
      fetch(`https://newton.now.sh/tangent/${tangentInput}`)
            .then(res => res.json())
            .then(data => answer.innerHTML = Object.entries(data)[2].join('='))
            .catch(error => answer.innerHTML = 'there was an error :', error)
      console.log(factorValueInput)


})


areaCurveBtn.addEventListener('click',e=>{
      e.preventDefault();
      const answer = document.getElementsByClassName('curv-result')[0];
      const areaCurveInput = document.getElementById('input-textac').value;

      fetch(`https://newton.now.sh/area/${areaCurveInput}`)
            .then(res => res.json())
            .then(data => answer.innerHTML = Object.entries(data)[2].join('='))
            .catch(error => answer.innerHTML = 'there was an error :', error)
      console.log(areaCurveInput)

})








