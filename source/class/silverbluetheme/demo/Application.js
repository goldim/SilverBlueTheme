/* ************************************************************************

   Copyright:
     2015-2021 Norbert Schröder

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Norbert Schröder (scro34)
     * Dmitrii Zolotov (goldim)

************************************************************************ */

/**
 * @asset(silverbluetheme/about.html)
 */
qx.Class.define("silverbluetheme.demo.Application", {
  extend: scro34.themedemo.Application,

  members: {
    main(){
      super.main({ title: "SilverBlue", about_url: "silverbluetheme/about.html" });
    }
  }
});
