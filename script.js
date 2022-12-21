function calculate(){
  
  // Variables
  var kmi;
  var result = document.getElementById("result");
  var height = parseInt(document.getElementById("height").value);
  var weight = parseInt(document.getElementById("weight").value);

  // content displayed in webpage
  document.getElementById("weight-val").textContent = weight + " kg";
  document.getElementById("height-val").textContent = height + " cm";

  // kmi calculation 
   kmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);

  result.textContent = kmi;

  if(kmi < 18.5){
    category = "Per mažas svoris";
    result.style.color = "#00D1FF";
  }
   else if( kmi >= 18.5 && kmi <= 24.9 ){
    category = "Normalus svoris";
    result.style.color = "#A6FF00";
  }
   else if( kmi >= 25.0 && kmi <= 29.9 ){
    category = "Viršsvoris";
    result.style.color = "#F3FF00";
  }
   else if( kmi >= 30.0 && kmi <= 34.9 ){
    category = "I laipsnio nutukimas";
    result.style.color = "#FFDC00";
  }
   else if( kmi >= 35,0 && kmi <= 39,99 ){
    category = "	II laipsnio nutukimas";
    result.style.color = "#FFAA00";
  }
   else {
    category = "III laipsnio nutukimas";
    result.style.color = "#FF0087";
  }

  document.getElementById("category").textContent = category;
}

