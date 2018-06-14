cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        var self = this;
        var moveNode = cc.find("move");
        this.node.on("touchstart",function (event) {
            console.log("touchstart:"+self.node.name);
        });

        this.node.on("touchmove",function (event) {
            if(self.node.opacity) self.node.opacity = 0;
            moveNode.active = true;
            moveNode.position = event.touch.getLocation();
        });

        this.node.on("touchend",function (event) {
            moveNode.active = false;
            self.node.opacity = 255;
        });

        this.node.on("touchcancel",function (event) {
            self.node.opacity = 255;
            if(window.PengZhuang){
                self.node.active = false;
            }
            moveNode.active = false;
        });
    },

    // update (dt) {},
});
