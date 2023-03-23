function log(log: any) {
  console.log(log);
  const myDiv = document.createElement('div');
  const myP = document.createElement('p');
  myDiv.appendChild(myP);
  myP.innerHTML += log;
  document.body.append(myDiv);
}

export default log;