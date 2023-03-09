const url =
  'https://olinda.bcb.gov.br/olinda/servico/Expectativas/versao/v1/odata/ExpectativaMercadoMensais?$top=100&$skip=2022&$format=json&$select=Indicador,Data,DataReferencia,Media,Mediana,DesvioPadrao,Minimo,Maximo';

fetch(url)
  .then(response => response.json())
  .then(data => {
    const results = data.value;
    const tableBody = document.getElementById('table-body');

    results.forEach(result => {
      const row = tableBody.insertRow();

      const indicadorCell = row.insertCell();
      indicadorCell.innerText = result.Indicador;

      const dataCell = row.insertCell();
      dataCell.innerText = result.Data;

      const dataReferenciaCell = row.insertCell();
      dataReferenciaCell.innerText = result.DataReferencia;

      const mediaCell = row.insertCell();
      mediaCell.innerText = result.Media;

      const medianaCell = row.insertCell();
      medianaCell.innerText = result.Mediana;

      const desvioPadraoCell = row.insertCell();
      desvioPadraoCell.innerText = result.DesvioPadrao;

      const minimoCell = row.insertCell();
      minimoCell.innerText = result.Minimo;

      const maximoCell = row.insertCell();
      maximoCell.innerText = result.Maximo;
    });
  })
  .catch(error => console.error(error));
