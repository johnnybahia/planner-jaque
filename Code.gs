// ============================================================
// CÓDIGO DO SERVIDOR - Cole no Apps Script (Code.gs)
// ============================================================

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Planner Prof. Jaqueline')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function loadData() {
  var sheet = getSheet();
  var data = sheet.getRange('A1').getValue();
  return data || '{}';
}

function saveData(dataStr) {
  var sheet = getSheet();
  sheet.getRange('A1').setValue(dataStr);
  return 'ok';
}

function getSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('PlannerData');
  if (!sheet) {
    sheet = ss.insertSheet('PlannerData');
    sheet.getRange('A1').setValue('{}');
  }
  return sheet;
}
