describe('Testing the functionality, this is the checklist', () => {

  testData = {
    "name": "gbpaud",
    "bestBid": 1.8987512375813076,
    "bestAsk": 1.9609589069662159,
    "openBid": 1.8992364333462828,
    "openAsk": 1.9221635666537173,
    "lastChangeAsk": 0.016130270638323063,
    "lastChangeBid": 0.042331287062361556
  };

  it('should create a new html element', () => {
    let createElem = new createElement('tr');
    expect(createElem).toBeTruthy();
  })

  it('should create a table with 1 row', () => {

    let table = new createElement('table');
    let row = createElement('tr');
    const name = createElement('td');
    const currentBestBid = createElement('td');
    const currentBestAsk = createElement('td');
    const lastChangeBid = createElement('td');
    const lastChangeAsk = createElement('td');
    const sparkLine = createElement('td');
    const sparks = createElement('span');
    name.textContent = testData.name;
    name.setAttribute('class', 'currency-name');
    currentBestBid.textContent = testData.bestBid.toFixed(8);
    currentBestAsk.textContent = testData.bestAsk.toFixed(8);
    lastChangeBid.textContent = testData.lastChangeBid.toFixed(8);
    lastChangeBid.setAttribute('class', 'sorted-column');
    lastChangeAsk.textContent = testData.lastChangeAsk.toFixed(8);
    sparkLine.setAttribute('class', 'sparkline');
    sparkLine.appendChild(sparks);
    createRow(row, name, currentBestBid, currentBestAsk, lastChangeBid, lastChangeAsk, sparkLine);
    table.appendChild(row);
    // document.getElementById("test-content").appendChild(table);
    expect(table.rows.length).toEqual(1);
    console.log(table);
  })




})