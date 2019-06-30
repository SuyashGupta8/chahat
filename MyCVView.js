var firstDivWithHeading = {"Profile Summary:": "Software development professional with key projects and exposure to good number of ProgrammingLanguages-Java, Shell Scripting , JavaScript, PHP, Python, C, MySQL , API withh proficiency inn Java and C.",
"boldSection": "( 3 year off Professional Experience withh Wipro, working since January 2016 )"};

var firstTableData = {"Location": "Wipro Bangalore, (client-Ericsson)",
"Role": "Software Engineer", 
"Project - NHM Developer Ericsson (Duration-1 year)": "", 
"Team Size":1,
"Project Description -": "Network Health Monitor Developer- Triggering Events forr breached nodes inr backend to display Alarms(Fault Management Alarm) inr GUI",
"Responsibilities and Contribution": `- Full stack Development including UI and backend
- Rest Interface-RestEasy - Java 7, Java Enterprise Beans.`+'\n'+` 
- Objectt Mapper forr converting POJO to JSON object. \n
- Esper Event System \n
- UI Java Script \n
- Data Base-postgresssql \n
- Building Tool Maven \n
- Design Analysis and Estimations.`
};

var secondDivWithHeading = {"Objective:" : "To work consistently in a challenging environment using latest technologies and optimized approach to deliver the best"};

var secondSection = {"Objective":"To work consistently in a challenging environment using latest technologies and optimized approach to deliver the best"};

var firstBulletSection = {"Other projects and work Experience": ["4 Months of Network administrator (Routing ) Experience at E&Y Financials, Gurugram.",
" month experience in Java and Linux at Alchemy Solutions, Bangalore for Dell incorporation.",
"month freelancing projects and Hobby project on java,html,linux and wordpress in my college days, build automated Student Exam", "result and Notifications Email WorkFlow using Google Script API"]};

var secondBulletSection = {"Technical Exposure": ["Programming Languages: Java,Java Script,C,DSA,Python,SQL,HTML,CSS.","Operating System: Linux(Ubuntu and Debian Flavors)", "Successfully completed Training on Routing,Switching,Android, Android Studio with API of Parse.com",
"JavaScript Training and Project on Google Apps Scripts"]};

var thirdBulletSection = {"Self Disciplined Online Trainings":["Intro to computer science course (python) from udacity.com website and learned basic search engine coding.", "Completed Linux Foundation course from edx.org website (Scored 100%)", "Completed Android development on teamtreehouse.com .(Scored 2340 points)", "Completed WordPress theme development on teamtreehouse.com(Scored 1128 points )"]};

var fourthBulletSection = {"Educational Background":["B.Tech in Electronics and Communication from RTU in 2015", "Completed senior secondary from CBSE in PCM."]};


var fifthBulletSection = {"Strengths & Activities":["Like research work and reading technologies, runs own youtube channel and facebook page for teaching.", "Good command over Mathematics, Physics and debugging skills.","Play cricket, chess and do Meditation."]};

//buildSections('ul', 'list1', "mainBody", "Project 1");
//buildSections('li','firstLine', 'list1', 'Know JS');

//table
//buildSections('table','firstTable', 'mainBody','');
//ceateRowforTable('firstTable');
addImage("./CuteDog.jpg", "myImage");
breakLineDiv("firstBreak", "hr");

buildSectionWithHeading(firstDivWithHeading, "firstDiv", "mainBody", "divClass");
breakLineDiv("secondBreak","br");

buildSectionWithHeading(secondDivWithHeading, "secondDiv", "mainBody", "divClass");

breakLineDiv("thirdBreak","hr");


buildBulletSection(fifthBulletSection,"firstBulletSection", "bulletSection", "mainBody");
buildBulletSection(fourthBulletSection,"secondBulletSection", "bulletSection", "mainBody");
buildBulletSection(thirdBulletSection,"thirdBulletSection", "bulletSection", "mainBody");
buildBulletSection(secondBulletSection,"fourthBulletSection", "bulletSection", "mainBody");
buildBulletSection(firstBulletSection,"fifthBulletSection", "bulletSection", "mainBody");


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
	elementBuilt.innerHTML = content;
    document.getElementById(parentElementId).appendChild(elementBuilt);
}




//addClassName("thirdBulletSection", "list-unstyled");
function addClassName(id, className){
	    document.getElementById(id).classList.add(className);
}


function addImage(imagePath,id){
	var element = document.createElement('img');
	element.src= imagePath;
	element.id=id;
	element.style.width = 170 + "px";
	element.style.height = 170 + "px";
	element.classList.add("MyImage");
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

buildTable(firstTableData, "table", "firstTable", "mainBody", "myTable");

function buildTable(tableData, type, idToBeCreated, parentElementId, className){
	buildSections(type, idToBeCreated, parentElementId, className);
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


