# UserCSS for Marxists.org
-----
A more readable [Marxists.org](https://marxists.org). Features support for dark mode and editable UserCSS settings.

-----

_Disclaimer: The markup on Marxists.org can be inconsistent from section to section, these styles won't apply perfectly on every section. If you find a particularly ill-displaying section, please submit an issue._

-----

## Examples

<div style="display:flex;flex-direction:row;justify-content:space-between;flex-wrap:nowrap;">

<div style="width:50%";">

![Lite Mode](https://i.imgur.com/NnKM58M.png)

</div>

<div style="width:50%";">

![Dark Mode](https://i.imgur.com/Yy4Oape.png)

</div>

</div>

## Installing

Download the Stylus extention for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/) or [Chrome](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne?hl=en).

Once installed and activated, simply click the badge below to install:

[![Install directly with Stylus](https://img.shields.io/badge/Install%20directly%20with-Stylus-00adad.svg)](https://github.com/ArkansasWorker/marxists.org-UserCSS/raw/main/style.user.css)

## Customizing & Updating

Click the Stylus extension icon, then click "Manage."

<div style="width:300px;margin:1em auto;overflow:hidden;">

![Manage styles](https://i.imgur.com/BgKtGxW.png)

</div>

<div style="width:600px;margin:1em auto;overflow:hidden;">

![Configure styles](https://i.imgur.com/1sKq0WB.png)

</div>

On this management screen, click the Configure button to see the configuration panel for this theme.

## Contributing

To build from source, you'll need [Node](https://nodejs.org/en/), [npm](https://www.npmjs.com/), and [grunt](https://gruntjs.com/).

1. Clone repo
1. `cd` into directory
1. Run `npm i`
1. Run `grunt`

The build script will watch all `.scss` files and, upon one being saved, will run sass with an autoprefixer and save as `style.user.css`.

Click "Edit" on the Installed Styles manager within Stylus and paste the contents of `style.user.css` to see your changes.

Once happy with the changes, submit a pull request.


