function BuildHtmlResultTable(resultList,columnFormatData,insertHeadings,OutputScaling) // Standard Data
{
  var indexOf_z = FindParameterInColumnFormatData('z',columnFormatData);
  var indexOf_s = FindParameterInColumnFormatData('s',columnFormatData);
  var indexOf_a = FindParameterInColumnFormatData('a',columnFormatData);
  var indexOf_Tnow = FindParameterInColumnFormatData('Tnow',columnFormatData);
  var indexOf_Y = FindParameterInColumnFormatData('Y',columnFormatData);
  var indexOf_Dnow = FindParameterInColumnFormatData('Dnow',columnFormatData);
  var indexOf_Dthen = FindParameterInColumnFormatData('Dthen',columnFormatData);
  var indexOf_Dhor = FindParameterInColumnFormatData('Dhor',columnFormatData);
  var indexOf_Dpar = FindParameterInColumnFormatData('Dpar',columnFormatData);      
  var indexOf_XDpar = FindParameterInColumnFormatData('XDpar',columnFormatData);
  var indexOf_Vnow = FindParameterInColumnFormatData('Vnow',columnFormatData);
  var indexOf_Vthen = FindParameterInColumnFormatData('Vthen',columnFormatData);
  var indexOf_H_t = FindParameterInColumnFormatData('H_t',columnFormatData);      
  var indexOf_TemperatureT = FindParameterInColumnFormatData('TemperatureT',columnFormatData);
  var indexOf_rhocrit = FindParameterInColumnFormatData('rhocrit',columnFormatData);
  var indexOf_OmegaMatterT = FindParameterInColumnFormatData('OmegaMatterT',columnFormatData);
  var indexOf_OmegaLambdaT = FindParameterInColumnFormatData('OmegaLambdaT',columnFormatData);
  var indexOf_OmegaRadiationT = FindParameterInColumnFormatData('OmegaRadiationT',columnFormatData);
  var indexOf_OmegaTotalT = FindParameterInColumnFormatData('OmegaTotalT',columnFormatData);

  var outputString = "<table border='1' class='WikiResultTable'>";
  
  var headerString = "<thead><tr>";
  
  switch(OutputScaling)
  {
    case "GigaLightyear":
    
      if (columnFormatData[indexOf_z].include)  
        headerString += "<th>z</th>";        

      if (columnFormatData[indexOf_a].include)  
        headerString += "<th>Scale (a)</th>"; 
               
      if (columnFormatData[indexOf_s].include)      
        headerString += "<th>S</th>";      

      if (columnFormatData[indexOf_Tnow].include)  
        headerString += "<th>T<sub>now</sub> Gyr</th>";

      if (columnFormatData[indexOf_Y].include)  
        headerString += "<th>R Gly</th>";
        
      if (columnFormatData[indexOf_Dnow].include)  
        headerString += "<th>D<sub>now</sub> Gly</th>";

      if (columnFormatData[indexOf_Dthen].include)  
        headerString += "<th>D<sub>then</sub> Gly</th>";

      if (columnFormatData[indexOf_Dhor].include)  
        headerString += "<th>D<sub>Hor</sub> Gly</th>";

      if (columnFormatData[indexOf_Dpar].include)  
        headerString += "<th>D<sub>par</sub> Gly</th>";

      if (columnFormatData[indexOf_XDpar].include)  
        headerString += "<th>V<sub>gen</sub>/c</th>";
        
      if (columnFormatData[indexOf_Vnow].include)  
        headerString += "<th>V<sub>now</sub>/c</th>";
        
      if (columnFormatData[indexOf_Vthen].include)  
        headerString += "<th>V<sub>then</sub>/c</th>";

      if (columnFormatData[indexOf_H_t].include)  
        headerString += "<th>H(z)</th>";
        
      if (columnFormatData[indexOf_TemperatureT].include)  
        headerString += "<th>Temp (K)</th>";

      if (columnFormatData[indexOf_rhocrit].include)  
        headerString += "<th>rho kg/m<sup>3</sup></th>";
        
      if (columnFormatData[indexOf_OmegaMatterT].include)  
        headerString += "<th>OmegaM</th>";
        
      if (columnFormatData[indexOf_OmegaLambdaT].include)  
        headerString += "<th>OmegaL</th>";

      if (columnFormatData[indexOf_OmegaRadiationT].include)  
        headerString += "<th>OmegaR</th>";
 
      if (columnFormatData[indexOf_OmegaTotalT].include)  
        headerString += "<th>OmegaT</th>";
   
      break;
   
    case "Gigaparsec":
    
      if (columnFormatData[indexOf_z].include)  
        headerString += "<th>z</th>";        

      if (columnFormatData[indexOf_a].include)  
        headerString += "<th>Scale (a)</th>"; 
               
      if (columnFormatData[indexOf_s].include)      
        headerString += "<th>S</th>";      

      if (columnFormatData[indexOf_Tnow].include)  
        headerString += "<th>T Gyr</th>";

      if (columnFormatData[indexOf_Y].include)  
        headerString += "<th>R Gpc</th>";
        
      if (columnFormatData[indexOf_Dnow].include)  
        headerString += "<th>D<sub>now</sub> Gpc</th>";

      if (columnFormatData[indexOf_Dthen].include)  
        headerString += "<th>D<sub>then</sub> Gpc</th>";

      if (columnFormatData[indexOf_Dhor].include)  
        headerString += "<th>D<sub>Hor</sub> Gpc</th>";

      if (columnFormatData[indexOf_Dpar].include)  
        headerString += "<th>D<sub>par</sub> Gpc</th>";

      if (columnFormatData[indexOf_XDpar].include)  
        headerString += "<th>V<sub>gen</sub>/c</th>";
        
      if (columnFormatData[indexOf_Vnow].include)  
        headerString += "<th>V<sub>now</sub>/c</th>";
        
      if (columnFormatData[indexOf_Vthen].include)  
        headerString += "<th>V<sub>then</sub>/c</th>";

      if (columnFormatData[indexOf_H_t].include)  
        headerString += "<th>H(z)</th>";   
        
      if (columnFormatData[indexOf_TemperatureT].include)  
        headerString += "<th>Temp K</th>";

      if (columnFormatData[indexOf_rhocrit].include)  
        headerString += "<th>rho kg/m<sup>3</sup></th>";
        
      if (columnFormatData[indexOf_OmegaMatterT].include)  
        headerString += "<th>OmegaM</th>";
        
      if (columnFormatData[indexOf_OmegaLambdaT].include)  
        headerString += "<th>OmegaL</th>";

      if (columnFormatData[indexOf_OmegaRadiationT].include)  
        headerString += "<th>OmegaR</th>";    
 
      if (columnFormatData[indexOf_OmegaTotalT].include)  
        headerString += "<th>OmegaT</th>";
    
      break;  
      
    case "Normalized":
    
      if (columnFormatData[indexOf_z].include)  
        headerString += "<th>z</th>";        

      if (columnFormatData[indexOf_a].include)  
        headerString += "<th>Scale (a)</th>"; 
               
      if (columnFormatData[indexOf_s].include)      
        headerString += "<th>S</th>";      

      if (columnFormatData[indexOf_Tnow].include)  
        headerString += "<th>T/T<sub>now</sub></th>";

      if (columnFormatData[indexOf_Y].include)  
        headerString += "<th>R/Ro</th>";
        
      if (columnFormatData[indexOf_Dnow].include)  
        headerString += "<th>D<sub>now</sub>/Ro</th>";

      if (columnFormatData[indexOf_Dthen].include)  
        headerString += "<th>D<sub>then</sub>/Ro</th>";

      if (columnFormatData[indexOf_Dhor].include)  
        headerString += "<th>D<sub>Hor</sub>/Ro</th>";

      if (columnFormatData[indexOf_Dpar].include)  
        headerString += "<th>D<sub>par</sub>/Ro</th>";

      if (columnFormatData[indexOf_XDpar].include)  
        headerString += "<th>V<sub>gen</sub>/c</th>";
        
      if (columnFormatData[indexOf_Vnow].include)  
        headerString += "<th>V<sub>now</sub>/c</th>";
        
      if (columnFormatData[indexOf_Vthen].include)  
      headerString += "<th>V<sub>then</sub>/c</th>";

      if (columnFormatData[indexOf_H_t].include)  
        headerString += "<th>H/H<sub>0</sub></th>";
        
      if (columnFormatData[indexOf_TemperatureT].include)  
        headerString += "<th>Temp/T<sub>0</sub></th>";

      if (columnFormatData[indexOf_rhocrit].include)  
        headerString += "<th>rho kg/m<sup>3</sup></th>";
        
      if (columnFormatData[indexOf_OmegaMatterT].include)  
        headerString += "<th>OmegaM</th>";
        
      if (columnFormatData[indexOf_OmegaLambdaT].include)  
        headerString += "<th>OmegaL</th>";

      if (columnFormatData[indexOf_OmegaRadiationT].include)  
        headerString += "<th>OmegaR</th>";    
        
      if (columnFormatData[indexOf_OmegaTotalT].include)  
        headerString += "<th>OmegaT</th>";
     
      break;
      
    case "Zeit":
    
      if (columnFormatData[indexOf_z].include)  
        headerString += "<th>z</th>";        

      if (columnFormatData[indexOf_a].include)  
        headerString += "<th>Sc.fctr (a)</th>"; 
               
      if (columnFormatData[indexOf_s].include)      
        headerString += "<th>S</th>";      

      if (columnFormatData[indexOf_Tnow].include)  
        headerString += "<th>T (zeit)</th>";

      if (columnFormatData[indexOf_Y].include)  
        headerString += "<th>R (lzeit)</th>";
        
      if (columnFormatData[indexOf_Dnow].include)  
        headerString += "<th>D<sub>now</sub> (lzeit)</th>";

      if (columnFormatData[indexOf_Dthen].include)  
        headerString += "<th>D<sub>then</sub> (lzeit)</th>";

      if (columnFormatData[indexOf_Dhor].include)  
        headerString += "<th>D<sub>Hor</sub> (lzeit)</th>";

      if (columnFormatData[indexOf_Dpar].include)  
        headerString += "<th>D<sub>par</sub> (lzeit)</th>";

      if (columnFormatData[indexOf_XDpar].include)  
        headerString += "<th>V<sub>gen</sub>/c</th>";
        
      if (columnFormatData[indexOf_Vnow].include)  
        headerString += "<th>V<sub>now</sub>/c</th>";
        
      if (columnFormatData[indexOf_Vthen].include)  
      headerString += "<th>V<sub>then</sub>/c</th>";

      if (columnFormatData[indexOf_H_t].include)  
        headerString += "<th>H (zeit<sup>-1</sup>)</th>";
        
      if (columnFormatData[indexOf_TemperatureT].include)  
        headerString += "<th>Temp (K)</th>";
        
      if (columnFormatData[indexOf_rhocrit].include)  
        headerString += "<th>rho kg/m<sup>3</sup></th>";
        
      if (columnFormatData[indexOf_OmegaMatterT].include)  
        headerString += "<th>OmegaM</th>";
        
      if (columnFormatData[indexOf_OmegaLambdaT].include)  
        headerString += "<th>OmegaL</th>";

      if (columnFormatData[indexOf_OmegaRadiationT].include)  
        headerString += "<th>OmegaR</th>"; 
       
      break; 
        
  }
 
  headerString += "</tr></thead>"; 
 
  outputString += headerString;

  // output the data to the table body

  for (var i = 0; i < resultList.length; i++)
  {
  
    if (insertHeadings)
      if (i == 30 || i == 60 || i == 90)
        outputString += headerString;
  
    var rowString = "<tr>";
  
    if (columnFormatData[indexOf_z].include)  
      rowString += "<td>" + resultList[i].z.toExponential(columnFormatData[indexOf_z].decimals) + "</td>";

     if (columnFormatData[indexOf_a].include)  
      rowString += "<td>" + resultList[i].a.toExponential(columnFormatData[indexOf_a].decimals) + "</td>";

   if (columnFormatData[indexOf_s].include)  
      rowString += "<td>" + resultList[i].s.toExponential(columnFormatData[indexOf_s].decimals) + "</td>";
      
    if (columnFormatData[indexOf_Tnow].include)  
      rowString += "<td>" + resultList[i].Tnow.toExponential(columnFormatData[indexOf_Tnow].decimals) + "</td>";

    if (columnFormatData[indexOf_Y].include)  
      rowString += "<td>" + resultList[i].Y.toExponential(columnFormatData[indexOf_Y].decimals) + "</td>";

    if (columnFormatData[indexOf_Dnow].include)  
      rowString += "<td>" + resultList[i].Dnow.toExponential(columnFormatData[indexOf_Dnow].decimals) + "</td>";

    if (columnFormatData[indexOf_Dthen].include)  
      rowString += "<td>" + resultList[i].Dthen.toExponential(columnFormatData[indexOf_Dthen].decimals) + "</td>";

    if (columnFormatData[indexOf_Dhor].include)  
      rowString += "<td>" + resultList[i].Dhor.toExponential(columnFormatData[indexOf_Dhor].decimals) + "</td>";

    if (columnFormatData[indexOf_Dpar].include)  
      rowString += "<td>" + resultList[i].Dpar.toExponential(columnFormatData[indexOf_Dpar].decimals) + "</td>";

    if (columnFormatData[indexOf_XDpar].include)  
      rowString += "<td>" + resultList[i].XDpar.toExponential(columnFormatData[indexOf_XDpar].decimals) + "</td>";

   if (columnFormatData[indexOf_Vnow].include)  
      rowString += "<td>" + resultList[i].Vnow.toExponential(columnFormatData[indexOf_Vnow].decimals) + "</td>";

    if (columnFormatData[indexOf_Vthen].include)  
      rowString += "<td>" + resultList[i].Vthen.toExponential(columnFormatData[indexOf_Vthen].decimals) + "</td>";

    if (columnFormatData[indexOf_H_t].include)  
      rowString += "<td>" + resultList[i].H_t.toExponential(columnFormatData[indexOf_H_t].decimals) + "</td>";

    if (columnFormatData[indexOf_TemperatureT].include)  
      rowString += "<td>" + resultList[i].TemperatureT.toExponential(columnFormatData[indexOf_TemperatureT].decimals) + "</td>";

    if (columnFormatData[indexOf_rhocrit].include)  
      rowString += "<td>" + resultList[i].rhocrit.toExponential(columnFormatData[indexOf_rhocrit].decimals) + "</td>";
      
    if (columnFormatData[indexOf_OmegaMatterT].include)  
      rowString += "<td>" + resultList[i].OmegaMatterT.toExponential(columnFormatData[indexOf_OmegaMatterT].decimals) + "</td>";
       
    if (columnFormatData[indexOf_OmegaLambdaT].include)  
      rowString += "<td>" + resultList[i].OmegaLambdaT.toExponential(columnFormatData[indexOf_OmegaLambdaT].decimals) + "</td>";

    if (columnFormatData[indexOf_OmegaRadiationT].include)  
      rowString += "<td>" + resultList[i].OmegaRadiationT.toExponential(columnFormatData[indexOf_OmegaRadiationT].decimals) + "</td>";

    if (columnFormatData[indexOf_OmegaTotalT].include)  
      rowString += "<td>" + resultList[i].OmegaTotalT.toExponential(columnFormatData[indexOf_OmegaTotalT].decimals) + "</td>";
         

    rowString += "</tr>";   
    
    outputString += rowString;
           
  }

  outputString += "</table>";

  return outputString;    
}


//=========================================================================
function GetWikiResultTable(resultList,columnFormatData,insertHeadings, OutputScaling)
{
  
  var syntaxString = "<style type='text/css'>.WikiResultTable td { text-align:right; }</style>";
  syntaxString += BuildHtmlResultTable(resultList,columnFormatData,insertHeadings,OutputScaling)
//  syntaxString += "[[/html]]";
  
  syntaxString = syntaxString.replace(/</g,'&lt;');
  syntaxString = syntaxString.replace(/>/g,'&gt;');
  
  return syntaxString; 
}
