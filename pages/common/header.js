var path = require("path");
var scriptName = path.basename(__filename);
let restrict_page = ["verify-admin.html","index.html"];
let login_class = "";
if (restrict_page.includes(scriptName)) {
  login_class = 'login-page'
}
document.writeln(`<!DOCTYPE html>
<html lang="en">

<head>
  <title>Electron App</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="../assets/styles/styles.css" rel="stylesheet">
  <link href="../assets/styles/bootstrap-side-modals.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">
</head>

<body class="${login_class}">`);
