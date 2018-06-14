cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        var touchNode = this.node;
        var self = this;
        var listener = {
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches:true,
            onTouchBegan: function(touch,event){
                var touchLoc = touch.getLocation();
                touchNode.getChildByName("lizi").position = touchLoc;
                touchNode.getChildByName("lizi").getComponent(cc.ParticleSystem).resetSystem();
            },

            onTouchMoved: function(touch,event){
                touch;
            },

            onTouchEnded: function(touch,event){
                touch;
            },
        };
        cc.eventManager.addListener(listener,touchNode);
    },

    // update (dt) {},
});
