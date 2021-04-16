<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/goldim/SilverBlueTheme">
    <img src="silverbluetheme.png" alt="Logo">
  </a>

  <h3 align="center"></h3>

  <p align="center">
    A theme for the Qooxdoo JavaScript Framework
  </p>
</p>

<!-- ABOUT THE PROJECT -->
## About The Project

Just like the «DarkTheme», «SilverBlue» uses many tiny image files for constructing a GUI, so initial rendering of widgets may be a bit delayed, depending on the speed of your internet connection.

**Form Controls**
<img src="silverbluetheme_Form.png" alt="Screen shot example">

<!-- GETTING STARTED -->
## Using the Theme in your Application
To use the Theme in your application, go into the application root directory and install the theme into your project:
```sh
$ qx package update
$ qx package list
$ qx package install goldim/SilverBlueTheme
```
now you just have to modify your compile.json to enable the theme:
```sh
"applications": [
  {
    ...
    "theme": "silverbluetheme.theme.Theme",
    ...
  }
],
```

<!-- DEMOS -->
## Demo
Using Qooxdoos [WidgetBrowser](http://qooxdoo.org/qxl.packagebrowser/qxl.packagebrowser/demos/goldim/SilverBlueTheme/widgetbrowser/)

<!-- ROADMAP -->
## Roadmap

TBD


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Norbert Schröder - [@scro34](http://scro34.de/) - email: n.schroeder@scro34.de
