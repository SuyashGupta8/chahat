
//Data Section

var contactDetails = "Name : CHAHAT SHARMA \n, Phone:+91-9582293201, +91-8559053912, Email-chahatsharma1993@gmail.com";

var firstDivWithHeading = {"CAREER OBJECTIVE:": `To achieve organizational excellence with drive, initiative and commitment and come up in life as a talented professional inn any organization providing excellent growth opportunities, professional satisfaction and challenging work environment. A keen interest inn IT infrastructure management,
NMS/EMS innovation and exploitation off tools and processes too increase efficiency and reduce cost`,
"boldSection": "( 3.5 year off Professional Experience withh Wipro, working since January 2016 )"};

var secondDivWithHeading = {"Objective:" : "To work consistently in a challenging environment using latest technologies and optimized approach to deliver the best"};

var thirdDivWithHeading = {"Projects": "key projects worked in"};

var firstTableData = {"Location": "Wipro Bangalore, (client-Ericsson)",
"IT Infrastructure Tools": "HP OMI,HP OMW,HP OBR, HP NNM, HP SIS", 
"OS Platforms": "Windows And Linux", 
"Languages/Scripting":"C, SQL, bash shell",
"Databases -": "MS SQL,Vertica"
};

var firstBulletSection = {"PROFESSIONAL SUMMARY": [`A technocrat with overall 3.5 yrs of experience in NMS/EMS Designing, and
Troubleshooting/Technical Support.`,
" Presently associated with Wipro Ltd. as Administrator (Engineer) (HP) Tools.",
"	Experienced in Enterprise Management System for HP suite: OMI, OMW, OBR and NNM.", "Skilled and disciplined in ITIL mainly Incident, Change Management and Problem Management practices and processes."]};

var secondBulletSection = {"CLIENT SERVICING": ["Managing customer service operations for rendering and achieving quality services.","Responsible for resolving customer complaints on performance bottlenecks.", "	Providing value added customer services by attending customer queries and issues.", "Defining new processes and deployment of tools to continuously improve the Quality and efficiency of the team. Working with the team in carrying out installations, upgrades, patch management, research and changes as required."]};


var thirdBulletSection = {"Self Disciplined Online Trainings":["Intro to computer science course (python) from udacity.com website and learned basic search engine coding.", "Completed Linux Foundation course from edx.org website (Scored 100%)", "Completed Android development on teamtreehouse.com .(Scored 2340 points)", "Completed WordPress theme development on teamtreehouse.com(Scored 1128 points )"]};

var fourthBulletSection = {"Educational Background":["B.Tech in Electronics and Communication from RTU in 2015", "Completed senior secondary from CBSE in PCM."]};


var fifthBulletSection = {"Strengths & Activities":["Like research work and reading technologies, runs own youtube channel and facebook page for teaching.", "Good command over Mathematics, Physics and debugging skills.","Play cricket, chess and do Meditation."]};

buildResume();
function buildResume(){
	
	addImage("./chahat.jpg", "myImage", "myImageClass");
	buildSections("div", "hiddenContact", "mainBody", "hiddenClass",  contactDetails );
	breakLineDiv("firstBreak", "hr");
	
	buildSectionWithHeading(firstDivWithHeading, "firstDiv", "mainBody", "divClass");
	breakLineDiv("secondBreak","br");

	buildSectionWithHeading(secondDivWithHeading, "secondDiv", "mainBody", "divClass");
	breakLineDiv("thirdBreak","hr");

	buildSectionWithHeading(thirdDivWithHeading, "thirdDiv", "mainBody", "divClass");
	buildTable(firstTableData, "table", "firstTable", "mainBody", "myTable");
	breakLineDiv("fourthBreak","hr");

	buildBulletSection(firstBulletSection,"firstBulletSection", "bulletSection", "mainBody");
	buildBulletSection(secondBulletSection,"secondBulletSection", "bulletSection", "mainBody");
	buildBulletSection(thirdBulletSection,"thirdBulletSection", "bulletSection", "mainBody");
	buildBulletSection(fourthBulletSection,"fourthBulletSection", "bulletSection", "mainBody");
	buildBulletSection(fifthBulletSection,"fifthBulletSection", "bulletSection", "mainBody");

}






function buildBulletSection(bulletSection, id, className, parrentID){
    Object.keys(bulletSection).forEach(function(key) {
		buildSections("ul", id, parrentID, className, key);
     	    bulletSection[key].forEach(function(entry) {
		    var childId = "child" + id;
			var childClassName = "child"+className;			
		    buildSections("li", childId, id, childClassName, entry);
        });
    });	
}

function buildSections(type, idToBeCreated, parentElementId, className,  content){
    var elementBuilt = document.createElement(type);
	elementBuilt.classList.add(className);
    elementBuilt.id = idToBeCreated;
	if(content != '' || content != undefined){
		elementBuilt.innerHTML = content;
	}
    document.getElementById(parentElementId).appendChild(elementBuilt);
}




//addClassName("thirdBulletSection", "list-unstyled");
function addClassName(id, className){
	    document.getElementById(id).classList.add(className);
}


function addImage(imagePath, id,className){
	var element = document.createElement('img');
	element.classList.add(className);
	element.src= imagePath;
	element.id=id;
	element.style.width = 170 + "px";
	element.style.height = 170 + "px";
	document.body.appendChild(element);
}

function breakLineDiv(id, type){
	buildSections("div", id, "mainBody", "breakDivsion", "");
	var childId = "child"+id;
	buildSections(type, childId, id, "newLine", "");
	
}

function buildSectionWithHeading(divSection, id, parrentID, className){
	Object.keys(divSection).forEach(function(key) {
		entry = divSection[key];
		var childId = "child" + id;
		if(key == "boldSection"){    
			var childClassName = "bold"+className;			
		    buildSections("div", childId, id, childClassName, entry);
        }else{
			buildSections("div", id, parrentID, className, key);
			var childClassName = "child"+className;
			buildSections("div", childId, id, childClassName, entry);
		}	
	});
}



function buildTable(tableData, type, idToBeCreated, parentElementId, className){
	buildSections(type, idToBeCreated, parentElementId, className, "" );
	Object.keys(tableData).forEach(function(key) {
		ceateRowforTable(idToBeCreated, key, tableData[key])
	});
}

function ceateRowforTable(id,  cellOne, cellSecond){
	var table = document.getElementById(id);
	if(cellOne != ""){
		var row = table.insertRow(-1);
		row.classList.add("tableRow");
		var firstCell = row.insertCell(0);
		
		firstCell.innerHTML = cellOne;
	}
	if(cellSecond != ""){
		var secondCell = row.insertCell(1);
		secondCell.innerHTML = cellSecond;
		firstCell.classList.add("tableCell");
		secondCell.classList.add("tableCell");
	}
}

//BAckup
//Refactoring
//mobile bsed
//css attribute or bootstrap grid
//resume export option
