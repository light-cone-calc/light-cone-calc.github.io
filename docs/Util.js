var pojo = function() 
{
  var members = arguments;

  return function() 
  {
      var obj = {}, i = 0, j = members.length;
      for (; i < j; ++i) 
      {
          obj[members[i]] = arguments[i];
      }
      return obj;
  };
};

function deepCopy(oldObj) {
    var newObj = oldObj;
    if (oldObj && typeof oldObj === 'object') {
        newObj = Object.prototype.toString.call(oldObj) === "[object Array]" ? [] : {};
        for (var i in oldObj) {
            newObj[i] = deepCopy(oldObj[i]);
        }
    }
    return newObj;
}

function GetCurrentDateTimeString()
{
  var currentDate = new Date();
  var resturnString = "";
  
  resturnString += currentDate.getFullYear() + "-" + pad(currentDate.getMonth()+1,2) + "-" + pad(currentDate.getDate(),2);
  resturnString += " ";
  resturnString += pad(currentDate.getHours(),2) + ":" + pad(currentDate.getMinutes(),2) + ":" + pad(currentDate.getSeconds(),2);

  return resturnString;  
}

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function ClearSelection() // tell the browser to deselected anything selected, just in case.
{
  if (window.getSelection) 
  {
    if (window.getSelection().empty) 
      window.getSelection().empty();
    else if (window.getSelection().removeAllRanges) 
      window.getSelection().removeAllRanges();
  } 
  else if (document.selection) 
    document.selection.empty();
}

function SelectContainerContent(containerid) // tells the browser to select all the text in a specific container
{
  if (document.selection) 
  {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select();
  }
  else if (window.getSelection) 
  {      
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().addRange(range);
  }
}

// ----------------------------------------------------------------

function ToggleIntro()
{    
  var state = document.getElementById('divIntro').style.display;
  if (state != "block")
  {
    document.getElementById('divIntro').style.display = "block";
    document.getElementById('cmdToggleIntro').value = "Hide Introduction";
  }
  else
  {
    document.getElementById('divIntro').style.display = "none";
    document.getElementById('cmdToggleIntro').value = "Show Introduction";
  }
}

// ----------------------------------------------------------------

function ToggleChartOptions()
{    
  var state = document.getElementById('divChartOptions').style.display;
  if (state != "block")
  {
    document.getElementById('divChartOptions').style.display = "block";
    document.getElementById('cmdToggleChartOptions').value = "Close Chart Options";
  }
  else
  {
    document.getElementById('divChartOptions').style.display = "none";
    document.getElementById('cmdToggleChartOptions').value = "Open Chart Options";
  }
}


// -------------------------------------- column setup related functions --------------------------
    
function ToggleColumnConfig()
{    
  var state = document.getElementById('divColumnConfig').style.display;
  if (state != "inline-block")
  {
    document.getElementById('divColumnConfig').style.display = "inline-block";
    document.getElementById('cmdToggleColumnConfig').value = "Close Column Definition and Selection";
  }
  else
  {
    document.getElementById('divColumnConfig').style.display = "none";
    document.getElementById('cmdToggleColumnConfig').value = "Open Column Definition and Selection";
  }
}


function GetColumnDisplaySettings()
{
  var ColumnInfo = pojo('index','name','include','decimals','primary','longName');
   
  var columns = [];
   
  var index = 0;
  while (index <= 30)
  {
    index += 1;

    var newColumn = new ColumnInfo();
             
    newColumn.index = index;                   
             
    var id = "txt" + index + "fix";
    var txtBox = document.getElementById(id);
    if (txtBox == null)
     break;
                    
    var decimalValue = document.getElementById(id).value;
    if (decimalValue == null)
     continue;

    newColumn.decimals = parseInt(decimalValue);
    newColumn.name = txtBox.name.replace("txtfix_","");
            
    var id = "blanker" + index;
    var blanker = document.getElementById(id);
    if (blanker == null)
      break;

    newColumn.include = 1;
    if (blanker.style.display == "block")
      newColumn.include = 0;                  

    var id = "chkSelectPrimanyColumn" + index;
    var chkSelectPrimany = document.getElementById(id);
    if (chkSelectPrimany != null && chkSelectPrimany.checked)
    {
      newColumn.primary = 1;
    }
    else
    {
      newColumn.primary = 0;
    }

    var id = "divColumnTitle" + index;
    var divColumnTitle = document.getElementById(id);
    if (divColumnTitle != null)
    {
      var title = divColumnTitle.innerHTML;
      title = title.replace("<sub>","_");
      title = title.replace("</sub>","");
      newColumn.longName = title;
    }
    else
    {
      newColumn.longName = newColumn.name;
    }
    
                   
    columns.push(newColumn);         
  }
        
  return columns;       
}

function GetIncludeCount(columnFormatData)
{
  var count = 0;
  for (var i = 0; i < columnFormatData.length; i++)
  {
    if (columnFormatData[i].include)
      count += 1;
  }
  return count;
}

function FindParameterInColumnFormatData(paraName,columnFormatData)
{
   for (var i = 0; i < columnFormatData.length; i++)
   {
      if (columnFormatData[i].name == paraName)       
        return i;
   }
   return -1;    
}

function FindPrimaryColumnIndex(columnFormatData)
{   
   for (var i = 0; i < columnFormatData.length; i++)
   {
      if (columnFormatData[i].include && columnFormatData[i].primary)       
        return i;
   }
   for (var i = 0; i < columnFormatData.length; i++)
   {
      if (columnFormatData[i].include)       
        return i;
   }      
   return -1;    
}


var LastIndex = 0;

function GenerateConfigBlockHtml(name,title,toolTipText,decimals,isSelectable)
{

  var index = LastIndex + 1;

  var configBlockHtml = "<div class=\'configBlock\' id=\"configBlockINDEX\">";
  configBlockHtml += "<div class=\"columnTitle\" id='divColumnTitleINDEX'>TITLE</div>";
  configBlockHtml += "<span class=\"decimals\">decimals: <input name=\"txtfix_PARANAME\" id=\"txtINDEXfix\" type=\"number\" max=\"9\" min=\"1\" value=\"DECIMALS\" maxlength=1 size=1 onfocus=\"this.select()\"/></span>";    

  if (isSelectable)
  {
    configBlockHtml += "<div class='divSelectPrimaryColumn'><input type='radio' name='radioSelectPrimanyColumn' id='chkSelectPrimanyColumnINDEX'></div>";
  }

  configBlockHtml += "<div class=\'blanker\' id=\'blankerINDEX\'></div>";
  configBlockHtml += "<div class=\'info\' id=\'infoINDEX\' onmouseover=\"tooltip.show(\'TOOLTIPTEXT\');\" onmouseout=\"tooltip.hide();\"></div>";
  configBlockHtml += "<div title='include/exlude column' class=\'clicker clickerOn\' id=\'clickerINDEX\' onclick=\"ToggleConfigBlock(\'INDEX\')\"></div>";  
  configBlockHtml += "</div>";
  
  configBlockHtml = configBlockHtml.replace(/INDEX/g,index);
  configBlockHtml = configBlockHtml.replace("PARANAME",name);
  configBlockHtml = configBlockHtml.replace("TITLE",title);
  configBlockHtml = configBlockHtml.replace("TOOLTIPTEXT",toolTipText);
  configBlockHtml = configBlockHtml.replace("DECIMALS",decimals);

  LastIndex = index;

  return configBlockHtml;
} 

function ToggleConfigBlock(id)
{        
  var state = document.getElementById("blanker" + id).style.display;
  
  if (state != "block")
  {
    var clicker = document.getElementById("clicker" + id);
    clicker.className = clicker.className.replace("clickerOn","clickerOff");
    document.getElementById("blanker" + id).style.display  = "block";
  }
  else
  {
    var clicker = document.getElementById("clicker" + id);
    clicker.className = clicker.className.replace("clickerOff","clickerOn");
    document.getElementById("blanker" + id).style.display  = "none";    
  }         
}

function ToggleConfigBlockByParameterName(parameterName)
{
  var txtBlock = document.getElementsByName("txtfix_" + parameterName)[0];
  if (txtBlock == null)
    return;
    
  var txtBlockID = txtBlock.id;
  txtBlockID = txtBlockID.replace("txt","")
  txtBlockID = txtBlockID.replace("fix","")
  
  if (txtBlockID.trim() == "")
    return;
  
  ToggleConfigBlock(txtBlockID);
}

function DisableAll()
{
  var index = 0;
  while (1 == 1)
  {
    index += 1;

    var box = document.getElementById("blanker" + index);
    if (box == null)
      break;
       
    box.style.display  = "block";        
    
    var clicker = document.getElementById("clicker" + index);
    clicker.className = clicker.className.replace("clickerOn","clickerOff");
  }
}

function EnableAll()
{
  var index = 0;
  while (1 == 1)
  {
    index += 1;

    var box = document.getElementById("blanker" + index);
    if (box == null)
      break;
       
    box.style.display = "none";
    
    var clicker = document.getElementById("clicker" + index);
    clicker.className = clicker.className.replace("clickerOff","clickerOn");
  }
}


