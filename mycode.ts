console.log("Hello World")
type Course = {
	courseNumber: string;
	courseName: string;
	semesterTaken: string
}

const myCourses: Array<Course> = [
	{courseNumber: "Course Number", courseName: "Course Name", semesterTaken: "Semester Taken"},
	{courseNumber: "CIS163", courseName: "Computer Science II", semesterTaken: "Fall 2020"},
	{courseNumber: "CIS241", courseName: "System-Level Programming and Utilities", semesterTaken: "Winter 2021"},
	{courseNumber: "CIS263", courseName: "Data Structures and Algorithms", semesterTaken: "Fall 2021"},
	{courseNumber: "CIS290", courseName: "Professional Responsibilities and Practices", semesterTaken: "Fall 2021"},
	{courseNumber: "CIS353", courseName: "Database", semesterTaken: "Fall 2021"},
	{courseNumber: "CIS350", courseName: "Intro to Software Engineering", semesterTaken: "Winter 2022"},
	{courseNumber: "CIS343", courseName: "Structure of Programming Languages", semesterTaken: "Winter 2022"},
	{courseNumber: "CIS357", courseName: "Mobile Application Development", semesterTaken: "Fall 2022"},
	{courseNumber: "CIS351", courseName: "Computer Organization and Assembly", semesterTaken: "Fall 2022"}
]

const tArea4 = document.getElementById("area4")
const table = document.createElement("table")
var isFirst = true

for (var course of myCourses) {
	const row = document.createElement("tr")
	const numText = document.createTextNode(course.courseNumber)
	const nameText = document.createTextNode(course.courseName)
	const semestText = document.createTextNode(course.semesterTaken)
	
	if (isFirst) {
		const rowElement1 = document.createElement("th")
		const rowElement2 = document.createElement("th")
		const rowElement3 = document.createElement("th")
        isFirst = false
        row.appendChild(rowElement1)
        row.appendChild(rowElement2)
        row.appendChild(rowElement3)
        rowElement1.appendChild(numText)
        rowElement2.appendChild(nameText)
        rowElement3.appendChild(semestText)	
	} else {
		const rowElement1 = document.createElement("td")
		const rowElement2 = document.createElement("td")
		const rowElement3 = document.createElement("td")
        row.appendChild(rowElement1)
        row.appendChild(rowElement2)
        row.appendChild(rowElement3)
        rowElement1.appendChild(numText)
        rowElement2.appendChild(nameText)
        rowElement3.appendChild(semestText)	
	}
    table.appendChild(row)
    tArea4.appendChild(table)
	

}