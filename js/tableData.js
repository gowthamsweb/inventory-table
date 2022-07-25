getData();
async function getData() {
  const response = await fetch("./sample-Inventory-copy.csv");
  const data = await response.text(); // converting csv data into text format
  // console.log(data);
  const table = data.trim().split("\n"); // spliting csv data into rows
  // const tableHead = table[0];
  // const tableHead = table.shift().split(",");
  const tableHead = table.slice(0, 1).map((headElement) => {
    return headElement.toUpperCase();
  }); // separtion of table heading row
  const tableData = table.slice(1); // getting data for table body
  // console.log(table);
  // console.log(tableHead);

  // inserting table head data
  tableHead.forEach((dataElement) => {
    const columns = dataElement.split(",").slice(1, 10);
    let tableColumnData = columns
      .map((column) => {
        return `<th>${column}</th>`;
      })
      .join("");
    let tableRow = document.createElement("tr");
    tableRow.innerHTML = tableColumnData;
    document.querySelector("thead").appendChild(tableRow);
  });

  // inserting table body data
  tableData.forEach((dataElement) => {
    const columns = dataElement.split(",").slice(1, 10);
    let tableColumnData = columns
      .map((column) => {
        return `<td>${column}</td>`;
      })
      .join("");
    let tableRow = document.createElement("tr");
    tableRow.innerHTML = tableColumnData;
    document.querySelector("tbody").appendChild(tableRow);
  });
}
