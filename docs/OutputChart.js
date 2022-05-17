function BuildGoogleDataTable(resultList,columnFormatData,OutputScaling) // Google Charts Data
{

  var primaryIndex = FindPrimaryColumnIndex(columnFormatData);
  if (primaryIndex < 0)
    return null;

  var indexOf_s = FindParameterInColumnFormatData('s',columnFormatData);
  var indexOf_a = FindParameterInColumnFormatData('a',columnFormatData);
  var indexOf_z = FindParameterInColumnFormatData('z',columnFormatData);
  var indexOf_Tnow = FindParameterInColumnFormatData('Tnow',columnFormatData);
  var indexOf_Y = FindParameterInColumnFormatData('Y',columnFormatData);
  var indexOf_Dnow = FindParameterInColumnFormatData('Dnow',columnFormatData);
  var indexOf_Dthen = FindParameterInColumnFormatData('Dthen',columnFormatData);
  var indexOf_Dhor = FindParameterInColumnFormatData('Dhor',columnFormatData);
  var indexOf_Dpar = FindParameterInColumnFormatData('Dpar',columnFormatData);      
  var indexOf_H_t = FindParameterInColumnFormatData('H_t',columnFormatData);      
  var indexOf_XDpar = FindParameterInColumnFormatData('XDpar',columnFormatData);
  var indexOf_Vnow = FindParameterInColumnFormatData('Vnow',columnFormatData);
  var indexOf_Vthen = FindParameterInColumnFormatData('Vthen',columnFormatData);
  var indexOf_OmegaMatterT = FindParameterInColumnFormatData('OmegaMatterT',columnFormatData);
  var indexOf_OmegaLambdaT = FindParameterInColumnFormatData('OmegaLambdaT',columnFormatData);
  var indexOf_OmegaRadiationT = FindParameterInColumnFormatData('OmegaRadiationT',columnFormatData);
  var indexOf_TemperatureT = FindParameterInColumnFormatData('TemperatureT',columnFormatData);
  var indexOf_OmegaTotalT = FindParameterInColumnFormatData('OmegaTotalT',columnFormatData);

  var data = new google.visualization.DataTable();

  // add the primary column header
  data.addColumn('number', columnFormatData[primaryIndex].name);

  switch(OutputScaling) // controls the column headers.
  {
    case "GigaLightyear":  
        
      if (columnFormatData[indexOf_z].include && indexOf_z != primaryIndex)  // 1
        data.addColumn('number', 'z');       

      if (columnFormatData[indexOf_a].include && indexOf_a != primaryIndex)  
        data.addColumn('number', 'Sc.fctr (a)');
               
      if (columnFormatData[indexOf_s].include && indexOf_s != primaryIndex)      
        data.addColumn('number', 'S');      

      if (columnFormatData[indexOf_Tnow].include && indexOf_Tnow != primaryIndex)  
        data.addColumn('number', 'T (Gyr)');

      if (columnFormatData[indexOf_Y].include && indexOf_Y != primaryIndex)  
        data.addColumn('number', 'Ro (Gly)');
        
      if (columnFormatData[indexOf_Dnow].include && indexOf_Dnow != primaryIndex)  
        data.addColumn('number', 'Dnow (Gly)');

      if (columnFormatData[indexOf_Dthen].include && indexOf_Dthen != primaryIndex)  
        data.addColumn('number', 'Dthen (Gly)');

      if (columnFormatData[indexOf_Dhor].include && indexOf_Dhor != primaryIndex)  
        data.addColumn('number', 'Dhor (Gly)');

      if (columnFormatData[indexOf_Dpar].include && indexOf_Dpar != primaryIndex)  
        data.addColumn('number', 'Dpar (Gly)');

      if (columnFormatData[indexOf_XDpar].include && indexOf_XDpar != primaryIndex)  
        data.addColumn('number', 'Vgen/c');
        
      if (columnFormatData[indexOf_Vnow].include && indexOf_Vnow != primaryIndex)  
        data.addColumn('number', 'Vnow/c');
        
      if (columnFormatData[indexOf_Vthen].include && indexOf_Vthen != primaryIndex)  
        data.addColumn('number', 'Vthen/c');

      if (columnFormatData[indexOf_H_t].include && indexOf_H_t != primaryIndex)  
        data.addColumn('number', 'H(z)');

      if (columnFormatData[indexOf_TemperatureT].include && indexOf_TemperatureT != primaryIndex)  // 17
        data.addColumn('number', 'Temp (K)');

      if (columnFormatData[indexOf_OmegaMatterT].include && indexOf_OmegaMatterT != primaryIndex)  
        data.addColumn('number', 'OmegaM');

      if (columnFormatData[indexOf_OmegaLambdaT].include && indexOf_OmegaLambdaT != primaryIndex)  
        data.addColumn('number', 'OmegaL');

      if (columnFormatData[indexOf_OmegaRadiationT].include && indexOf_OmegaRadiationT != primaryIndex)  
        data.addColumn('number', 'OmegaR');
 
      if (columnFormatData[indexOf_OmegaTotalT].include && indexOf_OmegaTotalT != primaryIndex)  
        data.addColumn('number', 'OmegaT');

      break;
   
    case "Gigaparsec":
      
      if (columnFormatData[indexOf_z].include && indexOf_z != primaryIndex)  // 1
        data.addColumn('number', 'z');       

      if (columnFormatData[indexOf_a].include && indexOf_a != primaryIndex)  
        data.addColumn('number', 'Sc.fctr (a)');
               
      if (columnFormatData[indexOf_s].include && indexOf_s != primaryIndex)      
        data.addColumn('number', 'S');      

      if (columnFormatData[indexOf_Tnow].include && indexOf_Tnow != primaryIndex)  
        data.addColumn('number', 'T (Gyr)');

      if (columnFormatData[indexOf_Y].include && indexOf_Y != primaryIndex)  
        data.addColumn('number', 'Ro (Gpc)');
        
      if (columnFormatData[indexOf_Dnow].include && indexOf_Dnow != primaryIndex)  
        data.addColumn('number', 'Dnow (Gpc)');

      if (columnFormatData[indexOf_Dthen].include && indexOf_Dthen != primaryIndex)  
        data.addColumn('number', 'Dthen (Gpc)');

      if (columnFormatData[indexOf_Dhor].include && indexOf_Dhor != primaryIndex)  
        data.addColumn('number', 'Dhor (Gpc)');

      if (columnFormatData[indexOf_Dpar].include && indexOf_Dpar != primaryIndex)  
        data.addColumn('number', 'Dpar (Gpc)');

      if (columnFormatData[indexOf_XDpar].include && indexOf_XDpar != primaryIndex)  
        data.addColumn('number', 'Vgen/c');
        
      if (columnFormatData[indexOf_Vnow].include && indexOf_Vnow != primaryIndex)  
        data.addColumn('number', 'Vnow/c');
        
      if (columnFormatData[indexOf_Vthen].include && indexOf_Vthen != primaryIndex)  
        data.addColumn('number', 'Vthen/c');

      if (columnFormatData[indexOf_H_t].include && indexOf_H_t != primaryIndex)  
        data.addColumn('number', 'H(z)');    

      if (columnFormatData[indexOf_OmegaTotalT].include && indexOf_OmegaTotalT != primaryIndex)  
        data.addColumn('number', 'OmegaT');

      if (columnFormatData[indexOf_OmegaMatterT].include && indexOf_OmegaMatterT != primaryIndex)  
        data.addColumn('number', 'OmegaM');

      if (columnFormatData[indexOf_OmegaLambdaT].include && indexOf_OmegaLambdaT != primaryIndex)  
        data.addColumn('number', 'OmegaL');

      if (columnFormatData[indexOf_OmegaRadiationT].include && indexOf_OmegaRadiationT != primaryIndex)  
        data.addColumn('number', 'OmegaR');

      if (columnFormatData[indexOf_TemperatureT].include && indexOf_TemperatureT != primaryIndex)  // 17
        data.addColumn('number', 'Temp (K)');
    
   
      break;  
      
    case "Normalized":
    text = "H"  ;
      if (columnFormatData[indexOf_z].include && indexOf_z != primaryIndex)  // 1
        data.addColumn('number', 'z');       

      if (columnFormatData[indexOf_a].include && indexOf_a != primaryIndex)   
        data.addColumn('number', 'Sc.fctr (a)');
               
      if (columnFormatData[indexOf_s].include && indexOf_s != primaryIndex)      
        data.addColumn('number', 'S');      

      if (columnFormatData[indexOf_Tnow].include && indexOf_Tnow != primaryIndex)  
        data.addColumn('number', 'T/Tnow');

      if (columnFormatData[indexOf_Y].include && indexOf_Y != primaryIndex)   // 5
        data.addColumn('number', 'R/Ro');
        
      if (columnFormatData[indexOf_Dnow].include && indexOf_Dnow != primaryIndex)  
        data.addColumn('number', 'Dnow/Ro');

      if (columnFormatData[indexOf_Dthen].include && indexOf_Dthen != primaryIndex)  
        data.addColumn('number', 'Dthen/Ro');

      if (columnFormatData[indexOf_Dhor].include && indexOf_Dhor != primaryIndex)  
        data.addColumn('number', 'Dhor/Ro');

      if (columnFormatData[indexOf_Dpar].include && indexOf_Dpar != primaryIndex)  
        data.addColumn('number', 'Dpar/Ro');

      if (columnFormatData[indexOf_XDpar].include && indexOf_XDpar != primaryIndex)  // 10
        data.addColumn('number', 'Vgen/c');
        
      if (columnFormatData[indexOf_Vnow].include && indexOf_Vnow != primaryIndex)  
        data.addColumn('number', 'Vnow/c');
        
      if (columnFormatData[indexOf_Vthen].include && indexOf_Vthen != primaryIndex)  
        data.addColumn('number', 'Vthen/c');

      if (columnFormatData[indexOf_H_t].include && indexOf_H_t != primaryIndex)  
        data.addColumn('number', 'H/Ho');

      if (columnFormatData[indexOf_TemperatureT].include && indexOf_TemperatureT != primaryIndex)  // 17
        data.addColumn('number', 'Temp/To');
    
      if (columnFormatData[indexOf_OmegaMatterT].include && indexOf_OmegaMatterT != primaryIndex)  
        data.addColumn('number', 'OmegaM');

      if (columnFormatData[indexOf_OmegaLambdaT].include && indexOf_OmegaLambdaT != primaryIndex)  
        data.addColumn('number', 'OmegaL');

      if (columnFormatData[indexOf_OmegaRadiationT].include && indexOf_OmegaRadiationT != primaryIndex)  
        data.addColumn('number', 'OmegaR');

      if (columnFormatData[indexOf_OmegaTotalT].include && indexOf_OmegaTotalT != primaryIndex)  
        data.addColumn('number', 'OmegaT');
     
      break;
      
    case "Zeit":
      
      if (columnFormatData[indexOf_z].include && indexOf_z != primaryIndex)  // 1
        data.addColumn('number', 'z');       

      if (columnFormatData[indexOf_a].include && indexOf_a != primaryIndex)  
        data.addColumn('number', 'Sc.fctr (a)');
               
      if (columnFormatData[indexOf_s].include && indexOf_s != primaryIndex)      
        data.addColumn('number', 'S');      

      if (columnFormatData[indexOf_Tnow].include && indexOf_Tnow != primaryIndex)  
        data.addColumn('number', 'T (zeit)');

      if (columnFormatData[indexOf_Y].include && indexOf_Y != primaryIndex)     // 5
        data.addColumn('number', 'Ro (lzeit)');
        
      if (columnFormatData[indexOf_Dnow].include && indexOf_Dnow != primaryIndex)  
        data.addColumn('number', 'Dnow (lzeit)');

      if (columnFormatData[indexOf_Dthen].include && indexOf_Dthen != primaryIndex)  
        data.addColumn('number', 'Dthen (lzeit)');

      if (columnFormatData[indexOf_Dhor].include && indexOf_Dhor != primaryIndex)  
        data.addColumn('number', 'Dhor (lzeit)');

      if (columnFormatData[indexOf_Dpar].include && indexOf_Dpar != primaryIndex)  
        data.addColumn('number', 'Dpar (lzeit)');

      if (columnFormatData[indexOf_XDpar].include && indexOf_XDpar != primaryIndex)  // 10 
        data.addColumn('number', 'Vgen/c');
        
      if (columnFormatData[indexOf_Vnow].include && indexOf_Vnow != primaryIndex)  
        data.addColumn('number', 'Vnow/c');
        
      if (columnFormatData[indexOf_Vthen].include && indexOf_Vthen != primaryIndex)  
        data.addColumn('number', 'Vthen/c');

      if (columnFormatData[indexOf_H_t].include && indexOf_H_t != primaryIndex)  
        data.addColumn('number', 'Ho (1/zeit)');
        
      if (columnFormatData[indexOf_OmegaMatterT].include && indexOf_OmegaMatterT != primaryIndex)  
        data.addColumn('number', 'OmegaM');

      if (columnFormatData[indexOf_OmegaLambdaT].include && indexOf_OmegaLambdaT != primaryIndex)  
        data.addColumn('number', 'OmegaL');

      if (columnFormatData[indexOf_OmegaRadiationT].include && indexOf_OmegaRadiationT != primaryIndex)  
        data.addColumn('number', 'OmegaR');

      if (columnFormatData[indexOf_TemperatureT].include && indexOf_TemperatureT != primaryIndex)  // 17
        data.addColumn('number', 'Temp (K)');
       
      break; 
        
  }

   
  for (var i = 0; i < resultList.length; i++)
  {
    var values = [];

    // data for primary index column

    if (indexOf_z == primaryIndex)  // 1
      values.push(resultList[i].z);

    if (indexOf_a == primaryIndex)  
      values.push(resultList[i].a);

    if (indexOf_s == primaryIndex)  
      values.push(resultList[i].s);
      
    if (indexOf_Tnow == primaryIndex)  
      values.push(resultList[i].Tnow);

    if (indexOf_Y == primaryIndex)  // 5
      values.push(resultList[i].Y);

    if (indexOf_Dnow == primaryIndex)  
      values.push(resultList[i].Dnow);

    if (indexOf_Dthen == primaryIndex)  
      values.push(resultList[i].Dthen);

    if (indexOf_Dhor == primaryIndex)  
      values.push(resultList[i].Dhor);

    if (indexOf_Dpar == primaryIndex)  
      values.push(resultList[i].Dpar);

    if (indexOf_XDpar == primaryIndex)  // 10
      values.push(resultList[i].XDpar);

   if (indexOf_Vnow == primaryIndex)  
      values.push(resultList[i].Vnow);

    if (indexOf_Vthen == primaryIndex)  
      values.push(resultList[i].Vthen);

    if (indexOf_H_t == primaryIndex)  
      values.push(resultList[i].H_t);
         
    // --------- end of add primary column
   
    if (columnFormatData[indexOf_z].include && indexOf_z != primaryIndex)   // 1
      values.push(resultList[i].z);

    if (columnFormatData[indexOf_a].include && indexOf_a != primaryIndex)  
      values.push(resultList[i].a);

    if (columnFormatData[indexOf_s].include && indexOf_s != primaryIndex)  
      values.push(resultList[i].s);
      
    if (columnFormatData[indexOf_Tnow].include && indexOf_Tnow != primaryIndex)  
      values.push(resultList[i].Tnow);

    if (columnFormatData[indexOf_Y].include && indexOf_Y != primaryIndex)  
      values.push(resultList[i].Y);

    if (columnFormatData[indexOf_Dnow].include && indexOf_Dnow != primaryIndex)  
      values.push(resultList[i].Dnow);

    if (columnFormatData[indexOf_Dthen].include && indexOf_Dthen != primaryIndex)  
      values.push(resultList[i].Dthen);

    if (columnFormatData[indexOf_Dhor].include && indexOf_Dhor != primaryIndex)  
      values.push(resultList[i].Dhor);

    if (columnFormatData[indexOf_Dpar].include && indexOf_Dpar != primaryIndex)  
      values.push(resultList[i].Dpar);

    if (columnFormatData[indexOf_XDpar].include && indexOf_XDpar != primaryIndex)  
      values.push(resultList[i].XDpar);

   if (columnFormatData[indexOf_Vnow].include && indexOf_Vnow != primaryIndex)  
      values.push(resultList[i].Vnow);

    if (columnFormatData[indexOf_Vthen].include && indexOf_Vthen != primaryIndex)  
      values.push(resultList[i].Vthen);

    if (columnFormatData[indexOf_H_t].include && indexOf_H_t != primaryIndex)  
      values.push(resultList[i].H_t);

    if (columnFormatData[indexOf_TemperatureT].include && indexOf_TemperatureT != primaryIndex)  // 17
      values.push(resultList[i].TemperatureT);

    if (columnFormatData[indexOf_OmegaMatterT].include && indexOf_OmegaMatterT != primaryIndex)  
      values.push(resultList[i].OmegaMatterT);

    if (columnFormatData[indexOf_OmegaLambdaT].include && indexOf_OmegaLambdaT != primaryIndex)  
      values.push(resultList[i].OmegaLambdaT);

    if (columnFormatData[indexOf_OmegaRadiationT].include && indexOf_OmegaRadiationT != primaryIndex)  
      values.push(resultList[i].OmegaRadiationT);

    if (columnFormatData[indexOf_OmegaTotalT].include && indexOf_OmegaTotalT != primaryIndex)  
      values.push(resultList[i].OmegaTotalT);

     data.addRow(values);       
  }

  return data;    
}
