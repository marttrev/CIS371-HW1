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
    tArea4?.appendChild(table)
}

type Company = {
    name: string,
    abbrev: string,
    url: string
}

const myCompanies: Array<Company> = [
    {name: "Consumer Value Stores", abbrev: "CVS", url: "https://www.cvs.com/"},
    {name: "International Business Machines", abbrev: "IBM", url: "https://www.ibm.com/"},
    {name: "Kentucky Fried Chicken", abbrev: "KFC", url: "https://www.kfc.com/"},
    {name: "United Parcel Service", abbrev: "UPS", url: "https://www.ups.com/"},
    {name: "Extreme Effects", abbrev: "XFX", url: "https://www.xfxforce.com/"}
]

const area6 = document.getElementById("area6")
const list = document.createElement("ul")
for (var company of myCompanies) {
    const aElement = document.createElement("a")
    aElement.setAttribute("href", company.url)
    const listItem = document.createElement("li")
    const textNode = document.createTextNode(`${company.abbrev} - ${company.name}`)

    list.appendChild(aElement)
    aElement.appendChild(listItem)
    listItem.appendChild(textNode)
}
area6?.appendChild(list)

type SocialMedia = {
    icon: string;
    url: string;
}

const mySocialMedias: Array<SocialMedia> = [
    {icon: "fa-brands fa-twitter", url: "https://www.twitter.com/"},
    {icon: "fa-brands fa-facebook", url: "https://www.facebook.com/"},
    {icon: "fa-brands fa-instagram", url: "https://www.instagram.com/"},
    {icon: "fa-brands fa-github", url: "https://www.github.com/"},
    {icon: "fa-brands fa-pinterest", url: "https://www.pinterest.com/"},
    {icon: "fa-brands fa-amazon", url: "https://www.amazon.com/"},
    {icon: "fa-brands fa-google", url: "https://www.google.com/"}
]

const area8 = document.getElementById("area8")
for (var social of mySocialMedias) {
    const aElement = document.createElement("a")
    aElement.setAttribute("href", social.url)
    const iElement = document.createElement("i")
    iElement.setAttribute("class", social.icon)
    aElement.appendChild(iElement)
    area8?.appendChild(aElement)
}