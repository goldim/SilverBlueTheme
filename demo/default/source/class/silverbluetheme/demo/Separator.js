/* ************************************************************************

   Copyright:
     2015 Norbert Schröder

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php

   Authors:
     * Norbert Schröder (scro34)

************************************************************************ */

qx.Class.define("silverbluetheme.demo.Separator",
{
  extend: qx.ui.container.Composite,

  construct: function(width)
  {
    this.base(arguments);

    var layout = new qx.ui.layout.HBox(5).set({
      alignX: "center",
      alignY: "middle" 
    });
    
    this.set({
      layout: layout
    });
    
    this.add(new qx.ui.menu.Separator().set({
      width: width,
      maxHeight: 2
    }));
    
    this.add(new qx.ui.basic.Atom().set({
      decorator: "separator", 
      width: 14, 
      height: 14,
      maxHeight: 14,
      marginBottom: 3
    }));
    
    this.add(new qx.ui.menu.Separator().set({
      width: width,
      maxHeight: 2
    }));
      
  }

});
