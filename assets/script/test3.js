cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    paiClick:function (event) {
        this.node.getChildByName("3").color = cc.Color.BLACK.fromHEX("#FF0000");
        this.node.getChildByName("1").color = cc.Color.BLACK.fromHEX("#FF0000");
        this.node.getChildByName("2").color = cc.Color.BLACK.fromHEX("#FF0000");

        if(this.lastClickPai){
            this.lastClickPai.color = cc.Color.BLACK.fromHEX("#FFFFFF");
        }
        this.lastClickPai = event.target;
        event.target.color = cc.Color.BLACK.fromHEX("#FFF000");
    },

    targetClick:function(event){
        if(this.lastClickPai){
            this.lastClickPai.color = cc.Color.BLACK.fromHEX("#FFFFFF");
        }

        this.node.getChildByName("3").color = cc.Color.BLACK.fromHEX("#FFFFFF");
        this.node.getChildByName("1").color = cc.Color.BLACK.fromHEX("#FFFFFF");
        this.node.getChildByName("2").color = cc.Color.BLACK.fromHEX("#FFFFFF");

        this.node.getChildByName("qizi").getComponent("tiao").onTiao();
    },

    // update (dt) {},
});
