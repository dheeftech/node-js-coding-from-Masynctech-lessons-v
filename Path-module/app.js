// const path = require("path");
// console.log(path);

// Join path segments (automatically uses correct separator: \ or /)
const fullPath = path.join("folder", "subfolder", "file.txt");
console.log(fullPath); // → folder/subfolder/file.txt (on Unix) or folder\subfolder\file.txt (on Windows)

// Resolve to absolute path
const absPath = path.resolve("folder", "file.txt");
console.log(absPath); // → /home/user/project/folder/file.txt

// Get directory name
const dir = path.dirname("/home/user/file.txt");
console.log(dir); // → /home/user

// Get file name
const base = path.basename("/home/user/file.txt");
console.log(base); // → file.txt

// Get file name without extension
const name = path.basename("/home/user/file.txt", ".txt");
console.log(name); // → file

// Get extension
const ext = path.extname("image.png");
console.log(ext); // → .png

// Parse path into components
const parsed = path.parse("/home/user/file.txt");
console.log(parsed);
// Output:
// {
//   root: '/',
//   dir: '/home/user',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file'
// }

// Format object back to path
const formatted = path.format({
  dir: "/home/user",
  base: "file.txt",
});
console.log(formatted); // → /home/user/file.txt

// Normalize path (fixes .. and .)
const normalized = path.normalize("/home//user/./folder/../file.txt");
console.log(normalized); // → /home/user/file.txt

// Check if path is absolute
console.log(path.isAbsolute("/home/user")); // true
console.log(path.isAbsolute("user/file")); // false

// Relative path between two paths
const rel = path.relative("/home/user/docs", "/home/user/downloads");
console.log(rel); // → ../downloads
