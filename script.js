let inputPicker = document.getElementById("picker");
let listing = document.getElementById("listing");


inputPicker.addEventListener("change", (e) => {
 
  let tableHeading = document.createElement("tr");
  let thName = document.createElement("th");
  let thSize = document.createElement("th");
  thName.textContent = "File Name";
  thSize.textContent = "File Size";
  tableHeading.appendChild(thName);
  tableHeading.appendChild(thSize);
  listing.appendChild(tableHeading);

  for (let file of Array.from(e.target.files)) {
    var fileSize = file.size;
    var formateSize;

    //find and covert file size
    if (fileSize >= 0 && fileSize < 1024) {
      formateSize = fileSize + "Byte";
    } else if (fileSize >= 1024 && fileSize < Math.pow(1024, 2)) {
      formateSize = (fileSize / 1024).toFixed(2) + "KB";
    } else if (fileSize >= Math.pow(1024, 2) && fileSize < Math.pow(1024, 3)) {
      formateSize = (fileSize / Math.pow(1024, 2)).toFixed(2) + "MB";
    } else if (fileSize >= Math.pow(1024, 3) && fileSize < Math.pow(1024, 4)) {
      formateSize = (fileSize / Math.pow(1024, 3)).toFixed(2) + "GB";
    } else if (fileSize >= Math.pow(1024, 4) && fileSize < Math.pow(1024, 5)) {
      formateSize = (fileSize / Math.pow(1024, 4)).toFixed(2) + "TB";
    }

    //Create a Row
    let item = document.createElement("tr");

    //Create Columns
    let res1 = document.createElement("td");
    let res2 = document.createElement("td");
    res1.textContent = file.webkitRelativePath;
    res2.textContent = formateSize;
    item.appendChild(res1);
    item.appendChild(res2);

    listing.appendChild(item);
  }
 
     
 
});
