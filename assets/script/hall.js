cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // cc.view.setFrameSize(1440,720);
        var txt = this.node.getChildByName("txt").getComponent(cc.Label);
        txt.string += "\n"+"width:"+this.node.width;
        // txt.string += "\n"+"height:"+this.node.height;
        // txt.string += "\n"+"width:"+this.node.getComponent(cc.Canvas).designResolution.width;
        // txt.string += "\n"+"height:"+this.node.getComponent(cc.Canvas).designResolution.height;
        // this.node.getChildByName("txt_bg").width = this.node.width;
        // this.node.getChildByName("bg0").width = this.node.width;
        // this.node.getChildByName("bg1").width = this.node.width + 1000;

        var w = cc.view.getFrameSize();
        txt.string += "\n"+"@#width:"+w.height+","+w.width;

        var self = this;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyReleased, this);
    },

    onKeyReleased: function(event) {
        if (event.keyCode == 6) {
            cc.director.end();
        }
    },

    onBtnHotUpdate:function(){
        this.node.getChildByName("update").active = true;
    },

    onbtnChangeScene:function(){
        cc.director.loadScene("p1");
    },

    // start () {

    // },

    // update (dt) {},
});
