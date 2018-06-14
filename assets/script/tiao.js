cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    onTiao(){
        this.node.position = this.node.parent.getChildByName("1").position;
        var endPosition = this.node.parent.getChildByName("2").position;
        this.tiaoTo(this.node,this.node.position,endPosition);
    },

    tiaoTo:function(moveTarget,startPosition,endPosition) {
        var midPosition = cc.p(startPosition.x,endPosition.y);
        var bezier = [midPosition, midPosition, endPosition];
        var bezierTo = cc.bezierTo(0.5, bezier);
        moveTarget.runAction(bezierTo);
    },

    // update (dt) {},
});
