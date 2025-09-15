const fs = require("fs");
const path = require("path");

//define folder and path
const folderPath = path.join(__dirname, "studentsFolder");

const filePath = path.join(folderPath, "studentsLists.pdf");

//create directory if not exists
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
  console.log("folder created");
}

//create and write to a file
// fs.writeFileSync(filePath, "List of students. \n");

//append more content
// fs.appendFileSync(filePath, "This is an appended line of text. \n");

fs.appendFileSync(
  filePath,
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpos"
);

const content = fs.readFileSync(filePath, "utf-8");
console.log(content);
