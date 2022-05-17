function BuildLaTexResultTable(resultList,columnFormatData,textSize,scaleFormat)
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
  var indexOf_OmegaMatterT = FindParameterInColumnFormatData('OmegaMatterT',columnFormatData);
  var indexOf_OmegaLambdaT = FindParameterInColumnFormatData('OmegaLambdaT',columnFormatData);
  var indexOf_OmegaRadiationT = FindParameterInColumnFormatData('OmegaRadiationT',columnFormatData);
  var indexOf_TemperatureT = FindParameterInColumnFormatData('TemperatureT',columnFormatData);
  var indexOf_rhocrit = FindParameterInColumnFormatData('rhocrit',columnFormatData);
  var indexOf_OmegaTotalT = FindParameterInColumnFormatData('OmegaTotalT',columnFormatData);

  var columnCount = GetIncludeCount(columnFormatData);
  if (columnCount < 1)
    return "No columns selected.";

  if (textSize == "small")
  var outputString = "[tex]{&#92;small&#92;begin{array}{|r|r|r|r|r|r|r|r|r|r|r|r|r|r|r|r|} "; 
  if (textSize == "scriptsize")
  var outputString = "[tex]{&#92;scriptsize&#92;begin{array}{|r|r|r|r|r|r|r|r|r|r|r|r|r|r|r|r|} "; 

  // header
  var headerString = "&#92;hline "; //&#92; = \
  
  switch(scaleFormat)
  {
    case "GigaLightyear":  
  
      if (columnFormatData[indexOf_z].include)  
        headerString += "z&#38;";        

      if (columnFormatData[indexOf_a].include)  
        headerString += "Scale (a)&#38;";        

      if (columnFormatData[indexOf_s].include)      
        headerString += "S&#38;";      // S&#38; = &

      if (columnFormatData[indexOf_Tnow].include)  
        headerString += "T (Gyr)&#38;";

      if (columnFormatData[indexOf_Y].include)  
        headerString += "R (Gly)&#38;";
        
      if (columnFormatData[indexOf_Dnow].include)  
        headerString += "D_{now} (Gly)&#38;";

      if (columnFormatData[indexOf_Dthen].include)  
        headerString += "D_{then}(Gly)&#38;";

      if (columnFormatData[indexOf_Dhor].include)  
        headerString += "D_{hor}(Gly)&#38;";

      if (columnFormatData[indexOf_Dpar].include)  
        headerString += "D_{par}(Gly)&#38;";

      if (columnFormatData[indexOf_XDpar].include)  
        headerString += "V_{gen}/c&#38;";

      if (columnFormatData[indexOf_Vnow].include)  
        headerString += "V_{now}/c&#38;";

      if (columnFormatData[indexOf_Vthen].include)  
        headerString += "V_{then}/c&#38;";

      if (columnFormatData[indexOf_H_t].include)  
        headerString += "H(t)&#38;";
             
      if (columnFormatData[indexOf_TemperatureT].include)  
        headerString += "Temp(K)&#38;";

      if (columnFormatData[indexOf_rhocrit].include)  
        headerString += "rho, kg/m^3&#38;";

      if (columnFormatData[indexOf_OmegaMatterT].include)  
        headerString += "OmegaM&#38;";
        
      if (columnFormatData[indexOf_OmegaLambdaT].include)  
        headerString += "OmegaL&#38;";

      if (columnFormatData[indexOf_OmegaRadiationT].include)  
        headerString += "OmegaR&#38;";
         
      if (columnFormatData[indexOf_OmegaTotalT].include)  
        headerString += "OmegaT&#38;";
 
      break;
   
    case "Gigaparsec":
    
      if (columnFormatData[indexOf_z].include)  
        headerString += "z&#38;";        

      if (columnFormatData[indexOf_a].include)  
        headerString += "Scale (a)&#38;";        

      if (columnFormatData[indexOf_s].include)      
        headerString += "S&#38;";      // S&#38; = &

      if (columnFormatData[indexOf_Tnow].include)  
        headerString += "T (Gyr)&#38;";

      if (columnFormatData[indexOf_Y].include)  
        headerString += "R (Gpc)&#38;";
        
      if (columnFormatData[indexOf_Dnow].include)  
        headerString += "D_{now} Gpc&#38;";

      if (columnFormatData[indexOf_Dthen].include)  
        headerString += "D_{then}(Gpc)&#38;";

      if (columnFormatData[indexOf_Dhor].include)  
        headerString += "D_{hor}(Gpc)&#38;";

      if (columnFormatData[indexOf_Dpar].include)  
        headerString += "D_{par}(Gpc)&#38;";

      if (columnFormatData[indexOf_XDpar].include)  
        headerString += "V_{gen}/c&#38;";

      if (columnFormatData[indexOf_Vnow].include)  
        headerString += "V_{now}/c&#38;";

      if (columnFormatData[indexOf_Vthen].include)  
        headerString += "V_{then}/c&#38;";

      if (columnFormatData[indexOf_H_t].include)  
        headerString += "H(t)&#38;";
        
      if (columnFormatData[indexOf_TemperatureT].include)  
        headerString += "Temp(K)&#38;";

      if (columnFormatData[indexOf_rhocrit].include)  
        headerString += "rho, kg/m^3&#38;";
        
      if (columnFormatData[indexOf_OmegaMatterT].include)  
        headerString += "OmegaM&#38;";
        
      if (columnFormatData[indexOf_OmegaLambdaT].include)  
        headerString += "OmegaL&#38;";

      if (columnFormatData[indexOf_OmegaRadiationT].include)  
        headerString += "OmegaR&#38;";
         
      if (columnFormatData[indexOf_OmegaTotalT].include)  
        headerString += "OmegaT&#38;";
    
    
      break;  
      
    case "Normalized":
    
      if (columnFormatData[indexOf_z].include)  
        headerString += "z&#38;";        

      if (columnFormatData[indexOf_a].include)  
        headerString += "Scale (a)&#38;";        

      if (columnFormatData[indexOf_s].include)      
        headerString += "S&#38;";      // S&#38; = &

      if (columnFormatData[indexOf_Tnow].include)  
        headerString += "T/T_{now}&#38;";

      if (columnFormatData[indexOf_Y].include)  
        headerString += "R/R_{H}&#38;";
        
      if (columnFormatData[indexOf_Dnow].include)  
        headerString += "D_{now}/R_{H}&#38;";

      if (columnFormatData[indexOf_Dthen].include)  
        headerString += "D_{then}/R_{H}&#38;";

      if (columnFormatData[indexOf_Dhor].include)  
        headerString += "D_{hor}/R_{H}&#38;";

      if (columnFormatData[indexOf_Dpar].include)  
        headerString += "D_{par}/R_{H}&#38;";

      if (columnFormatData[indexOf_XDpar].include)  
        headerString += "V_{gen}/c&#38;";

      if (columnFormatData[indexOf_Vnow].include)  
        headerString += "V_{now}/c&#38;";

      if (columnFormatData[indexOf_Vthen].include)  
        headerString += "V_{then}/c&#38;";

      if (columnFormatData[indexOf_H_t].include)  
        headerString += "H/H_{0}&#38;";
        
      if (columnFormatData[indexOf_TemperatureT].include)  
        headerString += "Temp/T_{0}&#38;";

      if (columnFormatData[indexOf_rhocrit].include)  
        headerString += "rho, kg/m^3&#38;";

      if (columnFormatData[indexOf_OmegaMatterT].include)  
        headerString += "OmegaM&#38;";
        
      if (columnFormatData[indexOf_OmegaLambdaT].include)  
        headerString += "OmegaL&#38;";

      if (columnFormatData[indexOf_OmegaRadiationT].include)  
        headerString += "OmegaR&#38;";
         
      if (columnFormatData[indexOf_OmegaTotalT].include)  
        headerString += "OmegaT&#38;";
     
      break;
      
    case "Zeit":
    
      if (columnFormatData[indexOf_z].include)  
        headerString += "z&#38;";        

      if (columnFormatData[indexOf_a].include)  
        headerString += "Sc.fctr (a)&#38;";        

      if (columnFormatData[indexOf_s].include)      
        headerString += "S&#38;";      // S&#38; = &

      if (columnFormatData[indexOf_Tnow].include)  
        headerString += "T (zeit)&#38;";

      if (columnFormatData[indexOf_Y].include)  
        headerString += "R (lzeit)&#38;";
        
      if (columnFormatData[indexOf_Dnow].include)  
        headerString += "D_{now} (lzeit)&#38;";

      if (columnFormatData[indexOf_Dthen].include)  
        headerString += "D_{then}(lzeit)&#38;";

      if (columnFormatData[indexOf_Dhor].include)  
        headerString += "D_{hor}(lzeit)&#38;";

      if (columnFormatData[indexOf_Dpar].include)  
        headerString += "D_{par}(lzeit)&#38;";

      if (columnFormatData[indexOf_XDpar].include)  
        headerString += "V_{gen}/c&#38;";

      if (columnFormatData[indexOf_Vnow].include)  
        headerString += "V_{now}/c&#38;";

      if (columnFormatData[indexOf_Vthen].include)  
        headerString += "V_{then}/c&#38;";

      if (columnFormatData[indexOf_H_t].include)  
        headerString += "H (zeit^{-1})&#38;";
        
      if (columnFormatData[indexOf_TemperatureT].include)  
        headerString += "Temp(K)&#38;";

      if (columnFormatData[indexOf_rhocrit].include)  
        headerString += "rho, kg/m^3&#38;";

      if (columnFormatData[indexOf_OmegaMatterT].include)  
        headerString += "OmegaM&#38;";
        
      if (columnFormatData[indexOf_OmegaLambdaT].include)  
        headerString += "OmegaL&#38;";

      if (columnFormatData[indexOf_OmegaRadiationT].include)  
        headerString += "OmegaR&#38;";
           
      break; 
        
  }  
  
  
  
  headerString = headerString.slice(0, -5); // <-- remove the trailing &#38;
            
  headerString += " &#92;&#92; &#92;hline "; 
  
  outputString += headerString;
  
  // end of header
    
  for (var i = 0; i < resultList.length; i++)
  {
    var lineString = "";

    if (columnFormatData[indexOf_z].include)  
      lineString += resultList[i].z.toExponential(columnFormatData[indexOf_z].decimals) + "&#38;";

    if (columnFormatData[indexOf_a].include)  
      lineString += resultList[i].a.toExponential(columnFormatData[indexOf_a].decimals) + "&#38;";

   if (columnFormatData[indexOf_s].include)
      lineString += resultList[i].s.toExponential(columnFormatData[indexOf_s].decimals) + "&#38;";
      
    if (columnFormatData[indexOf_Tnow].include)  
      lineString += resultList[i].Tnow.toExponential(columnFormatData[indexOf_Tnow].decimals) + "&#38;";

    if (columnFormatData[indexOf_Y].include)  
      lineString += resultList[i].Y.toExponential(columnFormatData[indexOf_Y].decimals) + "&#38;";

    if (columnFormatData[indexOf_Dnow].include)  
      lineString += resultList[i].Dnow.toExponential(columnFormatData[indexOf_Dnow].decimals) + "&#38;";

    if (columnFormatData[indexOf_Dthen].include)  
      lineString += resultList[i].Dthen.toExponential(columnFormatData[indexOf_Dthen].decimals) + "&#38;";

    if (columnFormatData[indexOf_Dhor].include)  
      lineString += resultList[i].Dhor.toExponential(columnFormatData[indexOf_Dhor].decimals) + "&#38;";

    if (columnFormatData[indexOf_Dpar].include)  
      lineString += resultList[i].Dpar.toExponential(columnFormatData[indexOf_Dpar].decimals) + "&#38;";

    if (columnFormatData[indexOf_XDpar].include)  
      lineString += resultList[i].XDpar.toExponential(columnFormatData[indexOf_XDpar].decimals) + "&#38;";

    if (columnFormatData[indexOf_Vnow].include)  
      lineString += resultList[i].Vnow.toExponential(columnFormatData[indexOf_Vnow].decimals) + "&#38;";

    if (columnFormatData[indexOf_Vthen].include)
      lineString += resultList[i].Vthen.totoExponentialFixed(columnFormatData[indexOf_Vthen].decimals) + "&#38;";

    if (columnFormatData[indexOf_H_t].include)  
      lineString += resultList[i].H_t.toExponential(columnFormatData[indexOf_H_t].decimals) + "&#38;";

    if (columnFormatData[indexOf_rhocrit].include)  
      lineString += resultList[i].rhocrit.toExponential(columnFormatData[indexOf_rhocrit].decimals) + "&#38;";

    if (columnFormatData[indexOf_TemperatureT].include)  
      lineString += resultList[i].TemperatureT.toExponential(columnFormatData[indexOf_TemperatureT].decimals) + "&#38;";

    if (columnFormatData[indexOf_OmegaMatterT].include)  
      lineString += resultList[i].OmegaMatterT.toExponential(columnFormatData[indexOf_OmegaMatterT].decimals) + "&#38;";

    if (columnFormatData[indexOf_OmegaLambdaT].include)  
      lineString += resultList[i].OmegaLambdaT.toExponential(columnFormatData[indexOf_OmegaLambdaT].decimals) + "&#38;";

    if (columnFormatData[indexOf_OmegaRadiationT].include)  
      lineString += resultList[i].OmegaRadiationT.toExponential(columnFormatData[indexOf_OmegaRadiationT].decimals) + "&#38;";

    if (columnFormatData[indexOf_OmegaTotalT].include)  
      lineString += resultList[i].OmegaTotalT.toExponential(columnFormatData[indexOf_OmegaTotalT].decimals) + "&#38;";

    lineString = lineString.slice(0, -5); // <-- remove the trailing &#38;

    lineString += "&#92;&#92; &#92;hline ";  
    
    outputString += lineString;
            
  }

  // finalize tail of output
  outputString += "&#92;end{array}";
  outputString += "}[&#47;tex]" ;

  return outputString;    
}
