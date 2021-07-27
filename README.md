# Dynamic-HTML-Form-Inputs
Allows for a dynamic number of input fields within HTML forms


## Use Case
Useful for forms such as grocery lists, where the amount of input fields may vary


## Getting Started

* Amend the 'action' attribute for the "insert-list" form within index.html to match your target page, such as to "/insert-list.php" for example:

```
action="/insert-list.php"
```

* Within your target file, to extract the submitted data in PHP:

```
$fieldArray = $_POST['dynamicField'];
```

* Amend the max amount of input fields within scripts.js as follows:

```
const maxField = 25
```


## Screenshots
<p align="center">Example grocery list for a recipe (1)</p>
<p align="center">
  <img width="460" height="300" src="/screenshots/df.jpg">
</p>
<p align="center">Example grocery list for a recipe (2)</p>
<p align="center">
  <img width="460" height="300" src="/screenshots/df2.jpg">
</p>
