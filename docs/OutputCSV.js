function BuildCsvResultTable(resultList,columnFormatData,textSize,scaleFormat)
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
    
  var outputString = " "; 

  // header
  var headerString = " "; 
  
  switch(scaleFormat)
  {
    case "GigaLightyear":  
  
      if (columnFormatData[indexOf_z].include)  
        headerString += "z,";        

      if (columnFormatData[indexOf_a].include)  
        headerString += "Scale (a),";        

      if (columnFormatData[indexOf_s].include)      
        headerString += "S,";      

      if (columnFormatData[indexOf_Tnow].include)  
        headerString += "T (Gyr),";

      if (columnFormatData[indexOf_Y].include)  
        headerString += "R (Gly),";
        
      if (columnFormatData[indexOf_Dnow].include)  
        headerString += "D_{now} (Gly),";

      if (columnFormatData[indexOf_Dthen].include)  
        headerString += "D_{then}(Gly),";

      if (columnFormatData[indexOf_Dhor].include)  
        headerString += "D_{hor}(Gly),";

      if (columnFormatData[indexOf_Dpar].include)  
        headerString += "D_{par}(Gly),";

      if (columnFormatData[indexOf_XDpar].include)  
        headerString += "V_{gen}/c,";

      if (columnFormatData[indexOf_Vnow].include)  
        headerString += "V_{now}/c,";

      if (columnFormatData[indexOf_Vthen].include)  
        headerString += "V_{then}/c,";

      if (columnFormatData[indexOf_H_t].include)  
        headerString += "H(t),";
             
      if (columnFormatData[indexOf_TemperatureT].include)  
        headerString += "Temp(K),";

      if (columnFormatData[indexOf_rhocrit].include)  
        headerString += "rho(kg/m^3),";

      if (columnFormatData[indexOf_OmegaMatterT].include)  
        headerString += "OmegaM,";
        
      if (columnFormatData[indexOf_OmegaLambdaT].include)  
        headerString += "OmegaL,";

      if (columnFormatData[indexOf_OmegaRadiationT].include)  
        headerString += "OmegaR,";
         
      if (columnFormatData[indexOf_OmegaTotalT].include)  
        headerString += "OmegaT,";
 
      break;
   
    case "Gigaparsec":
    
      if (columnFormatData[indexOf_z].include)  
        headerString += "z,";        

      if (columnFormatData[indexOf_a].include)  
        headerString += "Scale (a),";        

      if (columnFormatData[indexOf_s].include)      
        headerString += "S,";      // S, = &

      if (columnFormatData[indexOf_Tnow].include)  
        headerString += "T (Gyr),";

      if (columnFormatData[indexOf_Y].include)  
        headerString += "R (Gpc),";
        
      if (columnFormatData[indexOf_Dnow].include)  
        headerString += "D_{now} Gpc,";

      if (columnFormatData[indexOf_Dthen].include)  
        headerString += "D_{then}(Gpc),";

      if (columnFormatData[indexOf_Dhor].include)  
        headerString += "D_{hor}(Gpc),";

      if (columnFormatData[indexOf_Dpar].include)  
        headerString += "D_{par}(Gpc),";

      if (columnFormatData[indexOf_XDpar].include)  
        headerString += "V_{gen}/c,";

      if (columnFormatData[indexOf_Vnow].include)  
        headerString += "V_{now}/c,";

      if (columnFormatData[indexOf_Vthen].include)  
        headerString += "V_{then}/c,";

      if (columnFormatData[indexOf_H_t].include)  
        headerString += "H(t),";
        
      if (columnFormatData[indexOf_TemperatureT].include)  
        headerString += "Temp(K),";

      if (columnFormatData[indexOf_rhocrit].include)  
        headerString += "rho(kg/m^3),";
        
      if (columnFormatData[indexOf_OmegaMatterT].include)  
        headerString += "OmegaM,";
        
      if (columnFormatData[indexOf_OmegaLambdaT].include)  
        headerString += "OmegaL,";

      if (columnFormatData[indexOf_OmegaRadiationT].include)  
        headerString += "OmegaR,";
         
      if (columnFormatData[indexOf_OmegaTotalT].include)  
        headerString += "OmegaT,";
    
    
      break;  
      
    case "Normalized":
    
      if (columnFormatData[indexOf_z].include)  
        headerString += "z,";        

      if (columnFormatData[indexOf_a].include)  
        headerString += "Scale (a),";        

      if (columnFormatData[indexOf_s].include)      
        headerString += "S,";      // S, = &

      if (columnFormatData[indexOf_Tnow].include)  
        headerString += "T/T_{now},";

      if (columnFormatData[indexOf_Y].include)  
        headerString += "R/R_{H},";
        
      if (columnFormatData[indexOf_Dnow].include)  
        headerString += "D_{now}/R_{H},";

      if (columnFormatData[indexOf_Dthen].include)  
        headerString += "D_{then}/R_{H},";

      if (columnFormatData[indexOf_Dhor].include)  
        headerString += "D_{hor}/R_{H},";

      if (columnFormatData[indexOf_Dpar].include)  
        headerString += "D_{par}/R_{H},";

      if (columnFormatData[indexOf_XDpar].include)  
        headerString += "V_{gen}/c,";

      if (columnFormatData[indexOf_Vnow].include)  
        headerString += "V_{now}/c,";

      if (columnFormatData[indexOf_Vthen].include)  
        headerString += "V_{then}/c,";

      if (columnFormatData[indexOf_H_t].include)  
        headerString += "H/H_{0},";
        
      if (columnFormatData[indexOf_TemperatureT].include)  
        headerString += "Temp/T_{0},";

      if (columnFormatData[indexOf_rhocrit].include)  
        headerString += "rho(kg/m^3),";

      if (columnFormatData[indexOf_OmegaMatterT].include)  
        headerString += "OmegaM,";
        
      if (columnFormatData[indexOf_OmegaLambdaT].include)  
        headerString += "OmegaL,";

      if (columnFormatData[indexOf_OmegaRadiationT].include)  
        headerString += "OmegaR,";
         
      if (columnFormatData[indexOf_OmegaTotalT].include)  
        headerString += "OmegaT,";
     
      break;
      
    case "Zeit":
    
      if (columnFormatData[indexOf_z].include)  
        headerString += "z,";        

      if (columnFormatData[indexOf_a].include)  
        headerString += "Sc.fctr (a),";        

      if (columnFormatData[indexOf_s].include)      
        headerString += "S,";      // S, = &

      if (columnFormatData[indexOf_Tnow].include)  
        headerString += "T (zeit),";

      if (columnFormatData[indexOf_Y].include)  
        headerString += "R (lzeit),";
        
      if (columnFormatData[indexOf_Dnow].include)  
        headerString += "D_{now} (lzeit),";

      if (columnFormatData[indexOf_Dthen].include)  
        headerString += "D_{then}(lzeit),";

      if (columnFormatData[indexOf_Dhor].include)  
        headerString += "D_{hor}(lzeit),";

      if (columnFormatData[indexOf_Dpar].include)  
        headerString += "D_{par}(lzeit),";

      if (columnFormatData[indexOf_XDpar].include)  
        headerString += "V_{gen}/c,";

      if (columnFormatData[indexOf_Vnow].include)  
        headerString += "V_{now}/c,";

      if (columnFormatData[indexOf_Vthen].include)  
        headerString += "V_{then}/c,";

      if (columnFormatData[indexOf_H_t].include)  
        headerString += "H (zeit^{-1}),";
        
      if (columnFormatData[indexOf_TemperatureT].include)  
        headerString += "Temp(K),";

      if (columnFormatData[indexOf_rhocrit].include)  
        headerString += "rho(kg/m^3),";

      if (columnFormatData[indexOf_OmegaMatterT].include)  
        headerString += "OmegaM,";
        
      if (columnFormatData[indexOf_OmegaLambdaT].include)  
        headerString += "OmegaL,";

      if (columnFormatData[indexOf_OmegaRadiationT].include)  
        headerString += "OmegaR,";
           
      break; 
        
  }  
  
  
  
  headerString = headerString.slice(0, -1); // <-- remove the trailing ,

  headerString += "; "; 
  
  outputString += headerString;
  
  // end of header
    
  for (var i = 0; i < resultList.length; i++)
  {
    var lineString = "";

    if (columnFormatData[indexOf_z].include)  
      lineString += resultList[i].z + ",";

    if (columnFormatData[indexOf_a].include)  
      lineString += resultList[i].a + ",";

   if (columnFormatData[indexOf_s].include)
      lineString += resultList[i].s + ",";
      
    if (columnFormatData[indexOf_Tnow].include)  
      lineString += resultList[i].Tnow + ",";

    if (columnFormatData[indexOf_Y].include)  
      lineString += resultList[i].Y + ",";

    if (columnFormatData[indexOf_Dnow].include)  
      lineString += resultList[i].Dnow + ",";

    if (columnFormatData[indexOf_Dthen].include)  
      lineString += resultList[i].Dthen + ",";

    if (columnFormatData[indexOf_Dhor].include)  
      lineString += resultList[i].Dhor + ",";

    if (columnFormatData[indexOf_Dpar].include)  
      lineString += resultList[i].Dpar + ",";

    if (columnFormatData[indexOf_XDpar].include)  
      lineString += resultList[i].XDpar + ",";

    if (columnFormatData[indexOf_Vnow].include)  
      lineString += resultList[i].Vnow + ",";

    if (columnFormatData[indexOf_Vthen].include)
      lineString += resultList[i].Vthen + ",";

    if (columnFormatData[indexOf_H_t].include)  
      lineString += resultList[i].H_t + ",";

    if (columnFormatData[indexOf_rhocrit].include)  
      lineString += resultList[i].rhocrit + ",";

    if (columnFormatData[indexOf_TemperatureT].include)  
      lineString += resultList[i].TemperatureT + ",";

    if (columnFormatData[indexOf_OmegaMatterT].include)  
      lineString += resultList[i].OmegaMatterT + ",";

    if (columnFormatData[indexOf_OmegaLambdaT].include)  
      lineString += resultList[i].OmegaLambdaT + ",";

    if (columnFormatData[indexOf_OmegaRadiationT].include)  
      lineString += resultList[i].OmegaRadiationT + ",";

    if (columnFormatData[indexOf_OmegaTotalT].include)  
      lineString += resultList[i].OmegaTotalT + ",";

    lineString = lineString.slice(0, -1); // <-- remove the trailing ,

    lineString += "; ";  
    
    outputString += lineString;
            
  }

  // finalize tail of output
      outputString = outputString.slice(0, -2); // <-- remove the trailing ; and space
      
//      outputString += "::"; // some EOF required?

  return outputString;    
}
