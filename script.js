// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   
   form.addEventListener("submit", (event) => {
         let pilotNameInput = document.querySelector("input[name=pilotName]");
         let copilotNameInput = document.querySelector("input[name=copilotName]");
         let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
         let cargoMassInput = document.querySelector("input[name=cargoMass]");
         let inputArr = [pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput];
         let strArr = [pilotNameInput, copilotNameInput];
         let numArr = [fuelLevelInput, cargoMassInput];
         console.log(pilotNameInput.value);
         for (let i=0; i < inputArr.length; i++){
            if (inputArr[i].value === ""){
               event.preventDefault()
               alert("All fields are required");
            };
         };
         for (let i=0; i < strArr.length; i++){
            if (typeof(strArr[i].value) !== "string"){
               event.preventDefault()
               alert("Enter valid data for each field.");
            };
         };
         for (let i=0; i < numArr.length; i++){
            if (isNaN(numArr[i].value) === true){
               event.preventDefault()
               alert("Enter valid data for each field.");
            };
         };
         event.preventDefault()
         fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
            response.json().then(function (json) {
               console.log(json);
               const div = document.getElementById("missionTarget");
               div.innerHTML += `
            <div class="missionTarget">
            <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[0].name}</li>
                 <li>Diameter: ${json[0].diameter}</li>
                 <li>Star: ${json[0].star}</li>
                 <li>Distance from Earth: ${json[0].distance}</li>
                <li>Number of Moons: ${json[0].moons}</li>
               </ol>
                  <img src="${json[0].image}">
            </div>
            `;

            });


         });
         document.getElementById("faultyItems").style.visibility = "visible";

         let newPilotStatus = pilotNameInput.value;
         document.getElementById("pilotStatus").innerHTML = newPilotStatus + " is ready";
         let newCopilotStatus = copilotNameInput.value;
         document.getElementById("copilotStatus").innerHTML = newCopilotStatus + " is ready";
         
         let newFuelLevel = fuelLevelInput.value;
         if (newFuelLevel < 10000){
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey";
         }
         
         let newCargoMass = cargoMassInput.value;
         if (newCargoMass > 10000){
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off";
         }
         
      });
  
     
   
});


